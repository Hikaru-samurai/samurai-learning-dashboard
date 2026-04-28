// useUnsplash.js — Unsplash API フック

import { useState, useEffect, useRef } from 'react';

const UNSPLASH_BASE = 'https://api.unsplash.com';
const CACHE_KEY_PREFIX = 'photo_eye_unsplash_';

const getCached = (key) => {
  try {
    const item = sessionStorage.getItem(CACHE_KEY_PREFIX + key);
    return item ? JSON.parse(item) : null;
  } catch {
    return null;
  }
};

const setCache = (key, value) => {
  try {
    sessionStorage.setItem(CACHE_KEY_PREFIX + key, JSON.stringify(value));
  } catch {
    // sessionStorage unavailable
  }
};

const fetchPhoto = async (query, accessKey) => {
  const cacheKey = query.replace(/\s+/g, '_').toLowerCase();
  const cached = getCached(cacheKey);
  if (cached) return cached;

  const url = `${UNSPLASH_BASE}/search/photos?query=${encodeURIComponent(query)}&per_page=5&orientation=landscape`;
  const res = await fetch(url, {
    headers: { Authorization: `Client-ID ${accessKey}` },
  });

  if (!res.ok) throw new Error(`Unsplash API error: ${res.status}`);

  const data = await res.json();
  if (!data.results || data.results.length === 0) {
    throw new Error('No results found');
  }

  // ランダムに1件選ぶ（同じ問題でも毎回違う写真になる）
  const idx = Math.floor(Math.random() * Math.min(data.results.length, 5));
  const photo = data.results[idx];

  const result = {
    url: photo.urls.regular,
    smallUrl: photo.urls.small,
    alt: photo.alt_description || query,
    author: photo.user?.name || 'Unknown',
    unsplashLink: photo.links?.html || '',
  };

  setCache(cacheKey, result);
  return result;
};

/**
 * useUnsplash
 * @param {string[]} queries — 各選択肢のUnsplash検索クエリ
 * @returns {{ photos, loading, error }}
 */
export const useUnsplash = (queries) => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const abortRef = useRef(false);

  useEffect(() => {
    if (!queries || queries.length === 0) return;

    abortRef.current = false;
    setLoading(true);
    setError(null);

    const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

    const loadPhotos = async () => {
      try {
        const results = await Promise.all(
          queries.map((q) => fetchPhoto(q, accessKey).catch(() => null))
        );

        if (abortRef.current) return;
        setPhotos(results);
      } catch (err) {
        if (!abortRef.current) {
          setError(err.message);
        }
      } finally {
        if (!abortRef.current) {
          setLoading(false);
        }
      }
    };

    loadPhotos();

    return () => {
      abortRef.current = true;
    };
  }, [queries.join('|')]);

  return { photos, loading, error };
};

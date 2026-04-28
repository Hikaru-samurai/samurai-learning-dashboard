import http.server
import os
import sys

port = int(os.environ.get("PORT", 8080))
directory = "/Users/m0239/Documents/Claude Code社内作成"

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=directory, **kwargs)

with http.server.HTTPServer(("", port), Handler) as httpd:
    print(f"Serving on http://localhost:{port}", flush=True)
    httpd.serve_forever()

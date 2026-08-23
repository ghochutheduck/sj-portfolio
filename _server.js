const http = require('http');
const fs = require('fs');
const path = require('path');

const MIME = {
  '.html': 'text/html', '.css': 'text/css', '.js': 'application/javascript',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.gif': 'image/gif', '.svg': 'image/svg+xml', '.woff2': 'font/woff2',
  '.woff': 'font/woff', '.PNG': 'image/png', '.JPG': 'image/jpeg', '.JPEG': 'image/jpeg',
  // Without these two the browser gets application/octet-stream and silently
  // refuses the modern formats, so a <picture> looks broken locally while
  // being fine in production.
  '.avif': 'image/avif', '.webp': 'image/webp', '.pdf': 'application/pdf', '.mp4': 'video/mp4'
};

const root = __dirname;

http.createServer((req, res) => {
  let reqPath = decodeURIComponent(req.url.split('?')[0]);
  if (reqPath === '/') reqPath = '/index.html';
  const filePath = path.join(root, reqPath);
  if (!filePath.startsWith(root)) { res.writeHead(403); res.end('Forbidden'); return; }
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found: ' + reqPath); return; }
    const ext = path.extname(filePath);
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(data);
  });
// PORT from the environment so two sessions can preview at once; 8790 stays
// the default so existing launch configs keep working.
}).listen(process.env.PORT || 8790, function(){
  console.log('Serving ' + root + ' at http://localhost:' + this.address().port);
});


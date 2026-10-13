/**
 * 经典魔塔 - 极简本地 HTTP 服务器
 * 纯 Node 原生模块，无需安装任何 npm 包
 */
const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const PORT = 8080;
const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.ico': 'image/x-icon',
    '.ttf': 'font/ttf',
    '.mp3': 'audio/mpeg',
    '.wav': 'audio/wav',
    '.ogg': 'audio/ogg'
};

const server = http.createServer((req, res) => {
    let reqPath = decodeURI(req.url.split('?')[0]);
    if (reqPath === '/' || reqPath === '') reqPath = '/index.html';

    const filePath = path.join(__dirname, reqPath);

    fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
            res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('404 Not Found');
            return;
        }

        const ext = path.extname(filePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';

        res.writeHead(200, {
            'Content-Type': contentType,
            'Cache-Control': 'no-cache'
        });

        const stream = fs.createReadStream(filePath);
        stream.pipe(res);
    });
});

server.listen(PORT, () => {
    const url = `http://localhost:${PORT}`;
    console.log(`===============================================`);
    console.log(`🏰 经典魔塔本地服务已成功启动！`);
    console.log(`🌐 游戏访问地址: ${url}`);
    console.log(`===============================================`);

    // 自动打开默认浏览器
    const startCmd = process.platform === 'win32' ? `start ${url}` : `open ${url}`;
    exec(startCmd);
});

@echo off
chcp 65001 >nul
title 经典魔塔游戏启动器

echo ===================================================
echo             🏰 经典魔塔网页版启动中...
echo ===================================================

where node >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo [✓] 检测到 Node.js 环境，正在启动本地 HTTP 服务...
    node server.js
) else (
    echo [!] 未检测到 Node.js，直接使用默认浏览器打开游戏页面...
    start "" index.html
)

pause

@echo off
title Batra Technologies - Production (pm2)
echo ============================================
echo    BATRA TECHNOLOGIES - Starting All
echo ============================================
echo.

set PATH=%PATH%;C:\Users\batra\AppData\Local\Temp\node-fresh\node-v22.14.0-win-x64

:: Step 1: Start backend with pm2
echo [1/3] Starting Backend with pm2 (auto-restart)...
pm2 start ecosystem.config.js
pm2 save
echo    Backend running on port 5000
echo.

:: Step 2: Start Cloudflare Tunnel (runs in this window)
echo [2/3] Starting Cloudflare Tunnel...
echo    Look for the URL starting with:
echo    https://xxxxx.trycloudflare.com
echo.
start "Cloudflare Tunnel" cmd /k "C:\Users\batra\cloudflared.exe tunnel --url http://localhost:5000"
echo    Tunnel started in separate window!
echo.

:: Step 3: Show status
echo [3/3] All services started!
echo.
echo ============================================
echo    STATUS:
echo    Backend:  http://localhost:5000 (pm2 managed)
echo    Tunnel:   Check tunnel window for URL
echo ============================================
echo.
echo    pm2 commands:
echo    pm2 status    - see running processes
echo    pm2 logs      - see backend logs
echo    pm2 restart all - restart backend
echo    pm2 stop all    - stop backend
echo ============================================
echo.
echo    Frontend is on Netlify (online):
echo    https://batratechnologies.netlify.app
echo.
echo    After getting tunnel URL, run:
echo    deploy-netlify.bat
echo ============================================
echo.
pause

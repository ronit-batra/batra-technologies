@echo off
title Batra Technologies - Production (pm2 + ngrok)
echo ============================================
echo    BATRA TECHNOLOGIES - Starting All
echo ============================================
echo.

set PATH=%PATH%;C:\Users\batra\AppData\Local\Temp\node-fresh\node-v22.14.0-win-x64

:: Step 1: Start backend with pm2
echo [1/2] Starting Backend with pm2 (auto-restart)...
pm2 start ecosystem.config.js
pm2 save
echo    Backend running on port 5000
echo.

:: Step 2: Start ngrok tunnel (permanent URL)
echo [2/2] Starting ngrok tunnel (permanent URL)...
start "ngrok tunnel" cmd /k "ngrok start --all"
echo    Permanent URL: https://mandarin-ramp-freely.ngrok-free.dev
echo.

echo ============================================
echo    ALL SERVICES RUNNING!
echo.
echo    Backend:  http://localhost:5000 (pm2 managed)
echo    Tunnel:   https://mandarin-ramp-freely.ngrok-free.dev
echo    Frontend: https://batratechnologies.netlify.app
echo ============================================
echo.
echo    pm2 commands:
echo    pm2 status     - see running processes
echo    pm2 logs       - see backend logs
echo    pm2 restart all - restart backend
echo.
echo    URL NEVER CHANGES! No daily deploy needed!
echo ============================================
echo.
pause

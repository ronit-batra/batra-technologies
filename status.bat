@echo off
title Batra - Status
set PATH=%PATH%;C:\Users\batra\AppData\Local\Temp\node-fresh\node-v22.14.0-win-x64

echo ============================================
echo    BATRA TECHNOLOGIES - Service Status
echo ============================================
echo.
echo --- Backend (pm2) ---
pm2 status
echo.
echo --- ngrok Tunnel ---
curl -s http://127.0.0.1:4040/api/tunnels >nul 2>&1
if %errorlevel%==0 (
    echo    Tunnel: RUNNING
    echo    URL: https://mandarin-ramp-freely.ngrok-free.dev
) else (
    echo    Tunnel: NOT RUNNING
    echo    Start with: start-all.bat
)
echo.
echo --- Frontend ---
echo    URL: https://batratechnologies.netlify.app
echo.
echo --- Quick Commands ---
echo    pm2 logs           - View backend logs
echo    pm2 restart all    - Restart backend
echo    pm2 stop all       - Stop backend
echo.
pause

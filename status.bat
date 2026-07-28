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
echo --- Quick Commands ---
echo    pm2 logs          - View backend logs
echo    pm2 restart all   - Restart backend
echo    pm2 stop all      - Stop backend
echo    pm2 delete all    - Remove from pm2
echo.
echo --- Cloudflare Tunnel ---
tasklist /FI "WINDOWTITLE eq Cloudflare Tunnel*" 2>nul | find "cloudflared"
if %errorlevel%==0 (
    echo    Tunnel: RUNNING
) else (
    echo    Tunnel: NOT RUNNING - Start with start-all.bat
)
echo.
echo --- Frontend ---
echo    URL: https://batratechnologies.netlify.app
echo.
pause

@echo off
title Batra Technologies - Production (pm2 + ngrok)
echo ============================================
echo    BATRA TECHNOLOGIES - Starting All
echo ============================================
echo.

set PATH=%PATH%;C:\Users\batra\AppData\Local\Temp\node-fresh\node-v22.14.0-win-x64

:: Step 1: Start backend with pm2
echo [1/2] Starting Backend with pm2 (auto-restart)...
"C:\Users\batra\AppData\Local\Temp\node-fresh\node-v22.14.0-win-x64\npm.cmd" install pm2 -g
C:\ngrok-bin\ngrok.exe version >nul 2>&1
"C:\Users\batra\AppData\Local\Temp\node-fresh\node-v22.14.0-win-x64\node.exe" "C:\Users\batra\AppData\Local\Temp\node-fresh\node-v22.14.0-win-x64\node_modules\pm2\bin\pm2" start "E:\ronit\bca\e commerce\ecosystem.config.js"
"C:\Users\batra\AppData\Local\Temp\node-fresh\node-v22.14.0-win-x64\node.exe" "C:\Users\batra\AppData\Local\Temp\node-fresh\node-v22.14.0-win-x64\node_modules\pm2\bin\pm2" save
echo    Backend running on port 5000
echo.

:: Step 2: Start ngrok tunnel (permanent URL)
echo [2/2] Starting ngrok tunnel (permanent URL)...
start "ngrok tunnel" cmd /k "C:\ngrok-bin\ngrok.exe start --all"
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

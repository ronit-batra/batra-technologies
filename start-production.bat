@echo off
title Batra Technologies - PRODUCTION
echo ============================================
echo    BATRA TECHNOLOGIES - Production Mode
echo ============================================
echo.

:: Step 1: Build Next.js
echo [1/3] Building Next.js frontend...
cd /d "E:\ronit\bca\e commerce"
set NEXT_PUBLIC_API_URL=
call "C:\Users\batra\AppData\Local\Temp\node-fresh\node-v22.14.0-win-x64\npm.cmd" run build
if %errorlevel% neq 0 (
    echo BUILD FAILED!
    pause
    exit /b 1
)
echo    Build complete!
echo.

:: Step 2: Start Express (serves frontend + API on port 5000)
echo [2/3] Starting Express server (port 5000)...
cd /d "E:\ronit\bca\e commerce\server"
start "Batra Production" cmd /k "set NODE_ENV=production && node src/index.js"
timeout /t 3 >nul
echo    Server started!
echo.

:: Step 3: Start Cloudflare Tunnel
echo [3/3] Starting Cloudflare Tunnel...
echo.
echo ============================================
echo    Your website URL will appear below:
echo    (Copy the https://xxx.trycloudflare.com URL)
echo ============================================
echo.
"C:\Users\batra\cloudflared.exe" tunnel --url http://localhost:5000

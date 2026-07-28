@echo off
title Deploy to Netlify
echo ============================================
echo    BATRA TECHNOLOGIES - Netlify Deploy
echo ============================================
echo.

:: Step 1: Get tunnel URL
set /p TUNNEL_URL="Enter your tunnel URL (e.g. https://abc.trycloudflare.com): "
if "%TUNNEL_URL%"=="" (
    echo ERROR: Tunnel URL is required!
    pause
    exit /b 1
)
echo    Tunnel URL: %TUNNEL_URL%
echo.

:: Step 2: Update netlify.toml with real tunnel URL
echo [2/4] Updating netlify.toml with tunnel URL...
cd /d "E:\ronit\bca\e commerce"

:: Use PowerShell to replace TUNNEL_URL in netlify.toml
powershell -Command "(Get-Content netlify.toml) -replace 'https://TUNNEL_URL', '%TUNNEL_URL%' | Set-Content netlify.toml"
echo    Done!
echo.

:: Step 3: Build frontend
echo [3/4] Building Next.js frontend...
set NEXT_PUBLIC_API_URL=
call "C:\Users\batra\AppData\Local\Temp\node-fresh\node-v22.14.0-win-x64\npm.cmd" run build
if %errorlevel% neq 0 (
    echo.
    echo BUILD FAILED!
    pause
    exit /b 1
)
echo    Build complete!
echo.

:: Step 4: Deploy to Netlify
echo [4/4] Deploying to Netlify...
echo    (If this is first time, it will open browser to login)
echo.
"C:\Users\batra\AppData\Local\Temp\node-fresh\node-v22.14.0-win-x64\npx.cmd" netlify deploy --prod --dir=out
if %errorlevel% neq 0 (
    echo.
    echo DEPLOY FAILED! Check errors above.
    pause
    exit /b 1
)
echo.
echo ============================================
echo    DEPLOYED SUCCESSFULLY!
echo    Your site is live on Netlify!
echo ============================================
echo.
pause

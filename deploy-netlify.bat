@echo off
title Deploy to Netlify via GitHub
echo ============================================
echo    BATRA TECHNOLOGIES - Deploy to Netlify
echo ============================================
echo.
echo    Your API URL is permanent:
echo    https://mandarin-ramp-freely.ngrok-free.dev
echo.
echo    Just push any code changes to deploy.
echo.

cd /d "E:\ronit\bca\e commerce"

:: Build
echo [1/3] Building...
call "C:\Users\batra\AppData\Local\Temp\node-fresh\node-v22.14.0-win-x64\npm.cmd" run build
if %errorlevel% neq 0 (
    echo BUILD FAILED!
    pause
    exit /b 1
)

:: Commit and push
echo [2/3] Pushing to GitHub...
git add -A
git commit -m "Update site"
git push origin main
if %errorlevel% neq 0 (
    echo PUSH FAILED!
    pause
    exit /b 1
)

echo.
echo ============================================
echo    DEPLOYED! Netlify auto-deploys in ~1 min.
echo    Frontend: https://batratechnologies.netlify.app
echo    API:      https://mandarin-ramp-freely.ngrok-free.dev
echo ============================================
echo.
pause

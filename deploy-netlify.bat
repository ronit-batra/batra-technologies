@echo off
title Deploy to Netlify via GitHub
echo ============================================
echo    BATRA TECHNOLOGIES - Deploy to Netlify
echo ============================================
echo.
echo    This updates your tunnel URL and pushes
echo    to GitHub. Netlify auto-deploys on push.
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
echo [1/3] Updating netlify.toml with tunnel URL...
cd /d "E:\ronit\bca\e commerce"
powershell -Command "(Get-Content netlify.toml) -replace 'https://TUNNEL_URL', '%TUNNEL_URL%' | Set-Content netlify.toml"
echo    Done!
echo.

:: Step 3: Commit and push to GitHub
echo [2/3] Committing and pushing to GitHub...
git add netlify.toml
git commit -m "Update tunnel URL to %TUNNEL_URL%"
git push origin main
if %errorlevel% neq 0 (
    echo.
    echo PUSH FAILED! Check errors above.
    pause
    exit /b 1
)
echo    Done! Pushed to GitHub.
echo.

echo ============================================
echo    DEPLOY TRIGGERED!
echo    Netlify will auto-deploy in ~1 minute.
echo    Check: https://batratechnologies.netlify.app
echo ============================================
echo.
pause

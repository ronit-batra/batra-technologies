@echo off
title Batra - Auto Start (Boot)
echo Setting up auto-start on Windows boot...

:: Save pm2 process list
set PATH=%PATH%;C:\Users\batra\AppData\Local\Temp\node-fresh\node-v22.14.0-win-x64
pm2 save

:: Create a startup batch that pm2 will use
echo Creating startup script...

(
echo @echo off
echo set PATH=%%PATH%%;C:\Users\batra\AppData\Local\Temp\node-fresh\node-v22.14.0-win-x64
echo pm2 resurrect
echo start "Cloudflare Tunnel" cmd /k "C:\Users\batra\cloudflared.exe tunnel --url http://localhost:5000"
) > "%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup\batra-startup.bat"

echo.
echo ============================================
echo    AUTO-START CONFIGURED!
echo    - Backend starts automatically on boot
echo    - Tunnel starts automatically on boot
echo    - pm2 keeps backend alive
echo ============================================
echo.
echo    To REMOVE auto-start:
echo    Delete: %APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup\batra-startup.bat
echo.
pause

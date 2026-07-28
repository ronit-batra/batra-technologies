@echo off
title Batra - Auto Start (Boot)
echo Setting up auto-start on Windows boot...

set PATH=%PATH%;C:\Users\batra\AppData\Local\Temp\node-fresh\node-v22.14.0-win-x64

:: Save pm2 process list
pm2 save

:: Create a startup batch
(
echo @echo off
echo set PATH=%%PATH%%;C:\Users\batra\AppData\Local\Temp\node-fresh\node-v22.14.0-win-x64
echo pm2 resurrect
echo start "ngrok tunnel" cmd /k "ngrok start --all"
) > "%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup\batra-startup.bat"

echo.
echo ============================================
echo    AUTO-START CONFIGURED!
echo    - Backend starts automatically on boot (pm2)
echo    - ngrok tunnel starts automatically on boot
echo    - Permanent URL: https://mandarin-ramp-freely.ngrok-free.dev
echo ============================================
echo.
echo    To REMOVE auto-start:
echo    Delete: %APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup\batra-startup.bat
echo.
pause

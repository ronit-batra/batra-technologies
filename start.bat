@echo off
title Batra Technologies - Full Stack (Auto-Restart)
echo ============================================
echo    BATRA TECHNOLOGIES - Starting...
echo ============================================
echo.

echo [1/2] Starting Backend Server (port 5000)...
start "Batra Backend" cmd /k "E:\ronit\bca\e commerce\server\start-backend.bat"

echo [2/2] Starting Frontend (port 3000)...
start "Batra Frontend" cmd /k "E:\ronit\bca\e commerce\start-frontend.bat"

echo.
echo ============================================
echo    Both servers starting!
echo    Frontend: http://localhost:3000
echo    Backend:  http://localhost:5000
echo    Admin:    http://localhost:3000/admin/orders
echo ============================================
echo    Auto-restart: crashed servers restart
echo    automatically after 3 seconds.
echo ============================================
echo.
echo Close this window anytime.
timeout /t 5 >nul

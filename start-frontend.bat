@echo off
:restart
echo [%time%] Starting frontend...
cd /d E:\ronit\bca\e commerce
C:\Users\batra\AppData\Local\Temp\node-fresh\node-v22.14.0-win-x64\npm.cmd run dev
echo [%time%] Frontend stopped! Restarting in 3s...
timeout /t 3 /nobreak >nul
goto restart

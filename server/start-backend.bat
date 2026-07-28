@echo off
:restart
echo [%time%] Starting backend...
cd /d E:\ronit\bca\e commerce\server
C:\Users\batra\AppData\Local\Temp\node-fresh\node-v22.14.0-win-x64\node.exe src\index.js
echo [%time%] Backend stopped! Restarting in 3s...
timeout /t 3 /nobreak >nul
goto restart

@echo off
title Cloudflare Tunnel - Batra Technologies
echo ============================================
echo    Starting Cloudflare Quick Tunnel...
echo    Forwarding: localhost:5000 -^> Internet
echo ============================================
echo.
echo    Look for the URL starting with:
echo    https://xxxxx.trycloudflare.com
echo.
echo    Copy that URL to use in:
echo    1. netlify.toml (for API proxy)
echo    2. deploy-netlify.bat
echo.
echo    NOTE: This URL changes on restart!
echo    For permanent URL, use named tunnel:
echo      cloudflared tunnel create batra-tech
echo ============================================
echo.
"C:\Users\batra\cloudflared.exe" tunnel --url http://localhost:5000

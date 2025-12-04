@echo off
echo Starting local server for GTAC Admin Panel...
echo.
echo Server will start at: http://localhost:8000
echo.
echo Press Ctrl+C to stop the server
echo.
python -m http.server 8000
pause


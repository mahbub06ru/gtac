#!/bin/bash
echo "Starting local server for GTAC Admin Panel..."
echo ""
echo "Server will start at: http://localhost:8000"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""
python3 -m http.server 8000


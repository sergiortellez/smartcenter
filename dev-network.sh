#!/bin/bash
# Get the current IP address on macOS
IP=$(ipconfig getifaddr en0)

# Kill any process using the Vite's default port (3000 is default for Create React App, 5173 for Vite)
lsof -ti:5173 | xargs kill -9

# Construct the full URL
URL="http://$IP:5173"

# Start the Vite app without opening a browser
BROWSER=none npm run dev &

# Wait for the server to start
sleep 5

# Open the URL in Google Chrome
open -a "Google Chrome" $URL

# Copy the URL to the clipboard
echo $URL | pbcopy

echo "Development server running in network and (copied to clipboard)"

#                  🆁🅴🅰🅳 🅼🅴

# Don't forget to adjust the scripts in package.json accordingly:

# "scripts": {
#   "dev": "vite", // This is the default script for starting a Vite project
#   "start-network": "./start-network.sh"
# }

# And the first time, you must run this command to give execution permissions:
# chmod +x start-network.sh

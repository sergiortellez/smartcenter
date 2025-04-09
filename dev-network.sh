#!/bin/bash
# Get the current IP address on macOS
IP=$(ipconfig getifaddr "$(route get default | awk '/interface: / { print $2 }')")

# Kill any process using Vite's default port (5173 for Vite)
lsof -ti:5173 | xargs kill -9 2>/dev/null

# Construct the full URL
URL="http://$IP:5173"

# Start the Vite app without opening a browser
BROWSER=none npm run dev &

# Wait for the server to start
sleep 5

# AppleScript to check if Google Chrome is running
APPLESCRIPT_CHECK_APP="
if application \"Google Chrome\" is running then
    return true
else
    return false
end if
"

# AppleScript to open the URL in an existing or new window
APPLESCRIPT_OPEN_URL="
tell application \"Google Chrome\"
    if (count of windows) > 0 then
        set theTab to make new tab at the end of tabs of front window
        set URL of theTab to \"$URL\"
    else
        make new window
        set URL of active tab of front window to \"$URL\"
    end if
    activate
end tell
"

# Check if Google Chrome is running
IS_RUNNING=$(osascript -e "$APPLESCRIPT_CHECK_APP")

if [ "$IS_RUNNING" = "true" ]; then
    # Open URL in existing Chrome window
    osascript -e "$APPLESCRIPT_OPEN_URL"
else
    # Start Google Chrome and open the URL
    open -a "Google Chrome" "$URL"
fi

# Copy the URL to the clipboard
echo $URL | pbcopy

echo "Development server running on network and copied to clipboard."



#                  🆁🅴🅰🅳 🅼🅴

# Don't forget to adjust the scripts in package.json accordingly:

# "scripts": {
#   "dev": "vite", // This is the default script for starting a Vite project
#   "start-network": "./start-network.sh"
# }

# And the first time, you must run this command to give execution permissions:
# chmod +x start-network.sh

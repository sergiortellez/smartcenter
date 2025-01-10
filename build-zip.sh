#!/bin/bash
VERSION=$1
if [ -z "$VERSION" ]; then
    echo "Usage: ./build-zip.sh <version>"
    exit 1
fi

# Build the project
npm run build

# Navigate to the build folder
cd dist

# Create the ZIP file in the desktop
ZIP_NAME="$HOME/Desktop/smartApp_version${VERSION}.zip"
zip -r "$ZIP_NAME" .

echo "ZIP file created on Desktop: $ZIP_NAME"
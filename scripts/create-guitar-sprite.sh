#!/bin/bash

# Script to create an audio sprite from individual guitar sound files
# This combines all guitar sounds into a single file for better mobile performance

AUDIO_DIR="public/audio/guitar"
OUTPUT_FILE="guitar-sprite.mp3"

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "Error: ffmpeg is not installed. Install it with: brew install ffmpeg"
    exit 1
fi

# Check if ffprobe is installed
if ! command -v ffprobe &> /dev/null; then
    echo "Error: ffprobe is not installed. Install it with: brew install ffmpeg"
    exit 1
fi

cd "$AUDIO_DIR" || exit 1

echo "Creating audio sprite from guitar sounds..."

# Create file list for concatenation
rm -f filelist.txt
for i in {1..12}; do
    echo "file 'smoke-on-the-water-${i}.mp3'" >> filelist.txt
done

# Concatenate all files into sprite
echo "Concatenating files..."
ffmpeg -y -f concat -safe 0 -i filelist.txt -c copy "$OUTPUT_FILE" 2>&1 | tail -5

# Get durations for the timing map
echo ""
echo "Sound durations (for audioSpriteMap):"
echo "const audioSpriteMap = ["

start_time=0
for i in {1..12}; do
    duration=$(ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 smoke-on-the-water-${i}.mp3)
    printf "  { start: %.6f, duration: %.6f }, // sound %d\n" "$start_time" "$duration" "$i"
    start_time=$(echo "$start_time + $duration" | bc)
done

echo "];"

# Clean up
rm -f filelist.txt

echo ""
echo "✅ Audio sprite created: $AUDIO_DIR/$OUTPUT_FILE"
echo "Total duration: ${start_time} seconds"

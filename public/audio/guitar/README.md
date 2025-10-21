# Guitar Audio Sprite

This directory contains guitar sound files used in the Interactive Guitar component.

## Files

- `guitar-sprite.mp3` - Combined audio sprite containing all 12 guitar sounds
- `smoke-on-the-water-*.mp3` - Individual sound files (kept for reference/regeneration)

## Audio Sprite

The audio sprite combines all 12 sounds into a single file for better mobile performance:
- **Single HTTP request** instead of 12
- **Faster loading** on mobile devices
- **Better browser compatibility** with autoplay restrictions
- **Smaller total size** due to reduced overhead

## Regenerating the Sprite

If you modify any of the individual sound files, regenerate the sprite using:

```bash
./scripts/create-guitar-sprite.sh
```

This script will:
1. Concatenate all `smoke-on-the-water-*.mp3` files
2. Generate the timing map for the audioSpriteMap in InteractiveGuitar.vue
3. Output the total duration

## Timing Map

The sprite uses precise timing to play each sound segment:

```javascript
const audioSpriteMap = [
  { start: 0.0, duration: 0.401769 },      // sound 1
  { start: 0.401769, duration: 0.401769 }, // sound 2
  // ... etc
];
```

When a sound is played, the code:
1. Sets `audio.currentTime` to the sound's start position
2. Calls `audio.play()`
3. Uses `setTimeout` to pause after the sound's duration

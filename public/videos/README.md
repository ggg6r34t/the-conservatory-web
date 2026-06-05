# Hero product film

Place cinematic demo files here:

| File | Purpose |
|------|---------|
| `a-premium-cinematic-hero-video-of-the-conservatory.mp4` | H.264 fallback (required) |
| `a-premium-cinematic-hero-video-of-the-conservatory.webm` | VP9 — smaller for Chrome/Firefox (optional, auto-detected) |

## Recommended specs

- **Length:** 30–90s loop (shorter cuts load faster)
- **Resolution:** 1920×1080 max
- **MP4 size:** aim for 4–8 MB (use HandBrake or `ffmpeg -crf 28`)
- **WebM:** `ffmpeg -i a-premium-cinematic-hero-video-of-the-conservatory.mp4 -c:v libvpx-vp9 -crf 35 -b:v 0 a-premium-cinematic-hero-video-of-the-conservatory.webm`

## Poster (LCP)

Optimize `public/images/lush-green-monstera-deliciosa.png` or add `public/images/hero-poster.webp` (1920px wide) for faster first paint.

```bash
ffmpeg -i ../images/lush-green-monstera-deliciosa.png -vf scale=1920:-2 -quality 82 ../images/hero-poster.webp
```

`public/images/hero-poster.webp` is generated from the PNG for LCP; replace with a higher-resolution export when you have full-bleed hero art.

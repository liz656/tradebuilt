# Visual asset inventory — Oct 19, 2026 visual refinement

Liz confirmed on Oct 19, 2026 that she holds the rights to all of the photos used here.

| File | Size | Subject | Before this pass | Now | Treatment |
|---|---|---|---|---|---|
| `src/assets/Main_SC2023.jpg` | 2400×1800 | Skills Challenge 2023 floor, competitors framing walls | Home hero | Home hero (unchanged) | Field documentary (original) |
| `src/assets/FieldConversation_Expo.jpg` | 826×766 | Speaker with a microphone and a small group at an outdoor career expo | — added Oct 19 by Liz | Home › Our Work › Research & Insights | Full color, focal point center 30% |
| `src/assets/derived/SC2023_competitors_3x2.jpg` | 1500×1000 | Crop of the above (lower right): competitors at work | — new derivative | Home › Our Work › Career Awareness | Full color |
| `src/assets/NECAPodcast.jpg` | 799×533 | Liz in conversation with a guest, NECA podcast set | About › podcasts header | Unchanged | Original |
| `src/assets/SkillsChallenge2025_Speaking.jpg` | 1440×960 | Liz speaking at Skills Challenge 2025 | About › full-width strip | + Home › Our Work › Industry Engagement | Full color |
| `src/assets/Headshot_Final.jpg` | 944×1109 | Professional portrait | Home › About preview (180px) | Same, 208px desktop / 160px mobile | Original |
| `src/assets/AECABooth.jpg` | 616×720 | Liz at the AECA booth | About › bio | Unchanged | Original |
| `src/assets/SkillsUSAGeorgia2024.jpg` | 975×975 | Liz on stage, SkillsUSA Georgia 2024 | About › pull quote | Unchanged | Original |
| `src/assets/georgia-silhouette.svg` | 400×460 vector | Solid Georgia state outline | — added Oct 19 | Home › Study feature (right panel) | Solid TradeBuilt Blue on cream, over blueprint grid |
| `public/photo-aerial-atlanta.webp` | 1600×899 | Aerial of a construction site | Home › careers band | Same, overlay darkened to 90% | Background |
| `public/photo-apprenticeship.webp` | 1920×1280 | Two workers at a saw | Careers hero | Unchanged | Background |
| `public/photo-heo-buckets.webp` | 1920×1280 | Excavator buckets | Study › Why it matters | Unchanged | Background |
| `public/photo-steel-rust.webp` | 1920×1278 | Rusted steel columns | About › closing band | Unchanged | Background |
| `public/og-image.jpg` | 1200×630 | Share image (Skills Challenge) | Social previews | Unchanged | — |

Originals are untouched. The Our Work cards use full-color photos at Liz's request. The duotone CSS classes stay available for future use.

The four `public/photo-*.webp` files have generic names and may be stock. Their source is unknown, so this pass didn't add new uses of them.

## Gaps (no suitable authentic asset in the repo)

1. **Careers band:** no close-up of a student or apprentice working (hands, tools, concentration). The aerial stays. Wanted: one 3:2 or wider landscape, at least 1600px wide, with the subject's face and hands clear.
2. **Connect:** no unused collaboration photo, so solid TradeBuilt Blue is used, per the brief's fallback.

## Georgia outline source

`src/assets/georgia-silhouette.svg` comes from the U.S. Census Bureau 2017 cartographic boundary file (1:10m). U.S. government data is in the public domain. It was converted to TopoJSON by the `us-atlas` package (v3.0.1, ISC license) and drawn with an equal-area conic projection centered on Georgia using `d3-geo`. It contains only the state shape, with no data or findings.

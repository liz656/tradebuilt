# Visual asset inventory — Oct 19, 2026 visual refinement

Every image below is already in the repo and was already published on the site. Clearance and ownership are **not documented in the repo**. That a file is here doesn't prove permission: Liz to confirm.

| File | Size | Subject | Before this pass | Now | Treatment |
|---|---|---|---|---|---|
| `src/assets/Main_SC2023.jpg` | 2400×1800 | Skills Challenge 2023 floor, competitors framing walls | Home hero | Home hero (unchanged) | Field documentary (original) |
| `src/assets/derived/SC2023_competitors_3x2.jpg` | 1500×1000 | Crop of the above (lower right): competitors at work | — new derivative | Home › Our Work › Career Awareness | Warm, saturation 0.8, 12% blue multiply |
| `src/assets/NECAPodcast.jpg` | 799×533 | Liz in conversation with a guest, NECA podcast set | About › podcasts header | + Home › Our Work › Research & Insights | Editorial duotone, saturation 0.3, 22% blue |
| `src/assets/SkillsChallenge2025_Speaking.jpg` | 1440×960 | Liz speaking at Skills Challenge 2025 | About › full-width strip | + Home › Our Work › Industry Engagement | Editorial duotone, saturation 0.3, 22% blue |
| `src/assets/Headshot_Final.jpg` | 944×1109 | Professional portrait | Home › About preview (180px) | Same, 208px desktop / 160px mobile | Original |
| `src/assets/AECABooth.jpg` | 616×720 | Liz at the AECA booth | About › bio | Unchanged | Original |
| `src/assets/SkillsUSAGeorgia2024.jpg` | 975×975 | Liz on stage, SkillsUSA Georgia 2024 | About › pull quote | Unchanged | Original |
| `public/photo-aerial-atlanta.webp` | 1600×899 | Aerial of a construction site | Home › careers band | Same, overlay darkened to 90% | Background |
| `public/photo-apprenticeship.webp` | 1920×1280 | Two workers at a saw | Careers hero | Unchanged | Background |
| `public/photo-heo-buckets.webp` | 1920×1280 | Excavator buckets | Study › Why it matters | Unchanged | Background |
| `public/photo-steel-rust.webp` | 1920×1278 | Rusted steel columns | About › closing band | Unchanged | Background |
| `public/og-image.jpg` | 1200×630 | Share image (Skills Challenge) | Social previews | Unchanged | — |

Originals are untouched. The one new file is a crop, and color treatments are applied in CSS, not baked into the images.

The four `public/photo-*.webp` files have generic names and may be stock. Their source is unknown, so this pass didn't add new uses of them.

## Gaps (no suitable authentic asset in the repo)

1. **Careers band:** no close-up of a student or apprentice working (hands, tools, concentration). The aerial stays. Wanted: one 3:2 or wider landscape, at least 1600px wide, with the subject's face and hands clear.
2. **Industry Engagement card:** no photo of contractors, educators or professionals interacting with each other. Liz speaking is used for now. Wanted: a group conversation at an event, 3:2.
3. **Study feature:** no approved study artwork and no licensed Georgia outline. A typographic panel with blueprint grid lines is used instead.
4. **Connect:** no unused collaboration photo, so solid TradeBuilt Blue is used, per the brief's fallback.

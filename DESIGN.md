# Narix — DESIGN.md

Design system for narix.az. Direction: **Light & Vivid** — a warm paper canvas,
ink-black type, and saturated orange → pink → violet energy used deliberately
(not everywhere). Read this before touching any UI.

## 1. Principles

1. **Paper, ink, then colour.** Most surfaces are warm off-white and white; text is
   near-black. Colour is the accent that makes things feel alive — one vivid
   moment per section, not ten.
2. **Rhythm over repetition.** Neighbouring sections must not look the same.
   Mix bento grids, wide feature cards, a dark CTA band and coloured stat tiles.
3. **Motion explains, never decorates.** Animate entrances, data flowing,
   progress. Everything respects `prefers-reduced-motion`.
4. **Real proof only.** No invented avatars, ratings or logos. Show real projects, and
   link only to the ones that are publicly reachable.
5. **AZ first-class.** Every font must render `Ə ə Ğ ğ Ş ş I ı İ i Ç ç Ö ö Ü ü`.

## 2. Colour tokens (`src/app/globals.css`)

| Token | Value | Use |
|---|---|---|
| `--bg` | `#FAF8F5` | Page canvas (warm paper) |
| `--bg-2` | `#F3F0EA` | Alternate band, footer |
| `--surface` | `#FFFFFF` | Cards |
| `--ink` | `#0F0F14` | Primary text, primary buttons, dark CTA band |
| `--ink-2` | `#2B2B35` | Secondary text |
| `--muted` | `#5E5E6B` | Body copy on paper (≥ 4.5:1) |
| `--line` / `--line-strong` | ink @ 8% / 14% | Borders |

Vivid palette — fills, gradients, icon tiles, large display text only:

| Token | Value | Soft tint | Text-safe ink |
|---|---|---|---|
| `--orange` | `#FF5B1F` | `--orange-soft #FFE9DE` | `--orange-ink #C2410C` |
| `--pink` | `#FF2E7E` | `--pink-soft #FFE3EF` | `--pink-ink #BE185D` |
| `--violet` | `#7A3CFF` | `--violet-soft #EEE6FF` | `--violet-ink #6D28D9` |
| `--blue` | `#2D6BFF` | `--blue-soft #E3ECFF` | `--blue-ink #1D4ED8` |
| `--lime` | `#B8F23A` | `--lime-soft #EFFBD3` | `--lime-ink #3F6212` |
| `--yellow` | `#FFC53D` | `--yellow-soft #FFF3D1` | `--yellow-ink #92400E` |

- **Signature gradient** `--grad-vivid`: `#FF5B1F → #FF2E7E → #7A3CFF`.
- Small coloured text uses the `*-ink` variants, never the raw vivid value.
- On vivid fills: ink text on orange / pink / lime / yellow; white text on violet / blue.

## 3. Typography

- **Display / headings:** Plus Jakarta Sans 600–800 (`--font-head`). Tight tracking
  (−0.03em to −0.045em on display sizes).
- **Body / UI:** Inter (`--font-body`), 16px base, 1.65 line height.
- Display scale: hero `clamp(2.75rem, 6.4vw, 5.6rem)`, section titles
  `clamp(2rem, 4.2vw, 3.4rem)`, card titles `1.2–1.5rem`.
- Eyebrows: 12px, 600, uppercase, 0.14em tracking, inside a white pill.
- (Manrope was dropped: it has no capital `Ə`.)

## 4. Shape, depth, spacing

- Radii: `--radius-sm 12px`, `--radius 20px`, `--radius-lg 28px`, `--radius-xl 36px`, pills `999px`.
- Shadows are soft and warm: `--shadow-sm`, `--shadow`, `--shadow-lg`. No neon glow.
- Container `1240px`, gutters 40px desktop / 20px mobile.
- Section padding `clamp(80px, 11vw, 140px)` vertical.

## 5. Components

- **Buttons:** `primary` = ink pill, white text. `gradient` = vivid gradient pill,
  ink-safe white text on hover shine. `ghost` = white pill with `--line-strong` border.
  Magnetic hover on pointer devices.
- **Cards:** white, 1px `--line`, `--radius-lg`, lift `translateY(-4px)` + `--shadow-lg` on hover.
- **Icon tiles:** 48px rounded squares filled with a vivid colour; icon in ink or white per §2.
- **Bento grids:** 3 columns desktop, 2 tablet, 1 mobile. Featured items span 2 columns.
- **Dark band:** exactly one per page (the CTA) — ink background with vivid blurred blobs.
- **Logo:** the horizontal Narix Flow logo (`public/brand/narix-logo.png`) in the navbar and
  footer, 30px / 36px high. Its blue → violet ribbon is the brand mark; it sits beside the
  vivid palette, it does not replace it. Use `narix-logo-light.png` on dark backgrounds.
  Never recolour, stretch or redraw it.
- **Project icons:** inline line icons from `ProjectIcon.tsx` on an accent tile — never
  remote images.

## 6. Motion

- Easing `--ease-out: cubic-bezier(0.22, 1, 0.36, 1)`; entrances 0.6–0.9s, 60–80ms stagger.
- Reveal: fade + 24px rise (+ light 6px blur). Once only.
- Hero: drifting mesh blobs (CSS, GPU transforms only), live agent card with typing
  indicator and a pulse travelling through the workflow chain.
- Counters render their final value on the server (SEO), animate on the client.
- `prefers-reduced-motion: reduce` disables all loops and smooth scrolling.

## 7. Accessibility

- WCAG 2.1 AA contrast for all text; vivid colours only for large text or fills.
- Visible `:focus-visible` ring (`--violet`, 2px, 3px offset).
- Decorative layers `aria-hidden`; duplicated marquee items `aria-hidden`.
- Icon-only links carry `aria-label`.

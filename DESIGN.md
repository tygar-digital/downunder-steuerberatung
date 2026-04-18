# Design System — DownUnder Steuerberatung

## Creative North Star: "The Coastal Authority"

High-End Editorial — Verbindung aus deutscher Steuerberatungs-Präzision und australischer Küstenlandschaft. Intentional Asymmetry, Tonal Layering, viel Whitespace. Premium Journal statt Steuerformular.

---

## Fonts

| Rolle | Font | Gewichte |
|-------|------|----------|
| Display & Headlines | Manrope | 400, 500, 600, 700, 800 |
| Body & Labels | Inter | 400, 500, 600 |

- Headlines: leicht negatives Tracking (-2 %)
- Body: `body-lg` (1rem) als Standard
- Subheader: `on_surface_variant` (#43474F) für reduzierten Kontrast
- Headlines nutzen `text-wrap: balance` / `text-pretty` um Witwen zu vermeiden
- Zahlenspalten / Sequenzen: `font-variant-numeric: tabular-nums`

---

## Farben

### Primary
- `primary`: #001E40 (Deep Navy)
- `primary_container`: #003366
- `on_primary`: #FFFFFF
- `on_primary_container`: #799DD6
- `primary_fixed`: #D5E3FF
- `primary_fixed_dim`: #A7C8FF

### Secondary
- `secondary`: #735C00 (Gold)
- `secondary_container`: #FED65B
- `on_secondary`: #FFFFFF
- `on_secondary_container`: #745C00

### Tertiary
- `tertiary`: #6A5E33
- `tertiary_container`: #BAAA79
- `tertiary_fixed`: #F3E2AC

### Surfaces
- `background`: #FAFAF5
- `surface`: #FAFAF5
- `surface_container_lowest`: #FFFFFF (Cards)
- `surface_container_low`: #F4F4EF (Content Blocks)
- `surface_container`: #EEEEE9
- `surface_container_high`: #E8E8E3
- `surface_container_highest`: #E3E3DE (Input Fields)

### Semantic
- `on_surface`: #1A1C19
- `on_surface_variant`: #43474F
- `outline`: #737780
- `outline_variant`: #C3C6D1
- `error`: #BA1A1A
- `inverse_surface`: #2F312E
- `inverse_primary`: #A7C8FF

---

## Design-Regeln

1. **Layering First, Lines Second** — Primäre Sektions-Trennung erfolgt durch Background-Farbwechsel (surface ↔ surface_container_low ↔ primary). Lines nur dort, wo Layering nicht greift:
   - Footer-Divider auf dunklem Background: `1px solid rgba(167, 200, 255, 0.15)`
   - Ghost-Button-Border auf Bild-Overlay: `1.5px solid rgba(255, 255, 255, 0.35)`
   - In allen anderen Fällen: Layering nutzen, keine 100 % opaken Borders.
2. **Tonal Layering** — Tiefe durch Surface-Hierarchie: surface → surface_container_low → surface_container_lowest.
3. **Ambient Shadows** — Primary (#001E40) bei 5 % Opacity, 32 px Blur. Niemals pure black/grey.
4. **Glassmorphism** — Navigation (scrolled): semi-transparent surface + `backdrop-filter: blur(20px)`.
5. **Signature Gradients** — Hero/CTAs: `linear-gradient(160deg, #001E40 0%, #003366 60%, #1A4A7A 100%)`.
6. **Reduced Motion respektieren** — jede Animation / Scroll-Smoothing wird unter `@media (prefers-reduced-motion: reduce)` deaktiviert.

---

## Spacing & Roundness

- **Roundness:** 8 px (Cards: 1 rem / 16 px, CTAs: xl / 24 px)
- **Spacing Scale:** 3 (großzügig)
- **Section-Padding:** `py-20 md:py-28`
- **Container:** `max-w-7xl px-5 sm:px-8`

---

## Components

### Buttons
- **Primary:** `primary` bg + `on_primary` text, xl rounded
- **Secondary (Gold CTA):** `secondary_container` (#FED65B) + `on_secondary_container` (#745C00)
- **Ghost (auf Bild/Gradient):** transparent + `1.5px solid rgba(255,255,255,0.35)` + white text, Hover: `bg-white/10`

### Cards
- Keine Divider-Lines innerhalb der Card
- `surface_container_lowest` bg auf `surface_container_low`
- Border-Radius: lg (1 rem)
- Padding: min 32 px, bei größeren Cards `p-8 lg:p-10`
- Shadow: `shadow-ambient`, bei Hover `shadow-elevated`

### Inputs
- `surface_container_highest` bg
- 4-seitiger `2px solid transparent` Border als Reservierter Space (kein Layout-Shift bei Focus)
- Bei Focus: `border-color: primary_container` + zusätzlicher 1 px Ring
- Rounded: md (8 px)
- Keine Outline entfernen ohne Focus-Ersatz (`:focus-visible` nutzen)

### Navigation
- Fixed top, `h-20`
- Transparent im Initial-State, bei Scroll `> 20px`: Glass-Effect (`rgba(250,250,245,0.85)` + `blur(20px)`)
- Mobile: Hamburger `md:hidden`, Menu schließt auf Escape, Link-Click und Outside-Click

---

## Accessibility-Baseline

- Skip-to-Content-Link im Layout
- `:focus-visible` mit `2px solid primary_container` Ring
- Dekorative SVGs: `aria-hidden="true"`
- Brand-Namen und englische Fachbegriffe: `translate="no"`
- Headings mit `scroll-margin-top` kompatibel zur Fixed-Nav
- `<main>` mit `tabindex="-1"` damit Skip-Link cross-browser fokussiert

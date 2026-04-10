# Design System — DownUnder Steuerberatung

## Creative North Star: "The Coastal Authority"

High-End Editorial — Verbindung aus deutscher Steuerberatungs-Präzision und australischer Küstenlandschaft. Intentional Asymmetry, Tonal Layering, viel Whitespace. Premium Journal statt Steuerformular.

---

## Fonts

| Rolle | Font | Gewichte |
|-------|------|----------|
| Display & Headlines | Manrope | 400, 500, 600, 700, 800 |
| Body & Labels | Inter | 400, 500, 600 |

- Headlines: leicht negatives Tracking (-2%)
- Body: `body-lg` (1rem) als Standard
- Subheader: `on_surface_variant` (#43474F) für reduzierten Kontrast

---

## Farben

### Primary
- `primary`: #001E40 (Deep Navy)
- `primary_container`: #003366
- `on_primary`: #FFFFFF
- `on_primary_container`: #799DD6

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

1. **No-Line Rule** — Keine 1px solid Borders. Sektionen durch Background-Farbwechsel trennen.
2. **Tonal Layering** — Tiefe durch Surface-Hierarchie: surface → surface_container_low → surface_container_lowest
3. **Ambient Shadows** — Primary (#001E40) bei 5% Opacity, 32px Blur. Niemals pure black/grey.
4. **Ghost Border** — Falls nötig: outline_variant bei 15% Opacity. 100% opaque Borders verboten.
5. **Glassmorphism** — Navigation: semi-transparent surface + backdrop-filter: blur(20px)
6. **Signature Gradients** — Hero/CTAs: linear-gradient von primary → primary_container

---

## Spacing & Roundness

- **Roundness:** 8px (Cards: 1rem/16px)
- **Spacing Scale:** 3 (großzügig)
- Buttons: xl (1.5rem) rounded corners

---

## Components

### Buttons
- **Primary:** primary bg + on_primary text, xl rounded
- **Secondary (Gold CTA):** secondary_container (#FED65B) + on_secondary_container (#745C00)

### Cards
- Keine Divider-Lines
- surface_container_lowest bg auf surface_container_low
- Border-Radius: lg (1rem)
- Spacing: min 32px

### Inputs
- surface_container_highest bg
- Bottom-only outline, primary on focus
- Keine 4-seitigen Boxes

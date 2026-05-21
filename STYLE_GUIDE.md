# AI-UI-React — Style Guide

A complete reference for the design tokens, themes, typography, spacing, and component conventions used across this project. This guide is the source of truth when building or extending UI in the library.

---

## 1. Project Overview

- **Framework:** React 18 + Vite 6
- **Styling:** SCSS (Dart Sass), compiled via Vite
- **Icons:** Material Symbols / MUI Icons
- **Fonts:** DM Sans (body), Syne (display), DM Mono (code/labels)
- **Theming model:** CSS custom properties scoped by `[data-theme="…"]`

Switch themes at runtime by setting the `data-theme` attribute on the root element:

```html
<html data-theme="glance">   <!-- or mcomms | wwe | rattler | mainelink -->
```

All components consume `var(--c-*)` tokens, so changing the theme attribute instantly restyles the entire UI without component code changes.

---

## 2. Design Token Architecture

Tokens are defined in two layers:

1. **SCSS variables** (per theme file in [src/styles/themes/](src/styles/themes)) — palette source of truth.
2. **CSS custom properties** (also in each theme file, scoped under `[data-theme='…']`) — what components actually consume.

### Universal token names (every theme defines all of these)

| Token | Purpose |
| --- | --- |
| `--c-dark` | Darkest brand shade — hero, headings, deep accents |
| `--c-mid` | Mid brand shade — secondary surfaces, gradients |
| `--c-fade` | Softer brand tone — overlays, navbar backgrounds |
| `--c-fade-alpha` | Same as `--c-fade` with alpha — translucent overlays |
| `--c-btn` | Primary action color (buttons, links, focus rings) |
| `--c-btn-hover` | Hover state for `--c-btn` |
| `--c-selected` | Selected/active state (semi-transparent accent) |
| `--c-accent` | Accent color (often equal to `--c-btn`) |
| `--c-accent2` | Brighter accent (highlights, secondary CTAs) |
| `--c-page-bg` | Page background |
| `--c-surface` | Card / panel background |
| `--c-surface2` | Subtle alternate surface (table stripe, code bg) |
| `--c-border` | Default border / divider color |
| `--c-text` | Primary text |
| `--c-text-sub` | Secondary text (body copy) |
| `--c-text-muted` | Tertiary text (labels, captions, placeholders) |
| `--badge-label` | Theme name string used by demo badge |
| `--hero-grad` | Hero gradient (dark → mid → accent) |
| `--card-top` | Color of card top stripe/accent |

---

## 3. Themes

The project ships with **5 brand themes**. Each is a self-contained palette in [src/styles/themes/](src/styles/themes).

### 3.1 Glance — Steel Blue
File: [src/styles/themes/_glance.scss](src/styles/themes/_glance.scss)

| Token | Hex |
| --- | --- |
| `--c-dark` | `#1c5380` |
| `--c-mid` | `#2878a3` |
| `--c-fade` | `#296789` |
| `--c-fade-alpha` | `#296789ec` |
| `--c-btn` | `#2878a3` |
| `--c-btn-hover` | `#279fd6` |
| `--c-selected` | `#279fd699` |
| `--c-accent` | `#279fd6` |
| `--c-accent2` | `#56c8f0` |
| `--c-page-bg` | `#f0f6fb` |
| `--c-surface` | `#ffffff` |
| `--c-surface2` | `#e4eef7` |
| `--c-border` | `#c5daea` |
| `--c-text` | `#0d2b40` |
| `--c-text-sub` | `#3a6480` |
| `--c-text-muted` | `#7aa3bf` |

Personality: clean, corporate, professional. Use for analytics, dashboards, B2B tools.

---

### 3.2 MComms — Ocean + Green
File: [src/styles/themes/_mcomms.scss](src/styles/themes/_mcomms.scss)

| Token | Hex |
| --- | --- |
| `--c-dark` | `#1c5696` |
| `--c-mid` | `#097bb7` |
| `--c-fade` | `#0b699b` |
| `--c-fade-alpha` | `#0b699bda` |
| `--c-btn` | `#48aa40` |
| `--c-btn-hover` | `#54d34e` |
| `--c-selected` | `#54d34edb` |
| `--c-accent` | `#48aa40` |
| `--c-accent2` | `#54d34e` |
| `--c-page-bg` | `#f0f7f5` |
| `--c-surface` | `#ffffff` |
| `--c-surface2` | `#dff0e8` |
| `--c-border` | `#b8dcc8` |
| `--c-text` | `#0a2a1e` |
| `--c-text-sub` | `#1f5c44` |
| `--c-text-muted` | `#6aaa88` |

Personality: confident, action-forward. Blue chrome with green CTA — use for environmental, comms, and conversion-driven products.

---

### 3.3 WWE — Indigo + Cyan
File: [src/styles/themes/_wwe.scss](src/styles/themes/_wwe.scss)

| Token | Hex |
| --- | --- |
| `--c-dark` | `#21336b` |
| `--c-mid` | `#3a4d87` |
| `--c-fade` | `#283c7c` |
| `--c-fade-alpha` | `#283c7cab` |
| `--c-btn` | `#008fbe` |
| `--c-btn-hover` | `#007ea8` |
| `--c-selected` | `#279fd699` |
| `--c-accent` | `#008fbe` |
| `--c-accent2` | `#00b8f0` |
| `--c-page-bg` | `#f0f2fb` |
| `--c-surface` | `#ffffff` |
| `--c-surface2` | `#e0e6f8` |
| `--c-border` | `#bac4e8` |
| `--c-text` | `#0d1433` |
| `--c-text-sub` | `#2d3f7a` |
| `--c-text-muted` | `#7080bb` |

Personality: bold, energetic, broadcast. Use for entertainment, media, sports.

---

### 3.4 Rattler — Tan + Gold
File: [src/styles/themes/_rattler.scss](src/styles/themes/_rattler.scss)

| Token | Hex |
| --- | --- |
| `--c-dark` | `#2f2f2f` |
| `--c-mid` | `#595040` |
| `--c-fade` | `#797163` |
| `--c-fade-alpha` | `#797163de` |
| `--c-btn` | `#d69d3a` |
| `--c-btn-hover` | `#c09142` |
| `--c-selected` | `#d69d3a88` |
| `--c-accent` | `#d69d3a` |
| `--c-accent2` | `#f0b84a` |
| `--c-page-bg` | `#faf7f2` |
| `--c-surface` | `#ffffff` |
| `--c-surface2` | `#f0ebe0` |
| `--c-border` | `#ddd4c0` |
| `--c-text` | `#1a1612` |
| `--c-text-sub` | `#4a3f2e` |
| `--c-text-muted` | `#9a8a70` |

Personality: warm, premium, editorial. Use for hospitality, lifestyle, craft brands.

---

### 3.5 Mainelink — Navy + Amber
File: [src/styles/themes/_mainelink.scss](src/styles/themes/_mainelink.scss)

| Token | Hex |
| --- | --- |
| `--c-dark` | `#0f3754` |
| `--c-mid` | `#204d6c` |
| `--c-fade` | `#143e60` |
| `--c-fade-alpha` | `#143e60c9` |
| `--c-btn` | `#e8a713` |
| `--c-btn-hover` | `#f7ce00` |
| `--c-selected` | `#e8a71388` |
| `--c-accent` | `#e8a713` |
| `--c-accent2` | `#f7ce00` |
| `--c-page-bg` | `#f0f5fa` |
| `--c-surface` | `#ffffff` |
| `--c-surface2` | `#e0ecf5` |
| `--c-border` | `#b8cfe0` |
| `--c-text` | `#08202e` |
| `--c-text-sub` | `#1a4060` |
| `--c-text-muted` | `#6090b0` |

Personality: trustworthy, financial, civic. Deep navy with amber call-to-action.

---

## 4. Typography

Defined in [src/styles/components/_typography.scss](src/styles/components/_typography.scss).

### 4.1 Font families

| Variable | Stack | Usage |
| --- | --- | --- |
| `$font-family-display` | `'Syne', sans-serif` | Headings (`.ai-h1`–`.ai-h4`) |
| `$font-family-sans` | `'DM Sans', sans-serif` | Body, UI text |
| `$font-family-mono` | `'DM Mono', monospace` | Code, mono labels, kbd |

### 4.2 Type scale

| Class | Family | Size | Weight | Letter-spacing | Line-height | Color |
| --- | --- | --- | --- | --- | --- | --- |
| `.ai-h1` | Syne | 36px | 800 | -0.03em | 1.1 | `--c-text` |
| `.ai-h2` | Syne | 28px | 700 | -0.02em | 1.15 | `--c-text` |
| `.ai-h3` | Syne | 22px | 700 | — | 1.2 | `--c-text` |
| `.ai-h4` | Syne | 18px | 700 | — | 1.25 | `--c-text` |
| `.ai-lead` | DM Sans | 17px | 400 | — | 1.65 | `--c-text-sub` |
| `.ai-body` | DM Sans | 14.5px | 400 | — | 1.7 | `--c-text-sub` |
| `.ai-small` | DM Sans | 12.5px | 400 | — | — | `--c-text-muted` |
| `.ai-mono` | DM Mono | 13px | 400 | — | — | `--c-btn` |
| `.ai-blockquote` | DM Sans | 14.5px | italic | — | — | `--c-text-sub` |
| `.ai-link` | inherit | inherit | 500 | — | — | `--c-btn` → `--c-btn-hover` |

### 4.3 Mono label pattern

Use the `mono-label` mixin for small uppercase labels (badges, group headers, section eyebrows):

```scss
@include mono-label;
// → DM Mono, 11px, 700, letter-spacing 0.1em, uppercase, --c-text-muted
```

---

## 5. Spacing

4-pixel base scale (see [src/styles/utilities/_variables.scss](src/styles/utilities/_variables.scss)):

| Token | Value |
| --- | --- |
| `$spacing-xs` | 4px |
| `$spacing-sm` | 8px |
| `$spacing-md` | 12px |
| `$spacing-lg` | 16px |
| `$spacing-xl` | 28px |
| `$spacing-2xl` | 32px |
| `$spacing-3xl` | 36px |
| `$spacing-4xl` | 48px |

**Usage rule:** prefer multiples of 4. Use `xs/sm` for inline gaps inside components, `md/lg` for component padding, `xl+` for section padding.

---

## 6. Layout

| Token | Value | Purpose |
| --- | --- | --- |
| `$sidebar-width` | 256px | Components page sidebar (≥ md) |
| `$sidebar-width-md` | 220px | Components sidebar at mid breakpoint |
| `$navbar-height` | 56px | Fixed top nav |

Containers should max out around 1200px and center with auto margins. Sections breathe with `$spacing-3xl`–`$spacing-4xl` vertical padding.

---

## 7. Border, Radius & Elevation

- **Default border:** `1px solid var(--c-border)`
- **Radius scale (informal, used across components):**
  - 4px — inline mono/code chips
  - 6–8px — buttons, inputs, tags
  - 10–12px — cards, modals
  - 999px — pills, avatars, switches
- **Shadows:** kept minimal; favor solid `--c-border` + subtle `box-shadow: 0 1px 2px rgba(0,0,0,0.04)` for raised surfaces. Hero/preview surfaces may use a deeper layered shadow but never colored shadows.

---

## 8. Motion

- Default transition: `transition: color 0.1s, background 0.1s, border-color 0.1s;` — see the `transition-colors` mixin.
- Theme switch transitions on `body`: `transition: background 0.3s, color 0.3s;`
- Avoid transitioning `all`. Avoid easings >300ms for UI feedback.

---

## 9. Code & Syntax Highlighting Palette

Defined in [src/styles/utilities/_variables.scss](src/styles/utilities/_variables.scss). Used by the preview/code blocks regardless of theme:

| Token | Value | Role |
| --- | --- | --- |
| `$color-code-text` | `#a8d4f0` | Default code text |
| `$color-code-string` | `#f0d8a8` | Strings |
| `$color-code-attr` | `#a8f0c6` | Attributes |
| `$color-code-tag` | `#f0a8d4` | Tags / keywords |
| `$color-code-comment` | `rgba(255,255,255,0.3)` | Comments |

---

## 10. Mixins

Defined in [src/styles/utilities/_variables.scss](src/styles/utilities/_variables.scss).

| Mixin | Purpose |
| --- | --- |
| `flex-center` | `display:flex; align-items:center; justify-content:center;` |
| `flex-between` | `display:flex; align-items:center; justify-content:space-between;` |
| `scrollbar-thin` | 4px themed scrollbar |
| `mono-label` | Uppercase mono caption styling |
| `transition-colors` | Standard color/bg/border transition |

---

## 11. Component Library

All components live in [src/components/](src/components) with matching styles in [src/styles/components/](src/styles/components). Every component pulls color from `--c-*` tokens — never hard-code hex inside a component stylesheet.

| Component | JSX | Styles |
| --- | --- | --- |
| Accordion | [Accordion.jsx](src/components/Accordion.jsx) | [_accordion.scss](src/styles/components/_accordion.scss) |
| Alert | [Alert.jsx](src/components/Alert.jsx) | [_alert.scss](src/styles/components/_alert.scss) |
| Avatar | [Avatar.jsx](src/components/Avatar.jsx) | [_avatar.scss](src/styles/components/_avatar.scss) |
| Badge | [Badge.jsx](src/components/Badge.jsx) | [_badge.scss](src/styles/components/_badge.scss) |
| Breadcrumb | [Breadcrumb.jsx](src/components/Breadcrumb.jsx) | [_breadcrumb.scss](src/styles/components/_breadcrumb.scss) |
| Buttons | [Buttons.jsx](src/components/Buttons.jsx) | [_buttons.scss](src/styles/components/_buttons.scss) |
| Card | [Card.jsx](src/components/Card.jsx) | [_card.scss](src/styles/components/_card.scss) |
| Chip | [Chip.jsx](src/components/Chip.jsx) | [_chip.scss](src/styles/components/_chip.scss) |
| Divider | [Divider.jsx](src/components/Divider.jsx) | [_divider.scss](src/styles/components/_divider.scss) |
| Dropdown | [Dropdown.jsx](src/components/Dropdown.jsx) | [_dropdown.scss](src/styles/components/_dropdown.scss) |
| Inputs | [Inputs.jsx](src/components/Inputs.jsx) | [_inputs.scss](src/styles/components/_inputs.scss) |
| List | [List.jsx](src/components/List.jsx) | [_list.scss](src/styles/components/_list.scss) |
| Modal | [Modal.jsx](src/components/Modal.jsx) | [_modal.scss](src/styles/components/_modal.scss) |
| Navbar | [Navbar.jsx](src/components/Navbar.jsx) | [_navbar.scss](src/styles/components/_navbar.scss) |
| Pagination | [Pagination.jsx](src/components/Pagination.jsx) | [_pagination.scss](src/styles/components/_pagination.scss) |
| Progress | [Progress.jsx](src/components/Progress.jsx) | [_progress.scss](src/styles/components/_progress.scss) |
| Range | [Range.jsx](src/components/Range.jsx) | [_range.scss](src/styles/components/_range.scss) |
| Skeleton | [Skeleton.jsx](src/components/Skeleton.jsx) | [_skeleton.scss](src/styles/components/_skeleton.scss) |
| Spinner | [Spinner.jsx](src/components/Spinner.jsx) | [_spinner.scss](src/styles/components/_spinner.scss) |
| Switch | [Switch.jsx](src/components/Switch.jsx) | [_switch.scss](src/styles/components/_switch.scss) |
| Table | [Table.jsx](src/components/Table.jsx) | [_table.scss](src/styles/components/_table.scss) |
| Tabs | [Tabs.jsx](src/components/Tabs.jsx) | [_tabs.scss](src/styles/components/_tabs.scss) |
| Tag | [Tag.jsx](src/components/Tag.jsx) | [_tag.scss](src/styles/components/_tag.scss) |
| Toast | [Toast.jsx](src/components/Toast.jsx) | [_toast.scss](src/styles/components/_toast.scss) |
| Tooltip | [Tooltip.jsx](src/components/Tooltip.jsx) | [_tooltip.scss](src/styles/components/_tooltip.scss) |
| Typography | [Typography.jsx](src/components/Typography.jsx) | [_typography.scss](src/styles/components/_typography.scss) |

### Component conventions

- **Class prefix:** `ai-` for every public class (`.ai-btn`, `.ai-card`, `.ai-modal`, `.ai-h1`, …).
- **Variants:** suffix modifiers (`.ai-btn--ghost`, `.ai-alert--success`, `.ai-tag--dot`).
- **States:** `:hover`, `:focus-visible`, `[aria-disabled="true"]`, `.is-active`, `.is-open`.
- **Colors:** always via `var(--c-*)`. Use `color-mix(in srgb, var(--c-btn) 10%, var(--c-surface))` for tinted backgrounds rather than new tokens.
- **Borders:** `1px solid var(--c-border)`.
- **Focus ring:** `outline: 2px solid var(--c-btn); outline-offset: 2px;` (or a 2px box-shadow ring) — never remove without a replacement.

---

## 12. External / Marketing Sections

Marketing surfaces live in [src/components/external/](src/components/external) and pull from [src/styles/external/](src/styles/external):

- `_navbar-external.scss` — top-of-page brand nav
- `_hero.scss` — uses `var(--hero-grad)`
- `_sections.scss` — generic section spacing/typography
- `_preview.scss` — themed component preview cards (`var(--card-top)` stripe)
- `_footer.scss`

These sections also respect `data-theme`, so the marketing page restyles together with the component preview.

---

## 13. Accessibility

- Color pairs are tuned for ≥ AA contrast on `--c-text` over `--c-page-bg` / `--c-surface`.
- Always retain a visible `:focus-visible` indicator using `--c-btn`.
- Interactive elements must be ≥ 32px hit target (buttons default to 36–40px).
- Don't use color alone to convey meaning — pair with icon or text (e.g. alerts).
- Respect `prefers-reduced-motion`; avoid auto-playing transitions over 300ms.

---

## 14. Adding a New Theme

1. Create `src/styles/themes/_<name>.scss`.
2. Declare SCSS palette variables: `$<name>-dark`, `-mid`, `-fade`, `-fade-alpha`, `-btn`, `-btn-hover`, `-selected`, `-accent`, `-accent2`, `-page-bg`, `-surface`, `-surface2`, `-border`, `-text`, `-text-sub`, `-text-muted`.
3. Map them to `--c-*` custom properties inside `[data-theme='<name>'] { … }`.
4. Set `--badge-label`, `--hero-grad`, `--card-top`.
5. Register the partial at the top of [src/styles/main.scss](src/styles/main.scss): `@use './themes/<name>';`.
6. Add the theme option to any theme switcher UI.

No component CSS should need to change.

---

## 15. Adding a New Component

1. Create `src/components/MyThing.jsx`. Use `ai-` class names. Forward `className`, `id`, ARIA props where reasonable.
2. Create `src/styles/components/_my-thing.scss`. Use only `var(--c-*)` tokens, the `$spacing-*` scale, and shared mixins.
3. Register the partial in [src/styles/main.scss](src/styles/main.scss): `@use './components/my-thing';`.
4. Add a preview block on the Components page so all themes can be visually verified.

---

## 16. Do / Don't Quick Reference

**Do**
- Use `var(--c-*)` tokens for all colors in components.
- Keep palette hexes only inside `src/styles/themes/*`.
- Use the 4px spacing scale.
- Test every new component against all 5 themes.
- Prefix all public classes with `ai-`.

**Don't**
- Don't hard-code hex colors in component SCSS.
- Don't introduce theme-specific selectors inside a component (`[data-theme='glance'] .ai-btn { … }`) — extend the token instead.
- Don't use inline styles for theme-able properties.
- Don't remove focus outlines without providing a replacement.
- Don't ship a component that only looks correct in one theme.

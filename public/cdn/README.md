# AppInfo.UI CDN Assets

This folder contains component-only CDN assets:

- `components.css`: lightweight stylesheet entry
- `components.bundle.css`: complete generated component styles and font imports
- `components.js`: complete data-attribute runtime
- `components.scss`: source bundle for regenerating the CSS

Use:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Work+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block" rel="stylesheet">
<link rel="stylesheet" href="/cdn/components.css?v=1.0.1">
<script src="/cdn/components.js?v=1.0.1" defer></script>
```

Set a theme on your page root:

```html
<html data-theme="glance">
```

Regenerate CSS after changing SCSS:

```bash
npm run build:cdn
```

Run the CDN dev workflow with automatic Sass rebuilding and browser refresh:

```bash
npm run dev:cdn
```

This does not render React components; it loads `components.css` and
`components.js` exactly like an external HTML project.

Interactive components use HTML data attributes:

```html
<button data-modal-open="settings-modal" aria-controls="settings-modal">
  Open settings
</button>

<div class="ai-modal-backdrop" id="settings-modal" aria-hidden="true">
  <div class="ai-modal" role="dialog" aria-modal="true" aria-labelledby="settings-title">
    <h2 id="settings-title">Settings</h2>
    <button data-modal-close type="button">Close</button>
  </div>
</div>
```

Canonical attributes:

- `data-modal-open`, `data-modal-close`
- `data-dropdown-toggle`
- `data-accordion-toggle`, `data-accordion-multiple`
- `data-tab-target`
- `data-drawer-open`, `data-drawer-toggle`, `data-drawer-close`, `data-drawer-backdrop`
- `data-tooltip`
- `data-sidebar-toggle`
- `data-alert-close`
- `data-chip-toggle`, `data-chip-remove`
- `data-switch-toggle`

The old `data-ai-*` forms remain supported for migration.

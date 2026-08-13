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
- `data-sort-key`, `data-sort-type`
- `data-tab-select`

The old `data-ai-*` forms remain supported for migration.

Tabs collapse into a dropdown at 1080px and narrower - add a `<select
data-tab-select>` next to `.ai-tab-list`, one `<option value="panel-id">` per
tab:

```html
<div class="ai-tabs" data-tabs>
  <div class="ai-tab-list">
    <button class="ai-tab-btn active" data-tab-target="general">General</button>
    <button class="ai-tab-btn" data-tab-target="advanced">Advanced</button>
  </div>
  <select class="ai-select ai-tab-select" data-tab-select aria-label="Select tab">
    <option value="general" selected>General</option>
    <option value="advanced">Advanced</option>
  </select>
  <div class="ai-tab-content active" id="general">...</div>
  <div class="ai-tab-content" id="advanced" hidden>...</div>
</div>
```

Sortable table headers:

```html
<table class="ai-table ai-table--sortable">
  <thead>
    <tr>
      <th aria-sort="none"><button type="button" class="ai-th-sort" data-sort-key="name">Name</button></th>
    </tr>
  </thead>
  <tbody><!-- rows --></tbody>
</table>
```

Table headers (`.ai-table thead th`) are sticky to the top of their scrolling
ancestor by default. Add `.ai-table-wrap--scroll` to the wrapper to scroll the
table body in a fixed-height box instead of the whole page.

Table style modifiers (stack freely, no JS involved):

- `.ai-table--striped` - zebra-shaded even rows
- `.ai-table--compact` - tighter cell padding
- `.ai-table--bordered` - vertical column dividers

```html
<table class="ai-table ai-table--striped ai-table--compact ai-table--bordered">
  <!-- thead / tbody as usual -->
</table>
```

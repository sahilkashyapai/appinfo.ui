# AppInfo.UI CDN Assets

This folder contains component-only CDN assets:

- `components.css`: CDN entry stylesheet with Google fonts, Google icons, theme variables, and component styles
- `components.bundle.css`: generated component style bundle imported by `components.css`
- `components.js`: vanilla JavaScript for interactive components
- `components.scss`: source bundle for regenerating the CSS

Use:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Work+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block" rel="stylesheet">
<link rel="stylesheet" href="/cdn/components.css">
<script src="/cdn/components.js" defer></script>
```

Set a theme on your page root:

```html
<html data-theme="glance">
```

Regenerate CSS after changing SCSS:

```bash
npm run build:cdn
```

# AppInfo.UI CDN Assets

This folder contains component-only CDN assets:

- `components.css`: theme variables and component styles
- `components.js`: vanilla JavaScript for interactive components
- `components.scss`: source bundle for regenerating the CSS

Use:

```html
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

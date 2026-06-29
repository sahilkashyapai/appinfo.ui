# AppInfo.UI vanilla runtime

AppInfo.UI snippets are HTML contracts, not serialized React components. React may
render the documentation preview, but copied markup must express behavior only
through classes, IDs, ARIA, and `data-*` attributes.

## Public contract

```html
<link rel="stylesheet" href="/cdn/components.css?v=1.0.1">
<script src="/cdn/components.js?v=1.0.1" defer></script>
```

The runtime uses one delegated click listener, one keydown listener, and delegated
tooltip events. Markup added after page load works without component-by-component
initialization. Call `AppInfoUI.init(container)` only when newly inserted markup
needs its initial ARIA and hidden state normalized immediately.

## Attribute map

| Component | Trigger attributes | Target state |
| --- | --- | --- |
| Modal | `data-modal-open="id"`, `data-modal-close` | `.ai-modal-backdrop.open` |
| Dropdown | `data-dropdown-toggle="id"` | `.ai-dropdown.open` |
| Accordion | `data-accordion-toggle="panel-id"` | trigger/body `.open` |
| Tabs | `data-tab-target="panel-id"` | trigger/panel `.active` |
| Drawer | `data-drawer-open`, `data-drawer-toggle`, `data-drawer-close` | `.ai-drawer.open` |
| Tooltip | `data-tooltip="Helpful text"` | generated `role="tooltip"` element |
| Device sidebar | `data-sidebar-toggle="sidebar-id"` | `.sidebar-expanded-full` |
| Alert | `data-alert-close` | removes the nearest `.ai-alert` |
| Chip | `data-chip-toggle`, `data-chip-remove` | toggles/removes `.ai-chip` |
| Switch | `data-switch-toggle` | toggles `.ai-switch-track.on` |

Targets may be bare IDs (`settings-modal`) or selectors (`#settings-modal`).

## Authoring rules

1. Keep visual classes independent from behavior attributes.
2. Give every target a unique ID.
3. Include initial ARIA state in snippets.
4. Use real buttons for controls; avoid clickable `div` elements.
5. Keep snippets valid HTML: `class`, `for`, `<!-- comments -->`, and no JSX.
6. Put tab panels inside their `.ai-tabs` root.
7. Do not serialize React state or function names into snippets.
8. Treat data attributes as a versioned public API and preserve aliases during migrations.

The runtime emits bubbling events such as `appinfo:modal:open`,
`appinfo:modal:close`, `appinfo:tab:show`, and `appinfo:drawer:open` so applications
can add optional business behavior without replacing the built-in UI behavior.

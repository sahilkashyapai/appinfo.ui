# AppInfo.UI vanilla runtime

AppInfo.UI snippets are HTML contracts, not serialized React components. React may
render the documentation preview, but copied markup must express behavior only
through classes, IDs, ARIA, and `data-*` attributes.

## Public contract

```html
<link rel="stylesheet" href="/cdn/components.css?v=1.0.1">
<script src="/cdn/components.js?v=1.0.1" defer></script>
```

The runtime uses one delegated click listener, one delegated change listener, one
keydown listener, and delegated tooltip events. Markup added after page load works
without component-by-component initialization. Call `AppInfoUI.init(container)`
only when newly inserted markup needs its initial ARIA and hidden state normalized
immediately.

## Attribute map

| Component | Trigger attributes | Target state |
| --- | --- | --- |
| Modal | `data-modal-open="id"`, `data-modal-close` | `.ai-modal-backdrop.open` |
| Dropdown | `data-dropdown-toggle="id"` | `.ai-dropdown.open` |
| Accordion | `data-accordion-toggle="panel-id"` | trigger/body `.open` |
| Tabs | `data-tab-target="panel-id"` | trigger/panel `.active` |
| Tabs (narrow-screen select) | `data-tab-select` on a `select` inside `.ai-tabs` | activates the matching `data-tab-target` on `change` |
| Drawer | `data-drawer-open`, `data-drawer-toggle`, `data-drawer-close` | `.ai-drawer.open` |
| Tooltip | `data-tooltip="Helpful text"` | generated `role="tooltip"` element |
| Device sidebar | `data-sidebar-toggle="sidebar-id"` | `.sidebar-expanded-full` |
| Alert | `data-alert-close` | removes the nearest `.ai-alert` |
| Chip | `data-chip-toggle`, `data-chip-remove` | toggles/removes `.ai-chip` |
| Switch | `data-switch-toggle` | toggles `.ai-switch-track.on` |
| Table sort | `data-sort-key="field"` on a button inside a `th` | reorders `tbody` rows, sets `th[aria-sort]` |

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
`appinfo:modal:close`, `appinfo:tab:show`, `appinfo:table:sort`, and
`appinfo:drawer:open` so applications can add optional business behavior without
replacing the built-in UI behavior.

## Sortable tables

Add `.ai-table--sortable` to the `table` and wrap each sortable header's label in
a `<button class="ai-th-sort" data-sort-key="field">`. Give the parent `th` an
initial `aria-sort="none"`. Clicking the button reorders `tbody` rows by that
column's cell text (or `data-sort-value` on the `td`, when the visible text isn't
what should be compared - e.g. a formatted date) and flips `aria-sort` between
`ascending` and `descending`. Add `data-sort-type="number"` or `"string"` on the
button to force numeric or lexical comparison instead of auto-detection.

```html
<table class="ai-table ai-table--sortable">
  <thead>
    <tr>
      <th aria-sort="none"><button type="button" class="ai-th-sort" data-sort-key="name">Name</button></th>
      <th aria-sort="none"><button type="button" class="ai-th-sort" data-sort-key="count" data-sort-type="number">Count</button></th>
    </tr>
  </thead>
  <tbody><!-- rows --></tbody>
</table>
```

## Narrow-screen tab select

Every `.ai-tabs` root can carry a `<select class="ai-tab-select" data-tab-select>`
as a sibling of `.ai-tab-list`, with one `<option value="panel-id">` per tab (the
`value` matches that tab's `data-tab-target`). Above 1080px the select stays
hidden and the button row shows; at 1080px and narrower `.ai-tab-list` hides and
the select takes over - no JS branching needed, it's a pure CSS swap. Changing
the select activates the matching tab (same `.active` state, same
`appinfo:tab:show` event); clicking a tab button also keeps the select's value in
sync, so switching viewport width mid-session never desyncs the two controls.

```html
<div class="ai-tabs" data-tabs>
  <div class="ai-tab-list">
    <button class="ai-tab-btn active" data-tab-target="general" role="tab" aria-selected="true">General</button>
    <button class="ai-tab-btn" data-tab-target="advanced" role="tab" aria-selected="false">Advanced</button>
  </div>
  <select class="ai-select ai-tab-select" data-tab-select aria-label="Select tab">
    <option value="general" selected>General</option>
    <option value="advanced">Advanced</option>
  </select>
  <div class="ai-tab-content active" id="general" role="tabpanel">...</div>
  <div class="ai-tab-content" id="advanced" role="tabpanel" hidden>...</div>
</div>
```

## Sticky table headers

`.ai-table thead th` is `position: sticky; top: 0` by default - no markup change
needed. It stays pinned to whatever ancestor actually scrolls. To scroll the table
body itself (rather than the page), add `.ai-table-wrap--scroll` to the wrapper,
which bounds it to a fixed height with `overflow-y: auto`.

## Table style modifiers

Three modifier classes on `.ai-table` are purely visual (no JS, no markup change
beyond the class) and stack freely with each other and with `--sortable`:

- `.ai-table--striped` - zebra-shades even body rows; hover still overrides the
  stripe color.
- `.ai-table--compact` - tighter `th`/`td` padding for dense, data-heavy tables.
- `.ai-table--bordered` - adds a right-hand divider to every column except the
  last, for a gridded look.

```html
<table class="ai-table ai-table--striped ai-table--compact ai-table--sortable">
  <!-- thead / tbody as usual -->
</table>
```

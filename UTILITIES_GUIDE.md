# AppInfo UI Utility Classes Documentation

## Overview

Comprehensive utility classes system with `.ai-` prefix following Bootstrap conventions. All utilities support responsive media queries with breakpoints: `sm` (576px), `md` (768px), `lg` (992px), `xl` (1200px), `xxl` (1400px).

---

## 1. Spacing Utilities

### Padding & Margin (0px to 100px)

**Scale:** 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25
**Base:** 4px increments (0px to 100px)

#### Padding
```css
.ai-p-{size}      /* Padding on all sides */
.ai-pt-{size}     /* Padding top */
.ai-pr-{size}     /* Padding right */
.ai-pb-{size}     /* Padding bottom */
.ai-pl-{size}     /* Padding left */
.ai-px-{size}     /* Padding left & right */
.ai-py-{size}     /* Padding top & bottom */
```

#### Margin
```css
.ai-m-{size}      /* Margin on all sides */
.ai-mt-{size}     /* Margin top */
.ai-mr-{size}     /* Margin right */
.ai-mb-{size}     /* Margin bottom */
.ai-ml-{size}     /* Margin left */
.ai-mx-{size}     /* Margin left & right */
.ai-my-{size}     /* Margin top & bottom */
.ai-m-auto        /* Auto margin */
.ai-mx-auto       /* Auto horizontal margin (center) */
```

#### Responsive Spacing
```html
<div class="ai-p-2 ai-p-md-4 ai-p-lg-6">
  Responsive padding: 8px (mobile), 16px (tablet), 24px (desktop)
</div>
```

---

## 2. Flexbox Utilities

### Display Flex

```css
.ai-d-flex          /* display: flex */
.ai-d-inline-flex   /* display: inline-flex */
```

### Flex Direction
```css
.ai-flex-row             /* flex-direction: row */
.ai-flex-column          /* flex-direction: column */
.ai-flex-row-reverse     /* flex-direction: row-reverse */
.ai-flex-column-reverse  /* flex-direction: column-reverse */
```

### Flex Wrap
```css
.ai-flex-wrap            /* flex-wrap: wrap */
.ai-flex-nowrap          /* flex-wrap: nowrap */
.ai-flex-wrap-reverse    /* flex-wrap: wrap-reverse */
```

### Justify Content
```css
.ai-justify-start       /* flex-start */
.ai-justify-end         /* flex-end */
.ai-justify-center      /* center */
.ai-justify-between     /* space-between */
.ai-justify-around      /* space-around */
.ai-justify-evenly      /* space-evenly */
```

### Align Items
```css
.ai-align-start         /* flex-start */
.ai-align-end           /* flex-end */
.ai-align-center        /* center */
.ai-align-baseline      /* baseline */
.ai-align-stretch       /* stretch */
```

### Align Self
```css
.ai-align-self-auto     /* auto */
.ai-align-self-start    /* flex-start */
.ai-align-self-end      /* flex-end */
.ai-align-self-center   /* center */
.ai-align-self-baseline /* baseline */
.ai-align-self-stretch  /* stretch */
```

### Flex Grow & Shrink
```css
.ai-flex-grow-0         /* flex-grow: 0 */
.ai-flex-grow-1         /* flex-grow: 1 */
.ai-flex-shrink-0       /* flex-shrink: 0 */
.ai-flex-shrink-1       /* flex-shrink: 1 */
```

### Flex Shorthand
```css
.ai-flex-1              /* flex: 1 1 auto */
.ai-flex-auto           /* flex: auto */
.ai-flex-none           /* flex: none */
```

### Gap (Column/Row Spacing)
```css
.ai-gap-{size}          /* gap: value */
.ai-gap-x-{size}        /* column-gap: value */
.ai-gap-y-{size}        /* row-gap: value */
```

#### Example
```html
<div class="ai-d-flex ai-flex-wrap ai-gap-4 ai-justify-between ai-align-center">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

---

## 3. Display Utilities

```css
.ai-d-none              /* display: none */
.ai-d-inline            /* display: inline */
.ai-d-inline-block      /* display: inline-block */
.ai-d-block             /* display: block */
.ai-d-flex              /* display: flex */
.ai-d-inline-flex       /* display: inline-flex */
.ai-d-grid              /* display: grid */
.ai-d-inline-grid       /* display: inline-grid */
.ai-d-table             /* display: table */
.ai-d-table-row         /* display: table-row */
.ai-d-table-cell        /* display: table-cell */
.ai-d-contents          /* display: contents */
```

### Visibility
```css
.ai-visible             /* visibility: visible */
.ai-invisible           /* visibility: hidden */
```

### Overflow
```css
.ai-overflow-visible    /* overflow: visible */
.ai-overflow-hidden     /* overflow: hidden */
.ai-overflow-scroll     /* overflow: scroll */
.ai-overflow-auto       /* overflow: auto */
.ai-overflow-x-*        /* X-axis overflow variants */
.ai-overflow-y-*        /* Y-axis overflow variants */
```

### Text Overflow
```css
.ai-text-truncate       /* Truncate with ellipsis */
.ai-text-wrap           /* white-space: normal */
.ai-text-nowrap         /* white-space: nowrap */
```

---

## 4. Position Utilities

```css
.ai-position-static     /* position: static */
.ai-position-relative   /* position: relative */
.ai-position-absolute   /* position: absolute */
.ai-position-fixed      /* position: fixed */
.ai-position-sticky     /* position: sticky */
```

### Position Offset (0px to 100px)
```css
.ai-top-{size}          /* top: value */
.ai-right-{size}        /* right: value */
.ai-bottom-{size}       /* bottom: value */
.ai-left-{size}         /* left: value */
.ai-top-auto            /* top: auto */
.ai-left-auto           /* left: auto */
```

### Z-Index
```css
.ai-z-0, .ai-z-1, .ai-z-10, .ai-z-20, .ai-z-30, .ai-z-40, .ai-z-50
.ai-z-100, .ai-z-1000, .ai-z-1020, .ai-z-1030, .ai-z-1040, .ai-z-1050
```

### Float
```css
.ai-float-start         /* float: left */
.ai-float-end           /* float: right */
.ai-float-none          /* float: none */
```

---

## 5. Border Utilities

### Basic Border
```css
.ai-border              /* border: 1px solid #dee2e6 */
.ai-border-top          /* border-top only */
.ai-border-right        /* border-right only */
.ai-border-bottom       /* border-bottom only */
.ai-border-left         /* border-left only */
.ai-border-x            /* left & right */
.ai-border-y            /* top & bottom */
```

### Border Width
```css
.ai-border-0            /* border: 0 */
.ai-border-1 to .ai-border-5   /* 1px to 5px */
.ai-border-{side}-{width}      /* Top, right, bottom, left variants */
```

### Border Style
```css
.ai-border-solid        /* border-style: solid */
.ai-border-dashed       /* border-style: dashed */
.ai-border-dotted       /* border-style: dotted */
.ai-border-double       /* border-style: double */
.ai-border-none         /* border-style: none */
```

### Border Radius
```css
.ai-rounded-0           /* border-radius: 0 */
.ai-rounded-1           /* border-radius: 4px */
.ai-rounded-2           /* border-radius: 8px */
.ai-rounded-3           /* border-radius: 12px */
.ai-rounded-4           /* border-radius: 16px */
.ai-rounded-5           /* border-radius: 20px */
.ai-rounded-circle      /* border-radius: 50% */
.ai-rounded-pill        /* border-radius: 9999px */
```

### Individual Border Radius
```css
.ai-rounded-top-{size}      /* top-left & top-right */
.ai-rounded-end-{size}      /* top-right & bottom-right */
.ai-rounded-bottom-{size}   /* bottom-left & bottom-right */
.ai-rounded-start-{size}    /* top-left & bottom-left */
```

### Border Colors
```css
.ai-border-primary, .ai-border-secondary, .ai-border-success
.ai-border-danger, .ai-border-warning, .ai-border-info
.ai-border-dark, .ai-border-light, .ai-border-white, .ai-border-black
```

---

## 6. Background Color Utilities

### Theme Colors
```css
.ai-bg-primary          /* Primary brand color */
.ai-bg-secondary        /* Secondary color */
.ai-bg-success          /* Success/green */
.ai-bg-danger           /* Danger/red */
.ai-bg-warning          /* Warning/yellow */
.ai-bg-info             /* Info/cyan */
.ai-bg-light            /* Light */
.ai-bg-dark             /* Dark */
.ai-bg-white            /* White */
.ai-bg-black            /* Black */
.ai-bg-transparent      /* Transparent */
```

### Grayscale
```css
.ai-bg-gray-50 to .ai-bg-gray-900    /* Gray scale palette */
```

### Color Shades
```css
/* Extended palette with -50 to -900 variants */
.ai-bg-primary-50, .ai-bg-primary-100, ..., .ai-bg-primary-900
.ai-bg-success-50 to .ai-bg-success-900
.ai-bg-danger-50 to .ai-bg-danger-900
.ai-bg-warning-50 to .ai-bg-warning-900
.ai-bg-info-50 to .ai-bg-info-900
```

### Background Properties
```css
.ai-bg-cover            /* background-size: cover */
.ai-bg-contain          /* background-size: contain */
.ai-bg-auto             /* background-size: auto */
.ai-bg-center           /* background-position: center */
.ai-bg-top, .ai-bg-bottom, .ai-bg-left, .ai-bg-right
.ai-bg-repeat           /* background-repeat: repeat */
.ai-bg-repeat-x         /* background-repeat: repeat-x */
.ai-bg-repeat-y         /* background-repeat: repeat-y */
.ai-bg-no-repeat        /* background-repeat: no-repeat */
.ai-bg-fixed            /* background-attachment: fixed */
.ai-bg-scroll           /* background-attachment: scroll */
```

---

## 7. Text & Typography Utilities

### Text Alignment
```css
.ai-text-start          /* text-align: start (left) */
.ai-text-center         /* text-align: center */
.ai-text-end            /* text-align: end (right) */
.ai-text-justify        /* text-align: justify */
```

### Text Colors
```css
.ai-text-primary, .ai-text-secondary, .ai-text-success
.ai-text-danger, .ai-text-warning, .ai-text-info
.ai-text-light, .ai-text-dark, .ai-text-white, .ai-text-black
.ai-text-muted
.ai-text-gray-50 to .ai-text-gray-900  /* Grayscale */
.ai-text-{color}-{shade}               /* Color shades */
```

### Font Weight
```css
.ai-fw-light            /* font-weight: 300 */
.ai-fw-normal           /* font-weight: 400 */
.ai-fw-medium           /* font-weight: 500 */
.ai-fw-semibold         /* font-weight: 600 */
.ai-fw-bold             /* font-weight: 700 */
.ai-fw-bolder           /* font-weight: 800 */
```

### Font Size
```css
.ai-fs-1 to .ai-fs-8    /* 2rem down to 0.75rem */
```

### Font Style
```css
.ai-fst-italic          /* font-style: italic */
.ai-fst-normal          /* font-style: normal */
```

### Text Decoration
```css
.ai-text-decoration-none           /* text-decoration: none */
.ai-text-decoration-underline      /* text-decoration: underline */
.ai-text-decoration-line-through   /* text-decoration: line-through */
.ai-text-decoration-overline       /* text-decoration: overline */
```

### Text Transform
```css
.ai-text-uppercase      /* text-transform: uppercase */
.ai-text-lowercase      /* text-transform: lowercase */
.ai-text-capitalize     /* text-transform: capitalize */
.ai-text-none-case      /* text-transform: none */
```

### Line Height
```css
.ai-lh-1                /* line-height: 1 */
.ai-lh-sm               /* line-height: 1.25 */
.ai-lh-base             /* line-height: 1.5 */
.ai-lh-lg               /* line-height: 1.75 */
.ai-lh-xl               /* line-height: 2 */
```

### Letter Spacing
```css
.ai-ls-tight            /* letter-spacing: -0.05em */
.ai-ls-normal           /* letter-spacing: 0 */
.ai-ls-wide             /* letter-spacing: 0.05em */
.ai-ls-wider            /* letter-spacing: 0.1em */
```

---

## 8. Grid System & Rows/Columns

### Container
```css
.ai-container           /* Responsive container with max-width */
.ai-container-fluid     /* Full width container */
```

### Row
```html
<div class="ai-row">
  <div class="ai-col-12 ai-col-md-6 ai-col-lg-4">Content</div>
</div>
```

### Column Sizing (1-12 columns)
```css
.ai-col                 /* Flex: 1 (equal width) */
.ai-col-auto            /* Auto width */
.ai-col-1 to .ai-col-12 /* Fixed column widths */
.ai-col-{breakpoint}-{size}  /* Responsive columns */
```

### Row Columns (Set columns for all direct children)
```html
<div class="ai-row ai-row-cols-1 ai-row-cols-md-2 ai-row-cols-lg-3">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Offset
```css
.ai-offset-{size}           /* offset-left: value */
.ai-offset-{breakpoint}-{size}  /* Responsive offset */
```

### Order
```css
.ai-order-0 to .ai-order-12     /* CSS order property */
.ai-order-first                 /* order: -1 */
.ai-order-last                  /* order: 13 */
.ai-order-{breakpoint}-{size}   /* Responsive order */
```

### Gutters (Spacing between columns)
```css
.ai-g-{size}            /* Both horizontal & vertical gutter */
.ai-gx-{size}           /* Horizontal gutter (column-gap) */
.ai-gy-{size}           /* Vertical gutter (row-gap) */
.ai-g-{breakpoint}-{size}    /* Responsive gutters */
```

#### Example
```html
<div class="ai-container">
  <div class="ai-row ai-g-4">
    <div class="ai-col-12 ai-col-md-6 ai-col-lg-4">Card 1</div>
    <div class="ai-col-12 ai-col-md-6 ai-col-lg-4">Card 2</div>
    <div class="ai-col-12 ai-col-md-6 ai-col-lg-4">Card 3</div>
  </div>
</div>
```

---

## 9. Dimension Utilities

### Width
```css
.ai-w-auto              /* width: auto */
.ai-w-100               /* width: 100% */
.ai-w-75, .ai-w-50, .ai-w-25  /* Percentage widths */
.ai-w-100vw             /* width: 100vw */
```

### Height
```css
.ai-h-auto              /* height: auto */
.ai-h-100               /* height: 100% */
.ai-h-75, .ai-h-50, .ai-h-25  /* Percentage heights */
.ai-h-100vh             /* height: 100vh */
```

### Min/Max Width & Height
```css
.ai-min-w-auto, .ai-min-w-100, .ai-min-w-0
.ai-min-h-auto, .ai-min-h-100, .ai-min-h-100vh
.ai-max-w-auto, .ai-max-w-100, .ai-max-w-none
.ai-max-h-auto, .ai-max-h-100, .ai-max-h-100vh
```

### Aspect Ratio
```css
.ai-aspect-1x1          /* aspect-ratio: 1/1 */
.ai-aspect-16x9         /* aspect-ratio: 16/9 */
.ai-aspect-4x3          /* aspect-ratio: 4/3 */
.ai-aspect-21x9         /* aspect-ratio: 21/9 */
.ai-aspect-9x16         /* aspect-ratio: 9/16 */
.ai-aspect-3x4          /* aspect-ratio: 3/4 */
```

---

## 10. Shadow Utilities

### Box Shadows
```css
.ai-shadow-none         /* box-shadow: none */
.ai-shadow-sm           /* Small shadow */
.ai-shadow              /* Default shadow */
.ai-shadow-lg           /* Large shadow */
.ai-shadow-xl           /* Extra large shadow */
.ai-shadow-2xl          /* 2x large shadow */
```

### Color Shadows
```css
.ai-shadow-primary, .ai-shadow-secondary, .ai-shadow-success
.ai-shadow-danger, .ai-shadow-warning, .ai-shadow-info
.ai-shadow-dark, .ai-shadow-light
```

### Text Shadows
```css
.ai-text-shadow-sm      /* Small text shadow */
.ai-text-shadow         /* Default text shadow */
.ai-text-shadow-lg      /* Large text shadow */
.ai-text-shadow-none    /* text-shadow: none */
```

### Inset Shadows
```css
.ai-shadow-inset        /* inset box shadow */
.ai-shadow-inset-lg     /* Large inset shadow */
```

---

## 11. Effects Utilities

### Opacity
```css
.ai-opacity-0, .ai-opacity-25, .ai-opacity-50
.ai-opacity-75, .ai-opacity-100
```

### Blur
```css
.ai-blur-none           /* blur(0) */
.ai-blur-sm             /* blur(4px) */
.ai-blur                /* blur(12px) */
.ai-blur-md, .ai-blur-lg, .ai-blur-xl
```

### Brightness
```css
.ai-brightness-50, .ai-brightness-75, .ai-brightness-100
.ai-brightness-125, .ai-brightness-150
```

### Contrast
```css
.ai-contrast-50, .ai-contrast-75, .ai-contrast-100
.ai-contrast-125, .ai-contrast-150
```

### Grayscale
```css
.ai-grayscale-0         /* grayscale(0) - full color */
.ai-grayscale-50        /* grayscale(0.5) */
.ai-grayscale-100       /* grayscale(1) - full grayscale */
```

### Saturate
```css
.ai-saturate-50, .ai-saturate-100, .ai-saturate-150, .ai-saturate-200
```

### Sepia
```css
.ai-sepia-0             /* sepia(0) */
.ai-sepia-50, .ai-sepia-100
```

### Hue Rotate
```css
.ai-hue-rotate-0, .ai-hue-rotate-15, .ai-hue-rotate-30
.ai-hue-rotate-60, .ai-hue-rotate-90, .ai-hue-rotate-180
```

### Invert
```css
.ai-invert-0            /* invert(0) - no invert */
.ai-invert-100          /* invert(1) - full invert */
```

### Drop Shadow
```css
.ai-drop-shadow-none, .ai-drop-shadow-sm, .ai-drop-shadow
.ai-drop-shadow-md, .ai-drop-shadow-lg, .ai-drop-shadow-xl
```

### Cursor
```css
.ai-cursor-auto         /* cursor: auto */
.ai-cursor-default      /* cursor: default */
.ai-cursor-pointer      /* cursor: pointer */
.ai-cursor-wait         /* cursor: wait */
.ai-cursor-text         /* cursor: text */
.ai-cursor-move         /* cursor: move */
.ai-cursor-not-allowed  /* cursor: not-allowed */
```

### Pointer Events
```css
.ai-pointer-events-none /* pointer-events: none */
.ai-pointer-events-auto /* pointer-events: auto */
```

### User Select
```css
.ai-user-select-all     /* user-select: all */
.ai-user-select-auto    /* user-select: auto */
.ai-user-select-none    /* user-select: none */
.ai-user-select-text    /* user-select: text */
```

---

## Responsive Modifiers

All utilities support responsive breakpoints using the format: `.ai-{utility}-{breakpoint}-{value}`

**Breakpoints:**
- `sm` - 576px (tablets)
- `md` - 768px (small tablets)
- `lg` - 992px (desktops)
- `xl` - 1200px (large desktops)
- `xxl` - 1400px (extra large screens)

### Examples
```html
<!-- Padding: 8px on mobile, 16px on tablet, 24px on desktop -->
<div class="ai-p-2 ai-p-md-4 ai-p-lg-6">Content</div>

<!-- Display: flex on tablet and up -->
<div class="ai-d-block ai-d-md-flex">Content</div>

<!-- Text: left on mobile, center on desktop -->
<p class="ai-text-start ai-text-lg-center">Text</p>

<!-- Grid: 1 column on mobile, 2 on tablet, 3 on desktop -->
<div class="ai-row ai-row-cols-1 ai-row-cols-md-2 ai-row-cols-lg-3">
  <div class="ai-col">Item</div>
</div>
```

---

## Quick Reference

### Common Patterns

**Centered Flex Container:**
```html
<div class="ai-d-flex ai-justify-center ai-align-center">Content</div>
```

**Responsive Padding Container:**
```html
<div class="ai-p-3 ai-p-md-5 ai-p-lg-7">Content</div>
```

**Responsive Grid Layout:**
```html
<div class="ai-container">
  <div class="ai-row ai-g-4">
    <div class="ai-col-12 ai-col-md-6 ai-col-lg-4">Column 1</div>
    <div class="ai-col-12 ai-col-md-6 ai-col-lg-4">Column 2</div>
    <div class="ai-col-12 ai-col-md-6 ai-col-lg-4">Column 3</div>
  </div>
</div>
```

**Text Styling:**
```html
<p class="ai-fs-4 ai-fw-semibold ai-text-primary ai-text-center ai-lh-lg">
  Styled Text
</p>
```

**Card with Shadow and Rounded Corners:**
```html
<div class="ai-bg-white ai-p-5 ai-rounded-3 ai-shadow ai-border">
  Card Content
</div>
```

---

## Notes

- All utilities use `!important` to ensure they override component styles
- Utilities are responsive-first: base classes apply to all breakpoints
- Combine multiple utilities for complex layouts
- Prefer utilities over custom CSS for consistency
- All colors support CSS variables for theming


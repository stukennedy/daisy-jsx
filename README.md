# daisy-jsx

A TypeScript JSX library that provides [DaisyUI](https://daisyui.com/) components (based on [TailwindCSS](https://tailwindcss.com/)). This library abstracts the specific structures and classes of DaisyUI, offering a type-safe and flexible way to use DaisyUI in server-side applications such as [Hono](https://hono.dev/).

## Features

- Type-safe DaisyUI components
- Seamless integration with Hono
- Flexible and easy-to-use API

## Installation

To install the library and its dependencies:

```bash
bun add daisy-jsx
```

## Usage

To use the library in your Hono application:

1. Import the library into your project:

```ts
import { Button } from "daisy-jsx";
```

2. Use the imported components in your JSX code:

```tsx
<Button color="primary">Click me</Button>
```

## In Progress

### Components (32/57 done)

- [x] Actions
  - [x] Button
  - [x] Dropdown
  - [x] Modal
  - [x] Swap
  - [x] Theme
- [ ] Data Display
  - [x] Accordion
  - [x] Avatar
  - [x] Badge
  - [x] Card
  - [x] Carousel
  - [x] ChatBubble
  - [x] Collapse
  - [ ] Countdown
  - [ ] Diff
  - [ ] Kbd
  - [ ] Stat
  - [ ] Table
  - [ ] Timeline
- [x] Navigation
  - [x] Breadcrumbs
  - [x] Bottom Navigation
  - [x] Link
  - [x] Menu
  - [x] Navbar
  - [x] Pagination (see Join)
  - [x] Steps
  - [x] Tabs
- [ ] Feedback
  - [ ] Alert
  - [ ] Loading
  - [ ] Progress
  - [ ] Radial Progress
  - [ ] Skeleton
  - [ ] Toast
  - [ ] Tooltip
- [x] Data Input
  - [x] Form Control
  - [x] Label
  - [x] Checkbox
  - [x] File Input
  - [x] Radio
  - [x] Range Slider
  - [x] Rating
  - [x] Select
  - [x] Text Input
  - [x] Textarea
  - [x] Toggle
- [ ] Layout
  - [x] Artboard
  - [x] Divider
  - [x] Drawer
  - [ ] Footer
  - [ ] Hero
  - [ ] Indicator
  - [x] Join
  - [ ] Mask
  - [ ] Stack
- [ ] Mockup
  - [ ] Browser
  - [ ] Code
  - [ ] Phone
  - [ ] Window

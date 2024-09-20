# daisy-jsx

A TypeScript JSX library that provides [DaisyUI](https://daisyui.com/) components for [Hono](https://hono.dev/) applications. This library abstracts the specific structures and classes of DaisyUI, offering a type-safe and flexible way to use DaisyUI in a Hono JSX app.

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

### Components

- [x] Actions
  - [x] Button
  - [x] Dropdown
  - [x] Modal
  - [x] Swap
  - [x] Theme
- [-] Data Display
  - [x] Accordion
  - [x] Avatar
  - [x] Badge
  - [x] Card
  - [x] Carousel
  - [x] ChatBubble
  - [ ] Collapse
  - [ ] Countdown
  - [ ] Diff
  - [ ] Kbd
  - [ ] Stat
  - [ ] Table
  - [ ] Timeline
- [ ] Navigation
  - [ ] Breadcrumbs
  - [ ] Bottom Navigation
  - [ ] Link
  - [ ] Menu
  - [ ] Navbar
  - [ ] Pagination
  - [ ] Steps
  - [ ] Tab
- [ ] Feedback
  - [ ] Alert
  - [ ] Loading
  - [ ] Progress
  - [ ] Radial Progress
  - [ ] Skeleton
  - [ ] Toast
  - [ ] Tooltip
- [ ] Data Input
  - [ ] Checkbox
  - [ ] File Input
  - [ ] Radio
  - [ ] Range
  - [ ] Rating
  - [ ] Select
  - [ ] Text Input
  - [ ] Textarea
  - [ ] Toggle
- [ ] Layout
  - [ ] Artboard
  - [ ] Divider
  - [ ] Drawer
  - [ ] Footer
  - [ ] Hero
  - [ ] Indicator
  - [ ] Join
  - [ ] Mask
  - [ ] Stack
- [ ] Mockup
  - [ ] Browser
  - [ ] Code
  - [ ] Phone
  - [ ] Window

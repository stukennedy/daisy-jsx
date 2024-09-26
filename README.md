# DaisyJSX

A TypeScript JSX library that provides [DaisyUI](https://daisyui.com/) components (based on [TailwindCSS](https://tailwindcss.com/)). This library abstracts the specific structures and classes of DaisyUI, offering a type-safe and flexible way to use DaisyUI in any application.

Components are copied into your project from the `components` directory using the CLI.
This is to ensure that both tailwind

## Features

- Type-safe DaisyUI components
- Flexible and easy-to-use API

## Installation

Components must be copied into your project from the `components` directory.
We provide a CLI to help with this:

### Install the CLI

```bash
npm install -g daisy-jsx
```

### Install DaisyUI in your project

You should already have Tailwind installed, if not, follow the [Tailwind Installation Guide](https://tailwindcss.com/docs/installation).

Then install DaisyUI:

```bash
npm install daisyui
```

and add the following to your `tailwind.config.js`:

```js
plugins: [require("daisyui")],
```

### Initialize your project for DaisyJSX

```bash
daisyjsx init
```

Here you can choose a `components` directory where the components will be copied to.

### Copy components into your project

```bash
daisyjsx add <component>
```

## Usage

To use the library in your application:

```tsx
import { Button } from "./components/Button";

<Button color="primary">Click me</Button>;
```

## Components

- [x] Actions
  - [x] Button
  - [x] Dropdown
  - [x] Modal
  - [x] Swap
  - [x] Theme
- [x] Data Display
  - [x] Accordion
  - [x] Avatar
  - [x] Badge
  - [x] Card
  - [x] Carousel
  - [x] ChatBubble
  - [x] Collapse (see Accordion)
  - [x] Countdown
  - [x] Diff
  - [x] Kbd
  - [x] Stat
  - [x] Table
  - [x] Timeline
- [x] Navigation
  - [x] Breadcrumbs
  - [x] Bottom Navigation
  - [x] Link
  - [x] Menu
  - [x] Navbar
  - [x] Pagination (see Join)
  - [x] Steps
  - [x] Tabs
- [x] Feedback
  - [x] Alert
  - [x] Loading
  - [x] Progress
  - [x] Radial Progress
  - [x] Skeleton
  - [x] Toast
  - [x] Tooltip
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
- [x] Layout
  - [x] Artboard
  - [x] Divider
  - [x] Drawer
  - [x] Footer
  - [x] Hero
  - [x] Indicator
  - [x] Join
  - [x] Mask
  - [x] Stack
- [x] Mockup
  - [x] Browser
  - [x] Code
  - [x] Phone
  - [x] Window

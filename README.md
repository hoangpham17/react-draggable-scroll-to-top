# React Draggable Scroll To Top

[![npm version](https://img.shields.io/npm/v/react-draggable-scroll-to-top)](https://www.npmjs.com/package/react-draggable-scroll-to-top)
[![npm downloads](https://img.shields.io/npm/dm/react-draggable-scroll-to-top)](https://www.npmjs.com/package/react-draggable-scroll-to-top)
![License](https://img.shields.io/npm/l/react-draggable-scroll-to-top)

A customizable, draggable scroll-to-top button component for React applications. Built with [react-draggable-float-btn](https://www.npmjs.com/package/react-draggable-float-btn).

## Features

- 🎯 **Draggable** - Drag and reposition anywhere on screen
- ⚡ **Smooth scroll** - Customizable animation with duration control
- ✨ **Fade effect** - Smooth opacity transitions when showing/hiding
- 🚫 **Smart click** - Prevents accidental clicks after dragging
- 📏 **Multiple sizes** - Small, medium, large presets
- 🎨 **Fully customizable** - Styles, colors, icons, positions
- 🔧 **TypeScript** - Full type definitions included

## Installation

```bash
npm install react-draggable-scroll-to-top
```

or

```bash
yarn add react-draggable-scroll-to-top
```

## Usage

### Basic Usage

```jsx
import React from "react";
import ScrollToTopDraggable from "react-draggable-scroll-to-top";

function App() {
  return (
    <div>
      <ScrollToTopDraggable />
      {/* Your content */}
    </div>
  );
}
```

### Customization

```jsx
<ScrollToTopDraggable
  size="large"
  showAfter={500}
  duration={800}
  defaultPosition="bottom-right"
  style={{ backgroundColor: "#4CAF50" }}
  onClick={() => console.log("Clicked")}
  onDragEnd={(pos) => console.log("Dragged to:", pos)}
>
  <YourCustomIcon />
</ScrollToTopDraggable>
```

### All Props

| Prop              | Type                                                           | Default        | Description                                              |
| ----------------- | -------------------------------------------------------------- | -------------- | -------------------------------------------------------- |
| `className`       | `string`                                                       | `''`           | Custom CSS class name                                    |
| `style`           | `CSSProperties`                                                | `{}`           | Custom inline styles                                     |
| `children`        | `ReactNode`                                                    | Arrow icon     | Custom content/icon                                      |
| `onClick`         | `() => void`                                                   | `undefined`    | Callback when button is clicked                          |
| `onDragStart`     | `(position: { x: number, y: number }) => void`                 | `undefined`    | Callback when drag starts with current position          |
| `onDragEnd`       | `(position: { x: number, y: number }) => void`                 | `undefined`    | Callback when drag ends with final position              |
| `defaultPosition` | `"bottom-right" \| "bottom-left" \| "top-right" \| "top-left"` | `bottom-right` | Initial position preset (use this OR position, not both) |
| `position`        | `{ x: number, y: number }`                                     | `undefined`    | Controlled position                                      |
| `draggable`       | `boolean`                                                      | `true`         | Enable/disable dragging                                  |
| `size`            | `"small" \| "medium" \| "large"`                               | `medium`       | Size of the button                                       |
| `showAfter`       | `number`                                                       | `300`          | Show button after scrolling X pixels                     |
| `smooth`          | `boolean`                                                      | `true`         | Enable smooth scroll animation                           |
| `duration`        | `number`                                                       | `500`          | Scroll animation duration (ms)                           |
| `behavior`        | `'auto' \| 'smooth'`                                           | `'smooth'`     | Native scroll behavior                                   |

## Advanced Usage

### Controlled Position

```jsx
const [pos, setPos] = useState({ x: 100, y: 100 });

<ScrollToTopDraggable position={pos} onDragEnd={setPos} />;
```

### Save Position to LocalStorage

```jsx
<ScrollToTopDraggable
  onDragEnd={(pos) => localStorage.setItem("btnPos", JSON.stringify(pos))}
/>
```

### Different Sizes & Positions

```jsx
<ScrollToTopDraggable size="small" defaultPosition="top-right" />
<ScrollToTopDraggable size="large" defaultPosition="bottom-left" />
```

## TypeScript

Full TypeScript support with type definitions included:

```typescript
import ScrollToTopDraggable, {
  ScrollToTopDraggableProps,
} from "react-draggable-scroll-to-top";
```

## Notes

- **Click prevention**: `react-draggable-float-btn` automatically handles click prevention after dragging
- **Visibility**: Uses CSS opacity/visibility for smooth fade effects
- **Position persistence**: Component stays mounted to preserve drag position
- **Next.js**: Use `"use client"` directive for Next.js 13+ App Router
- **Dependencies**: `react-draggable-float-btn` is automatically installed as a dependency

## License

MIT

## Credits

Built with [react-draggable-float-btn](https://www.npmjs.com/package/react-draggable-float-btn)

---

Made with ❤️ for the React community

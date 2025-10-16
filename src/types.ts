import { CSSProperties, ReactNode } from "react";

export interface Position {
  x: number;
  y: number;
}

export interface ScrollToTopDraggableProps {
  /**
   * Custom className for the button
   */
  className?: string;

  /**
   * Custom inline styles for the button
   */
  style?: CSSProperties;

  /**
   * Custom content/icon for the button
   */
  children?: ReactNode;

  /**
   * Callback when button is clicked
   */
  onClick?: () => void;

  /**
   * Callback when drag starts
   */
  onDragStart?: (position: Position) => void;

  /**
   * Callback when drag ends
   */
  onDragEnd?: (position: Position) => void;

  /**
   * Default position of the button
   * @default "bottom-right"
   */
  defaultPosition?: "bottom-right" | "bottom-left" | "top-right" | "top-left";

  /**
   * Controlled position of the button
   */
  position?: Position;

  /**
   * Whether the button is draggable
   * @default true
   */
  draggable?: boolean;

  /**
   * Size of the button
   * @default "medium"
   */
  size?: "small" | "medium" | "large";

  /**
   * Show button after scrolling this many pixels
   * @default 300
   */
  showAfter?: number;

  /**
   * Smooth scroll behavior
   * @default true
   */
  smooth?: boolean;

  /**
   * Scroll duration in milliseconds (only works when smooth is true)
   * @default 500
   */
  duration?: number;

  /**
   * Custom scroll behavior ('auto' | 'smooth')
   * @default 'smooth'
   */
  behavior?: "auto" | "smooth";
}

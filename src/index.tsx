import React, { useState, useEffect, useCallback } from "react";
import { FloatingButton } from "react-draggable-float-btn";
import { ScrollToTopDraggableProps } from "./types";
import "./styles.css";

const ScrollToTopDraggable: React.FC<ScrollToTopDraggableProps> = ({
  className = "",
  style = {},
  children,
  onClick,
  onDragStart,
  onDragEnd,
  defaultPosition = "bottom-right",
  position,
  draggable = true,
  size = "medium",
  showAfter = 300,
  smooth = true,
  duration = 500,
  behavior = "smooth",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Handle scroll visibility
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > showAfter) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // Check initial scroll position
    toggleVisibility();

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, [showAfter]);

  // Smooth scroll to top with custom duration
  const smoothScrollToTop = useCallback(() => {
    const startPosition = window.pageYOffset;
    const startTime = performance.now();

    const easeInOutQuad = (t: number): number => {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    };

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easing = easeInOutQuad(progress);

      window.scrollTo(0, startPosition * (1 - easing));

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  }, [duration]);

  // Handle click
  const handleClick = useCallback(() => {
    if (isDragging) {
      return;
    }
    if (smooth && duration > 0) {
      smoothScrollToTop();
    } else {
      window.scrollTo({
        top: 0,
        behavior: behavior,
      });
    }

    if (onClick) {
      onClick();
    }
  }, [smooth, duration, behavior, onClick, smoothScrollToTop]);

  const handleDragStart = useCallback(
    (position: { x: number; y: number }) => {
      setIsDragging(true);
      if (onDragStart) {
        onDragStart(position);
      }
    },
    [onDragStart]
  );

  const handleDragEnd = useCallback(
    (position: { x: number; y: number }) => {
      setTimeout(() => {
        setIsDragging(false);
      }, 300);
      if (onDragEnd) {
        onDragEnd(position);
      }
    },
    [onDragEnd]
  );

  const defaultContent = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 256 256"
    >
      <path
        fill="currentColor"
        d="M213.66 165.66a8 8 0 0 1-11.32 0L128 91.31l-74.34 74.35a8 8 0 0 1-11.32-11.32l80-80a8 8 0 0 1 11.32 0l80 80a8 8 0 0 1 0 11.32"
      />
    </svg>
  );

  return (
    <FloatingButton
      className={`scroll-to-top-draggable ${className}`}
      style={{
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s ease",
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? "visible" : "hidden",
        pointerEvents: isVisible ? "auto" : "none",
        zIndex: 9999,
        ...style,
      }}
      onClick={handleClick}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      defaultPosition={defaultPosition}
      position={position}
      draggable={draggable}
      size={size}
    >
      {children || defaultContent}
    </FloatingButton>
  );
};

export default ScrollToTopDraggable;
export { ScrollToTopDraggableProps } from "./types";

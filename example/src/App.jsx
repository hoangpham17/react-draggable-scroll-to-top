import { useState } from "react";
import ScrollToTopDraggable from "react-scroll-to-top-draggable";

function App() {
  const [example, setExample] = useState("default");

  return (
    <div>
      <div className="container">
        <div className="section">
          <div>
            <h1>🚀 React Scroll To Top Draggable</h1>
            <p>Scroll down to see the button appear!</p>
            <div style={{ marginTop: "20px" }}>
              <label>Choose example: </label>
              <select
                value={example}
                onChange={(e) => setExample(e.target.value)}
              >
                <option value="default">Default</option>
                <option value="custom-style">Custom Style</option>
                <option value="custom-icon">Custom Icon</option>
                <option value="with-callbacks">With Callbacks</option>
                <option value="non-draggable">Non-Draggable</option>
                <option value="small-size">Small Size</option>
                <option value="large-size">Large Size</option>
              </select>
            </div>
          </div>
        </div>

        <div className="section">
          <div>
            <h2>Section 2</h2>
            <p>Keep scrolling...</p>
          </div>
        </div>

        <div className="section">
          <div>
            <h2>Section 3</h2>
            <p>The button should be visible now!</p>
            <p>Try dragging it around!</p>
          </div>
        </div>

        <div className="section">
          <div>
            <h2>Section 4</h2>
            <p>Click the button to scroll back to top</p>
          </div>
        </div>

        <div className="section">
          <div>
            <h2>Section 5</h2>
            <p>The scroll is smooth and animated ✨</p>
          </div>
        </div>
      </div>

      {/* Render different examples based on selection */}
      {example === "default" && <ScrollToTopDraggable />}

      {example === "custom-style" && (
        <ScrollToTopDraggable
          style={{
            backgroundColor: "#ff6b6b",
            width: "60px",
            height: "60px",
            borderRadius: "15px",
          }}
        />
      )}

      {example === "custom-icon" && (
        <ScrollToTopDraggable
          style={{
            backgroundColor: "#4CAF50",
            fontSize: "24px",
          }}
        >
          ⬆️
        </ScrollToTopDraggable>
      )}

      {example === "with-callbacks" && (
        <ScrollToTopDraggable
          onClick={() => console.log("Clicked!")}
          onDragStart={(pos) => console.log("Drag started at:", pos)}
          onDragEnd={(pos) => console.log("Drag ended at:", pos)}
          style={{
            backgroundColor: "#9c27b0",
          }}
        />
      )}

      {example === "non-draggable" && (
        <ScrollToTopDraggable
          draggable={false}
          style={{
            backgroundColor: "#ff9800",
          }}
        />
      )}

      {example === "small-size" && (
        <ScrollToTopDraggable
          size="small"
          style={{
            backgroundColor: "#00bcd4",
          }}
        />
      )}

      {example === "large-size" && (
        <ScrollToTopDraggable
          size="large"
          style={{
            backgroundColor: "#e91e63",
          }}
        />
      )}
    </div>
  );
}

export default App;

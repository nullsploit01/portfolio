import "./App.css";

const App = () => {
  return (
    <div className="work-in-progress-container">
      <div className="animation-wrapper">
        {"Coming Soon".split("").map((char, index) => (
          <span key={index} className={`letter ${char === " " ? "space" : ""}`}>
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default App;

//App.tsx
import { Fragment, useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="preloader">
          <svg
            className="logo"
            viewBox="0 0 600 150"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#813368" />
                <stop offset="50%" stopColor="#813368" />
                <stop offset="100%" stopColor="#E8B9E0" />
              </linearGradient>
            </defs>
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="2"
              strokeDasharray="900"
              strokeDashoffset="900"
              className="text"
            >
              Nurlead
            </text>
          </svg>
        </div>
      ) : (
        <Home />
      )}
    </>
  );
}

export default App;

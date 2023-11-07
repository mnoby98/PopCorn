import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import StarRating from "./StarRating";
function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This movies was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={[
        "Trrible",
        // "Trrible",
        "Bad",
        // "Bad",
        "Okay",
        // "Okay",
        "Good",
        // "Good",
        "Amazing",
        // "Amazing",
      ]}
    />
    <Test />
    <StarRating size={24} color="red" className="test" defaultRating={3} /> */}
  </React.StrictMode>
);
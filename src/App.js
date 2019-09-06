import React from "react";
import logo from "./logo.svg";
import "./index.css";

function App() {
  return (
    <div class="container flex items-center flex-col mx-auto">
      <p class="lg:mt-40 font-sans font-semibold text-4xl text-gray-800 text-center">
        React Tailwind Starter
      </p>
      <img className="lg:w-4/12" src={logo} alt="React-Logo" />
      <p class="font-sans font-semibol text-xl text-gray-800 text-center">
        To get started, edit /src/App.js
      </p>
    </div>
  );
}

export default App;

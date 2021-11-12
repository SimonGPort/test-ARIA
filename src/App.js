import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState("false");

  return (
    <div>
      <h1>Title</h1>
      <button
        id="hamburger"
        class="block"
        aria-expanded="false"
        onClick={() => {
          const hamburger = document.getElementById("hamburger");
          if (JSON.parse(hamburger.attributes["aria-expanded"]["value"])) {
            hamburger.attributes["aria-expanded"]["value"] = false;
            setIsHamburgerOpen("false");
          } else {
            hamburger.attributes["aria-expanded"]["value"] = true;
            setIsHamburgerOpen("true");
          }
        }}
      >
        <p class="cta">{isHamburgerOpen}</p>
      </button>

      <button
        id="hamburger2"
        class="block"
        aria-expanded="false"
        onClick={() => {
          const hamburger = document.getElementById("hamburger2");
          if (JSON.parse(hamburger.attributes["aria-expanded"]["value"])) {
            hamburger.attributes["aria-expanded"]["value"] = false;
          } else {
            hamburger.attributes["aria-expanded"]["value"] = true;
          }
        }}
      ></button>
      <img
        src=""
        className="App-logo"
        alt="ee"
        aria-labelledby="aria-id-test-1"
        role="button"
        tabindex="0"
      />
      <p id="aria-id-test-1">spinning image 1</p>
      <p>hey</p>
      <a href="www.google.com" aria-label="google link">
        hey2
      </a>
      <button>hey2</button>
      <img src={logo} className="App-logo" alt="logo" />
      <img
        src=""
        className="App-logo"
        alt="ee"
        aria-labelledby="aria-id-test-2"
        role="button"
        tabindex="0"
      />
      <p id="aria-id-test-2">spinning image 2</p>
    </div>
  );
}

export default App;

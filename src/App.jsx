import React from "react";

import "./App.css";

function App() {
  const welcome = "Welcome to 30 Days Of React";
  const title = "Getting Started React";
  const header = (
    <header>
      <div className="header-wrapper">
        <h1>Welcome to 30 Days Of React</h1>
        <h2>Getting Started React</h2>
        <h3>JavaScript Library</h3>
        <p>Instructor: Asabeneh Yetayeh</p>
        <small>Date: Oct 1, 2020</small>
      </div>
    </header>
  );

  // JSX element, main
  const main = (
    <main>
      <div className="main-wrapper">
        <p>
          Prerequisite to get started{" "}
          <strong>
            <em>react.js</em>
          </strong>
          :
        </p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li> JavaScript</li>
        </ul>
      </div>
    </main>
  );

  // JSX element, footer
  const footer = (
    <footer>
      <div className="footer-wrapper">
        <p>Copyright 2020</p>
      </div>
    </footer>
  );

  return (
    <>
      {header}
      {main}
      {footer}
    </>
  );
}

export default App;

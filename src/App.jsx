import React from "react";

import "./App.css";

const Header = () => {
  return (
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
};

const Main = () => {
  return (
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
};

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <p>Copyright 2020</p>
      </div>
    </footer>
  );
};

function App() {
  // JSX element, main

  // JSX element, footer

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;

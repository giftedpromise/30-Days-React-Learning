//DAY ONE
//TOPICS: Intoduction to React. setting React environment, Jsx

//React is a JavaScript library for building user interfaces.

//React is used to build single-page applications.

//React allows us to create reusable UI components.
//React allows u sto write composable code
//React is declarative and not imperative

/* Why we choose to use React ? We use it because of the following reasons:

fast
modular
scalable
flexible
big community and popular
open source
High job opportunity
*/

//Jsx - means JavaScript Syntax extension. It is used to describe and Create HTML elements in JavaScript in a more declarative way.
//JSX stands for JavaScript XML. JSX allows us to write HTML elements with JavaScript code.
//To create HTML elements in React we do not use the createElement() instead we just use JSX elements.
//Therefore, JSX makes it easier to write and add HTML elements in React.
//JSX will be converted to JavaScript on browser using a transpiler - babel.js.
//Babel is a library which transpiles JSX to pure JavaScript and latest JavaScript to older version.

// JSX syntax
// we don't need to use quotes with JSX

const jsxElement = <h1>I am a JSX element</h1>;
const welcome = <h1>Welcome to 30 Days of React Challenge</h1>;
const data = <small>Oct 2, 2020</small>;

//JSX can allow us to use HTML in JavaScript. The HTML element in the JSX above is h1 and small.
//JSX Element

//JSX has a JavaScript and HTML like syntax.
//JSX element could be a single HTML element or many HTML elements wrapped in a parent HTML element.

const Header = (
  <header>
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Promise Nwankwo</p>
    <small>Oct 2, 2020</small>
  </header>
);

/* Surprise! You probably thought you could just forget
the line of code you just learned! Nope, not on my watch!

Try to write that 1-liner of React code again! This time,
see if you can figure out how to render an <ul> with 2+ <li>s inside*/
ReactDOM.render(
  <ul>
    <li>one</li>
    <li>Two</li>
    <li>Three</li>
  </ul>,
  document.getElementById("root")
);

/* 
Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/
const navbar = (
  <div>
    <h1 className="header">TechMom Consult</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </div>
);

ReactDOM.render(navbar, document.getElementById("root"));

/* 
Second Method

import React from "react"
import ReactDOM from "react-dom/client"

const navbar = (
    <nav>
        <h1>Bob's Bistro</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(navbar)

// ReactDOM.render(navbar, document.getElementById("root"))
// ReactDOM.createRoot(document.getElementById("root")).render(navbar)

*/

//DAY TWO

//TOPIC COVERED: Components, functional and class components
/* 

In React, a component is a piece of the user interface (UI) that you can reuse and manage independently. 
Components can be simple or complex, depending on what you want them to do. 
They are like building blocks that make up the whole application.
*/

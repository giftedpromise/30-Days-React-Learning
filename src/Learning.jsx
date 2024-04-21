//React is a JavaScript library for building user interfaces.

//React is used to build single-page applications.

//React allows us to create reusable UI components.
//React allows u sto write composable code
//React is declarative and not imperative

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

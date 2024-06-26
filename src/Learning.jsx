//DAY ONE
//TOPICS: Intoduction to React. setting React environment, Jsx

//React is a JavaScript library for building user interfaces.

//React is used to build single-page applications.

//React allows us to create reusable UI components.
//React allows us to write composable code
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
// JSX must be wrapped by an outer parent element.
//Without the header HTML element or other parent HTML element the above JSX is invalid.

//Commenting a JSX element
//We comment codes for different reasons and it is also good to know how to comment out JSX elements in React.

{
  /*
 <header>
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Asabeneh Yetayeh</p>
    <small>Oct 2, 2020</small>
  </header>

*/
}

//Injecting data to a JSX Element
//So far, we used static data on the JSX elements, but we can also pass different data types as a dynamic data.
//The dynamic data could be string, number, boolean, array or object.
//Let us see each of the data types step by step. To inject data to a JSX we use the {} bracket.

const welcome1 = "Welcome to 30 Days Of React";
const title = "Getting Started React";
const subtitle = "JavaScript Library";
const authorFirstName = "Promise";
const authorLastName = "Nwankwo";
const date = "Oct 1, 2020";

// JSX element, header
const header = (
  <header>
    <div className="header-wrapper">
      <h1>{welcome1}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {authorFirstName} {authorLastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
);

//Injecting numbers

const numOne = 3;
const numTwo = 5;

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
);

const yearBorn = 1992;
const currentYear = new Date().getFullYear();
const age = currentYear - yearBorn;

const personAge = <p>{age}</p>;

//Injecting an array to a JSX Element
const techs = ["HTML", "CSS", "JavaScript"];

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
      <ul>{techs}</ul>
    </div>
  </main>
);

//Injecting an object to a JSX Element
//We can inject string, number, boolean, array data to JSX but we cannot directly inject an object.
//We should extract object values first or destructure the content of the object before we inject the data to the JSX element.
const author = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
};

const objInject = (
  <p>
    instuctor's name: {author.firstName} {author.lastName}
  </p>
);

//e can modify the array using map.

const courses = ["Html", "Css", "JavaScript"];
const formattedCourses = courses.map((course) => (
  <li key={course}>{course}</li>
));

/* Write a JSX element which displays your full name, country, title, gender, email, phone number.
 Use h1 for the name and p for the rest of the information and store it in a user variable

 */

const user = (
  <div>
    <h1>Promise Nwankwo</h1>
    <p>Nigeria</p>
    <p>Software Developer</p>
    <p>Female</p>
    <p>giftedpromise1992@gmail.com</p>
    <p>08062537697</p>
  </div>
);
//Write a footer JSX element
const footer = (
  <footer>
    <p>Copyright 2020</p>
  </footer>
);

const mainStyle = {
  padding: "20px",
  margin: "20px",
  fontSize: "16px",
  backgroundColor: "#f0f0f0", // Light gray background
};
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
A React component is a small, reusable code, which is responsible for one part of the application UI.
 A React application is an aggregation of components. 
React can help us to build reusable components. 
In React, a component is a piece of the user interface (UI) that you can reuse and manage independently. 
Components can be simple or complex, depending on what you want them to do. 
They are like building blocks that make up the whole application.
We use JavaScript functions or classes to make components.
 If we use a function, the component will be a functional component, 
 but if we use a class, the component will be a class-based component.

Components can be:

Functional Component / Presentational Component / Stateless Component / Dumb Component
Class Component / Container Component/ Statefull Component / Smart Component

Class Components:

Class components are like factories.
 You define a blueprint (class) and create instances (objects) from it.
They have their own internal state and lifecycle methods.
Like a smart robot, they can do more complex tasks and manage their own behavior.
Used for components that need to maintain state or have lifecycle methods.
 */

class Greeting extends React.Component {
  render() {
    return <h1>Hello, React!</h1>;
  }
}

ReactDOM.render(<Greeting />, document.getElementById("app"));

//Functional Component
const jsx = <tag> Content </tag>;
const ComponentName = () => {
  return jsx;
};

// JSX element, header
const head = (
  <header style={headerStyles}>
    <div className="header-wrapper">
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Asabeneh Yetayeh</p>
      <small>Oct 3, 2020</small>
    </div>
  </header>
);

// React Component
const Header3 = () => {
  return head;
};

// or we can just return the JSX

const Header1 = () => {
  return (
    <header style={headerStyles}>
      <div className="header-wrapper">
        <h1>Welcome to 30 Days Of React</h1>
        <h2>Getting Started React</h2>
        <h3>JavaScript Library</h3>
        <p>Asabeneh Yetayeh</p>
        <small>Oct 3, 2020</small>
      </div>
    </header>
  );
};

// Even th above code can be written like this
// Explicitly returning the JSX
const Header2 = () => (
  <header style={headerStyles}>
    <div className="header-wrapper">
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Asabeneh Yetayeh</p>
      <small>Oct 3, 2020</small>
    </div>
  </header>
);

//Injecting data to JSX in React Component
const welcome2 = "Welcome to 30 Days Of React";
const title1 = "Getting Started React";
const subtitle2 = "JavaScript Library";
const author1 = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
};
const date1 = "Oct 3, 2020";

const Header4 = () => {
  return (
    <header>
      <h1>{welcome2}</h1>
      <h2>{title1}</h2>
      <h3>{subtitle2}</h3>
      <p>
        Instructor: {author1.firstName} {author1.lastName}
      </p>
      <small>Date: {date}</small>
    </header>
  );
};

const hexaColor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

const HexaColor = () => <div>{hexaColor()}</div>;

//Rendering components
// TechList Component
const TechList = () => {
  const techs = ["HTML", "CSS", "JavaScript"];
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
  return techsFormatted;
};

const Button = () => <button>action</button>;

const buttonStyles = {
  padding: "10px 20px",
  background: "rgb(0, 255, 0",
  border: "none",
  borderRadius: 5,
};
const Button1 = () => <button style={buttonStyles}> action </button>;

//DAY Three

//TOPIC COVERED: Props
/* Props is a special keyword in React that stands for properties
 and is being used to pass data from one component to another and mostly from parent component 
 to child component. We can say props is a data carrier or a means to transport data. 
 React allows you to pass a data to component through a concept called props.
 You can pass all kinds of value to your props(string, number, array, objects, functions)
 Props (short for properties) are a way of passing data from a parent component to a child component in React. 
 They allow components to be dynamic and reusable by enabling them to
  receive data and behavior from their parent components.
*/

// function syntax

const getUserInfo = (firstName, lastName, country) => {
  return `${firstName} ${lastName}. Lives in ${country}.`;
};

// calling a functons

getUserInfo("Asabeneh", "Yeteyeh", "Finland");

const User = (props) => {
  return (
    <div>
      <h1>
        {props.firstName}
        {props.lastName}
        <small>{props.country}</small>
      </h1>
    </div>
  );
};

// calling or instantiating a component, this component
//has three properties and we call them props:firstName, lastName, country
//Also, props should be separated by a space, not a comma.
<User firstName="Asabeneh" lastName="Yetayeh" country="Finland" />;

/* 
What is props in a React component?
Props (short for properties) are a way of passing data from a parent component to a child component in React.
 They allow components to be dynamic and reusable by enabling them to 
 receive data and behavior from their parent components.

How do you access props in a React component?
Props are accessed within a component via the props object. 
In functional components, props are passed as a parameter to the function. 
In class components, props are available as this.props.
*/

//Functional Component Example:
const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

// Usage
<Greeting name="John" />;

//Class Component Example:
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

// Usage
<Greeting name="John" />;

//What data types can we pass as props to components?
//You can pass any JavaScript data type as props to components, including:

Strings: <Component name="John" />;
Numbers: <Component age={30} />;
Booleans: <Component isActive={true} />;
Arrays: <Component items={[1, 2, 3]} />;
Objects: <Component user={{ name: "John", age: 30 }} />;
Functions: <Component handleClick={this.handleClick} />;
Elements: <Component header={<h1>Title</h1>} />;
Components: <Component child={<ChildComponent />} />;

/* What is propTypes?
propTypes is a feature in React used for type checking the props passed to a component. 
It helps catch bugs by ensuring that components receive the correct type of props. 
You define propTypes by using the prop-types library.
*/

import PropTypes from "prop-types";

const Greeting1 = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

Greeting1.propTypes = {
  name: PropTypes.string.isRequired,
};

// Usage
<Greeting1 name="John" />;

/*
What is a default prop?
Default props are used to define default values for props in case they are not provided by the parent component.
 This ensures that the component still behaves as expected even if some props are missing.
*/

const Greeting2 = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

Greeting2.defaultProps = {
  name: "Guest",
};

// Usage without providing a name prop
<Greeting2 />;
// Output: Hello, Guest!

//Props object
//React props is an object which you get instantly when you create a React component.

// Header Component
const Header5 = (props) => {
  return (
    <header>
      <div className="header-wrapper">
        <h1>{props.welcome}</h1>
      </div>
    </header>
  );
};

// The App, or the parent or the container component
// Functional Component
const App1 = () => {
  return (
    <div className="app">
      <Header5 welcome="Welcome to 30 Days Of React" />
    </div>
  );
};

//A component can have one or many props.
//Props could be different data types.
// It could be a string, number, boolean, array, object or a function.

//Different data type props
//String props type
//The data type of the props we pass an attribute to the component is a string.

const Header6 = (props) => {
  return (
    <header>
      <div className="header-wrapper">
        <h1>{props.welcome}</h1>
        <h2>{props.title}</h2>
        <h3>{props.subtitle}</h3>
        <p>
          {props.firstName} {props.lastName}
        </p>
        <small>{props.date}</small>
      </div>
    </header>
  );
};

// The App, or the parent or the container component
// Functional Component
const App2 = () => (
  <div className="app">
    <Header
      welcome="Welcome to 30 Days Of React"
      title="Getting Started React"
      subtitle="JavaScript Library"
      firstName="Asabeneh"
      lastName="Yetayeh"
      date="Oct 4, 2020"
    />
  </div>
);

//Using variable as props

const User1 = (props) => {
  return (
    <div className="wrapper">
      <h1>{props.welcome}</h1>
      <h2>{props.name}</h2>
      <p>{props.title}</p>
      <p>{props.age}</p>
    </div>
  );
};

const App3 = () => {
  const name = "Promise Nwankwo";
  const welcome = "Welcome to 30 Days Of React";
  const title = "Getting Started React";
  const age = 32;

  return <User1 name={name} welcome={welcome} title={title} age={age} />;
};

//Number props type
const Age = (props) => <div>The person is {props.age} years old.</div>;
const Weight = (props) => (
  <p>The weight of the object on earth is {props.weight} N.</p>
);

const App4 = () => {
  let currentYear = 2020;
  let birthYear = 1820;
  const age = currentYear - birthYear;
  const gravity = 9.81;
  const mass = 75;

  return (
    <div className="app">
      <Age age={age} />
      <Weight weight={gravity * mass} />
    </div>
  );
};

//Boolean props type

const status = (props) => {
  let status = props.status ? "Old enough to drive" : "Too young for driving";
  return <p>{status}</p>;
};

const App5 = () => {
  let currentYear = 2020;
  let birthYear = 2015;
  const age = currentYear - birthYear; // 15 years

  let status = age >= 18;

  return (
    <div className="app">
      <Status status={status} />
    </div>
  );
};

//Array props type
//In programming arrays and objects are the most frequently used data structure
//to solve different problems and store data in a more structured way.

const Skills = (props) => <ul>{props.skills}</ul>;

const App6 = () => (
  <div className="app">
    <Skills skills={["HTML", "CSS", "JavaScript"]} />
  </div>
);

//Modifying

const Skills2 = (props) => {
  // modifying the skills array
  const skillList = props.skills.map((skill) => <li>{skill}</li>);
  return <ul>{skillList}</ul>;
};

const App7 = () => (
  <div className="app">
    <Skills skills={["HTML", "CSS", "JavaScript"]} />
  </div>
);

//object Prop types

const Header7 = (props) => {
  return (
    <header>
      <div className="header-wrapper">
        <h1>{props.data.welcome}</h1>
        <h2>{props.data.title}</h2>
        <h3>{props.data.subtitle}</h3>
      </div>
    </header>
  );
};

// The App, or the parent or the container component
// Functional Component
const App8 = () => {
  const data = {
    welcome: "Welcome to 30 Days Of React",
    title: "Getting Started React",
    subtitle: "JavaScript Library",
  };

  return (
    <div className="app">
      <Header data={data} />
    </div>
  );
};

//Function prop types

const Button2 = (props) => (
  <button onClick={props.onClick}>{props.text}</button>
);

// The App, or the parent or the container component
// Functional Component
const App9 = () => {
  const sayHi = () => {
    alert("Hi");
  };

  return (
    <div className="app">
      <Button text="Say Hi" onClick={sayHi} />
    </div>
  );
};

//Example 2

const Button3 = (props) => (
  <button onClick={props.onClick}>{props.text}</button>
);

// The App, or the parent or the container component
// Functional Component
const App10 = () => {
  const greetPeople = () => {
    alert("Welcome to 30 Days Of React Challenge, 2020");
  };

  return (
    <div className="app">
      <Button text="Greet People" onClick={greetPeople} />
      <Button text="Show Time" onClick={() => alert(new Date())} />
    </div>
  );
};

//Destructuring props

const UserProfile = ({ name, age, location }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
};

// Usage
<UserProfile name="John Doe" age={30} location="New York" />;

//Day four
//TOPIC COVERED: Mapping arrays
//An array is the most frequently used data structure to handle many kinds of problems.
//In React, we use map to modify an array to list of JSX by adding a certain HTML
//elements to each element of an array.

const numbers = ({ numbers }) => {
  const lists = numbers.map((number) => <li>{number}</li>);
  return lists;
};

const App11 = () => {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div className="container">
      <div>
        <h1>Numbers List</h1>
        <ul>
          <Numbers numbers={numbers} />
        </ul>
      </div>
    </div>
  );
};

//Mapping array of arrays

const skills = [
  ["HTML", 10],
  ["CSS", 7],
  ["JavaScript", 9],
  ["React", 8],
];

const skill = ({ skills: [Tech, level] }) => (
  <li>
    {tech} {level}
  </li>
);

// Skills Component
const Skills1 = ({ skills }) => {
  const skillsList = skills.map((skill) => <Skill skill={skill} />);
  console.log(skillsList);
  return <ul>{skillsList}</ul>;
};

const App12 = () => {
  return (
    <div className="container">
      <div>
        <h1>Skills Level</h1>
        <Skills1 skills={skills} />
      </div>
    </div>
  );
};

const countries = [
  { name: "Finland", city: "Helsinki" },
  { name: "Sweden", city: "Stockholm" },
  { name: "Denmark", city: "Copenhagen" },
  { name: "Norway", city: "Oslo" },
  { name: "Iceland", city: "Reykjavík" },
];

// Country component
const Country = ({ country: { name, city } }) => {
  return (
    <div>
      <h1>{name}</h1>
      <small>{city}</small>
    </div>
  );
};

// countries component
const Countries = ({ countries }) => {
  const countryList = countries.map((country) => <Country country={country} />);
  return <div>{countryList}</div>;
};
// App component
const App13 = () => (
  <div className="container">
    <div>
      <h1>Countries List</h1>
      <Countries countries={countries} />
    </div>
  </div>
);

//Key in mapping arrays
//Keys help React to identify items which have changed, added, or removed.
// Keys should be given to the elements inside the array to give the elements a stable identity.
//The key should be unique. Mostly data will come with as an id and we can use id as key.
// If we do not pass key to React during mapping it raises a warning on the browser.
// If the data does not have an id we have to find a way to
// create a unique identifier for each element when we map it.

const Numbers3 = ({ numbers }) => {
  // modifying array to array of li JSX
  const list = numbers.map((num) => <li key={num}>{num}</li>);
  return list;
};

const App14 = () => {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div className="container">
      <div>
        <h1>Numbers List</h1>
        <ul>
          <Numbers numbers={numbers} />
        </ul>
      </div>
    </div>
  );
};

//DAY FIVE
//TOPIC COVERERD: List rendering

{
  /* 

List rendering in React involves creating and displaying a list of items dynamically. 
React makes it straightforward to render lists by using JavaScript's map() function 
to iterate over an array of items and return a React element for each item.
Basic List Rendering
Define your array of items: This could be an array of strings, numbers, objects, etc.
Use the map() function: Iterate over the array and return a JSX element for each item.
Assign a unique key to each list item: This helps React to optimize rendering and keep track of elements.
*/
}

//Example: Rendering a List of Strings
const app15 = () => {
  const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

//Example: Rendering a List of Objects

const app16 = () => {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user}</li>
      ))}
    </ul>
  );
};

//Rendering Components in Lists
const User2 = ({ user }) => <li>{user.name}</li>;

const App17 = () => {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];

  return (
    <ul>
      {users.map((user) => (
        <User2 key={user.id} user={user} />
      ))}
    </ul>
  );
};

//DAY SIX
//TOPIC COVERERD: Conditional rendering
{
  /*
Conditional rendering in React allows you to dynamically display components or elements based on certain conditions.
 React makes it easy to implement conditional rendering using JavaScript's control structures 
 like if-else statements, ternary operators, and logical && operators. 
Below are different ways to achieve conditional rendering in React:

*/
}
//1. Using if-else Statements
//You can use if-else statements to conditionally render elements in React.
//Use for more complex logic outside of JSX.

const App18 = () => {
  const isLoggedIn = true;

  if (isLoggedIn == true) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please log in.</h1>;
  }
};

//2. Using Ternary Operator
//The ternary operator is a more concise way to handle simple conditional rendering.
//It is often used directly within JSX. Ideal for simple, inline conditions.

const App19 = () => {
  const isLoggedIn = true;

  return (
    <div>{isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>} </div>
  );
};

//3.Using Logical && Operator
//For cases where you only want to render something when a condition is true, you can use the logical && operator.

const App20 = () => {
  const hasNotifications = true;

  return (
    <div>
      <h1>Dashboard</h1>
      {hasNotifications && <p>You have new notifications!</p>}
    </div>
  );
};

//4. Using switch Statement
//For multiple conditions, you might find it cleaner to use a switch statement.
//This is particularly useful when you have multiple possible renderings.

const App21 = () => {
  const status = "error";

  let content;
  switch (status) {
    case "loading":
      content = <p>Loading...</p>;
      break;
    case "success":
      content = <p>Data loaded successfully!</p>;
      break;
    case "error":
      content = <p>Error loading data.</p>;
      break;
    default:
      content = <p>Unknown status.</p>;
  }

  return (
    <div>
      <h1>Data Fetching</h1>
      {content}
    </div>
  );
};

//Conditional Rendering with Components
//You can also create separate components and render them conditionally.
//This helps keep your code clean and organized.

const LoggedIn = () => <h1>Welcome back!</h1>;
const LoggedOut = () => <h1>Please log in.</h1>;

const App22 = () => {
  const isLoggedIn = true;
  return <div>{isLoggedIn ? <LoggedIn /> : <LoggedOut />}</div>;
};
//Inline Conditional Rendering with Functions
//For more complex logic, you can use a function to handle conditional rendering.

import React from "react";

const App23 = () => {
  const isLoggedIn = true;

  const renderContent = () => {
    if (isLoggedIn) {
      return <h1>Welcome back!</h1>;
    } else {
      return <h1>Please log in.</h1>;
    }
  };

  return <div>{renderContent()}</div>;
};

export default App;

//DAY SEVEN
//TOPIC COVERERD: HANDLING EVENTS
{
  /*
Event handling in React is a key part of creating interactive web applications. 
React provides a way to handle events that is similar to handling events in 
plain JavaScript, but with some syntactic differences and added features.
Key Points for Event Handling in React
Event names: Events in React are named using camelCase, rather than lowercase.
Event handlers: You pass a function as the event handler rather than a string.
Synthetic events: React uses a cross-browser wrapper around the browser's 
native event system called SyntheticEvent, which has the same interface as 
the browser's native events, including stopPropagation() and preventDefault() methods.

*/
}

const App24 = () => {
  const handleClick = () => {
    alert("Button was clicked!");
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

//Passing Arguments to Event Handlers
//You can pass additional arguments to your event handler by wrapping the handler in an anonymous function.

const App25 = () => {
  const handleClick = (message) => {
    alert(message);
  };

  return (
    <div>
      <button onClick={() => handleClick("Button was clicked!")}>
        Click Me
      </button>
    </div>
  );
};

//Synthetic Events
//React's SyntheticEvent is a cross-browser wrapper around the browser's native event. S
//ynthetic events have the same interface as native events, but they work identically across all browsers.

const App26 = () => {
  const handleClick = (event) => {
    console.log(event); // SyntheticEvent
    console.log(event.nativeEvent); // Native browser event
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

//Event Pooling
//a22React pools events for performance reasons, which means that the properties of the event object will be nullified after the event callback has been invoked.
// If you need to access the event properties asynchronously, you should call event.persist().
import React from "react";

const App27 = () => {
  const handleClick = (event) => {
    event.persist();
    setTimeout(() => {
      console.log(event.type); // "click"
    }, 1000);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

//DAY EIGHT
//TOPIC COVERED: FORMS

//Form is used to collect data from a user.
//Getting data from an input field
function App28() {
  // Step 1: Declare a state variable
  const [firstName, setFirstName] = useState("");

  // Step 2: Create an event handler to update the state
  const handleChange = (e) => {
    const value = e.target.value;
    setFirstName(value);
  };

  return (
    <div className="App">
      {/* Step 3: Bind the input field's value to the state variable */}
      <label htmlFor="firstName">First Name: </label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        placeholder="First Name"
        value={firstName}
        onChange={handleChange}
      />
      {/* Step 4: Display the state variable */}
      <h1>{firstName}</h1>
    </div>
  );
}

//Step-by-Step Explanation:
//1. Declare a State Variable.
//2. Create an Event Handler.
//3. Bind the Input Field's Value to the State Variable:
// 4. Display the State Variable:

//Getting multiple input data from form
import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  // Step 1: Declare state variables using useState
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    title: "",
  });

  // Step 2: Create an event handler to update the state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Step 3: Create an event handler to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here you can connect to a backend API to send the data to the database
  };

  // Step 4: Destructure form data from state for easy access
  const { firstName, lastName, country, title } = formData;

  return (
    <div className="App">
      <h3>Add Student</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={country}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={handleChange}
          />
        </div>

        <button className="btn btn-success">Submit</button>
      </form>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
{
  /*

What is validation?
The action or process of checking or proving the validity or accuracy of something in this case data.

Form validation is the process of ensuring that user input in a form meets certain criteria 
before the form is submitted.
 It helps in maintaining data integrity and providing a good user experience. 

What is the purpose of validation
The main purpose to validation is to get a desired data from users.
 In addition, to prevent malicious users and data.

Validation Types
Validation can be done in client side or sever side. At the moment, 
we are using React which is a front end technology and we use client side validation.
A validation can implement using HTML5 built-in validation or using JavaScript(using regular expression).


Types of Form Validation
Client-side Validation: This validation happens in the browser before the form is submitted to the server.
 It provides immediate feedback to users without needing a server request.
Server-side Validation: This validation happens on the server after the form data is submitted. 
It is essential for security as client-side validation can be bypassed.

*/
}

//DAY NINE(9)

//TOPIC COVERED: States

/* What is State?
State is an object that holds information that may change over the lifetime of a component.
Unlike props, which are read-only and passed down from parent components,
 state is managed within the component itself.
 State is an object in react which let the component re-render when state data changes.
When state changes, React re-renders the component to reflect the new state.

Using State in Class Components
In class components, state is initialized in the constructor and managed using this.state and this.setState.
*/

//Initializing State
//State is typically initialized in the constructor:

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      text: "Hello",
    };
  }
  // other methods...
}

//Updating State
//State is updated using this.setState, which schedules an update to the component’s state
//and tells React to re-render it:
incrementCount = () => {
  this.setState((prevState) => ({
    count: prevState.count + 1,
  }));
};

//Using State in Functional Components
//With the introduction of Hooks in React 16.8, functional components can now use state.

//Initializing State with useState Hook
//The useState Hook allows you to add state to functional components:

//import React, { useState } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Hello");

  // other code...

  return (
    <div>
      <p>{count}</p>
      <p>{text}</p>
    </div>
  );
}
{
  /* 

The useState Hook provides those two things:

1. A state variable to retain the data between renders.
2. A state setter function to update the variable and trigger React to render the component again.

when to use state
Use a state variable when a component needs to “remember” some information between renders.

Adding a state variable 
To add a state variable, import useState from React at the top of the file:

State variables are declared by calling the useState Hook.

The useState Hook returns a pair of values: the current state and the function to update it.

import { useState } from 'react';

const [state, setState] = useState(0);
state is a state variable and setState is the setter function.

The [ and ] syntax here is called array destructuring and it lets you read values from an array.
 The array returned by useState always has exactly two items.

 Note:
 Hooks—functions starting with use—can only be called at the top level of your components or your own Hooks. 
 You can’t call Hooks inside conditions, loops, or other nested functions.
 
 Anatomy of useState 
When you call useState, you are telling React that you want this component to remember something:

State is isolated and private 
State is local to a component instance on the screen. In other words, if you render the same component twice, 
each copy will have completely isolated state! Changing one of them will not affect the other.
*/
}

//DAY 10

//I built a travel list app

//DAY 11

//TOPIC COVERED: STATE MANAGEMENT(part one)
//THINKING IN REACT: STATE MANAGEMENT

/* 
THINKING IN REACT

� “React Mindset”
� Thinking about components,
state, data flow, effects, etc.
� Thinking in state transitions, not
element mutations

“THINKING IN REACT” AS A PROCESS

Break the desired UI into components and
establish the component tree
1
THE “THINKING IN REACT” PROCESS:
2 Build a static version in React (without state)
� When to use state
� Types of state: local vs. global
� Where to place each piece of state
3 Think about state:
4 Establish data flow:
� One-way data flow
� Child-to-parent communication
� Accessing global state


WHEN YOU KNOW HOW TO “THINK IN
REACT”, YOU WILL BE ABLE TO ANSWER:

� How to break up a UI design into components?
� How to make some components reusable?
� How to assemble UI from reusable components?
� What pieces of state do I need for interactivity?
� Where to place state? (What component should
"own" each piece of state?)
� What types of state can or should I use?
� How to make data flow through app?

WHAT IS STATE MANAGEMENT?
State management: Deciding when to create pieces of
state, what types of state are necessary, where to place
each piece of state, and how data flows through the app

TYPES OF STATE: LOCAL VS. GLOBAL STATE

LOCAL STATE GLOBAL STATE

� State needed only by one or few components
� State that is defined in a component and only
that component and child components have
access to it (by passing via props)
☝ We should always start with local state


GLOBAL STATE

� State needed only by one or few components
� State that is defined in a component and only
that component and child components have
access to it (by passing via props)

� State that many components might need
� Shared state that is accessible to every
component in the entire application
In practice, we can manage global state using content API or external global state
management library like Redux.


SHARING STATE WITH SIBLING COMPONENT: Sharing state between sibling components in React involves lifting the state up to a common ancestor.
 This common ancestor will manage the state and pass it down to the sibling components as props.

 Child-to-parent communication (inverse data
flow): Child-to-parent communication in React involves passing data or triggering actions from a child component to its parent. 
This is typically achieved by passing a function from the parent component to the child component as a prop.
The child component can then call this function, and the parent component can use the data or perform actions based on the information passed.
*/

//DAY 12

{
  /* 
Derived state: state that is computed from an existing piece of state or from props.

*/
}

//DAY 13
//TOPICS COVERED: CHILDREN PROPS
//In React, "children" is a special prop that allows developers to pass components
//or elements as data to other components.
// This enables the creation of reusable and flexible components that can wrap or nest other components.

{
  /*
Understanding "Children" Props
Basic Concept:

In React, any content placed between the opening and closing tags of a component is 
passed to that component as props.children.
This is a powerful feature because it allows components to be composed together in
 a flexible and hierarchical manner.

 How It Works:

When you create a component, you can access props.children to render whatever is nested inside that component.
props.children can be any valid React node: strings, numbers, elements, arrays, or fragments.
*/
}

//Example

// Define a Wrapper component
const Wrapper = ({ children }) => {
  return <div className="wrapper">{children}</div>;
};

// Use the Wrapper component
const App = () => {
  return (
    <Wrapper>
      <h1>Hello, World!</h1>
      <p>This is a paragraph inside the wrapper.</p>
    </Wrapper>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
//Prop Types and Children
//To ensure that children props are used correctly, you can define prop types using the prop-types library.
//This helps in validating the types of props.children that a component should receive.
{
  /*
Benefits of Using "Children" Props
Reusability: By using children, components become more reusable and flexible, allowing you to nest different elements and components inside a wrapper.
Composition: It encourages composition over inheritance, which is a core philosophy in React.
Flexibility: You can pass any renderable content as children, making your components highly versatile.
*/
}

//DAY 14
//TOPICS COVERED: Component Life Cycles

{
  /* 
What is component life cycle
Component life cycle is the process of mounting,
 updating and destroying a component in a React application.
 In React each component has three main phases:

Mounting
Updating
Unmounting

1. Mounting: The Robot is Built
This is the stage when the component is first created and added to the webpage.

componentDidMount: 
It’s when the component has been put on the webpage, and it’s ready to go.

Updating: The Robot Moves and Reacts
This is when the component updates because of changes in data or user interactions. 
Imagine your robot moving around and reacting to your commands.

componentDidUpdate: This is like your robot responding to a new command,
 like moving its arm because you pressed a button.

 3. Unmounting: The Robot is Turned Off
This is the stage when the component is removed from the webpage.

Modern React: Using Hooks
In modern React, we often use something called hooks to manage these stages more easily. 
It's like having a remote control for your robot that makes things simpler.

useEffect: This is like a super versatile button on your remote control.
 You can use it to run code when the component is added, updated, or removed.
*/
}

//DAY 15
//TOPICS COVERED: Third Party Packages

{
  /* 
Third-party packages are additional pieces of code or libraries that you can 
integrate into your React projects to add functionality, improve performance, or simplify complex tasks.
These packages are created by the open-source community or companies and are available for anyone to use.
There are more than 1.4M JavaScript packages on npm registry.
 By now there is a package almost for every kind of problem.
 We do not have to create the wheel instead we have to know how to use the wheel.

 NPM or Yarn
You can use either npm or yarn to install packages.
If you want to use yarn you have install it separately. 
I would recommend you to stick in one of the package.
 Don't use both package management tools in one application at the same time.

 Why Use Third-Party Packages?
Save Time: Instead of writing complex functionality from scratch, you can use pre-built solutions.
Community Support: Popular packages often have large communities, extensive documentation, and ongoing maintenance.
Focus on Core Features: Allows you to focus on building unique features rather than reinventing the wheel.

Common Use Cases

1. Styling

A. node-sass
Sass is a CSS preprocess which allows to write CSS function, nesting and many more.
 Let's install node-sass to make use of the power of Sass.

 Why Use node-sass?
Enhanced Styling: SCSS provides advanced features like variables, nested rules, and mixins.
Better Organization: Keep your styles modular and easier to manage.
Improved Productivity: Write more maintainable and scalable CSS.

How to Install node-sass
1. Install node-sass via npm:
npm install node-sass --save-dev

2. or with Yarn:
yarn add node-sass --dev


3. Create SCSS Files:

Create your SCSS files with the .scss extension.
Example: src/styles/App.scss
Import SCSS in Your React Components:

4 . Import the SCSS file in your React component.

5. Configure Build Tools (Optional):

If you're using Create React App, it already supports node-sass out of the box.
If you're using a custom setup, ensure your build tools (like Webpack) are configured to handle SCSS files.

$primary-color: #3498db;

.App {
  text-align: center;

  h1 {
    color: $primary-color;
    font-size: 2rem;
  }
}

Additional Tips
Variables: Store reusable values like colors and font sizes.
Nesting: Organize your styles hierarchically.
Mixins: Reuse groups of styles across your project.
By integrating node-sass into your React project, you can harness the power 
of SCSS to create clean, maintainable, and scalable styles.

2. CSS Modules in React
CSS Modules allow you to write CSS that's scoped locally by default, 
which helps avoid global scope conflicts. When you use CSS Modules, 
each class name and animation is scoped locally to the component, 
ensuring styles don't leak out and affect other parts of your application.

Benefits of CSS Modules
Scoped Styles: Each component’s styles are scoped to that component by default.
No Naming Collisions: Avoid conflicts with class names from other components.
Maintainability: Keep styles organized and modular.

How to Use CSS Modules in a React Project
Naming Your CSS File:

Use the .module.css or .module.scss extension for your CSS/SCSS files to enable CSS Modules.
Creating a CSS Module:

Create a CSS file named App.module.css:

 src/styles/App.module.css 
.container {
  text-align: center;
  background-color: #f5f5f5;
  padding: 20px;
}

.title {
  color: #3498db;
  font-size: 2rem;
}

3. Importing and Using the CSS Module in a React Component:

// src/App.jsx
import React from 'react';
import styles from './styles/App.module.css'; // Importing CSS module

function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hello, world!</h1>
    </div>
  );
}

export default App;

c. UI Components:

Package: @mui/material (Material-UI)

Purpose: Provide a set of pre-styled components following Material Design guidelines.

Example:

import React from 'react';
import { Button } from '@mui/material';

function MyButton() {
  return <Button variant="contained">Click Me</Button>;
}

export default MyButton;



2. Data Fetching:

Package: axios

Purpose: Make HTTP requests to fetch or send data to a server.

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DataFetchingComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://api.example.com/data')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  );
}

export default DataFetchingComponent;


3. Routing:

Package: react-router-dom

Purpose: Manage navigation and routing in your React application.

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;

4. State Management:

Package: redux or @reduxjs/toolkit

Purpose: Manage the state of your application in a predictable way.

Example:

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import App from './App';

const store = createStore(rootReducer);

function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default Root;

5. Form Handling:

Package: formik

Purpose: Simplify form creation and validation.

Example:

import React from 'react';
import { useFormik } from 'formik';

function SignupForm() {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SignupForm;


How to Install:
npm: npm install package-name
Yarn: yarn add package-name
Find & Evaluate:
Search on npmjs.com or GitHub.
Check popularity, reviews, and maintenance status.
Read the documentation for best practices.

*/
}

//DAY 16
//TOPICS COVERED: Higher Order Component
{
  /* 
  A Higher Order Component is a function that takes a component as an argument and 
  returns a new component with some additional functionality or props.

  Key features:

HOCs don't modify the input component
They compose the original component by wrapping it in a container component
HOCs are pure functions with no side effects


Common use cases:

Code reuse, logic abstraction
State abstraction and manipulation
Props manipulation
Render hijacking

Alternatives:
With the introduction of Hooks in React, some use cases for HOCs can be replaced with custom hooks,
 which offer a more flexible way to reuse stateful logic.

HOCs are powerful for component logic reuse, but they should be used 
judiciously to avoid unnecessary complexity.

Best Practices
Do Not Mutate Original Component: HOCs should not modify the original component.
 They should wrap and enhance it.
Pass Props Through: Ensure that HOCs pass all props through to the wrapped component,
 unless you intentionally want to omit or alter some props.
Static Methods: If the original component has static methods, 
they won't be accessible on the wrapped component by default. You can copy them manually if needed.
Display Name: Setting a meaningful display name on the HOC helps with debugging
  */
}

const withExtraProps = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return <WrappedComponent extraProp="Hello" {...this.props} />;
    }
  };
};

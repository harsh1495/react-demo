import React from "react";
import { render } from "react-dom";
import { Link, Router } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";

// created a component called App - returns a result of React.createElement
// React components are something that returns a markup
const App = () => {
  return (
    <div>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  );
};

// anything in the div get overwritten by this render
// here we are calling a composite component that we created above
// render(React.createElement(App), document.getElementById("root"));
render(<App />, document.getElementById("root"));

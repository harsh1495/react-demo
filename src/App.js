import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

// created a component called App - returns a result of React.createElement
// React components are something that returns a markup
const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

// anything in the div get overwritten by this render
// here we are calling a composite component that we created above
// render(React.createElement(App), document.getElementById("root"));
render(<App />, document.getElementById("root"));

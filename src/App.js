import React from "react";
import { render } from "react-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";

// created a component called App - returns a result of React.createElement
// React components are something that returns a markup
const App = () => {
  //   return React.createElement(
  //     "div",
  //     {},
  //     React.createElement("h1", {}, "Adopt Me!"),
  //     React.createElement(Pet, {
  //       name: "Luna",
  //       animal: "Dog",
  //       breed: "German Shepherd",
  //     }),
  //     React.createElement(Pet, {
  //       name: "Zeus",
  //       animal: "Dog",
  //       breed: "Labrador",
  //     }),
  //     React.createElement(Pet, {
  //       name: "Doinks",
  //       animal: "Cat",
  //       breed: "Mixed",
  //     })
  //   );

  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
      {/* <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Zeus" animal="Dog" breed="GS" />
      <Pet name="Doinks" animal="Cat" breed="Mixed" /> */}
    </div>
  );
};

// anything in the div get overwritten by this render
// here we are calling a composite component that we created above
// render(React.createElement(App), document.getElementById("root"));
render(<App />, document.getElementById("root"));

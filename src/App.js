const Pet = ({name, animal, breed}) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed)
    ]);
};



// created a component called App - returns a result of React.createElement
// React components are something that returns a markup
const App = () => {
    return React.createElement(
        "div",
        {},
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, {
            name: "Luna",
            animal: "Dog",
            breed: "German Shepherd"
        }),
        React.createElement(Pet, {
            name: "Zeus",
            animal: "Dog",
            breed: "Labrador"
        }),
        React.createElement(Pet, {
            name: "Doinks",
            animal: "Cat",
            breed: "Mixed"
        })
    );
};

// anything in the div get overwritten by this render
// here we are calling a composite component that we created above
ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
);
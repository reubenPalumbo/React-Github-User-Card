import React from "react";
import "./App.css";
import Card from "./Components/Card";

class App extends React.Component {
  state = {
    profile: {},
    friends: [],
  };

  componentDidMount() {
    fetch("https://api.github.com/users/reubenpalumbo")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({ profile: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Card profile={this.state.profile} />
        </header>
      </div>
    );
  }
}

export default App;

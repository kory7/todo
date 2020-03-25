import React from "react";
import InputBar from "./InputBar";
import List from "./List";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: []
    };
  }

  getActivity = act => {
    this.setState({ activities: [...this.state.activities, act] });
  };

  render() {
    return (
      <div className="App">
        <InputBar getAct={this.getActivity} />
        <List activities={this.state.activities} />
      </div>
    );
  }
}

export default App;

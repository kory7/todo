import React from "react";

class InputBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: ""
    };
  }

  onChangeAdd = e => {
    this.setState({ activity: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.getAct(this.state.activity);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label>Activities todo</label>
          <input
            type="text"
            value={this.state.activity}
            onChange={this.onChangeAdd}
          />
        </form>
      </div>
    );
  }
}

export default InputBar;

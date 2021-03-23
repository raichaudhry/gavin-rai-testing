import React from "react";

class Btn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <button
        onClick={() => this.setState({ counter: this.state.counter + 1 })}
      >
        {this.state.counter}
      </button>
    );
  }
}

export default Btn;

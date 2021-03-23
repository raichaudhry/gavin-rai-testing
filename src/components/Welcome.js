import React from "react";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: Date.now() / 1000 / 60 / 60 / 24 / 365.25 };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick());
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    // THIS IS NOT VALID
    // this.date = new Date()
    this.setState({
      date: Date.now() / 1000 / 60 / 60 / 24 / 365.25,
    });
  }

  render() {
    return (
      <>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date}</h2>
      </>
    );
  }
}

export default Welcome;

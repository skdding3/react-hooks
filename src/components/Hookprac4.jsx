import React from "react";

export default class Hookprac4 extends React.Component {
  state = { count: 0 };

  render() {
    const { count } = this.state;

    return (
      <div>
        <p>클릭 수 {count} 번</p>
        <button onClick={this.click}>눌러 봐</button>
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount", this.state.count);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate", this.state.count);
  }

  click = () => {
    this.setState({ count: this.state.count + 1 });
  };
}

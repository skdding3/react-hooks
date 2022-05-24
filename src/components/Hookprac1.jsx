import React from "react";

export default class Hookprac1 extends React.Component {
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

  click = () => {
    this.setState({ count: this.state.count + 1 });
  };
}

import React from 'react';
import './App.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: props.inicialCounter,
    };
    this.handleAddition = this.handleAddition.bind(this);
    this.handleSubtraction = this.handleSubtraction.bind(this);
  }
  handleAddition() {
    this.setState({ counter: this.state.counter + 1 });
  }
  handleSubtraction() {
    this.setState({ counter: this.state.counter - 1 });
  }

  render() {
    const { color } = this.props;
    const { counter } = this.state;
    const textStyle = { color };
    return (
      <div className="container">
        <button onClick={this.handleSubtraction}>-</button>
        <h2 style={textStyle}>Counter: {counter}</h2>
        <button onClick={this.handleAddition}>+</button>
      </div>
    );
  }
}

export default Counter;

import React, { Component } from 'react';

class QuizQuestionButton extends Component {
  handleClick = () => {
    this.props.clickHandler(this.props.button_text);
  }

  render() {
    return (
      <li>
        <button className="btn-primary" onClick={this.handleClick}>{this.props.button_text}</button>
      </li>
    );
  }
}

export default QuizQuestionButton;

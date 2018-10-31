import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incorrectAnswer: false,
      correctAnswer: false,
      correctText: ''
    };
  }

  handleClick = (buttonText) => {
    if (buttonText === this.props.quiz_question.answer) {
      setTimeout(() => {
        this.props.showNextQuestionHandler();
      }, 600);
      this.setState({
        incorrectAnswer: false,
        correctAnswer: true,
        correctText: 'Yay, you got the previous question right, you can get this too!'
      });
    } else {
      this.setState({
        incorrectAnswer: true,
        correctAnswer: false,
        correctText: ''
      });
    }
  }

  render() {
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map((answerOption, index) => <QuizQuestionButton clickHandler={this.handleClick} key={index} button_text={answerOption} />)}
          </ul>
        </section>
        {
          this.state.incorrectAnswer ? <p className="error">Sorry, that's not right</p>
            : null
        }
        {
          this.state.correctAnswer ? <p className="success">{this.state.correctText}</p> : null
        }
      </main>
    );
  }
}

export default QuizQuestion;

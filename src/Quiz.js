import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion';
import QuizEnd from './QuizEnd';

const quizData = require('./quiz_data.json');

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz_position: 1,
    };
  }

  showNextQuestion = () => {
    this.setState(state => ({ quiz_position: state.quiz_position + 1 }));
  }

  handleResetClick = () => {
    this.setState({
      quiz_position: 1
    });
  }

  render() {
    const isQuizEnd = this.state.quiz_position - 1 === quizData.quiz_questions.length;
    return (
      <div id="intro">
        <div className="row container">
          <div className="col-md-4 ">
            <div className="card">
              <div className="view overlay zoom">
                <img className="card-img-top img-fluid" src="https://img-s3.onedio.com/id-5b7e878ca7e758d920a6968c/rev-0/raw/s-2a3e45ed38fcf917ad5d47aded5a2b4af37efa49.jpg" alt="Card imagecap" />
              </div>
              <div className="card-body">

                {
                  isQuizEnd ? <QuizEnd resetClickHandler={this.handleResetClick} />
                    : <QuizQuestion showNextQuestionHandler={this.showNextQuestion} quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} />
                }

              </div>

            </div>
          </div>
        </div>


      </div>

    );
  }
}

export default Quiz;

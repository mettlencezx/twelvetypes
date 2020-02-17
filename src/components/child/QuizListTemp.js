import React from "react"
import OptionList from "./OptionListTemp"
import { connect } from "react-redux"

class QuizList extends React.Component {
  render() {
    const questions = this.props.questions.map(question => {
      return (
        <div className="question" key={question.id}>
          <div className="statement">{question.content}</div>
          <div className="decision">
            <div className="caption disagree">Not At All</div>
            <OptionList
              questionId={question.id}
              onChangeAnswer={this.props.onChangeAnswer}
              answers={this.props.answers}
            />
            <div className="caption agree">Very</div>
          </div>
        </div>
      )
    })

    return (
      <div className="questions-area">
        <div className="test-questions comp">{questions}</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
    questions: state.quiz.questions,
    options: state.quiz.options
  }
}

export default connect(mapStateToProps)(QuizList)

import React from "react"
import twelveType from "../../api/twelveType"
import QuizList from "../child/QuizListTemp"
import { connect } from "react-redux"
import { addQuestions, addAnswers, updateUser } from "../../actions"

class QuizPageTemp extends React.Component {
  state = { answers: [] }

  componentDidMount = async () => {
    window.scrollTo(0, 0)
    const response = await twelveType.get("/questions", {
      params: { category: 1 }
    })

    this.props.addQuestions(response.data.questions, response.data.options, 1)
    //this.props.updateUser(null, null, this.props.token)
    //this.setState({ questions: response.data.questions, options: response.data.options });
  }

  onInputChange = (value, label) => {
    this.setState({
      answers: {
        ...this.state.answers,
        [label]: parseInt(value)
      }
    })
  }

  onNextButton = async term => {
    window.scrollTo(0, 0)
    const response = await twelveType.get("/questions", {
      params: { category: this.props.category + 1 }
    })
    this.props.addQuestions(
      response.data.questions,
      response.data.options,
      this.props.category + 1
    )
    // this.setState({
    //   questions: response.data.questions,
    //   options: response.data.options,
    //   questionCategory: (response.data.questions[0].category + 1)
    // });
  }

  onSubmit = () => {
    this.props.addAnswers(Object.values(this.state.answers))
    this.props.history.push("/dashboard")
  }

  render() {
    return (
      <div className="ui center aligned vertical stripe quote segment">
        <QuizList
          onChangeAnswer={this.onInputChange}
          answers={this.state.answers}
        />
        <div className="row">
          <div className="five wide column">
            {this.props.category < 3 ? (
              <button
                className="ui huge button"
                onClick={() => this.onNextButton()}
              >
                NEXT <i className="caret square right icon"></i>
              </button>
            ) : (
              <button
                className="ui huge button"
                onClick={() => this.onSubmit()}
              >
                Result <i className="caret square right icon"></i>
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
    username: state.auth.username,
    archetype: state.auth.archetype,
    token: state.auth.token,
    category: state.quiz.category
  }
}

export default connect(
  mapStateToProps,
  { addQuestions, addAnswers, updateUser }
)(QuizPageTemp)

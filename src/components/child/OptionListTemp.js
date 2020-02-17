import React from "react"
import { connect } from "react-redux"

class OptionList extends React.Component {
  render() {
    const options = this.props.options.map(option => {
      return (
        <label className="containerq" key={option.id}>
          <input
            type="radio"
            checked={
              this.props.answers[this.props.questionId] ===
              parseInt(option.value)
            }
            onChange={evt =>
              this.props.onChangeAnswer(option.value, this.props.questionId)
            }
          />
          <span className="checkmark"></span>
        </label>
      )
    })

    return <div className="options">{options}</div>
  }
}

const mapStateToProps = state => {
  return {
    options: state.quiz.options
  }
}

export default connect(mapStateToProps)(OptionList)

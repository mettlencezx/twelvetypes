import React from "react"
import { Placeholder } from "semantic-ui-react"

const PlaceholderQuiz = props => {
  return (
    <div className="question">
      <div className="statement">
        <Placeholder fluid>
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder>
      </div>
      <div className="decision">
        <div className="options">
          <div className={props.mobile ? "row" : "ui grid"}>
            <div className="eight wide column">
              <Placeholder>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder>
              <Placeholder>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder>
              <Placeholder>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder>
              <Placeholder>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder>
            </div>
            <div className="eight wide column">
              <Placeholder>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder>
              <Placeholder>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder>
              <Placeholder>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder>
              <Placeholder>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceholderQuiz

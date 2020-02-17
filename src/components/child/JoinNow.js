import React from "react"
import { Link } from "react-router-dom"
import Divider from "./Divider"

const JoinNow = () => {
  return (
    <div className="ui vertical stripe quote segment">
      <Divider title="JOIN NOW" />
      <div className="ui center aligned stackable grid container">
        <div className="row">
          <div className="six wide column">
            <p>
              Yes that's right, you thought it was the stuff of dreams, but even
              bananas can be bioengineered.
            </p>
          </div>
          <div className="four wide column">
            <Link className="ui huge button" to="/register">
              REGISTER
            </Link>
          </div>
          <div className="six wide column">
            <p>
              Yes that's right, you thought it was the stuff of dreams, but even
              bananas can be bioengineered.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinNow

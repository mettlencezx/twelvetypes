import React from "react"
import Login from "../child/Login"
// import JoinNow from '../child/JoinNow';

class LoginPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="ui container">
        <Login {...this.props} />
        {/* <JoinNow /> */}
      </div>
    )
  }
}

export default LoginPage

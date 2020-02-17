import React from "react"
import ImageSlider from "../child/ImageSlider"
import HeadLine from "../child/HeadLine"
import About from "../child/About"
import Login from "../child/Login"
// import JoinNow from '../child/JoinNow';
import Contact from "../child/Contact"
import { connect } from "react-redux"

class HomePage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        <ImageSlider />
        {this.props.isSignedIn ? "" : <HeadLine />}
        <div className="ui container">
          <About />
          {this.props.isSignedIn ? "" : <Login {...this.props} />}
          {/* { this.props.isSignedIn ? '' :
            <JoinNow />
          } */}
          <Contact />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps)(HomePage)

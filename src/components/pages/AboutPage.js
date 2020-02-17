import React from "react"
import About from "../child/About"

class AboutPage extends React.Component {
  componentDidMount = () => {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="ui container">
        <About detail="yes" />
      </div>
    )
  }
}

export default AboutPage

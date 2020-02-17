import React from "react"
import Contact from "../child/Contact"

class ContactPage extends React.Component {
  componentDidMount = () => {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="ui container">
        <Contact />
      </div>
    )
  }
}

export default ContactPage

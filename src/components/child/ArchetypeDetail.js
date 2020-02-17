import React from "react"
import HeadLine from "./HeadLine"
import Divider from "./Divider"
import twelveType from "../../api/twelveType"
import PlaceholderArchetype from "./placeholder/PlaceholderArchetype"

class ArchetypeDetail extends React.Component {
  state = {
    name: "",
    content_1: "",
    content_2: "",
    imgMale: "",
    imgFemale: "",
    fetch: true
  }
  componentDidMount = async () => {
    window.scrollTo(0, 0)
    try {
      const response = await twelveType.get("/getOneArchetype", {
        params: {
          archetype: this.props.archetype
        }
      })

      this.setState(
        {
          name: response.data.name,
          content_1: response.data.content[0],
          content_2: response.data.content[1],
          imgMale: response.data.image.male,
          imgFemale: response.data.image.female
        },
        () => this.setState({ fetch: false })
      )
    } catch (er) {
      console.log(er)
    }
  }

  render() {
    return (
      <div>
        <Divider title="ARCHETYPE" />
        <div className="ui middle aligned stackable grid container">
          <div className="ui buttons">
            <button
              className="ui labeled icon button"
              onClick={this.props.onButtonBackClick}
            >
              <i className="left chevron icon"></i>
              Back
            </button>
          </div>

          {this.state.fetch ? (
            <PlaceholderArchetype />
          ) : (
            <div className="row">
              <div className="six wide column">
                <img
                  src={this.state.imgMale}
                  className="ui large bordered rounded image"
                  alt="archetype"
                />
              </div>

              <div className="eight wide right floated column">
                <h3 className="ui header">
                  The {this.state.name} Introduction
                </h3>
                <p>{this.state.content_1}</p>
              </div>

              <div className="sixteen wide column">
                <h3 className="ui header">Content 1</h3>
                <p>{this.state.content_2}</p>
              </div>

              <div className="eight wide column">
                <h3 className="ui header">Content 2</h3>
                <p>
                  We can give your company superpowers to do things that they
                  never thought possible. Let us delight your customers and
                  empower your needs...through pure data analytics. Yes that's
                  right, you thought it was the stuff of dreams, but even
                  bananas can be bioengineered. Yes that's right, you thought it
                  was the stuff of dreams, but even bananas can be
                  bioengineered. Yes that's right, you thought it was the stuff
                  of dreams, but even bananas can be bioengineered. Yes that's
                  right, you thought it was the stuff of dreams, but even
                  bananas can be bioengineered.{" "}
                </p>
              </div>
              <div className="six wide right floated column">
                <img
                  src={this.state.imgFemale}
                  className="ui large bordered rounded image"
                  alt="archetype"
                />
              </div>
            </div>
          )}
        </div>

        <div className="ui middle aligned stackable grid container">
          <div className="row">
            <div className="sixteen wide column">
              <h3 className="ui header">Conclusion</h3>
              <p>
                We can give your company superpowers to do things that they
                never thought possible. Let us delight your customers and
                empower your needs...through pure data analytics. Yes that's
                right, you thought it was the stuff of dreams, but even bananas
                can be bioengineered. Yes that's right, you thought it was the
                stuff of dreams, but even bananas can be bioengineered. Yes
                that's right, you thought it was the stuff of dreams, but even
                bananas can be bioengineered.
              </p>
            </div>
          </div>
        </div>
        <HeadLine />
      </div>
    )
  }
}

export default ArchetypeDetail

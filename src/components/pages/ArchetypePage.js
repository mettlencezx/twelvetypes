import React from "react"
import ArchetypeList from "../child/ArchetypeList"
import ArchetypeDetail from "../child/ArchetypeDetail"
import twelveType from "../../api/twelveType"

class ArchetypePage extends React.Component {
  state = { detail: false, archetypeArray: [] }

  componentDidMount = async () => {
    window.scrollTo(0, 0)
    try {
      const response = await twelveType.get("/getAllArchetype", {})

      this.setState({
        archetypeArray: response.data
      })
    } catch (er) {
      console.log(er)
    }
  }

  onImageClick = val => {
    this.setState({
      detail: true,
      archetype: val
    })
  }

  onButtonBackClick = () => {
    this.setState({
      detail: false
    })
  }
  render() {
    return (
      <div className="ui vertical stripe quote segment">
        {this.state.detail ? (
          <ArchetypeDetail
            onButtonBackClick={() => this.onButtonBackClick()}
            archetype={this.state.archetype}
          />
        ) : (
          <ArchetypeList
            onImageClick={this.onImageClick}
            archetypes={this.state.archetypeArray}
          />
        )}
      </div>
    )
  }
}

export default ArchetypePage

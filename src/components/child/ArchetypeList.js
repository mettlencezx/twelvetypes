import React from "react"
import Divider from "./Divider"
import ArchetypeCard from "./ArchetypeCard"

class ArchetypeList extends React.Component {
  render() {
    return (
      <div>
        <Divider
          title="ARCHETYPE"
          text="Discovering what your Archetype is a good way of finding out your strengths and vulnerabilities as a person. It is also a good way of finding out where you can improve on you weaknesses leading you to optimize your abilities with dealing with every aspect of your life on a daily basis. Though it is true that everyone of us has a little bit of each characteristic traits of every Archetype, there are a few which dominates you as a representation of your behaviour and state of mind and only one that consolidates the entirety of your true inner being."
        />
        <div className="ui middle aligned stackable grid container">
          <div className="row">
            {this.props.archetypes.map(item => (
              <div
                className={`eight wide column ${item.name.toLowerCase()}-card`}
              >
                <ArchetypeCard
                  archetype={`THE ${item.name.toUpperCase()}`}
                  description={item.description}
                  maleImage={item.image.male}
                  femaleImage={item.image.female}
                  onImageClick={() =>
                    this.props.onImageClick(item.name.toLowerCase())
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default ArchetypeList

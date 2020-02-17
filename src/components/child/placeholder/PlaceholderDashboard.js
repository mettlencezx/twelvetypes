import React from "react"
import { Placeholder } from "semantic-ui-react"

const PlaceholderDashboard = () => {
  return (
    <div className="row">
      <div className="seven wide column">
        <Placeholder>
          <Placeholder.Image square />
        </Placeholder>
      </div>
      <div className="nine wide column">
        <Placeholder>
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder>
        <Placeholder>
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder>
        <Placeholder>
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder>
        <Placeholder>
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder>
      </div>
    </div>
  )
}
export default PlaceholderDashboard

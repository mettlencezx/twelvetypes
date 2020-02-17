import React from "react"
import faker from "faker"

const UserCard = props => {
  return (
    <div className="seven wide column">
      <div className="ui card">
        <div className="content">
          <div className="center aligned header">{props.name}</div>
          <div className="center aligned description">
            <p>{props.archetype}</p>
          </div>
        </div>
        <div className="extra content">
          <div className="center aligned author">
            <img
              className="ui avatar image"
              src={faker.image.avatar()}
              alt="user avatar"
            />
          </div>
        </div>
        <button
          className="ui green button"
          onClick={() => props.onSubmit("logout")}
        >
          Sign Out
        </button>
      </div>
    </div>
  )
}

export default UserCard

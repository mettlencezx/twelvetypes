import React, { useState } from "react"
import { Link } from "react-router-dom"
import { stack as Menu } from "react-burger-menu"

export default props => {
  const [open, setOpen] = useState(false) // set state on function base

  return (
    // Pass on our props
    <div className="sidebar-menu">
      <Menu
        {...props}
        isOpen={open}
        onStateChange={({ isOpen }) => setOpen(isOpen)}
      >
        <Link className="menu-item" to="/" onClick={() => setOpen(false)}>
          Home
        </Link>

        <Link className="menu-item" to="/about" onClick={() => setOpen(false)}>
          About
        </Link>

        <Link
          className="menu-item"
          to="/archetype"
          onClick={() => setOpen(false)}
        >
          Archetype
        </Link>

        <Link
          className="menu-item"
          to="/contact"
          onClick={() => setOpen(false)}
        >
          Contact
        </Link>

        <Link className="menu-item" to="/quiz" onClick={() => setOpen(false)}>
          Take Quiz
        </Link>
      </Menu>
    </div>
  )
}

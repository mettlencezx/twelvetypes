import React from "react"
import logo from "../../assets/images/logo/logo.png"

const Footer = () => {
  return (
    <div className="ui vertical stripe segment">
      <div className="ui footer center aligned stackable grid container">
        <div className="ui text center container">
          <img alt="TwelveTypes Logo" src={logo} />
          <p>
            Lorem ipsum color nitro ipsum color netro ipsum color netro ipsum
            color netro ipsum color netro
          </p>
        </div>
        <div className="ui celled horizontal list">
          <div className="item">About Us</div>
          <div className="item">About Us</div>
          <div className="item">Contact</div>
          <div className="item">Support</div>
          <div className="item">About Us</div>
          <div className="item">About Us</div>
          <div className="item">About Us</div>
          <div className="item">
            <button className="ui huge button social">
              <i className="facebook f icon"></i>
            </button>
            <button className="ui huge button social">
              <i className="instagram icon"></i>
            </button>
          </div>
        </div>
        <div className="ui text center container copyright">
          Copyright &copy; 2019 TwelveTypes.com
        </div>
      </div>
    </div>
  )
}

export default Footer

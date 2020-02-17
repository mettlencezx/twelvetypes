import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../../assets/style/HomePage.css";
import logo from "../../assets/images/logo/logo-white.png";
import Sidebar from "../child/SidebarMenu";
import twelveType from "../../api/twelveType";
import { signIn } from "../../actions";

class Header extends React.Component {
  componentDidMount = async () => {
    if (localStorage.getItem("authToken") !== null) {
      try {
        const response = await twelveType.get("/auth", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("authToken")
          }
        });
        var archetype = "";
        if (response.data.user.archetype !== "") {
          archetype = JSON.parse(response.data.user.archetype);
        }
        this.props.signIn(
          response.data.user.name,
          archetype,
          response.data.user.created_at,
          localStorage.getItem("authToken"),
          response.data.user.email
        );
      } catch {
        localStorage.removeItem("authToken");
      }
    }
  };

  render() {
    return (
      <div>
        <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} />

        <div className="ui inverted segment">
          <div className="ui inverted secondary menu">
            <Link to="/" className="toc item">
              <img src={logo} alt="sample alt" className="logo-img" />
            </Link>
            <div className="item">
              <Link to="/">
                <img src={logo} alt="sample alt" className="logo-img" />
              </Link>
            </div>
            <div className="right item">
              <Link className="item" to="/about">
                About
              </Link>
              <Link className="item" to="/archetype">
                Archetype
              </Link>
              <Link className="item" to="/contact">
                Contact
              </Link>
              {this.props.isSignedIn ? (
                ""
              ) : (
                <Link className="item" to="/login">
                  Login
                </Link>
              )}
              {this.props.isSignedIn ? (
                <Link className="item" to="/member">
                  Member Area
                </Link>
              ) : (
                ""
              )}
              {this.props.isSignedIn ? (
                <Link className="b-special ui huge button" to="/dashboard">
                  Hi, {this.props.username}
                </Link>
              ) : (
                <Link className="b-special ui huge button" to="/quiz">
                  TAKE THE QUIZ
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
    username: state.auth.username
  };
};
export default connect(mapStateToProps, { signIn })(Header);

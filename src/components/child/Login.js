import React from "react";
import Divider from "./Divider";
import { Link } from "react-router-dom";
import twelveType from "../../api/twelveType";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { signIn, signOut, resetAnswers } from "../../actions";

class Login extends React.Component {
  state = { email: "", password: "", inFetch: false, message: "" };

  onInputChange = (event, type) => {
    if (type === "email") {
      this.setState({
        email: event.target.value
      });
    } else {
      this.setState({
        password: event.target.value
      });
    }
  };

  onSubmit = async term => {
    this.setState({ inFetch: true });
    try {
      if (term === "login") {
        const response = await twelveType.post("/login", {
          email: this.state.email,
          password: this.state.password
        });
        var archetype = "";
        if (response.data.user.archetype !== "") {
          archetype = JSON.parse(response.data.user.archetype);
        }
        localStorage.setItem("authToken", response.data.token);
        this.props.signIn(
          response.data.user.name,
          archetype,
          response.data.user.created_at,
          response.data.token,
          response.data.user.email
        );
        this.setState(
          {
            message: "success"
          },
          () => setTimeout(() => this.props.history.push("/dashboard"), 2000)
        );
      } else {
        this.setState({
          inFetch: false
        });
        this.props.resetAnswers();
        this.props.signOut();
      }
    } catch (error) {
      this.setState({
        inFetch: false,
        message: "fail"
      });
      console.log(error);
    }
  };

  render() {
    return (
      <div className="ui vertical stripe quote segment">
        <Divider title="LOGIN" />
        <div className="ui center aligned stackable grid container">
          <div className="row">
            <div className="seven wide column">
              <h3 className="ui header">Take a free quiz first?</h3>
              <p>
                Find out which archetype you are and discover more surprising things that you never knew about yourself,
                take our free archetypal assessment quiz!
              </p>
              <Link className="ui huge button" to="/quiz">
                TAKE THE QUIZ <i className="caret square right icon"></i>
              </Link>
            </div>
            <LoginForm
              onInputChange={this.onInputChange}
              onSubmit={this.onSubmit}
              inFetch={this.state.inFetch}
              email={this.state.email}
              password={this.state.password}
              message={this.state.message}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
    username: state.auth.username,
    archetype: state.auth.archetype,
    email: state.auth.email
  };
};

export default connect(mapStateToProps, { signIn, signOut, resetAnswers })(Login);

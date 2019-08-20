import React from 'react';
import Divider from './Divider';
import twelveType from '../../api/twelveType';
import LoginForm from './LoginForm';
import UserCard from './UserCard';
import { connect } from 'react-redux';
import { signIn, signOut } from '../../actions';

class Login extends React.Component {
  state = { email: '', password: '', inFetch: false, token: '', userName: '', userArchetype: '' }

  onInputChange = (event, type) => {
    if(type === 'email') {
      this.setState({
        email: event.target.value
      })
    } else {
      this.setState({
        password: event.target.value
      })
    }
  }

  onSubmit = async (term) => {
    this.setState({ inFetch: true });
    try {
      if(term === 'login') {
        const response = await twelveType.post('/login', {
          email: this.state.email,
          password: this.state.password
        })
        this.props.signIn(response.data.user.name, response.data.user.archetype, response.data.token);
        this.props.history.push('/dashboard');
      } else {
        this.setState({
          inFetch: false
        })
        this.props.signOut();
      }
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className="ui vertical stripe quote segment">
        <Divider title='LOGIN' />
        <div className="ui center aligned stackable grid container">
          <div className="row">
            <div className="seven wide column">
              <h3 className="ui header">Take a free quiz first?</h3>
              <p>That is what they all say about us I shouldn't have gone with their competitor I shouldn't have gone with their competitor..</p>
              <a className="ui huge button" href="#sample">TAKE THE QUIZ <i className="caret square right icon"></i></a>
            </div>
            { this.props.isSignedIn ?
              <UserCard
                name={this.props.username}
                onSubmit={this.onSubmit}
                archetype={this.props.archetype}
              />
              :
              <LoginForm
                onInputChange={this.onInputChange}
                onSubmit={this.onSubmit}
                inFetch={this.state.inFetch}
                email={this.state.email}
                password={this.state.password}
              />
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    username: state.auth.username,
    archetype: state.auth.archetype,
  }
}

export default connect(
  mapStateToProps,
  { signIn, signOut}
)(Login);
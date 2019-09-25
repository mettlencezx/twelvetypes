import React from 'react';
import Divider from './Divider';
import { connect } from 'react-redux';
import { signIn } from '../../actions';
import twelveType from '../../api/twelveType';
import { Link } from 'react-router-dom';
import { Label, Form, Input, Button } from 'semantic-ui-react'

class Register extends React.Component {
  state = { email: '', name: '', password: '', inFetch: false, message: '' }

  componentDidMount() {
    window.scrollTo(0, 0)
    if(this.props.isSignedIn === true) {
      this.props.history.push('/dashboard')
    }
  }
  componentDidUpdate() {
    if(this.props.isSignedIn === true) {
      this.props.history.push('/dashboard')
    }
  }

  onInputChange = (event, type) => {
    if(type === 'email') {
      this.setState({
        email: event.target.value
      })
    } else if(type === 'name') {
      this.setState({
        name: event.target.value
      })
    } else if(type === 'password') {
      this.setState({
        password: event.target.value
      })
    } else if(type === 'cPassword') {
      this.setState({
        cPassword: event.target.value
      })
    }
  }

  onSubmit = async () => {
    this.setState({ inFetch: true });
    try {
      const response = await twelveType.post('/register', {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })

      var archetype = '';
      if(response.data.user.archetype !== '') {
        archetype = JSON.parse(response.data.user.archetype)
      }
      console.log(response)
      localStorage.setItem('authToken', response.data.token)
      this.props.signIn(response.data.user.name, archetype, response.data.user.created_at, response.data.token);
      this.props.history.push('/dashboard');
    } catch (error) {
      this.setState({
        inFetch: false,
        message: 'fail'
      })
    }
  }

  render() {
    return (
      <div className="ui container">
        <div className="ui vertical stripe quote segment">
          <Divider title="CONTINUE TO YOUR RESULTS" text="Almost done, save your profile and proceed to your results!" />
          <div className="ui center aligned stackable grid container">
            <div className="center aligned row">
              <div className="eight wide column background-orange form">
              <Form>
                <Form.Field>
                  <label>Name:</label>
                    <Input
                      icon="user"
                      iconPosition="left"
                      type="text"
                      placeholder="your name"
                      value={ this.state.name }
                      onChange={ (e) => this.onInputChange(e, 'name')}
                    />
                </Form.Field>
                <Form.Field>
                  <label>Email:</label>
                  <Input
                    icon="envelope"
                    iconPosition="left"
                    type="email"
                    placeholder="your@mail.com"
                    value={ this.state.email }
                    onChange={ (e) => this.onInputChange(e, 'email')}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <Input
                    icon="key"
                    iconPosition="left"
                    type="password"
                    placeholder="your password"
                    value={ this.state.password }
                    onChange={ (e) => this.onInputChange(e, 'password')}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Confirm Password</label>
                  { this.state.password === this.state.cPassword ? '' :
                    <Label basic color='red' pointing='below'>
                      Password is not match
                    </Label>}
                  <Input
                    icon="key"
                    iconPosition="left"
                    type="password"
                    placeholder="confirm your password"
                    value={ this.state.cPassword }
                    onChange={ (e) => this.onInputChange(e, 'cPassword')}
                  />
                </Form.Field>
                { this.state.message === 'fail' ? <div className="ui red message">The email has already been taken.</div> : ''}
                { this.state.message === 'success' ? <div className="ui green message">Successfully.</div> : ''}
                { this.state.inFetch ?
                    <Button className="ui huge loading button login"></Button>
                    :
                    <Button className="ui huge submit button login" onClick={() => this.onSubmit()}>Save and Continue To My Results</Button>
                  }
              </Form>
              </div>
              {/* <div className="eight wide column outlaw">
                <div className="contain">
                  <div className="background-toska">
                    <h3>www.twelvetypes.com</h3>
                    <p>contact@twelvetypes.com</p>
                  </div>
                  <button className="ui huge button social">
                    <i className="facebook f icon"></i>
                  </button>
                  <button className="ui huge button social">
                    <i className="instagram icon"></i>
                  </button>
                </div>
                </div> */ }
            </div>
            <Link className="ui huge button" to="/login">Already have an account?</Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  }
}

export default connect(
mapStateToProps, { signIn }
)(Register);

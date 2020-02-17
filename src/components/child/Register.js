import React from 'react';
import Divider from './Divider';
import { connect } from 'react-redux';
import { signIn } from '../../actions';
import twelveType from '../../api/twelveType';
import { Link } from 'react-router-dom';
import AddUserForm from '../Form/AddUserForm'

class Register extends React.Component {
  state = { inFetch: false, message: '', validate: false }

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

  handleSubmit = async (values) => {
    this.setState({ inFetch: true });
    try {
      const response = await twelveType.post('/register', {
        name: values.name,
        email: values.email,
        password: values.password
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
      console.log(error)
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
                <AddUserForm onSubmit={this.handleSubmit}/>
                { this.state.message === 'fail' ? <div className="ui red message">Email has already been taken.</div> : ''}
                { this.state.message === 'success' ? <div className="ui green message">Successfully.</div> : ''}
              </div>
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

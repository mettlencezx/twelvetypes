import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { renderField } from '../utils/FormUtils'
import { connect } from 'react-redux'

const validate = values => {
    const errors = {}
    if (!values.name) {
      errors.name = 'Name is required'
    }
    if (!values.email) {
      errors.email = 'Email is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    if (!values.password) {
        errors.password = 'Password is required'
    } else if (values.password.length < 2) {
      errors.password = 'Minimum be 6 characters or more'
    }
    if (!values.cPassword) {
      errors.cPassword = 'Please confirm your password'
    } else if (values.cPassword !== values.password) {
      errors.cPassword = 'Your password and confirmation password do not match'
    }
      return errors
    }

class AddUserForm extends React.Component {
  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <form onSubmit={ handleSubmit } className="ui form">
        <div className="field">
        <label>Name:</label>
          <Field name="name" component={renderField} label="Name" icon="user icon"/>
        </div>
        <div className="field">
          <label>Email:</label>
          <Field name="email" component={renderField} label="Email"  icon="envelope icon"/>
        </div>
        <div className="field">
          <label>Password:</label>
          <Field name="password" component={renderField} label="Password" type="password" icon="key icon"/>
        </div>
        <div className="field">
          <label>Confirm Password:</label>
          <Field name="cPassword" component={renderField} label="Confirm Password" type="password" icon="key icon"/>
        </div>
        <div className="field">
            <button type="submit" disabled={pristine || submitting} className="ui huge submit button login">Save and Continue To My Results</button>
        </div>
      </form>
    )
  }
}
const form = reduxForm({
  form: 'register',
  validate,
})(AddUserForm)

export default connect(null, null)(form)
import { combineReducers } from "redux"
import authReducer from "./authReducer"
import quizReducer from "./quizReducer"
import { reducer as reduxFormReducer } from "redux-form"

export default combineReducers({
  auth: authReducer,
  quiz: quizReducer,
  form: reduxFormReducer
})

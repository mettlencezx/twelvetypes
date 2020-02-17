const INITIAL_STATE = {
  questions: [],
  options: [],
  answers: [],
  eachAnswers: [],
  result: [],
  temp: [],
  newTemp: [],
  personalised: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_QUESTIONS":
      return {
        ...state,
        questions: action.questions,
        options: action.options,
        category: action.category
      }
    case "ADD_ANSWERS":
      return {
        ...state,
        answers: [...state.answers, ...action.answers]
      }
    case "RESET_ANSWERS":
      return {
        ...state,
        answers: []
      }
    case "ADD_QUIZ":
      return {
        ...state,
        questions: action.questions,
        option: action.options
      }
    case "STORE_RESULT":
      return {
        ...state,
        result: action.result
      }
    case "ADD_TEMP":
      return {
        ...state,
        temp: [...state.temp, action.temp]
      }
    case "RESET_TEMP":
      return {
        ...state,
        temp: []
      }
    case "CHANGE_TEMP":
      return {
        ...state,
        temp: state.temp.filter(temp => temp !== action.answer)
      }
    case "ADD_PERSONALISED":
      return {
        ...state,
        personalised: action.personalised
      }
    default:
      return state
  }
}

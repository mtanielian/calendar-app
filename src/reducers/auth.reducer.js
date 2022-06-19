import actionsTypes from "../actionsTypes/actionsTypes"

const INITIAL_STATE = {
  user: {},
  loading: false,
  logged: false,
  error: false
}

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsTypes.login:
      return { ...state, user: action.payload, loading: false, logged: true, error: false }
    case actionsTypes.loading:
      return { ...state, loading: action.payload }
    case actionsTypes.logout:
      return { ...state, user: {}, loading: false, logged: false, error: false }
    case actionsTypes.errorAuth:
      return { ...state, user: {}, loading: false, logged: false,  error: action.payload }
    default:
      return state;
  }
}


export default authReducer
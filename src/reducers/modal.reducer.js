import actionsTypes from "../actionsTypes/actionsTypes";

const INITIAL_STATE = {
  open: false
}

const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsTypes.openModal:
      return { open: action.payload }
    default:
      return state;
  }
}

export default modalReducer
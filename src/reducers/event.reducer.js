import actionsTypes from "../actionsTypes/actionsTypes"


const INITIAL_STATE = {
  events: [],
  event: {},
}


const eventReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsTypes.loadEvents:
      return { ...state, events: [...action.payload], loading: false }
    case actionsTypes.addEvent:
      return { ...state, events: [...state.events, action.payload], loading: false }
    case actionsTypes.updateEvent:
      return { ...state, events: state.events.map(event => event._id === action.payload._id ? action.payload : event), event: {}, loading: false }
    case actionsTypes.removeEvent:
      return { ...state, events: state.events.filter(event => event._id !== action.payload), loading: false, event: {} }
    case actionsTypes.selectEvent:
      return { ...state, event: action.payload, loading: false }
    case actionsTypes.loadingEvent:
      return { ...state, loading: action.payload }
    case actionsTypes.clearEvent:
      return { ...state, event: {}, loading: false }
    default:
      return state;
  }
}

export default eventReducer

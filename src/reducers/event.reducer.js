import actionsTypes from "../actionsTypes/actionsTypes"


const INITIAL_STATE = {
  events: [],
  event: {},
}


const eventReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsTypes.addEvent:
      return { ...state, events: [...state.events, action.payload], loading: false }
    case actionsTypes.updateEvent:
      return { ...state, events: state.events.map(event => event.id === action.payload.id ? action.payload : event), loading: false }
    case actionsTypes.removeEvent:
      return { ...state, events: state.events.filter(event => event.id !== action.payload), loading: false }
    case actionsTypes.selectEvent:
      return { ...state, event: action.payload, loading: false }
    case actionsTypes.loadingEvent:
      console.log('actionsTypes.loadingEvent: ', action.payload)
      return { ...state, loading: action.payload }
    default:
      return state;
  }
}

export default eventReducer

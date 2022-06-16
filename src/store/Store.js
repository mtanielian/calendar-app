import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import modalReducer from '../reducers/modal.reducer'
import eventReducer from '../reducers/event.reducer'


const reducers = combineReducers({
  modal: modalReducer,
  events: eventReducer  
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)
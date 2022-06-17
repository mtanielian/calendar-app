import actionsTypes from "../actionsTypes/actionsTypes";
import { doOpenModal } from "./modal.actions";


const doLoading = (loading) => ({
  type: actionsTypes.loadingEvent,
  payload: loading
})

const doAddEvent = (form) => ({
  type: actionsTypes.addEvent,
  payload: {
    ...form,  
    bgColor: '#fafafa',
    _id: new Date().getTime(),
    start: new Date(form.start),
    end: new Date(form.end)
  }
})

const doSelectEvent = (form) => ({
  type: actionsTypes.selectEvent,
  payload: form
})


const doUpdateEvent = (form) => ({
  type: actionsTypes.updateEvent,
  payload: { 
    ...form,
    start: new Date(form.start),
    end: new Date(form.end)
  }
})

export const doClearEvent = () => ({
  type: actionsTypes.clearEvent
})

const doRemoveEvent = (_id) => ({
  type: actionsTypes.removeEvent,
  payload: _id
})

export const addEvent = (form) => (dispatch, getState) => {
  dispatch(doLoading(true))
  dispatch(doAddEvent(form))
}


export const selectEvent = (form) => (dispatch, getState) => {
  dispatch(doSelectEvent(form))
  dispatch(doOpenModal(true))
}

export const updateEvent = (form) => (dispatch, getState) => {
  dispatch(doLoading(true))
  dispatch(doUpdateEvent(form))
}

export const removeEvent = (_id) => (dispatch, getState) => {
  dispatch(doLoading(true))
  dispatch(doRemoveEvent(_id))
}


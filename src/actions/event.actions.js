import actionsTypes from "../actionsTypes/actionsTypes"
import { doOpenModal } from "./modal.actions"
import { createEvent, deleteEvent, getEvents, updateEvent } from "../services/event.services"


const doLoading = (loading) => ({
  type: actionsTypes.loadingEvent,
  payload: loading
})


const doSelectEvent = (form) => ({
  type: actionsTypes.selectEvent,
  payload: form
})

export const doClearEvent = () => ({
  type: actionsTypes.clearEvent
})



export const doAddEvent = (form) => async (dispatch) => {
  dispatch(doLoading(true))
  const data = await createEvent(form)
  dispatch({
    type: actionsTypes.addEvent,
    payload: {
      ...form,  
      bgColor: '#fafafa',
      start: new Date(form.start),
      end: new Date(form.end)
    }
  })
}


export const selectEvent = (form) => (dispatch) => {
  dispatch(doSelectEvent(form))
  dispatch(doOpenModal(true))
}

export const doUpdateEvent = (form) => async (dispatch) => {
  dispatch(doLoading(true))
  const event = await updateEvent(form)
  console.log(event)
  dispatch({
    type: actionsTypes.updateEvent,
    payload: { 
      ...form,
      start: new Date(form.start),
      end: new Date(form.end)
    }
  })
}

export const doRemoveEvent = (id) => async (dispatch) => {
  dispatch(doLoading(true))
  await deleteEvent(id)
  dispatch({
    type: actionsTypes.removeEvent,
    payload: id
  })
}

export const doGetEvents = () => async (dispatch) => {
  const data = await getEvents()
  dispatch(doLoading(true))
  if ( data && data.length > 0 ) {
    dispatch({
      type: actionsTypes.loadEvents,
      payload: data.map(event => ({
        ...event,
        start: new Date(event.start),
        end: new Date(event.end)
      }))
    })
  }
  dispatch(doLoading(false))
  
}
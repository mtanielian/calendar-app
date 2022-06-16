import actionsTypes from "../actionsTypes/actionsTypes";


const doLoading = (loading) => ({
  type: actionsTypes.loadingEvent,
  payload: loading
})

const doAddEvent = (form) => ({
  type: actionsTypes.addEvent,
  payload: {
    ...form,  
    bgColor: '#fafafa',
    _id: new Date().getTime()
  }
})


export const addEvent = (form) => (dispatch, getState) => {
  dispatch(doLoading(true))
  dispatch(doAddEvent(form))


}
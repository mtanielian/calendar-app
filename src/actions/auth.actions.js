import actionsTypes from "../actionsTypes/actionsTypes"
import { getUser, registerUser, getRenewToken } from "../services/auth.services"

export const doLogin = (form) => async (dispatch) => {
  try {
    dispatch({ type: actionsTypes.loadingAuth, payload: true })
    const data = await getUser(form)
    
    localStorage.setItem('token', data.token)
    dispatch({ type: actionsTypes.login, payload: data.user })
  } catch (error) {
    console.log(error)
    dispatch({ type: actionsTypes.errorAuth, payload: true })
  }
}

export const doRegister = (form) => async (dispatch) => {
  try {
    dispatch({ type: actionsTypes.loadingAuth, payload: true })
    const data = await registerUser(form)
    
    localStorage.setItem('token', data.token)
    dispatch({ type: actionsTypes.login, payload: data.user })
  } catch (error) {
    console.log(error)
    localStorage.clear()
    dispatch({ type: actionsTypes.errorAuth, payload: true })
  }
}

export const doRenewToken = () => async (dispatch) => {
  try {
    dispatch({ type: actionsTypes.loadingAuth, payload: true })
    const data = await getRenewToken()
    
    localStorage.setItem('token', data.token)
    dispatch({ type: actionsTypes.login, payload: data.user })
  } catch (error) {
    console.log(error)
    localStorage.clear()
    dispatch({ type: actionsTypes.logout })
    dispatch({ type: actionsTypes.errorAuth, payload: true })
  }
}


export const doLogout = () => async (dispatch) => {
  localStorage.clear()
  dispatch({ type: actionsTypes.logout })
}
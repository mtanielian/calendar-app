import api from './api'

export const createEvent = async (form) => {
  const { data } = await api.post('/event', form)
  return data
}

export const getEvents = async (form) => {
  const { data } = await api.get('/event', form)
  return data
}

export const updateEvent = async (form) => {
  const { data } = await api.put(`/event/${form._id}`, form)
  return data
}

export const deleteEvent = async (id) => {
  const { data } = await api.delete(`/event/${id}`)
  return data
}
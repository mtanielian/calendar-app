import api from "./api"

export const getUser = async (form) => {
  const { data } = await api.post("/auth/login", form)
  return data
}

export const registerUser = async (form) => {
  const { data } = await api.post("/auth/register", form)
  return data
}

export const getRenewToken = async () => {
  const { data } = await api.get("/auth/renew")
  return data
}
import actionsTypes from "../actionsTypes/actionsTypes";

export const doOpenModal = (open) => ({
  type: actionsTypes.openModal,
  payload: open
})

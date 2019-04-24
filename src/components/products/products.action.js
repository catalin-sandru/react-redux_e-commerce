export const SingleItem = payload => {
  return{
    type: 'getItem',
    payload
  }
}

export const OpenModal = (id) => {
  return {
    type: 'openModal',
    id
  }
}

export const CloseModal = () => {
  return {
    type: 'closeModal'
  }
}
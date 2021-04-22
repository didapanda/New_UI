export const initialState = {
  toast: {
    status: '',
    message: '',
  },
}
export const state = () => initialState

export const getters = {
  getToast(state) {
    return state.toast
  },
}

export const mutations = {
  setToast(state, toast) {
    state.toast = toast
  },
}

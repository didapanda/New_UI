export const initialState = {
  toast: {
    status: '',
    message: '',
  },
  mini: false,
}
export const state = () => initialState

export const getters = {
  getToast(state) {
    return state.toast
  },
  getMini(state) {
    return state.mini
  },
}

export const mutations = {
  setToast(state, toast) {
    state.toast = toast
  },
  setMini(state, mini) {
    state.mini = mini
  },
}

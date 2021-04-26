export const CLEAR_STATE = 'provider/CLEAR_STATE'

export const SET_NETWORK_NAME = 'provider/SET_NETWORK_NAME'
export const SET_PROVIDER_NAME = 'provider/SET_PROVIDER_NAME'
export const SET_ADDRESS = 'provider/SET_ADDRESS'
export const SET_NETWORK = 'provider/SET_NETWORK'

export const state = () => ({
  account: null,
  network: {
    name: 'mainnet',
    id: 1,
  },
  provider: {
    name: '',
    version: '',
  },
})

export const getters = {
  getProvider: () => {
    return window.ethereum
  },
  getNetwork: (state) => {
    return state.network
  },
  getAddress: (state) => {
    return state.address
  },
}

export const mutations = {
  [SET_PROVIDER_NAME](state, name) {
    this._vm.$set(state.provider, 'name', name)
  },
  [SET_ADDRESS](state, address) {
    this._vm.$set(state, 'address', address)
  },
  [SET_NETWORK](state, network) {
    this._vm.$set(state, 'network', network)
  },
  [SET_NETWORK_NAME](state, name) {
    this._vm.$set(state.network, 'name', name)
  },
}

export const actions = {
  async initProvider({ commit, getters, dispatch }, { name, network }) {
    try {
      commit(SET_PROVIDER_NAME, name)
      commit(SET_NETWORK_NAME, network)
      console.log(this.$provider.initProvider(getters.getProvider))
      const address = await this.$provider.initProvider(getters.getProvider)
      commit(SET_ADDRESS, address)

      await dispatch('checkNetworkVersion')
      await dispatch('getBalance', address)
    } catch (err) {
      throw new Error(err.message)
    }
  },
  async checkNetworkVersion({ commit }) {
    try {
      const id = await this.$provider.checkNetworkVersion()
      console.log(id)
      commit(SET_NETWORK, id)
    } catch (err) {
      throw new Error(err.message)
    }
  },
  async sendRequest(_, params) {
    try {
      const result = await this.$provider.sendRequest(params)
    } catch (err) {
      throw new Error(err.message)
    }
  },
  async batchRequest(_, { txs }) {
    try {
      const result = await this.$provider.batchRequest({ txs })
    } catch (err) {
      throw new Error(err.message)
    }
  },
  async contractRequest(_, params) {
    try {
      const request = await this.$provider.contractRequest(params)
    } catch (err) {
      throw new Error(err.message)
    }
  },
  async getBalance(_, account) {
    try {
      const balance = await this.$provider.getBalance({ address: account })
    } catch (err) {
      throw new Error(err.message)
    }
  },
  clearState({ commit }) {
    try {
      commit(CLEAR_STATE)
    } catch (err) {
      throw new Error(err.message)
    }
  },
  async waitForTxReceipt(_, { txHash }) {
    try {
      const tx = await this.$provider.waitForTxReceipt({ txHash })
    } catch (err) {
      throw new Error(err.message)
    }
  },
}

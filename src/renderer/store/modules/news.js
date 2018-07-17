import axios from 'axios'

let baseUrl = 'http://smart_docse.test/'

let apiUrl = {
  all: baseUrl + 'api/v1/news'
}

const state = {
  all: [],
  errors: null
}

const getters = {
  getAllNews: (state) => {
    return state.all
  }
}

const mutations = {
  SET_ALL_NEWS (state, data) {
    state.all = data.data
  },

  SET_ERROR (state, errors) {
    state.errors = errors
  }
}

const actions = {
  async get_all_news ({commit}) {
    try {
      let {data} = await axios.get(apiUrl.all)
      commit('SET_ALL_NEWS', data)
    } catch (e) {
      commit('SET_ERROR', e)
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
}

import axios from 'axios'

let baseUrl = 'http://smart-docse.test/'

let apiUrl = {
  all: baseUrl + 'api/v1/results/semester'
}

const state = {
  all: [],
  errors: null
}

const getters = {
  getAllResults: (state) => {
    return state.all
  },
  getFilteredResults: (state, getters, rootState, rootGetters) => {
    let selectedSemester = rootGetters['ResultSemester/get_semester']
    let selectedFaculty = rootGetters['ResultFaculty/get_faculty']
    return state.all.filter((result) => {
      console.log(result.semester, selectedSemester, result.faculty, selectedFaculty)
      return result.semester === selectedSemester && result.faculty === selectedFaculty
    })
  }
}

const mutations = {
  SET_ALL_RESULTS (state, data) {
    state.all = data.data
  },
  SET_ERROR (state, errors) {
    state.errors = errors
  }
}

const actions = {
  async get_all_results ({commit}) {
    try {
      let {data} = await axios.get(apiUrl.all)
      commit('SET_ALL_RESULTS', data)
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

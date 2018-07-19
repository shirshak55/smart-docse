const facultysMapping = [
  'CE',
  'CS'
]

const state = {
  selected: 'CE'
}

const getters = {
  get_faculty (state) {
    return state.selected
  },
  get_faculties (state) {
    return facultysMapping
  },
  is_active (state) {
    return (currentType) => {
      return state.selected === currentType
    }
  }
}

const mutations = {
  SET_FACULTY (state, faculty) {
    state.selected = faculty
  }
}

const actions = {
  set_faculty ({commit}, faculty) {
    commit('SET_FACULTY', faculty)
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
}

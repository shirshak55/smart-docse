const facultysMapping = [
  'CE',
  'CS'
]

const state = {
  selected: 'First Semester'
}

const getters = {
  get_faculty (state) {
    return state.selected
  },
  get_facultys (state) {
    return facultysMapping
  },
  is_active (state) {
    return (currentType) => {
      return state.selected === currentType
    }
  }
}

const mutations = {
  SET_TYPE (state, faculty) {
    state.selected = faculty
  }
}

const actions = {
  set_faculty ({commit}, faculty) {
    commit('SET_TYPE', faculty)
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
}

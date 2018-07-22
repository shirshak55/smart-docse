const semestersMapping = [
  'First Semester',
  'Second Semester',
  'Third Semester',
  'Fourth Semester',
  'Fifth Semester',
  'Sixth Semester',
  'Seventh Semester',
  'Eight Semester'
]

const state = {
  selected: 1
}

const getters = {
  get_semester (state) {
    return state.selected
  },
  get_semesters (state) {
    return semestersMapping
  },
  is_active (state) {
    return (currentType) => {
      return state.selected === currentType
    }
  }
}

const mutations = {
  SET_SEMESTER (state, semester) {
    state.selected = semester
  }
}

const actions = {
  set_semester ({commit}, semester) {
    commit('SET_SEMESTER', semester)
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
}

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
  selected: 'First Semester'
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
  SET_TYPE (state, semester) {
    state.selected = semester
  }
}

const actions = {
  set_semester ({commit}, semester) {
    commit('SET_TYPE', semester)
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
}
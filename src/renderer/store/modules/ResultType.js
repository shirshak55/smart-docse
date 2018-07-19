const typesMapping = [
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
  get_type (state) {
    return state.selected
  },
  get_types (state) {
    return typesMapping
  },
  is_active (state) {
    return (currentType) => {
      return state.selected === currentType
    }
  }
}

const mutations = {
  SET_TYPE (state, type) {
    state.selected = type
  }
}

const actions = {
  set_type ({commit}, type) {
    commit('SET_TYPE', type)
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
}

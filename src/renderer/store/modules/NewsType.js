const typesMapping = [
  'All',
  'KU Related',
  'DOCSE Related',
  'DOCSE First Semester',
  'DOCSE Second Semester',
  'DOCSE Third Semester',
  'DOCSE Fourth Semester',
  'DOCSE Fifth Semester',
  'DOCSE Sixth Semester',
  'DOCSE Seventh Semester',
  'DOCSE Eight Semester',
  'KUCC'
]

const state = {
  selected: 'All'
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

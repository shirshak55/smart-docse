import axios from 'axios'
const apiUrl = 'http://smart_docse.test/api/v1/contact'

const state = {
  name: null,
  subject: null,
  email: null,
  content: null,
  errors: null,
  success: null
}

const getters = {
  get_name (state) {
    return state.name
  },
  get_subject (state) {
    return state.subject
  },
  get_email (state) {
    return state.email
  },
  get_content (state) {
    return state.content
  },
  get_errors (state) {
    return state.errors
  }
}

const mutations = {
  SET_NAME (state, name) {
    state.name = name
  },
  SET_SUBJECT (state, subject) {
    state.subject = subject
  },
  SET_EMAIL (state, email) {
    state.email = email
  },
  SET_CONTENT (state, content) {
    state.content = content
  },
  SET_ERRORS (state, errors) {
    state.errors = errors
  },
  SET_SUCCESS (state, data) {
    state.success = data
  }
}

const actions = {
  async send_contact_to_api ({commit, getters}) {
    try {
      let {data} = axios.get(apiUrl, {
        name: getters.get_name,
        email: getters.get_email,
        subject: getters.get_subject,
        content: getters.get_contents
      })
      commit('SET_SUCCESS', data.data)
    } catch (e) {
      commit('SET_ERRORS', e)
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

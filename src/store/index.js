import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    groups: JSON.parse(window.localStorage['groups'] || (window.localStorage['groups'] = JSON.stringify([]))),
    watchers: JSON.parse(window.localStorage['watchers'] || (window.localStorage['watchers'] = JSON.stringify([])))
  },
  getters: {
    groupExists: state => groupId => {
      return state.groups.find(group => group.id === groupId)
    },

    watcherExists: state => watcherId => {
      return state.watchers.find(watcher => watcher.id === watcherId)
    }
  },
  mutations: {
    addGroup (state, payload) {
      state.groups = [...state.groups, { id: payload.name, ...payload }]

      window.localStorage['groups'] = JSON.stringify(state.groups)
    },

    addWatcher (state, payload) {
      state.watchers = [...state.watchers, { id: payload.name, ...payload }]

      window.localStorage['watchers'] = JSON.stringify(state.watchers)
    }
  }
})

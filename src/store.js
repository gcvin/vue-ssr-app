import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      branch: {}
    },
    actions: {
      fetchBranch ({ commit }) {
        const branchURL = 'https://api.github.com/repos/gcvin/vue-ssr-app/branches'

        return axios.get(branchURL).then(rs => {
          const branch = rs.data
          commit('setBranch', branch)
        })
      }
    },
    mutations: {
      setBranch (state, branch) {
        state.branch = branch
      }
    }
  })
}

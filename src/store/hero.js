import axios from 'axios'

export const state = () => ({
  hero: {}
})

export const getters = {
    hero: state => state.hero
}

export const mutations = {

  clearHero(state) {
    state.hero = {}
  },

  setHero(state, hero) {
    state.hero = hero
  }

}

export const actions = {

  async clear({ state, commit }) {
    commit('clearHero')
  },

  async detail({ state, commit }, id) {
    var response = await axios.get(process.env.API + "hero/token?id=" + id);
    commit('setHero', response.data)
  },

}
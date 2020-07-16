import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    articleNumbers: []
  },
  mutations: {
    addArticleNumber (state, articleNumber) {
      state.articleNumbers.push(articleNumber);
    }
  }
})

export default store
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    urls: {
      espelho: "https://api.myjson.com/bins/16ljoh",
      medicao: "https://api.myjson.com/bins/124i2l",
      graficos: "https://api.myjson.com/bins/qi0mh",
      rdo: "https://api.myjson.com/bins/1fulvp"
    }
  },
  mutations: {

  },

  getters: {
    link: (state) => (id, params) => {
      var retorno = state.urls[id].replace(":mes", params.mes)
      return retorno.replace(":contrato", params.contrato)
    }
  
  },

  actions: {

  }
})

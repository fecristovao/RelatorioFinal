import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    urls: {
      espelho: "/webapp/espelhoapi.rule?sys=MDC&mes=:mes&contrato=:contrato",
      medicao: "/webapp/medicaoapi.rule?sys=MDC&mes=:mes&contrato=:contrato",
      graficos: "/webapp/graficosapi.rule?sys=MDC&mes=:mes&contrato=:contrato",
      rdo: "/webapp/rdoapi.rule?sys=MDC&id=",
      rdoIMG: "/webapp/imgapi.rule?sys=MDC&id=:img"
    }
  },
  mutations: {

  },

  getters: {
    link: (state) => (id, params) => {
      var retorno = state.urls[id].replace(":mes", params.mes)
      return retorno.replace(":contrato", params.contrato)
    },

    img: (state) => (id) => {
      var retorno = state.urls.rdoIMG.replace(":img", id)
      return retorno
    }
  
  },

  actions: {

  }
})

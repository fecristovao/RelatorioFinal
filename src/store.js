import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    urls: {
      espelho: "/devnew/espelhoapi.rule?sys=MDC&mes=:mes&contrato=:contrato",
      medicao: "/devnew/medicaoapi.rule?sys=MDC&mes=:mes&contrato=:contrato",
      graficos: "/devnew/graficosapi.rule?sys=MDC&mes=:mes&contrato=:contrato",
      rdo: "/devnew/rdoapi.rule?sys=MDC&id=",
      rdoIMG: "/devnew/imgapi.rule?sys=MDC&id=:img"
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

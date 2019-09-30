import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    urls: {
      espelho: "http://192.168.1.93:8049/webrunstudio/espelhoapi.rule?sys=MDC&mes=:mes&contrato=:contrato",
      medicao: "http://192.168.1.93:8049/webrunstudio/medicaoapi.rule?sys=MDC&mes=:mes&contrato=:contrato",
      graficos: "http://192.168.1.93:8049/webrunstudio/graficosapi.rule?sys=MDC&mes=:mes&contrato=:contrato"
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

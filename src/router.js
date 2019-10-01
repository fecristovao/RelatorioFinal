import Vue from 'vue'
import Router from 'vue-router'
import Espelho from './views/Espelho.vue'
import Medicao from './views/Medicao.vue'
import Graficos from './views/Graficos.vue'
import RDO from './views/RDO.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/espelho/:mes/:contrato',
      name: 'Espelho',
      component: Espelho
    },
    {
      path: '/medicao/:mes/:contrato',
      name: 'Medição',
      component: Medicao
    },
    {
      path: '/graficos/:mes/:contrato',
      name: 'Gráficos',
      component: Graficos
    },
    {
      path: '/print/espelho/:mes/:contrato',
      name: 'Impressão do Espelho',
      component: Espelho
    },
    {
      path: '/print/medicao/:mes/:contrato',
      name: 'Impressão do Medição',
      component: Medicao
    },
    {
      path: '/print/rdo/:id',
      name: 'Impressão de RDO',
      component: RDO
    }
  ]
  
})

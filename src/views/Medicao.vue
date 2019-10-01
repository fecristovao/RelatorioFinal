<template>
    <div>
        <div class="input-field container" v-show="!$route.name.includes('Impressão')">
            <input id="busca" type="text" v-model="busca">
            <label for="busca">Busca</label>
        </div>
        <div class="container center-align" id="titulo">
            <h5>Medição do mês</h5>
        </div>
        <hr>
        <table :class="$route.name.includes('Impressão') ? 'impressao centered striped' : 'centered striped responsive-table'">
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Nº da RDO</th>
                    <th>Indice</th>
                    <th>Serviço</th>
                    <th>Gerência</th>
                    <th>SST</th>
                    <th>Poço</th>
                    <th>Sonda</th>
                    <th>Série</th>
                    <th>Cento de Custo</th>
                    <th>Preço</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in this.dados" v-show="buscar(item, busca)">
                    <td>{{ item.data }}</td>
                    <td>{{ item.num }}</td>
                    <td>{{ item.indice }}</td>
                    <td>{{ item.servico }}</td>
                    <td>{{ item.gerencia }}</td>
                    <td>{{ item.sst }}</td>
                    <td>{{ item.poco }}</td>
                    <td>{{ item.sst }}</td>
                    <td>{{ item.serie }}</td>
                    <td>{{ item["cento de custo"] }}</td>
                    <td>R$ {{ FloatToReais(ReaisToFloat(item.preco)) }}</td>
                    <td>R$ {{ FloatToReais(ReaisToFloat(item.total)) }}</td>
                </tr>
            </tbody>
        </table>
        <div class="center-align container loader" v-if="loading">
            <h5>Carregando dados</h5>
            <div class="preloader-wrapper big active">
                <div class="spinner-layer spinner-blue-only">
                    <div class="circle-clipper left">
                        <div class="circle"></div>
                    </div>
                    <div class="gap-patch">
                        <div class="circle"></div>
                    </div>
                    <div class="circle-clipper right">
                        <div class="circle"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="fixed-action-btn" v-show="!$route.name.includes('Impressão')">
            <router-link class="btn-floating btn-small blue" :to="{name: 'Impressão do Medição', params: $route.params }">
                <i class="large material-icons">local_printshop</i>
            </router-link>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import monetario from '../mixins/monetario'
export default {
    mixins: [monetario],
    data() {
        return {
            dados: [],
            busca: "",
            loading: true
        }
    },

    methods: {
        buscar(item, busca) {
            for(var i in item) {
                if (item[i].toString().toLowerCase().includes(busca.toLowerCase()))
                    return true 
            }
            return false
        }
    },

    mounted() {
        this.loading = true
        axios.get(this.$store.state.urls.medicao).then(resposta => {
            this.dados = resposta.data
        }).finally(() => {
            this.loading = false
        })
    }
}
</script>

<style scoped>
    td {
        font-size: 12px;
    }
    tbody td {
        border: 1px solid black;
        border-collapse: collapse;

    }
        
    .impressao th, .impressao td, .impressao tr  {
        border: 1px solid black;
        border-collapse: collapse;
    }
    

    hr {
        margin-top: 30px;
        margin-bottom: 30px;
    }
</style>
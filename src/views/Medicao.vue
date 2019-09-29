<template>
    <div>
        <div class="input-field container">
            <input id="busca" type="text" v-model="busca">
            <label for="busca">Busca</label>
        </div>
        <table class="centered striped responsive-table">
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
            busca: ""
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
        axios.get(this.$store.state.urls.medicao).then(resposta => {
            this.dados = resposta.data
        })
    }
}
</script>

<style scoped>
    td {
        font-size: 12px;
    }
    td, th {
     
    }
</style>
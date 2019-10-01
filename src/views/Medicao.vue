<template>
    <div>
        <div class="input-field container" v-show="!$route.name.includes('Impressão')">
            <i class="material-icons prefix">search</i>
            <input id="busca" type="text" v-model="busca">
            <label for="busca">Busca</label>
        </div>
        <div class="container center-align" id="titulo" v-show="$route.name.includes('Impressão')">
            <h5>Medição de {{mes}}</h5>
        </div>
        <table
            :class="$route.name.includes('Impressão') ? 'impressao centered striped' : 'centered striped responsive-table'">
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
                    <th>Quantidade</th>
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
                    <td>{{ item.qtd }}</td>
                    <td>R$ {{ FloatToReais((item.preco)) }}</td>
                    <td>R$ {{ FloatToReais((item.total)) }}</td>
                </tr>
                <tr class="tfoot" v-show="!loading">
                    <td class="tfoot"></td>
                    <td class="tfoot"></td>
                    <td class="tfoot"></td>
                    <td class="tfoot"></td>
                    <td class="tfoot"></td>
                    <td class="tfoot"></td>
                    <td class="tfoot"></td>
                    <td class="tfoot"></td>
                    <td class="tfoot"></td>
                    <td class="tfoot"></td>
                    <td class="tfoot"><b>{{ FloatToReais(quantidade) }}</b></td>
                    <td class="tfoot"></td>
                    <td class="tfoot"><b>R$ {{ FloatToReais(total) }}</b></td>
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
            <router-link class="btn-floating btn-small blue"
                :to="{name: 'Impressão do Medição', params: $route.params }">
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
                loading: true,
                mes: ""
            }
        },

        methods: {
            buscar(item, busca) {
                for (var i in item) {
                    if (item[i].toString().toLowerCase().includes(busca.toLowerCase()))
                        return true
                }
                return false
            }
        },

        computed: {
            total() {
                var soma = 0.0
                this.dados.map(el => {
                    soma += parseFloat(el.total)
                })

                return soma
            },

            quantidade() {
                var soma = 0.0
                this.dados.map(el => {
                    soma += parseFloat(el.qtd)
                })

                return soma
            }
        },

        mounted() {
            this.loading = true
            axios.get(this.$store.getters.link("medicao", this.$route.params)).then(resposta => {
                this.dados = resposta.data
                this.mes = resposta.data[0].mes
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

    .impressao th,
    .impressao td,
    .impressao tr {
        border: 1px solid black;
        border-collapse: collapse;
        margin: 0;
        padding: 0;
    }

    .impressao thead tr th {
        background-color: #e0e1e2;
        font-weight: bold;
    }

    .impressao .tfoot {
        background-color: #e0e1e2;
        font-weight: bold;
    }

    hr {
        margin-top: 30px;
        margin-bottom: 30px;
    }

    #titulo {
        margin-bottom: 30px;
    }
</style>
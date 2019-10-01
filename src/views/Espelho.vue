<template>
    <div>
        <div class="input-field container" v-show="!$route.name.includes('Impressão')">
            <input id="busca" type="text" v-model="busca">
            <label for="busca">Busca</label>
        </div>
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
        <template v-for="categoria in agrupado">
            <div class="center-align"><a class="waves-effect waves-light btn-small"
                    @click="categoria.Visivel = !categoria.Visivel">
                    {{ categoria.Categoria }}</a></div>
            <table class="responsive-table striped centered">
                <thead>
                    <tr v-show="categoria.Visivel">
                        <th>Indice</th>
                        <th>Serviço</th>
                        <th>Preço</th>
                        <th>Quantidade</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <template>
                    <tbody v-show="categoria.Visivel">
                        <tr v-for="(item, i) in categoria.Itens" :key="i" v-show="buscaItem(busca, item, categoria)">
                            <td>{{item.Indice}}</td>
                            <td>{{item.Servico}}</td>
                            <td>R$ {{ item.Preco}}</td>
                            <td>{{ item.Quantidade }}</td>
                            <td>R$ {{ item.Total }}</td>
                        </tr>
                        <tr class="totalCategoria">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                            <td><b>{{ somaCategoria(categoria) }}</b></td>
                        </tr>
                    </tbody>
                </template>
            </table>
        </template>
        <hr>
        <div class="container center-align" style="background-color: #2bbbad;text-transform: uppercase;">
            <h6>Total do Mês<br />
                R$ {{ somaTotal }}</h6>

        </div>

        <div class="fixed-action-btn" v-show="!$route.name.includes('Impressão')">
            <router-link class="btn-floating btn-small blue"
                :to="{name: 'Impressão do Espelho', params: $route.params }">
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
        props: {
            casasDecimais: {
                type: String,
                required: false,
                default: "2"
            }
        },
        data() {
            return {
                dados: [],
                agrupado: [],
                busca: "",
                loading: true
            }
        },

        computed: {
            somaTotal() {
                var soma = 0.0
                for (var i in this.agrupado) {
                    soma += this.ReaisToFloat(this.somaCategoria(this.agrupado[i]))
                }
                return this.FloatToReais(soma.toFixed(this.casasDecimais))
            }
        },

        methods: {
            somaCategoria(categoria) {
                var soma = 0.0
                for (var item in categoria.Itens) {

                    soma += this.ReaisToFloat(categoria.Itens[item].Total)
                }
                return this.FloatToReais(soma.toFixed(parseInt(this.casasDecimais)))
            },

            buscaItem(busca, item, categoria) {
                for (var i in item) {
                    if (item[i].toString().toLowerCase().includes(busca.toLowerCase()))
                        return true
                }
                return false
            }
        },

        async mounted() {
            await axios.get(this.$store.state.urls.espelho).then(resposta => {
                this.loading = true
                this.dados = resposta.data
            }).finally(() => {
                var group = []
                var categorias = {}
                var atualID = 0
                for (var i in this.dados) {
                    var atual = this.dados[i]
                    var novo = {
                        "Indice": atual.Indice,
                        "Servico": atual.Servico,
                        "Quantidade": atual.Quantidade,
                        "Preco": this.FloatToReais(this.ReaisToFloat(atual.Preco)),
                        "Total": this.FloatToReais(this.ReaisToFloat(atual.Total)),
                    }
                    if (categorias[atual.Categoria] === undefined) {
                        categorias[atual.Categoria] = atualID
                        group[atualID++] = {
                            "Categoria": atual.Categoria,
                            "Itens": [novo],
                            "Visivel": true
                        }

                    } else {
                        var ID = categorias[atual.Categoria]
                        group[ID].Itens.push(novo)
                    }
                }
                this.agrupado = group
                this.loading = false
            })
        }
    }
</script>
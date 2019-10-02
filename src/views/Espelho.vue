<template>
    <div v-if="!$route.name.includes('Impressão')">
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
            <div class="center-align categoria"><a class="waves-effect waves-light btn-small"
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

                            <td><b>R$ {{ somaCategoria(categoria) }}</b></td>
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

    <div v-else id="espelhoImpressao" class="center-align">
        <template v-if="!loading">
            <table>
                <thead>
                    <tr>
                        <th colspan="1">
                            <img src="data:image/png;base64,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"
                                alt="" srcset="">
                        </th>
                        <th colspan="4">
                            <h5>RESUMO DO CONTRATO: OS OFICINA MACAE</h5>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <p>Numero de Controle</p>
                            <p class="vermelho">PBR OFCN {{ formatData(fim)["mes"] }} {{ formatData(fim)["ano"] }}</p>
                        </th>
                        <th colspan="3">
                            <p>Período</p>
                            <p class="vermelho">{{ formatData(inicio)["completa"] }} A {{ formatData(fim)["completa"] }}</p>
                        </th>
                        <th>
                            <p class="vermelho">{{ sap }}</p>
                        </th>
                    </tr>
                    <tr>
                        <th colspan="5">PERBRAS - EMPRESA BRASILEIRA DE PERFURAÇOES LTDA.</th>
                    </tr>
                    <tr class="categoria">
                        <th>Item</th>
                        <th>Serviços</th>
                        <th>Preços Unitários</th>
                        <th>Quantidade Mensal</th>
                        <th>Valor Total</th>
                    </tr>
                </thead>
                <tbody>
                    <template v-for="categoria in agrupado">
                        <tr class="categoria">
                            <td>{{ categoria.Categoria.split(' - ')[0] }}</td>
                            <td>{{ categoria.Categoria.split(' - ')[1] }}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr v-for="(item, i) in categoria.Itens" :key="i">
                            <td>{{item.Indice}}</td>
                            <td>{{item.Servico}}</td>
                            <td>R$ {{ item.Preco}}</td>
                            <td>{{ item.Quantidade }}</td>
                            <td>R$ {{ item.Total }}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><b>R$ {{ somaCategoria(categoria) }}</b></td>
                        </tr>
                    </template>
                </tbody>
            </table>
            <div id="total" class="right">
                <table>
                    <tr>
                        <td class="categoria">Total</td>
                        <td>R$ {{ somaTotal }}</td>
                    </tr>
                    <tr>
                        <td class="categoria">Reajuste</td>
                        <td>{{ fator }}</td>
                    </tr>
                    <tr>
                        <td class="categoria">Total Reajustado</td>
                        <td>R$ {{ FloatToReais(ReaisToFloat(somaTotal) * fator) }}</td>
                    </tr>
                </table>
            </div>
        </template>
        <template v-else>
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
        </template>
    </div>
</template>

<style scoped>
    .categoria {
        margin-bottom: 30px;
        margin-top: 30px;
    }

    #espelhoImpressao th,
    #espelhoImpressao td,
    #espelhoImpressao tr {
        border: 1px solid black;
        text-align: center;
    }

    #espelhoImpressao .vermelho {
        color: red;
    }


    #espelhoImpressao {
        font-size: calc((12px*80)/100);
        text-align: center;
    }

    #espelhoImpressao tr td,
    th {
        margin: 0;
        padding: 0;
    }

    #espelhoImpressao p {
        margin: 0;
        padding: 0;
        text-transform: uppercase;
    }

    #espelhoImpressao img {
        margin-left: 7px;
        height: 2.68cm;
        width: 2.4cm;
        padding: 10px;
    }

    #espelhoImpressao .categoria {
        background-color: #e0e1e2;
        font-weight: bold;
    }

    #total {
        margin-top: 20px;
    }

    #total tr td {
        padding: 5px;
    }
</style>

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
                loading: true,
                fator: 0.0,
                inicio: "",
                fim: "",
                sap: ""
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
            formatData(data) {
                if (data === undefined || data.length < 10) {
                    return ""
                } else {
                    var resultado = ""

                    data = data.substring(0, 10)
                    data = data.split("/")
                    resultado = {
                        "dia": data[1],
                        "mes": data[0],
                        "ano": data[2],
                        "completa": data[1]+"/"+data[0]+"/"+data[2]
                    }
                    return resultado
                }
            },
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
            await axios.get(this.$store.getters.link("espelho", this.$route.params)).then(resposta => {
                this.loading = true
                this.dados = resposta.data
            }).finally(() => {
                this.fator = this.ReaisToFloat(this.dados[0].Fator)
                this.inicio = this.dados[0].PeriodoInicio
                this.fim = this.dados[0].PeriodoFim
                this.sap = this.dados[0].SAP
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
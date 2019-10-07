<template>
    <div class="body1">
        <div id="todo">
            <div id="cabecalho1">
                <img src="data:image/png;base64,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"
                    alt="">
                <div id="nome" class="verde centrov">
                    <h1>Registro Diário de Operação (R. D. O)</h1>
                </div>
                <div id="d2" class="verde">
                    <div id="d21" class="verde">
                        <div class="caixa">
                            <p>Numero da Ocorrência</p>
                            <b>
                                <p class="azul">{{agrupados.ID}}</p>
                            </b>
                        </div>
                        <div class="caixa">
                            <b>
                                <p class="azul">{{ (agrupados.PeriodoInicio["completa"]) }} A
                                    {{ agrupados.PeriodoFim["completa"] }}</p>
                            </b>
                        </div>
                        <div id="d22" class="centrov">
                            <div>
                                <p>TIPO DE R.O.</p>
                            </div>
                            <div>
                                <p>DIÁRIO</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="d3" class="verde">
                    <div id="d31" class="caixa centrov">
                        <div id="d311">
                            <div>
                                <p class="verde">
                                    Data:
                                </p>
                            </div>
                            <div>
                                <p class="azul">
                                    {{ Data }}
                                </p>
                            </div>

                        </div>
                        <div id="d3111">
                            <div>
                                <p class="verde">
                                    Turno:
                                </p>
                            </div>
                            <div>
                                <p class="azul">
                                    {{ agrupados.Setor }}
                                </p>
                            </div>
                        </div>
                        <div id="d312">
                            <p class="verde">Gerencia: </p>
                            <p class="azul">{{ agrupados.Turno }}</p>
                        </div>
                    </div>
                    <div id="d32" class="verde centrov">
                        <p>Nº DO CONTRATO:</p>
                        <p>{{agrupados.ICJ}} / {{ agrupados.SAP }}</p>
                    </div>
                </div>
            </div>
            <div id="cabecalho2" class="verde">
                <div id="c21" class="caixa2">
                    <p>SETOR: {{ agrupados.EstNome }}</p>
                    <p>PERBRAS - EMPRESA BRASILEIRA DE PERFURAÇÕES LTDA</p>
                </div>
                <div id="c22" class="caixa2">
                    <p>CONTRATANTE: {{ agrupados.Contratante }} </p>
                </div>
            </div>
            <div id="cabecalho3" class="verde">
                <div id="c31">
                    <b>
                        <p>OBJETIVO DO CONTRATO:</p>
                    </b>
                    <br><br>
                    <b>
                        <p>{{ agrupados.ContratoOBJ }} </p>
                    </b>
                </div>
                <div id="c32" class="centrov">
                    <div id="c321" class="caixa centrov">
                        <b>
                            <p>PRAZO CONTRATUAL</p>
                        </b>
                    </div>
                    <div id="c322" class="centrov">
                        <b>
                            <p>{{agrupados.ContratoInicio["completa"]}} A {{agrupados.ContratoFim["completa"]}}</p>
                        </b>
                    </div>
                </div>
            </div>
        </div>
        <table>
            <thead class="verde">
                <td>ITEM PPU</td>
                <td>DESCRIÇÃO DO SERVIÇO</td>
                <td style="width: 20px;">QUANTIDADE SERVICOS / PESO (KG)</td>
                <td>SST</td>
                <td>POÇO</td>
                <td>SONDA</td>
                <td>Nº de Série do Equipamento</td>
                <td>Cento de Custo</td>
                <td>OBSERVAÇÕES</td>
            </thead>
            <tbody>
                <template v-for="item in agrupados.Itens">
                    <tr>
                        <td>{{ item.Indice }}</td>
                        <td>{{ item.Servico }}</td>
                        <td>{{ item.Quantidade }}</td>
                        <td>{{ item.SST }}</td>
                        <td>{{ item.Poco }}</td>
                        <td>{{ item.Sonda }}</td>
                        <td>{{ item.Serie }}</td>
                        <td>{{ item.Cento }}</td>
                        <td>{{ item.Observacao }}</td>
                    </tr>
                    <tr v-if="item.Imagens">
                        <td colspan="9">
                            <img v-for="(id, i) in item.Imagens" :key="i" :src="$store.getters.img(id)" height="150"
                                alt="">
                        </td>
                    </tr>
                </template>


            </tbody>
        </table>
        <div id="rodape">
            <div id="perbras">
                <div id="r11">
                    <p class="caixa">ASSINATURA DO RESPONSÁVEL DA PERBRAS</p>
                    <p>NOME:</p>
                    <br>
                    <p class="fim">Matricula:</p>
                </div>
            </div>
            <div id="abc">
                <p class="caixa">ASSINATURA DO RESPONSÁVEL DA PETROBRÁS</p>
                <p>NOME:</p>
                <br>
                <p class="fim">Matricula:</p>
            </div>
        </div>

    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        mounted() {
            axios.get(this.$store.state.urls.rdo + this.$route.params.id).then(resposta => {
                this.dados = resposta.data
            }).finally(() => {
                var agrupados = {}
                agrupados["ID"] = this.dados[0].ID
                agrupados["Data"] = this.dados[0].Data
                agrupados["PeriodoInicio"] = this.formatData(this.dados[0].PeriodoInicio)
                agrupados["PeriodoFim"] = this.formatData(this.dados[0].PeriodoFim)
                agrupados["ICJ"] = this.dados[0].ICJ
                agrupados["SAP"] = this.dados[0].SAP
                agrupados["Contratante"] = this.dados[0].Contratante
                agrupados["ContratoOBJ"] = this.dados[0].ContratoOBJ
                agrupados["ContratoInicio"] = this.formatData(this.dados[0].ContratoInicio)
                agrupados["ContratoFim"] = this.formatData(this.dados[0].ContratoFim)
                agrupados["EstNome"] = this.dados[0].EstNome
                agrupados["Setor"] = this.dados[0].Setor
                agrupados["Turno"] = this.dados[0].Turno
                agrupados["HorarioInicio"] = this.dados[0].HorarioInicio.substring(0, 5)
                agrupados["HorarioFim"] = this.dados[0].HorarioFim.substring(0, 5)
                agrupados["Itens"] = []
                var itens = {}
                for (var i in this.dados) {
                    if (itens[this.dados[i].ItemID] === undefined) {
                        var novo = {
                            "Indice": this.dados[i].Indice,
                            "Servico": this.dados[i].Servico,
                            "Quantidade": this.dados[i].Quantidade,
                            "SST": this.dados[i].SST,
                            "Poco": this.dados[i].Poco,
                            "Sonda": this.dados[i].Sonda,
                            "Serie": this.dados[i].Serie,
                            "Cento": this.dados[i].Cento,
                            "Observacao": this.dados[i].Observacao,
                            "Imagens": [this.dados[i].ImagemID]
                        }

                        itens[this.dados[i].ItemID] = novo
                    } else {

                        itens[this.dados[i].ItemID].Imagens.push(this.dados[i].ImagemID)
                    }
                }
                agrupados["Itens"] = itens
                this.agrupados = agrupados

            })
        },
        data() {
            return {
                dados: [],
                agrupados: {}
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
                        "dia": data[0],
                        "mes": data[1],
                        "ano": data[2],
                        "completa": data[0] + "/" + data[1] + "/" + data[2]
                    }
                    return resultado
                }
            }
        },
        computed: {
            Data() {
                var data = this.agrupados.Data.split("/")
                var mes = []
                mes[1] = "Janeiro"
                mes[2] = "Fevereiro"
                mes[3] = "Março"
                mes[4] = "Abril"
                mes[5] = "Maio"
                mes[6] = "Junho"
                mes[7] = "Julho"
                mes[8] = "Agosto"
                mes[9] = "Setembro"
                mes[10] = "Outubro"
                mes[11] = "Novembro"
                mes[12] = "Dezembro"

                return data[0] + " de " + mes[parseInt(data[1])] + "-" + data[2].substring(0, 4) + " das " + this
                    .agrupados.HorarioInicio + " até " + this.agrupados.HorarioFim
            }
        },
        watch: {
            dados(newVal) {
            }
        }
    }
</script>

<style scoped>
    .body1 {
        border-style: solid;
        border-width: 1px;
        border-collapse: collapse;
    }

    .v-application p {
        margin-bottom: 0;
    }

    #todo {
        border-collapse: collapse;
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    img {
        padding: 4px;
    }

    p {
        font-family: "Trebuchet MS", Arial, sans-serif;
        color: #555;
        font-size: calc((12px*80)/100);
        padding: 0;
        margin: 0;
        padding-left: 30px;
        padding-right: 30px;
    }

    #cabecalho1 {
        height: 2.68cm;
        padding-top: 10px;
        display: flex;
        flex-direction: row;
        width: 100%;
        border-left: 0;
        border-right: 0;
        border-bottom: 0;
        border-collapse: collapse;
    }

    #cabecalho1 img {
        margin-left: 7px;
        height: 2.68cm;
        width: 2.4cm;
    }

    #cabecalho2 {
        margin-top: 10px;
        width: 100%;
        display: flex;
        border-top: solid;
        border-bottom: solid;
        border-width: 1px;
        flex-wrap: wrap;
    }

    #cabecalho3 {
        margin-top: 10px;
        width: 100%;
        display: flex;
        border-top: solid;
        border-width: 1px;
        flex-wrap: wrap;
        border-bottom: solid;
        border-width: 1px;

    }

    #cabecalho2 p {
        margin: 0;
        padding: 0;
    }

    #cabecalho3 p {
        margin: 0;
        padding: 0;
    }



    #nome {
        border: solid;
        border-width: 1px;
        border-right: 0px;
        margin-left: 20px;
        width: calc((100% - (2.4cm + 20px))/3);
        font-family: "Trebuchet MS", Arial, sans-serif;
        color: #555;
    }

    #nome h1 {
        font-family: 'Arial';
        font-weight: bold;
        font-size: calc((18px*80)/100);
        ;
        text-align: center;
        padding-left: 30px;
        padding-right: 30px;
    }

    #d2 {
        display: flex;
        flex-grow: 1;
        width: calc((100% - (2.4cm + 20px))/3);
        border-style: solid;
        border-width: 1px;
        text-align: center;
        border-right: 0px;
    }

    #d21 {
        width: 100%;
    }

    #d22 {
        width: 100%;
        padding-top: 10px;
    }

    #d3 {
        width: calc((100% - (2.4cm + 20px))/3);
        display: flex;
        flex-direction: column;
        border-style: solid;
        border-width: 1px;
        text-align: center;
        flex-wrap: wrap;
        border-right: 0;
    }

    #d31 {
        width: 100%;
        display: flex;
        flex-direction: row;
    }

    #d311 {
        width: 50%;
        border-right: solid;
        border-width: 1px;
    }

    #d3111 {
        width: 50%;
        border-right: solid;
        border-width: 1px;
    }

    #d312 {
        width: calc(50% - 1px);
    }

    table {
        border-top: 1px solid black;
    }


    table {
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
        font-size: calc((12px*80)/100);
        width: 100%;
        margin-top: 20px;
        padding: 0;
        border-collapse: collapse;
    }

    th,
    td,
    tr {
        text-align: center;
        border: 1px solid black;
        padding: 0;
        margin: 0;
        border-collapse: collapse;
    }

    #d4 p {
        margin: 0;
        padding: 0;
    }

    #c21 {
        border-right: solid;
        border-width: 1px;
    }

    #c22 {
        text-align: center;
    }

    #c31 {
        width: 65%;
        border-right: solid;
        border-width: 1px;
    }

    #c32 {
        text-align: center;
        width: calc(100% - (65% + 3px));
    }

    #rodape {

        margin-top: 250px;

        padding-bottom: 50px;
        display: flex;

        margin-left: 2%;

        bottom: 35px;
    }

    #perbras,
    #abc {
        border: solid;
        border-width: 1px;
        width: 45%;
        margin-bottom: 5000x;
    }

    b p {
        color: black;
    }

    p b,
    h1 {
        color: black;
    }

    #rodape thead {
        font-weight: bold;

    }

    #abc {
        position: relative;
        float: right;

    }

    #perbras {
        position: relative;
        float: left;
        margin-right: 8%;
    }

    #perbras p {
        padding-left: 0;
    }

    #abc p {
        padding-left: 0;

    }

    .fim {
        border-top: solid;
        border-width: 1px;
    }

    .verde {
        background-color: rgb(194, 213, 158);
    }

    .azul {
        background-color: rgb(220, 230, 241);
    }

    .vermelho {
        color: red;
    }

    .caixa {
        border-bottom: solid;
        border-width: 1px;
    }

    .caixa2 {
        width: calc((99%)/2);
    }

    .centrov {
        justify-content: center;
        flex-grow: 1;
        align-content: center;
        display: flex;
        flex-direction: column;
        vertical-align: center;
    }
</style>
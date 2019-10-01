<template>
    <div :class="expandido == true ? 'container s12 center-align' : 'row col s6 center-align'">
        <div id="projecao" class="grafico col s12 l6">
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
            <Projecao :dados="dados" />
        </div>
        <div id="diario" class="grafico col s12 l6">
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
            <Diario :dados="dados" />
        </div>
        <a class="waves-effect waves-light btn"
            @click="expandido = !expandido">{{ expandido == true ? "Encolher" : "Expandir" }}</a>
    </div>
</template>

<script>
    import Projecao from '@/components/GraficoProjecao.vue'
    import Diario from '@/components/GraficoDiario.vue'
    import axios from 'axios'

    export default {
        components: {
            Projecao,
            Diario
        },
        data() {
            return {
                dados: [],
                loading: true,
                expandido: false
            }
        },

        mounted() {
            this.loading = true
            axios.get(this.$store.state.urls.graficos).then(resposta => {
                this.dados = resposta.data
            }).finally(() => {
                this.loading = false
            })
        }
    }
</script>

<style scoped>

</style>
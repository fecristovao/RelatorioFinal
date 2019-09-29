<template>
    <div>
        
        {{dados["k"]}}
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            dados: {}
        }
    },

    mounted() {
        this.dados["k"] = "oi"
    }
}
</script>
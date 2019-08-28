<template>
    <div class="container">
        <my-terminal :msg="msg" :username="username" :password="password"></my-terminal>
    </div>
</template>

<script>
import Console from '@/components/Console'

export default {
    name: 'WebSSH',
    data () {
        return {
            msg: "",
            username: "",
            password: ""
        }
    },
    components: {
        'my-terminal': Console
    },
    methods: {
        getParams() {
            // let routerParams = this.$route.params.dataObj
            this.msg = this.$route.params.dataObj
            this.username = this.$route.params.username,
            this.password = this.$route.params.password
        }
    },
    created() {
        this.getParams()
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
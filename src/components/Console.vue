<template>
    <div class="console" id="terminal"></div>
</template>
<script>
import Terminal from './Xterm'
export default {
    name: 'Console',
    props: {
        msg: {
            type: String
        },
        username: {
            type: String
        },
        password: {
            type: String
        }
    },
    data () {
        return {
        term: null,
        terminalSocket: null
        }
    },
    methods: {
        runRealTerminal () {
        console.log('webSocket is finished')
        },
        errorRealTerminal () {
        console.log('error')
        },
        closeRealTerminal () {
        console.log('close')
        }
    },
    mounted () {
        var containerWidth = window.screen.height;
        var containerHeight = window.screen.width;
        var cols = Math.floor((containerWidth - 30) / 9);
        var rows = Math.floor(window.innerHeight/17) - 2;
        if (this.username === undefined){
            var url = (location.protocol === "http:" ? "ws" : "wss") + "://" + location.hostname + ":5001" + "/ws"+ "?" + "msg=" + this.msg + "&rows=" + rows + "&cols=" + cols;
        }else{
            var url = (location.protocol === "http:" ? "ws" : "wss") + "://" + location.hostname + ":5001" + "/ws"+ "?" + "msg=" + this.msg + "&rows=" + rows + "&cols=" + cols + "&username=" + this.username + "&password=" + this.password;
        }
        let terminalContainer = document.getElementById('terminal')
        this.term = new Terminal()
        this.term.open(terminalContainer)
        // open websocket
        this.terminalSocket = new WebSocket(url)
        this.terminalSocket.onopen = this.runRealTerminal
        this.terminalSocket.onclose = this.closeRealTerminal
        this.terminalSocket.onerror = this.errorRealTerminal
        this.term.attach(this.terminalSocket)
        this.term._initialized = true
        console.log('mounted is going on')
    },
    beforeDestroy () {
        this.terminalSocket.close()
        this.term.destroy()
    }
}
</script>
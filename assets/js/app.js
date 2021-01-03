const Vue = require('vue/dist/vue.esm-bundler.js')

const app = Vue.createApp({
    data() {
        return {
            title: 'Todo List'
        }
    }
})

app.mount('#app');
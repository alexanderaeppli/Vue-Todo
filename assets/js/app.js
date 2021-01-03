const Vue = require('vue/dist/vue.esm-bundler.js')

const app = Vue.createApp({
    data() {
        return {
            title: 'Todo List',
            newTodo: '',
            todos: ['Wash clouths'],
        }
    },
    methods: {
        addTodo() {
            if (this.newTodo.length <= 0) {
                alert('You cant add empty entries')
                return
            }
            this.todos.push(this.newTodo)
            this.newTodo = ''
        },
        removeTodo(index) {
            if (this.todos.length >= 0) {
                this.todos.splice(index, 1)
            }
        }
    }
})

app.mount('#app');
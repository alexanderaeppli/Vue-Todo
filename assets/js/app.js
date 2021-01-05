const Vue = require('vue/dist/vue.esm-bundler.js')
import _ from 'lodash'

const app = Vue.createApp({
    data() {
        return {
            newTodoField: '',
            todos: [],
            todoKey: 0,
        }
    },
    methods: {
        createTodo(content) {
            let newTodo = {
                content: content,
                key: this.todoKey,
            }

            this.todoKey++

            return newTodo
        },
        addTodo() {
            if (this.newTodoField.length <= 0) {
                alert('You cant add empty entries')
                return
            }
            let newTodo = this.createTodo(this.newTodoField)
            this.todos.push(newTodo)
            this.newTodoField = ''
        },
        removeTodo(index) {
            if (this.todos.length >= 0) {
                this.todos.splice(index, 1)
            }
        },

        shuffle() {
            this.todos = _.shuffle(this.todos)
        }
    },
})

app.mount('#app');
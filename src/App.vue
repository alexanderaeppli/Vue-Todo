<template>
    <todo-form @todo-sent="addTodo"></todo-form>
    <transition-group tag="ul" name="list" class="todo-list">
      <todo-item v-for="(todo, index) in todos" :todo="todo" :key="todo.key" @remove-todo="removeTodo"></todo-item>
    </transition-group>
    <button @click="shuffle">Shuffle</button>
</template>

<script>
import TodoForm from './components/TodoForm.vue';
import TodoItem from './components/TodoItem';

export default {
  components: { TodoForm, TodoItem },
  data() {
    return {
      todos: [],
      draggingItem: false,
    };
  },
  methods: {
    addTodo(todo) {
      this.todos.push(todo);
    },
    removeTodo(index) {
      if (this.todos.length >= 0) {
        this.todos.splice(index, 1);
      }
    },
    shuffle() {
      console.log(this.todos);
    },
  },
  computed: {
    draggedItem() {
      return this.todos.find((todo) => todo.isdragged === true);
    },
  },
};
</script>

<style lang="scss">
*,
::after,
::before {
  box-sizing: border-box;
}

#app {
  width: 100%;
  max-width: 600px;
  margin: 60px auto 0;
}

.todo-list {
  list-style: none;
  padding: unset;
  display: flex;
  flex-direction: column;
}

.list-enter-active,
.list-leave-active {
  transition: opacity 0.3s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
}

.list-move {
  transition: transform 0.8s ease;
}
</style>

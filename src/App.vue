<template>
  <div>
    <form class="todo-form" @submit.prevent="addTodo">
      <input
        class="todo-form__field"
        type="text"
        name=""
        v-model="newTodoField"
        id=""
      />
    </form>
    <transition-group tag="ul" name="list" class="todo-list">
      <li
        class="todo-item unselectable"
        :class="{ dragged: todo.isdragged }"
        v-for="(todo, index) in todos"
        :key="todo.key"
        @mousedown="grabItem(todo.key)"
        @mouseover="hoverItem(todo.key, index)"
      >
        <!-- <div class="drop-zone-top"></div> -->
        <!-- <span>{{  }}</span> -->
        {{ todo.content }}
        <button @click="removeItem(index)">Remove</button>
        <!-- <div class="drop-zone-bottom" @mouseover="hoverTodo(todo.key, index)"></div> -->
      </li>
    </transition-group>
    <button @click="shuffle">Shuffle</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoField: '',
      todos: [],
      todoKey: 0,
      draggingItem: false,
    };
  },
  methods: {
    createTodo(content) {
      let newTodo = {
        content: content,
        key: this.todoKey,
        isdragged: false,
      };

      this.todoKey++;

      return newTodo;
    },
    addTodo() {
      if (this.newTodoField.length < 0) {
        alert('You cant add empty entries');
        return;
      }
      let newTodo = this.createTodo(this.newTodoField);
      this.todos.push(newTodo);
      this.newTodoField = '';
    },
    removeItem(index) {
      if (this.todos.length >= 0) {
        this.todos.splice(index, 1);
      }
    },
    grabItem(index) {
      this.todos[index].isdragged = true;
      this.draggingItem = true;
    },
    hoverItem() {
      if (this.draggedItem) {
        console.log('hover');
        // this.todos.splice(index, 0, this.transferTodo)
      }
    },
    dropItem() {
      this.todos.this.draggingItem.isdragged === false;
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

.todo-form {
  width: 100%;

  &__field {
    width: 100%;
    border-radius: 5px;
    border: 1px rgb(206, 206, 206) solid;
    padding: 10px 15px;
  }
}

.todo-list {
  list-style: none;
  padding: unset;
  display: flex;
  flex-direction: column;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 10px 15px;
  flex-grow: 0;
  position: relative;
}

.dragged {
  opacity: 0.3;
}

.drop-zone-top,
.drop-zone-bottom {
  position: absolute;
  height: 50%;
  width: 100%;
  left: 0;
}

.unselectable {
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.drop-zone-top {
  top: 0;
}

.drop-zone-bottom {
  bottom: 0;
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

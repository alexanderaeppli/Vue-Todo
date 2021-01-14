<template>
      <li class="todo-item" :class="{ dragged: todo.isdragged }" >
        {{ todo.content }}
        <button @click="$emit('removeTodo')">Remove</button>
      </li>
</template>

<script>
export default {
  props: {
    todo: Object
  },
  emits: ['removeTodo'],
  methods: {

  }
};
</script>

<style lang="scss">
.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 10px 15px;
  flex-grow: 0;
  position: relative;
}

// .dragged {
//   opacity: 0.3;
// }

// .unselectable {
//   -webkit-user-select: none;
//   -webkit-touch-callout: none;
//   -moz-user-select: none;
//   -ms-user-select: none;
//   user-select: none;
// }

// .drop-zone-top,
// .drop-zone-bottom {
//   position: absolute;
//   height: 50%;
//   width: 100%;
//   left: 0;
// }


// .drop-zone-top {
//   top: 0;
// }

// .drop-zone-bottom {
//   bottom: 0;
// }
</style>
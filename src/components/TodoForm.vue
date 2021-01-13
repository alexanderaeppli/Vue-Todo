<template>
  <form class="todo-form">
    <input
      class="todo-form__field"
      type="text"
      name=""
      v-model="newTodoField"
      id=""
    />
  </form>
</template>

<script>
export default {
  data() {
    return {
      newTodoField: '',
    };
  },

};
</script>

<style lang="scss">
.todo-form {
  width: 100%;

  &__field {
    width: 100%;
    border-radius: 5px;
    border: 1px rgb(206, 206, 206) solid;
    padding: 10px 15px;
  }
}
</style>

<template>
  <form @submit.prevent="sendTodo(newTodoField)" class="todo-form">
    <input
      class="todo-form__field"
      type="text"
      name=""
      v-model="newTodoField"
      id=""
    />
    <date-picker></date-picker>
  </form>
</template>

<script>
import DatePicker from './DatePicker.vue';

export default {
  components: { DatePicker },
  data() {
    return {
      newTodoField: '',
      todoKey: 0,
    };
  },
  emits: ['todoSent'],
  methods: {
    sendTodo() {
      if (this.newTodoField.length === 0) {
        alert('You cant add empty entries');
        return false;
      }
      this.$emit('todoSent', this.todo);
      this.newTodoField = '';
      this.todoKey++;
    },
  },
  computed: {
    todo() {
      return {
        content: this.newTodoField,
        key: this.todoKey,
        isdragged: false,
      };
    },
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

<template>
  <div class="dropdown" @click="listVisible = !listVisible">
    <span class="dropdown__selected">{{ selectedItemLabel }}</span>
    <div v-show="listVisible" class="dropdown__list" name="index" id="">
      <span
        class="dropdown__item"
        v-for="(item, index) in items"
        :key="index"
        :value="index"
      >
        {{ item }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
    selectedItemIndex: String
  },
  data() {
    return {
      listVisible: false,
    };
  },
};
</script>

<style lang="scss">
@use '../variables.scss' as var;

.dropdown {
  position: relative;
  cursor: pointer;

  &__list {
    display: inline;
    display: flex;
    flex-direction: column;
    position: absolute;
  }
}
</style>

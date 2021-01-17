<template>
  <div class="dropdown" @click="toggleDropdown">
    <span class="dropdown__selected">{{ items[selectedItemIndex] }}</span>
    <div v-show="listVisible" class="dropdown__list" name="index" id="">
      <span
        class="dropdown__item"
        v-for="(item, index) in items"
        :key="index"
        :value="index"
        @click="$emit('select', index)"
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
    selectedItemIndex: Number,
  },
  emits: ['select'],
  data() {
    return {
      listVisible: false,
    };
  },
  methods: {
    toggleDropdown(event1) {
      let toggleDropdown = true;
      console.log(this.listVisible);
      
      if (!this.listVisible) {
        window.addEventListener('click', function(event2) {
          if (!event1.target.contains(event2.target)) {
            toggleDropdown = false;
            console.log(this.listVisible);
          }
        });
      } else {
        window.removeEventListener('click');
      }
      console.log(toggleDropdown);
      this.listVisible = toggleDropdown;
    },
    setListVisability() {
      this.listVisible = false;
    }
  },
};
</script>

<style lang="scss">
@use '../variables.scss' as var;

.dropdown {
  position: relative;
  cursor: pointer;
  padding: 5px 15px;
  color: white;

  &__list {
    display: inline;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    background-color: var.$color_background;
    z-index: 1;
    height: 150px;
    overflow-y: scroll;
  }

  &__item {
    padding: 5px 15px;
  }
}
</style>

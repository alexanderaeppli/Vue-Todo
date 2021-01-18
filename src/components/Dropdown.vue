<template>
  <div class="dropdown" @click="toggleDropdown" ref="dropdown">
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
    toggleDropdown() {
      const self = this;
      
      function eventListenerFunction(event) {
        if (!self.$refs['dropdown'].contains(event.target)) {
          self.listVisible = false;
          console.log('click');
          document.removeEventListener('click', eventListenerFunction, false);
        }
      }

      if (!this.listVisible) {
        this.listVisible = true;
        document.addEventListener('click', eventListenerFunction, false);
      } else {
        this.listVisible = false;
      }
    },
  },
  watch: {
    listVisible() {
      if (!this.listVisible) {
        console.log('watcher');
      }
    },
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

export default {
  data() {
    return {
      menuVisible: false
    };
  },
  methods: {
    toggleMenu(ref, toggleProperty) {
      
      function eventHandler(event) {
        if (!ref.contains(event.target)) {
          this.menuVisible = false;
          document.removeEventListener('click', eventHandler, false);
        }
      }

      if (this.menuVisible) {
        this.menuVisible = true;
        document.addEventListener('click', eventHandler, false);
      } else {
        this.menuVisible = false;
        document.removeEventListener('click', eventHandler, false);
      }

      this.toggleMenuCalback();
    },

    toggleMenuCalback() {

    }
  }
};
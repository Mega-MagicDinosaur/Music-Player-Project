<template> <!-- maybe later add emit to close dropdown, or add state to vuex store -->
  <div
    class="dropdown-menu"
    :class="toggled ? 'dropdown-active' : 'dropdown-inactive'">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'MainHeader', 
  props: {
    toggled: Boolean
  },
  setup(props) {

    return {}
  }
})
</script>

<style lang="scss">

.dropdown-menu {
  transition: all .5s;
  z-index: 1;

  height: 280px;

  background: var(--ion-toolbar-background);


  &.dropdown-active { 
    transform: translateY(0px);

    box-shadow: 0px 0px 20px 2px #000000;
  }
  &.dropdown-inactive { 
    z-index: 0;
    transform: translateY(-100%);

    box-shadow: 0px 0px 0px 0px #000000;
  }
}
</style>
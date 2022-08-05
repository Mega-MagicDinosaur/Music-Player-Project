<template>
    <ion-header :translucent="true" class="page-header">
      <ion-toolbar class="header-navbar">
        <ion-searchbar class="search-bar" 
        show-cancel-button="never"
        placeholder="Find a Song"
        inputmode="text"
        value=""></ion-searchbar>
        <ion-buttons slot="end">
          
          <ion-button
          @click="fav_filter_toggle"
          shape="round"
          size="large"
          class="icon-button fav-button"
          :class="fav_filter ? 'fav-button-active' : 'fav-button-inactive'">
            <ion-icon 
            :icon="fav_filter ? star : starOutline" 
            slot="icon-only" ></ion-icon>
          </ion-button>

          <ion-button
          @click="() => { dropdown_toggle = !dropdown_toggle }"
          shape="round"
          size="large"
          class="icon-button dropdown-button"
          :class="dropdown_toggle ? 'dropdown-active' : 'dropdown-inactive'">
            <ion-icon 
            :icon="chevronDownCircleOutline" 
            slot="icon-only" ></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>

      <!-- create custom component for dropdown -->
      <main-dropdown :toggled="dropdown_toggle"></main-dropdown>
    </ion-header>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useStore } from 'vuex'
import MainDropdown from './MainDropdown.vue';
import { IonHeader, IonToolbar, IonSearchbar, IonIcon, IonButton, IonButtons } from '@ionic/vue';
import { chevronDownCircleOutline, starOutline, star } from "ionicons/icons";

export default defineComponent({
  name: 'MainHeader',
  components: {
    IonHeader,
    IonToolbar,
    IonSearchbar,
    IonIcon,
    IonButton,
    IonButtons,

    MainDropdown
  },
  setup() {
    const store = useStore()

    // variables
    const dropdown_toggle = ref(false)
    const fav_filter_toggle = ref(false)

    return {
      // vars
      dropdown_toggle,

      // functions
      fav_filter_toggle: () => store.commit('toggle_fav_filter', store.state.fav_filter_toggle),

      // computed
      fav_filter: computed(() => store.state.fav_filter_toggle),

      // icons
			chevronDownCircleOutline,
      starOutline,
      star
    };
  }
});
</script>

<style lang="scss">
.page-header {
  height: 80px;
}
.header-navbar {
  display: flex;
  justify-content: center;

  white-space:nowrap;
  
  height: 80px;
}
.search-bar { // find how to access search-bar icon
  float: left;

  width: 90%;
  min-width: 150px;

  margin-left: 15px;

  .searchbar-input { // 
    padding-inline-start: 15px;
    padding-inline-end: 35px;
  }

  // important is used to remove icon when searchbar is focused
  >*>ion-icon:first-of-type { display: none !important; }

  //button ion-icon { display: inline-block !important; }
}

.icon-button {
  --padding-top: 0px !important;
  --padding-bottom: 0px !important;
  --padding-end: 0px !important;
  --padding-start: 0px !important;

  font-size: 20px !important;

  transition: transform .5s;
}

.fav-button {
  &.fav-button-active { color: #FFCD3C; }
  &.fav-button-inactive { transform: rotate(0deg); }
}

.dropdown-button {
  &.dropdown-active { transform: rotate(180deg); }
  &.dropdown-inactive { transform: rotate(0deg); }
}
</style>
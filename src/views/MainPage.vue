<template>
  <ion-page class="page-container">
    <main-header></main-header>
    
    <main-content></main-content>

    <!-- settings button -->
    <ion-fab class="settings-button-container" vertical="bottom" horizontal="start" slot="fixed">
      <ion-fab-button class="settings-button">
        <ion-icon class="settings-icon" :icon="settingsSharp"></ion-icon>
      </ion-fab-button>
    </ion-fab>

    <ion-fab class="add-button-container" vertical="bottom" horizontal="end" slot="fixed">
      <ion-fab-button class="add-button">
        <ion-icon class="add-icon" :icon="add"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import MainHeader from '../components/main/MainHeader.vue'
import MainContent from '../components/main/MainContent.vue'

import { IonPage, IonFab, IonFabButton, IonIcon } from '@ionic/vue';
import { settingsSharp, add } from "ionicons/icons";

export default defineComponent({
  name: 'HomePage',
  components: {
    IonPage,
    MainHeader,
    MainContent,
    IonFab,
    IonFabButton,
    IonIcon,
  },
  setup() {
    return {
      // icons
      settingsSharp,
      add
    }
  }
});
</script>

<style scoped lang="scss">
.settings-button-container {
  transform: translateX(-33px) translateY(33px) scale(1.6) rotate(45deg);
}
.settings-button {
  --background: var(--ion-background-color);
  --box-shadow: 0px 0px 15px 3px #000000;
}
.settings-icon {
  font-size: 50px;
  color: var(--ion-color-step-700);
}

.add-button-container {}
.add-button {
  --background: #FFCD3C;
  --box-shadow: 0px 0px 15px 3px #000000;
}
.add-icon {
  font-size: 40px;
}
</style>

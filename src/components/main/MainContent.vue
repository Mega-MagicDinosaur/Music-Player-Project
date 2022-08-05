<template>
    <ion-content class="page-content" :fullscreen="true">
      <ion-slides 
      @ion-slide-did-change="slide"
      class="slides">
        <ion-slide>
          <div>
            <h1>Songs</h1>
            <h1>{{ fav_filter_toggle }}</h1>
            <h1>Songs</h1>
          </div>
        </ion-slide>
        <ion-slide>
          <h1>Playlists</h1>
        </ion-slide>
      </ion-slides>
    </ion-content>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import { defineComponent, computed } from 'vue';
import { IonContent, IonSlides, IonSlide } from '@ionic/vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonSlides,
    IonSlide,
  },
  setup() {
    const store = useStore()
    return {
      slide: () => {
        const new_slide = store.state.current_slide == 0 ? 1 : 0
        store.commit('set_current_slide', new_slide)
      },

      fav_filter_toggle: computed(() => store.state.fav_filter_toggle),
    }
  }
});
</script>

<style lang="scss">
.slides {
  width: 100%;
  height: 100%;
  
  text-align: center;
}
</style>
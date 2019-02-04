<template>
  <div
  :class="{
    'home-active active'      : (page === 'index'),
    'heroes-active active'      : (page === 'heroes'),
    'villains-active active'      : (page === 'villains'),
  }">
    <navigation></navigation>
    <nuxt/>
    <div>
      <heroes></heroes>
      <villains></villains>
      <terrain></terrain>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

// Common components will not need to reload when switching routes
import navigation from '~/components/Navigation.vue';
import terrain from '~/components/Terrain.vue';
import heroes from '~/components/heroes.vue';
import villains from '~/components/villains.vue';

export default {
  components: {
    navigation,
    terrain,
    heroes,
    villains
  },
  computed: mapState(['page'])
};
</script>

<style lang="scss">
</style>

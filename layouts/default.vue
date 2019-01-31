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
      <terrain></terrain>
    </div>
  </div>
</template>

<script>
import navigation from '~/components/Navigation.vue';
import { mapState } from 'vuex';
import terrain from '~/components/Terrain.vue';

export default {
  components: {
    navigation,
    terrain
  },
  computed: mapState(['page'])
};
</script>

<style lang="scss">
</style>

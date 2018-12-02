<template>
  <div
  :class="{
    'home-active active'      : (page === 'index'),
  }">
    <!-- <navigation></navigation> -->
    <nuxt/>
  </div>
</template>

<script>
import navigation from '~/components/Navigation.vue';
import { mapState } from 'vuex';

export default {
  // components: {
  //   navigation
  // },
  computed: mapState(['page'])
};
</script>

<style lang="scss">
.fadeOpacity-enter-active {
  transition: all 500ms ease-out;
}

.fadeOpacity-enter {
  opacity: 0;
}

.fadeOpacity-leave-active {
  transition: all 250ms ease-out;
}

.fadeOpacity-leave-active {
  opacity: 0;
}
</style>

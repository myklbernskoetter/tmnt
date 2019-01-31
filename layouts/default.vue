<template>
  <div
  :class="{
    'home-active active'      : (page === 'index'),
    'heroes-active active'      : (page === 'heroes'),
  }">
    <navigation></navigation>
    <nuxt/>
  </div>
</template>

<script>
import navigation from '~/components/Navigation.vue';
import { mapState } from 'vuex';

export default {
  components: {
    navigation
  },
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

.start-button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 5rem;
  margin: 0;

  button {
    background-color: #619939;
    color: white;
    border-radius: 0.5rem;
    border: none;
    font-size: 2.6rem;
    font-weight: bold;
    margin: 1rem;

    &:hover,
    &:focus {
      background-color: darken(#619939, 15%);
    }
    &:active {
      background-color: darken(#619939, 35%);
    }
  }
}
</style>

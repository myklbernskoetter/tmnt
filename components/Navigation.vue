<template>
  <nav class="site-nav">
    <ul class="site-nav-container">
      <li class="menu-item"><nuxt-link class="menu-link" exact to="/heroes">Heroes</nuxt-link></li>
      <li class="menu-item"><nuxt-link class="menu-link" exact to="/villians">Villians</nuxt-link></li>
    </ul>
  </nav>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState(['page']),
  methods: {
    panelClose() {
      this.$nuxt.$emit('panelClose');
    }
  }
};
</script>

<style lang="scss">
.site-nav {
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  transform: translateY(-100%);
  animation: drop-in-mobile 500ms linear forwards;
  animation-delay: 1000ms;
  color: white;
  background-color: black;
  z-index: 10;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 0.2rem;
    background-color: var(--color-black);
  }

  @media screen and (min-width: 640px) {
    transform: translateY(0);
    animation: none;

    &::after {
      display: none;
    }
  }
}

.nav-close-button {
  width: var(--block);
  height: var(--block);
}

.site-nav-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 107rem;
  margin: auto;
  padding: 0;
  list-style: none;
  background-color: var(--color-white);

  @media screen and (min-width: 640px) {
    flex-wrap: nowrap;
    justify-content: space-between;
    background-color: var(--color-black);
    box-shadow: none;
  }
}

a.menu-link {
  flex-grow: 1;
  min-width: 12rem;
  text-align: center;
  display: inline-block;
  padding: 1rem 1rem;
  overflow: hidden;
  transition: all 250ms;
  font-family: var(--font-opensans);
  font-size: 2rem;
  text-decoration: none;
  color: white;

  &:hover,
  &:focus {
    color: var(--color-yellow);
  }

  @media screen and (min-width: 640px) {
    color: var(--color-white);
    background-color: var(--color-black);
    &:hover,
    &:focus {
      color: var(--color-yellow);
    }
  }
}

.menu-wrapper {
  display: flex;
  align-items: flex-end;
}
</style>

<template>
  <nav class="site-nav">
    <div class="site-nav-container">
      <div class="menu-wrapper">
        <nuxt-link class="menu-link" exact to="/">Home</nuxt-link>
        <nuxt-link class="menu-link" to="/about">About</nuxt-link>
        <nuxt-link class="menu-link" to="/experiments">Show</nuxt-link>
        <nuxt-link class="menu-link" to="/production">... And Tell</nuxt-link>
        <nuxt-link class="menu-link" to="/contact">Contact</nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState(['page'])
}
</script>

<style lang="scss">

  .site-nav {
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 2;
    // background-color: var(--color-white);
  }

  .nav-close-button {
    width: var(--block);
    height: var(--block);
  }

  .site-nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 107rem;
    margin: auto;
  }

  a.menu-link {
    display: inline-block;
    padding: 1rem 1rem;
    font-size: 1.6rem;
    overflow: hidden;
    transition: all 250ms;
    font-family: var(--font-kollektif);
    font-size: 2.5rem;
    text-decoration: none;
    color: var(--color-white);
    background-color: var(--color-black);

    &:hover,
    &:focus {
      color: var(--color-yellow);
      padding-bottom: 2rem;
    }
  }

  .menu-wrapper {
    display: flex;
    align-items: flex-end;
  }
</style>

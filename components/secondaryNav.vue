<template>
  <nav class="nav">
    <ul class="secondary-nav-container">
      <li class="menu-item first"
      >
        <nuxt-link class="menu-link" exact to="/" >
          <span class="nuxt-text">Home</span>
        </nuxt-link>
      </li>
      <li class="menu-item first"
      >
        <nuxt-link class="menu-link" exact to="/heroes" >
          <span class="nuxt-text">Heroes</span>
        </nuxt-link>
      </li>
      <li class="menu-item second">
        <nuxt-link class="menu-link" exact to="/villains">
          <span class="nuxt-text">Villians</span>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState(['page']),
  data: function() {
    return {
      selected: null,
      heroesImg: '/images/tmnt1.jpg'
    };
  },
  methods: {
    panelClose() {
      this.$nuxt.$emit('panelClose');
    }
  }
};
</script>

<style lang="scss">
$mq-tiny: 0;
$mq-mini: 480px;
$mq-small: 600px;
$mq-medium: 768px;
$mq-large: 1020px;
$mq-xlarge: 1230px;
$mq-xxlarge: 1320px;
$mq-xxxlarge: 1640px;

.nav {
  position: fixed;
  top: 0;
  width: 100%;
  transform: translateY(0);
  transition: all 500ms linear;
  z-index: 5;

  .home-active & {
    transform: translateY(-110%);
  }

  .secondary-nav-container {
    display: flex;
    justify-content: flex-end;
    margin: 0;
    width: 100%;
    padding: 0;
    list-style: none;

    .menu-item {
      .menu-link {
        padding: 0.5rem 2rem;
        color: #fff;
        background-color: #8FD129;
        transition: all 250ms;
        text-decoration: none;
        font-size: 2.2rem;
        font-weight: bold;
        text-transform: uppercase;

        &:hover,
        &:focus {
          color: #fff;
          background-color: darken(#8FD129, 15%);
          text-decoration: underline;
        }
        &:active {
          background-color: darken(#8FD129, 35%);
        }
      }
    }
  }
}
</style>

<template>
  <nav class="site-nav">
    <ul class="site-nav-container">
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

.site-nav {
  position: absolute;
  opacity: 0;
  z-index: -1;
  transition: all 500ms linear;
  transition-delay: 500ms;

  .first {
    transform: translateX(-100%);
    transition: transform 500ms linear;
  }

  .second {
    transform: translateX(100%);
    transition: transform 500ms linear;
  }

  .home-active & {
    display: block;
    opacity: 1;
    z-index: 1;
    transition: all 500ms linear;
    transition-delay: 0;

    .first {
      transform: translateX(0);
    }

    .second {
      transform: translateX(0);
    }
  }
}

.site-nav-container {
  display: grid;
  grid-template-rows: 5rem 1fr 1fr;
  grid-template-areas:
    'main1'
    'main2'
    'footer';
  margin: 0;
  width: 100vw;
  min-height: 100vh;
  padding: 0;
  list-style: none;
  z-index: 10;

  @media (min-width: $mq-medium) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-template-areas:
      'main1 main2'
      'footer footer';
  }
}

.h1 {
  grid-area: title;
}

.first {
  grid-area: main1;
  background-color: var(--color-button-green);
  background-image: url('~assets/tmnt2.jpg');
  background-repeat: no-repeat;
  background-size: cover;

  .menu-link {
    color: white;
    font-size: 5rem;
    font-weight: bold;
    background-color: rgba(0, 0, 0, 0.1);
  }
}

.second {
  grid-area: main2;
  background-color: var(--color-black);
  background-image: url('~assets/shredder.jpg');
  background-repeat: no-repeat;
  background-size: cover;

  .menu-link {
    color: white;
    font-size: 5rem;
    font-weight: bold;
    background-color: rgba(0, 0, 0, 0.2);
  }
}

.start-button {
  grid-area: footer;
}

.menu-item {
  display: flex;
  justify-content: center;
  align-items: center;
}

a.menu-link {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-self: stretch;
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
    color: var(--color-white);
  }
}
</style>

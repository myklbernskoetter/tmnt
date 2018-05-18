<template lang="html">
  <div class="container">
    <div class="split-page">
      <div class="title-wrapper">
        <h1 class="page-title">Experimental<br>
          Opportunities
        </h1>
      </div>
      <div class="page-detail-wrapper">
        <div class="page-detail">
          <div class="featured-experiment">
            <img src="~/assets/images/featured-experiement-image1.png" alt="">
            <button type="button" v-on:click="activeExperiment = 'light-array', active = true" name="button">Explore</button>
          </div>
        </div>
      </div>
    </div>
    <div class="experiment-panels" v-bind:class="{active: active}">
      <div class="light-array" v-show="activeExperiment === 'light-array'">
        <button class="close-button" type="button" name="button" v-on:click="closePanel()">Close</button>
        <app-light-array></app-light-array>
      </div>
    </div>
  </div>
</template>

<script>
import lightArray from '../components/experiments/light-array.vue';

export default {
  data() {
    return {
      active: false,
      activeExperiment: '',
    }
  },
  components: {
    'app-light-array': lightArray,
  },
  methods: {
    closePanel() {
      this.active = false;
      setTimeout(function(){
        this.activeExperiment = '';
       }, 1000);

    }
  }
}
</script>1

<style lang="scss">

.experiment-panels {
  position: fixed;
  top: 0;
  border-left: .1rem solid var(--color-black);
  width: 100vw;
  height: 100vh;
  transform: translateX(110%);
  transition: all 1000ms;
  background-color: var(--color-white);

  &.active {
    transform: translateX(0);
  }
}

.close-button {
  z-index: 1;
}
</style>

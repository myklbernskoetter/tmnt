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
          <ul class="experiments-list">
            <li class="list-item">
              <button class="item-toggle" type="button" name="button">Experiment 1 Name</button>
              <div class="item-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                <span>
                  <button type="button" name="button" v-on:click="activeExperiment = 'experiment-2', active = true">Explore</button>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="experiment-panels" v-bind:class="{active: active}">
      <div class="panel-header">
        <button class="close-button" type="button" name="button" v-on:click="closePanel()">Close</button>
      </div>
      <div class="light-array" v-if="activeExperiment === 'light-array'">
        <div class="panel-content">
          <app-light-array></app-light-array>
        </div>
      </div>

      <div class="experiment-2" v-if="activeExperiment === 'experiment-2'">
        test 2
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

.experiments-list {
  margin: 2.5rem 0 0;
  padding: 0;
  list-style: none;

  .list-item {
    margin-bottom: 2.5rem;
  }
}

.item-toggle {
  width: 90%;
  color: var(--color-black);
  background-color: white;
  border: .2rem solid var(--color-black);

  &:hover,
  &:focus {
    background-color: var(--color-grey);
  }
}
</style>

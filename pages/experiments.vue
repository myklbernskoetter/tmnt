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
            <button type="button" v-on:click="featuredActive()" name="button">Explore</button>
          </div>
          <ul class="experiments-list">
            <transition-group name="toggle-open">
              <li class="list-item" v-for='(item, index) in experiments' :key='index' v-bind:class="{'item-open': openListItem == index}">
                <button class="item-toggle" v-on:click="openListItem = index" type="button" name="button">
                  {{item.name}}
                  <svg viewbox="0 0 100 100" class="svg-1">
                    <path class="path-1" stroke-width="10" fill="none" d="M10 70 L50 10"></path>
                    <path class="path-2" stroke-width="10" fill="none" d="M90 70 L50 10"></path>
                  </svg>
                </button>
                <div class="item-description" v-show="openListItem == index">
                  <p>{{item.blurb}}</p>
                  <div>
                    <button type="button" name="button" v-on:click="populatePanel(index)">Explore</button>
                  </div>
                </div>
              </li>
            </transition-group>
          </ul>
        </div>
      </div>
    </div>
    <div class="experiment-panels" v-bind:class="{active: active}">
      <div class="panel-header">
        <h2 class="panel-title headline-2">{{activeExperiment}}</h2>
        <button class="close-button" type="button" name="button" v-on:click="closePanel()">Close</button>
      </div>
      <div class="experiment-description">
        {{experiments[indexActive].description}}
      </div>
      <div class="light-array" v-if="activeExperiment === 'light-array'">
        <div class="panel-content">
          <app-light-array></app-light-array>
        </div>
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
      indexActive: 0,
      openListItem: '',
      experiments: [
        {name: 'experiment1', description: 'description1', blurb: 'blurb'},
        {name: 'experiment2', description: 'description2', blurb: 'blurb'},
        {name: 'experiment3', description: 'description3', blurb: 'blurb'},
        {name: 'experiment4', description: 'description4', blurb: 'blurb'},
        {name: 'experiment5', description: 'description5', blurb: 'blurb'},
      ]
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
    },
    populatePanel(index) {
      const setIndex = index;
      this.activeExperiment = this.experiments[setIndex].name;
      this.active = true;
      this.indexActive = setIndex;
    },
    featuredActive() {
      this.activeExperiment = 'light-array';
      this.active = true;
      this.openListItem = 'light-array';
      this.indexActive
    }
  }
}
</script>

<style lang="scss">

.experiment-panels {
  position: fixed;
  top: 0;
  border-left: .1rem solid var(--color-black);
  box-shadow: -5px 0px 8px -1px rgba(0,0,0,0.75);
  width: 100vw;
  height: 100vh;
  padding: 5rem;
  transform: translateX(110%);
  transition: all 1500ms;
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
  border-bottom: .2rem solid var(--color-black);

  .list-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 auto 2.5rem;
    border: .2rem solid var(--color-black);
    width: 90%;
  }
}

.item-open {
  padding-bottom: 2.5rem;
}

.item-toggle {
  width: 100%;
  border: none;
  color: var(--color-black);
  background-color: white;

  &:hover,
  &:focus {
    background-color: var(--color-pale-yellow);
  }

  .active & {
    &:hover,
    &:focus {
      background-color: var(--color-white);
    }
  }
}

.item-description {
  padding: 0 2.5rem;
}

.toggle-open-enter-active {
  transition: all 500ms ease-out;
}

.toggle-open-enter {
  opacity: 0;
}

.toggle-open-leave-active {
  transition: all 250ms ease-out;
}

.toggle-open-leave-active {
  opacity: 0;
}

.svg-1 {
  position: absolute;
  right: 2.5rem;
  width: 4rem;
  height: 3rem;

  &:hover {
    .path-1 {
      d: path("M10 30 L50 80");
    }
    .path-2 {
      d: path("M90 30 L50 80");
    }

    path {
      stroke: var(--color-orange);
    }
  }

  .item-open & {

    .path-1 {
      d: path("M10 10 L90 90");
    }
    .path-2 {
      d: path("M90 10 L10 90");
    }

    &:hover {
      .path-1 {
        d: path("M10 70 L50 10");
      }
      .path-2 {
        d: path("M90 70 L50 10");
      }
    }
  }
}


svg polyline,
svg line,
svg path {
  fill: none;
  stroke: #000;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: 0.2s;
}

</style>

<template lang="html">
  <div class="container">
    <div class="split-page" v-bind:class="{movedAside: active === true}">
      <h1 class="page-title">
        Production<br>
        Work
      </h1>
      <div class="title-wrapper">
      </div>
      <div class="page-detail-wrapper">
        <div class="page-detail">
          <div class="featured-project">
            <div class="featured-image-wrapper"><img class="featured-image" src="~/assets/images/mulu-bottle-1.png" alt=""></div>
            <h2 class="featured-title">DFA: World Milk Day</h2>
            <button class="featured-button" type="button" v-on:click="featuredActive()" name="button">Explore</button>
          </div>
          <p class="featured-blurb">
            Dairy Farmer's of America wanted to have a little fun with
            World Milk Day on June 1, 2018. Together with Barkley they developed
            the idea for a 'new' power-drink. Mülü was born.
          </p>
          <ul class="projects-list">
            <transition-group name="fadeOpacity">
              <li class="list-item" v-for='(item, index) in projects' :key='index' v-bind:class="{'item-open': openListItem == index}">
                <button class="item-toggle" v-on:click="populatePanel(index)" type="button" name="button">
                  <span class="item-background" v-bind:style="{ backgroundImage: `url(/images/list-items/${item.image})` }"></span>
                  <span class="item-title">{{item.name}}</span>
                  <svg viewBox="0 0 100 100" class="svg-1">
                    <path class="path-1" stroke-width="13" fill="none" d="M10 70 L50 10" />
                    <path class="path-2" stroke-width="13" fill="none" d="M90 70 L50 10" />
                  </svg>
                </button>
              </li>
            </transition-group>
          </ul>
        </div>
      </div>
    </div>
    <div class="project-panels" v-bind:class="{active: active}">
      <muluPanel @closePanel ="closePanel()" v-if="activeProject === 'mulu'" />
      <c3Panel @closePanel ="closePanel()" v-if="activeProject === 'C3'" />
      <experimentsPanel @closePanel ="closePanel()" v-if="activeProject === 'Experiments'" />
      <futurecastPanel @closePanel ="closePanel()" v-if="activeProject === 'FutureCast'" />
      <kesselrunPanel @closePanel ="closePanel()" v-if="activeProject === 'Barkley KesselRun UI'" />
      <nbhPanel @closePanel ="closePanel()" v-if="activeProject === 'nbh'" />
      <pizzapatronPanel @closePanel ="closePanel()" v-if="activeProject === 'Pizza Patrón'" />
      <quahogbayPanel @closePanel ="closePanel()" v-if="activeProject === 'quahogbay'" />
    </div>
  </div>
</template>

<script>
import c3Panel from '~/components/workPanels/c3.vue';
import experimentsPanel from '~/components/workPanels/experiments.vue';
import futurecastPanel from '~/components/workPanels/futurecast.vue';
import kesselrunPanel from '~/components/workPanels/kesselrun.vue';
import muluPanel from '~/components/workPanels/mulu.vue';
import nbhPanel from '~/components/workPanels/nbh.vue';
import pizzapatronPanel from '~/components/workPanels/pizzapatron.vue';
import quahogbayPanel from '~/components/workPanels/quahogbay.vue';

export default {
  data() {
    return {
      active: false,
      activeProject: '',
      indexActive: 0,
      openListItem: '',
      projects: [
        {name: 'FutureCast', alt: 'alt text', blurb: 'blurb', image: 'futurecast-hero-1.jpg', color: '#0093d3'},
        {name: 'nbh', alt: 'alt text', blurb: 'blurb', image: 'bmw-item-image-1.jpg'},
        {name: 'RGA GUM', alt: 'alt text', blurb: 'blurb', image: 'rga-item-image-1.jpg'},
        {name: 'C3', alt: 'alt text', blurb: 'blurb', image: 'c3-item-image-1.jpg'},
        {name: 'Pizza Patrón', alt: 'alt text', blurb: 'blurb', image: 'pizza-patron-image-1.jpg'},
        {name: 'quahogbay', alt: 'alt text', blurb: 'blurb', image: 'quahogbay-image-1.jpg'},
        {name: 'Barkley KesselRun UI', alt: 'alt text', blurb: 'blurb', image: 'futurecast-hero-1.jpg'},
        {name: 'Experiments', alt: 'alt text', blurb: 'blurb', image: 'futurecast-hero-1.jpg'},
      ]
    }
  },
  components: {
    c3Panel,
    experimentsPanel,
    futurecastPanel,
    kesselrunPanel,
    muluPanel,
    nbhPanel,
    pizzapatronPanel,
    quahogbayPanel,
  },
  methods: {
    closePanel() {
      this.active = false;
      setTimeout(function(){
        this.activeProject = '';
       }, 1000);
    },
    populatePanel(index) {
      const setIndex = index;
      this.activeProject = this.projects[setIndex].name;
      this.active = true;
      this.indexActive = setIndex;
    },
    featuredActive() {
      this.activeProject = 'mulu';
      this.active = true;
      this.openListItem = 'mulu';
      this.indexActive
    },
    toggleListItem(index) {

      const setIndex = index;
      if(this.openListItem == setIndex) {
        this.openListItem = null;
      } else {
        this.openListItem = setIndex;
      }
    }
  },
  beforeMount() {
    this.openListItem = null;
  }
}
</script>

<style lang="scss" scoped>

.page-title {
  padding-bottom: 2rem;

  @media screen and (min-width: 768px) {
    position: fixed;
    top: 50%;
    left: 15%;
    transform: translateX(-15%) translateY(-50%);
    text-align: center;
  }
}

.moved-aside {
  transition: all 1000ms;
  transform: translateX(-100%);
}

.close-button {
  z-index: 1;
}

.featured-project {
  padding-bottom: 2.5rem;

  @media screen and (min-width: 920px) {
    padding-bottom: 0;
    border-bottom: 0;
  }
}

.featured-image-wrapper {
  overflow-X: hidden;
}

.featured-image {
  transition: transform 5000ms;
  &:hover,
  &:focus {
    transform: scale(1.2);
  }
}

.featured-title {
  padding: 0 2.5rem 0;

  @media screen and (min-width: 728px) {
    position: absolute;
    bottom: 0;
    left: 2.5rem;
    border-top: .2rem solid black;
    border-bottom: .2rem solid black;
  }
}

.featured-button {
  margin-left: 2.5rem;

  @media screen and (min-width: 728px) {
    position: absolute;
    right: 2.5rem;
    bottom: 3rem;
  }
}

.featured-blurb {
  padding: 0 2.5rem 5rem;
}

.page-detail {
  padding: 0;
}

.projects-list {
  margin: 0;
  padding: 0;
  list-style: none;
  border-bottom: .2rem solid var(--color-black);

  .list-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-bottom: .2rem solid var(--color-black);
    width: 100%;

    &:first-child {
      border-top: .2rem solid var(--color-black);
    }

    &:last-child {
      border: none;
    }
  }
}

.item-open {
  padding-bottom: 2.5rem;
}

.item-toggle {
  width: 100%;
  border: none;
  margin-bottom: .2rem;
  padding: 12rem;
  color: var(--color-black);
  background-color: white;

  .item-background {
    display: block;
    width: 45%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0% 0%;
    filter: grayscale(45%);
    transition: all 500ms;
    box-shadow: inset -49px 2px 30px 0px rgba(255,255,255,1);
  }

  &:hover,
  &:focus {
    color: var(--color-orange);
    background-color: var(--color-pale-yellow);

    .svg-1 {
      transform: rotate(90deg) translateY(0);
    }

    path {
      stroke: var(--color-orange);
    }

    .item-background {
      width: 50%;
      filter: grayscale(0%);
    }
  }

  .active & {
    &:hover,
    &:focus {
      background-color: var(--color-white);
    }
  }

  .item-open & {
    .path-1 {
      d: path("M10 10 L90 90");
    }
    .path-2 {
      d: path("M90 10 L10 90");
    }

    &:hover,
    &:focus {
      .path-1 {
        d: path("M10 70 L50 10");
      }
      .path-2 {
        d: path("M90 70 L50 10");
      }
    }
  }
}

@mixin increment-animation($time-default:250, $loops:1) {
  @for $i from 1 through $loops {
    &:nth-child(#{$i}) {
      animation-delay: $i * $time-default + ms;
    }
  }
}

.list-item {
  @include increment-animation(750, 9);

  .item-toggle {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-right: 10rem;
    transform: translateY(-1rem);
    opacity: 0;
    animation: fade-in-list-items 250ms linear forwards;
    animation-delay: inherit;
  }

  .item-title {
    display: block;
    width: 50%;
    animation: fade-in-list-items 250ms linear forwards;
    animation-delay: inherit;
    transform: translateY(-1rem);
    font-weight: 700;
    font-size: 2.2rem;
    opacity: 0;
  }
}

.slide-enter-active {
	animation: slide-in 0.5s;
}

.slide-leave-active {
	animation: slide-out 0.5s;
}

.svg-1 {
  position: absolute;
  right: 2.5rem;
  width: 3rem;
  height: 3rem;
  transform: rotate(90deg) translateY(1.5rem);
  transition: all 500ms;
}

.svg-1 polyline,
.svg-1 line,
.svg-1 path {
  fill: none;
  stroke: #000;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: 0.35s;
}
</style>

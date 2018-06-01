<template lang="html">
  <div class="work-container">
    <div class="split-page">
      <h1 class="page-title">
        Production
        Work
      </h1>
      <div class="title-wrapper">
      </div>
      <div class="page-detail-wrapper">
        <div class="page-detail">
          <!-- <div class="featured-project">
            <div class="featured-image-wrapper"><img class="featured-image" src="~/assets/images/mulu-bottle-1.png" alt=""></div>
            <h2 class="featured-title">DFA: World Milk Day</h2>
            <button class="featured-button" type="button" v-on:click="featuredActive()" name="button">Explore</button>
          </div>
          <p class="featured-blurb">
            Dairy Farmer's of America wanted to have a little fun with
            World Milk Day on June 1, 2018. Together with Barkley they developed
            the idea for a 'new' power-drink. Mülü was born.
          </p> -->
          <ul class="projects-list">
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
          </ul>
        </div>
      </div>
    </div>
    <div class="project-panels" v-bind:class="{active: active}">
      <span class="close-icon">
        <button class="close-button" type="button" @click="closePanel()">
          <svg viewBox="0 0 100 100" class="svg-1">
            <path class="path-1" stroke-width="13" fill="none" d="M10 70 L50 10" />
            <path class="path-2" stroke-width="13" fill="none" d="M90 70 L50 10" />
          </svg>
          <span>Close</span>
        </button>
      </span>
      <muluPanel v-if="activeProject === 'mulu'" />
      <c3Panel v-if="activeProject === 'C3'" />
      <experimentsPanel v-if="activeProject === 'Experiments'" />
      <futurecastPanel v-if="activeProject === 'FutureCast'" />
      <kesselrunPanel v-if="activeProject === 'Barkley KesselRun UI'" />
      <nbhPanel v-if="activeProject === 'nbh'" />
      <pizzapatronPanel v-if="activeProject === 'Pizza Patrón'" />
      <quahogbayPanel v-if="activeProject === 'quahogbay'" />
      <rgaPanel v-if="activeProject === 'rga'" />
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
import rgaPanel from '~/components/workPanels/rga.vue';

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
        {name: 'rga', alt: 'alt text', blurb: 'blurb', image: 'rga-item-image-1.jpg'},
        {name: 'C3', alt: 'alt text', blurb: 'blurb', image: 'c3-item-image-1.jpg'},
        {name: 'Pizza Patrón', alt: 'alt text', blurb: 'blurb', image: 'pizza-patron-image-1.jpg'},
        {name: 'quahogbay', alt: 'alt text', blurb: 'blurb', image: 'quahogbay-image-1.jpg'},
      ]
    }
  },
    transition: 'fadeOpacity',
  components: {
    c3Panel,
    experimentsPanel,
    futurecastPanel,
    kesselrunPanel,
    muluPanel,
    nbhPanel,
    pizzapatronPanel,
    quahogbayPanel,
    rgaPanel,
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

.container {
  padding-top: 20rem;

  @media screen and (min-width: 768px) {
    padding-top: 15rem;
  }

  @media screen and (min-width: 1020px) {
    padding-top: 0rem;
  }
}

.page-title {
  display: flex;
  flex-direction: column;
  max-width: 75%;
  margin: 0 auto;
  padding-bottom: 2rem;
  transform: translateX(-100%) translateY(-50%);
  animation: split-in2 1000ms ease-out forwards;
  text-align: center;
  opacity: 0;


  @media screen and (min-width: 1020px) {
    position: fixed;
    top: 50%;
    left: 8%;
    transform: translateX(-15%) translateY(-50%);
    max-width: 32rem;
  }

  .title-line {
    display: inline-block;

    @media screen and (min-width: 768px) {
      display: block;
    }
  }
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
  padding: 10rem;
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
  @include increment-animation(250, 9);

  .item-toggle {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 3rem 5rem 3rem 0;
    transform: translateY(-1rem);
    opacity: 0;
    animation: fade-in-list-items 250ms linear forwards;
    animation-delay: inherit;

    @media screen and (min-width: 768px) {
      padding:5rem 5rem 5rem 0;
    }

    @media screen and (min-width: 1020px) {
      padding: 7rem 5rem 7rem 0;
    }
  }

  .item-title {
    display: block;
    width: 50%;
    animation: fade-in-list-items 250ms linear forwards;
    animation-delay: inherit;
    transform: translateY(-1rem);
    font-weight: 700;
    font-size: 1.8rem;
    opacity: 0;

    @media screen and (min-width: 768px) {
      font-size: 2.2rem;
    }
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

.close-icon {
  display: block;
  margin-top: 15rem;
  margin-left: 5rem;
  min-width: 20rem;
  height: 10rem;
  z-index: 3;

  @media screen and (min-width: 728px) {
    margin-top: 10rem;
  }

  .close-button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    fill: black;
    color: var(--color-black);
    background-color: transparent;
    border: none;
    font-size: 3rem;

    &:hover,
    &:focus {
      color: var(--color-dark-grey);
      svg {
        transform: rotate(-90deg) translateY(-1rem);
      }
    }
  }

  svg {
    position: relative;
    transform: rotate(-90deg) translateY(1rem);
  }
}
</style>

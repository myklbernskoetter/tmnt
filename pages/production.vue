<template lang="html">
  <div class="container">
    <div class="split-page" v-bind:class="{movedAside: active === true}">
      <div class="title-wrapper">
        <h1 class="page-title">Production<br>
          Work
        </h1>
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
            <transition-group name="slide" class="slide">
              <li class="list-item" v-for='(item, index) in projects' :key='index' v-bind:class="{'item-open': openListItem == index}">
                <button class="item-toggle" v-on:click="toggleListItem(index)" type="button" name="button">
                  <span class="item-title">{{item.name}}</span>
                  <svg viewBox="0 0 100 100" class="svg-1">
                    <path class="path-1" stroke-width="13" fill="none" d="M10 70 L50 10" />
                    <path class="path-2" stroke-width="13" fill="none" d="M90 70 L50 10" />
                  </svg>
                </button>
                <div class="item-description" v-if="openListItem == index" v-show="openListItem == index">
                  <div class="item-image">
                    <img v-bind:src="`/images/${item.image}`" />
                  </div>
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
    <div class="project-panels" v-bind:class="{active: active}">
      <div class="panel-header">
        <h2 class="panel-title headline-2">{{activeProject}}</h2>
        <button class="close-button" type="button" name="button" v-on:click="closePanel()">Close</button>
      </div>
      <div class="project-description">
        {{projects[indexActive].description}}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      active: false,
      activeProject: '',
      indexActive: 0,
      openListItem: '',
      projects: [
        {name: 'FutureCast', description: 'description1', blurb: 'blurb', image: 'futurecast-hero-1.png'},
        {name: 'NBH Bank', description: 'description2', blurb: 'blurb', image: 'bmw-item-image-1.png'},
        {name: 'RGA GUM', description: 'description3', blurb: 'blurb', image: 'rga-item-image-1.png'},
        {name: 'C3', description: 'description4', blurb: 'blurb', image: 'c3-item-image-1.png'},
        {name: 'Pizza Patrón', description: 'description5', blurb: 'blurb', image: 'pizza-patron-image-1.png'},
        {name: 'Quahog Bay', description: 'description5', blurb: 'blurb', image: 'quahogbay-image-1.png'},
        {name: 'Wingstop', description: 'description5', blurb: 'blurb', image: 'wingbot-image-1.png'},
        {name: 'Barkley KesselRun UI', description: 'description5', blurb: 'blurb', image: 'futurecast-hero-1.png'},
        {name: 'Experiments', description: 'description5', blurb: 'blurb', image: 'futurecast-hero-1.png'},
      ]
    }
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
      this.activeProject = 'DFA: Mülü';
      this.active = true;
      this.openListItem = 'DFA: Mülü';
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

.moved-aside {
  transition: all 1000ms;
  transform: translateX(-100%);
}

.project-panels {
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

.featured-project {
  padding-bottom: 2.5rem;
  border-bottom: .2rem solid var(--color-black);

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

  @media screen and (min-width: 920px) {
    position: absolute;
    bottom: 0;
    left: 2.5rem;
    border-top: .2rem solid black;
    border-bottom: .2rem solid black;
  }
}

.featured-button {
  @media screen and (min-width: 920px) {
    position: absolute;
    right: 2.5rem;
    bottom: 3rem;
  }
}

.featured-blurb {
  padding: 0 2.5rem;
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
  padding-top: 2.5rem;
  color: var(--color-black);
  background-color: white;

  &:hover,
  &:focus {
    color: var(--color-orange);
    background-color: var(--color-pale-yellow);

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
  @include increment-animation(500, 9);

  .item-toggle {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    animation-delay: inherit;
  }

  .item-title {
    display: block;
    transform: translateY(-1rem);
    opacity: 0;
    animation: fade-in-list-items 250ms linear forwards;
    animation-delay: inherit;
  }
}

.slide-enter-active {
	animation: slide-in 0.5s;
}

.slide-leave-active {
	animation: slide-out 0.5s;
}

@keyframes slide-in {
	0% {
		opacity: 0;
		transform: translateY(-50px);
	}

	100% {
		opacity: 1;
		transform: translateY(50px);
	}
}

@keyframes slide-out {
	0% {
		transform: translateY(50px);
	}

	100% {
		opacity: 0;
		transform: translateY(-50px)
	}
}

.svg-1 {
  right: 2.5rem;
  width: 3rem;
  height: 3rem;
}

.svg-1
.svg-1
.svg-1 {
  polyline,
  line,
  path {
    fill: none;
    stroke: #000;
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: 0.35s;
  }
}
</style>

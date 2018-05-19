<template>
  <div class="container">
    <div class="split-page">
      <div class="title-wrapper">
        <h1 class="headline-1 site-title" key="title">Mykl Bernskoetter</h1>
        <ul class="word-spinner" key="spinner">
          <li class="word" v-for='(item, index) in wordSpinner' :key='index' v-bind:class="{active: counter == index + 1}">{{item}}</li>
        </ul>
      </div>
      <div class="page-detail-wrapper">
        <div key="page-detail" class="home-image-wrapper"><img class="home-image" src="~/assets/images/frylord.jpg" alt=""></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  transition: 'fadeOpacity',
  data() {
    return {
      counter: 0,
      wordSpinner: [
        'Thinker',
        'Partner',
        'Planner',
        'Explorer',
        'Pathfinder',
        'Builder',
        'Digit',
        'Developer']
    }
  },
   beforeMount() {
     const self = this;
     this.intervalid1 = setInterval(function(){
       if (self.counter < 8) {
         self.counter++;
       } else {
         clearInterval(this.intervalid1);
       }
 }, 2000);
  }
}
</script>

<style lang="scss">

.site-title {
  padding: 0 2rem;

  &::before {
    content: '';
    display: block;
    position: absolute;
    bottom: -1rem;
    left: 0;
    width: 50vw;
    height: .1rem;
    background-color: var(--color-black);
    transform: scaleX(0);
    transform-origin: left;
    animation: frame-draw2 450ms linear forwards;
    animation-delay: 2000ms;
  }
}

.name {
  transform: translateY(0);
  transition: all 500ms;
  transition-delay: 500ms;
}

.home-active .name {
  height: 0;
  overflow: hidden;
  transform: translateY(-100%);
  transition-delay: initial;
  opacity: 0;
}

.word-spinner {
  display: flex;
  justify-content: center;
  list-style: none;

  .word {
    position: absolute;
    transform: translateY(100%);
    transition: all 500ms;
    font-family: var(--font-kollektif);
    font-size: 3.5rem;
    opacity: 0;

    &.active {
      transform: translateY(0);
      font-size: 4.5rem;
      opacity: 1;
    }
  }
}

.home-image {
  margin-left: .1rem;
  max-width: 108rem;
  animation: fade-in 500ms linear forwards;
  animation-delay: 1250ms;
  opacity: 0;
}

.home-image-wrapper {
  max-width: 60rem;
  margin: auto;

  &::before {
    content: '';
    display: block;
    position: absolute;
    bottom: .4rem;
    left: 0;
    width: 50vw;
    height: .1rem;
    background-color: var(--color-black);
    transform: scaleX(0);
    transform-origin: right;
    animation: frame-draw2 450ms linear forwards;
    animation-delay: 2000ms;
    z-index: 1;
  }

  @media screen and (min-width: 1020px) {
    max-width: none;
  }
}

</style>

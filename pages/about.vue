<template>
  <div class="container">
    <div class="split-page">
      <div class="title-wrapper">
        <h1 class="headline-1 page-title" key="title">About</h1>
        <div class="spinner-wrapper">
          <h2 class="values">Deep Thoughts</h2>
          <ul class="word-spinner" key="spinner">
            <li class="word" v-for='(item, index) in wordSpinner' :key='index' v-bind:class="{active: counter >= index + 1}">{{item}}</li>
          </ul>
        </div>
      </div>
      <div class="page-detail-wrapper">
        <div key="page-detail">
          <div class="quote-wrapper">
            <p class="quote">
              "Mykl has gone above and beyond to both perfect his craft and be an
              encouraging presence every day. He’s great on a team and trusted on
              his own, making him someone you want on your side when it comes time
              to #shipit!"<br/>
              - CK Hicks, Lead Developer at Barkley Interactive
              </p>
          </div>
          <div class="skills">
            <h2>Skills:</h2>
            <ul class="skills-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript: ES6</li>
              <li>npm</li>
              <li>jQuery</li>
              <li>Vue</li>
              <li>Webpack</li>
              <li>Atom / Sublime 3</li>
            </ul>
          </div>
        </div>
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
        'Always be learning',
        'Be humble and approachable',
        'Positivity and good humor can do amazing things',
        'Balance in all things',
        'We don\'t know what we don\'t know'
      ]
    }
  },
   beforeMount() {
     const self = this;
     this.intervalid1 = setInterval(function(){
       if (self.counter < 6) {
         self.counter++;
       } else {
         clearInterval(this.intervalid1);
       }
 }, 2000);
  }
}
</script>

<style lang="scss" scoped>

.spinner-wrapper,
.headline-1 {
  height: 50%;
}

.headline-1 {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 0;
  padding: 0 2rem;

  &::before {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: .2rem;
    background-color: var(--color-black);
    transform: scaleX(0);
    transform-origin: left;
    animation: frame-draw2 450ms linear forwards;
    animation-delay: 2000ms;
  }
}

.spinner-wrapper {
  @media screen and (min-width: 1020px) {
    background-color: var(--color-white);
    animation: background-in 2000ms ease-out forwards;
  }
}

.word-spinner {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 1rem 0 0 0;
  padding-top: 2rem;
  overflow: hidden;
  list-style: none;

  .word {
    position: absolute;
    margin-bottom: 2.5rem;
    transform: translateX(-10%);
    transition: all 500ms;
    font-family: var(--font-kollektif);
    font-size: 2rem;
    opacity: 0;

    &.active {
      position: relative;
      transform: translateX(0);
      font-size: 2rem;
      opacity: 1;
    }
  }
}

.quote-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10rem 2rem 2rem;
}

.quote {
  max-width: 60rem;
  text-align: center;
  font-weight: 600;
  color: var(--color-black);
}

.page-detail-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-white);
}

.skills-list {
  margin: 0;
  padding: 0;
  list-style: none;
  color: var(--color-black);
}
</style>

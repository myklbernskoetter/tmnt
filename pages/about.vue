<template>
  <div class="about-container">
    <header class="page-header">
      <img class="about-hero" src="/images/about-1.jpg" alt="comptemplative ">
      <h1 class="headline-1 page-title" key="title"><span class="load-wrapper">About</span></h1>
    </header>
    <section class="about-section about-section-one">
      <div class="column values-wrapper">
        <h2 class="headline-3">Core Mindset</h2>
        <ul class="values">
          <li class="values-item" v-for='(item, index) in wordSpinner' :key='index' v-bind:class="{active: counter >= index + 1}">{{item}}</li>
        </ul>
      </div>
      <div class="column quote-wrapper">
        <p class="quote">
          "Mykl has gone above and beyond to both perfect his craft and be an
          encouraging presence every day. He’s great on a team and trusted on
          his own, making him someone you want on your side when it comes time
          to #shipit!"<br/>
        </p>
        <p class="quote-author">
          - CK Hicks, Lead Developer at Barkley Interactive
        </p>
      </div>
    </section>
    <figure class="image-split-container">
        <img class="split-image" src="/images/about-2.jpg"/>
    </figure>
    <section class="about-section about-section-two">
      <div class="column skills">
        <h2 class="headline-3">Skills</h2>
        <ul class="skills-list">
          <li>Atom / Sublime 3</li>
          <li>HTML</li>
          <li>SCSS</li>
          <li>Javascript: ES6</li>
          <li>jQuery</li>
          <li>Vue</li>
          <li>npm</li>
          <li>Webpack</li>
          <li>Drupal</li>
          <li>Wordpress</li>
        </ul>
      </div>
      <div class="column about-block">
        <p class="about-blurb">I'm a front-end web developer that's interested in building beautiful,
        fluid, and functional web interfaces. I've taught myself Vue this year, but I'm also
        fluid in jQuery and adaptable to anything.  I love learning and adding new tools to my skillset.</p>
        <p class="about-blurb">
          Outside of work I enjoy reading, gaming,the occasional float-trip, and spending time with my family.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  transition: 'fadeOpacity',
  data() {
    return {
      counter: 0,
      wordSpinner: [
        'Positivity and good humor can do amazing things',
        'Always be learning',
        'Be humble and approachable',
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
 }, 750);
  }
}
</script>

<style lang="scss" scoped>

.about-container {
  margin-top: 12rem;
  border-bottom: 3rem solid var(--color-dark-grey);
  overflow-x: hidden;

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }

  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 5.5rem;
    display: block;
    width: 50%;
    min-height: 160vh;
    z-index: 1;

    @media screen and (min-width: 768px) {
      background-color: var(--color-dark-grey);
    }
  }
}

.about-section {
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 125rem;
    margin: 0 auto;
  }
}

.about-section-one {
  padding: 7rem 0 0;

  .headline-3 {
    margin: 0;
    padding-left: 2.5rem;
    text-align: center;

    @media screen and (min-width: 768px) {
      text-align: left;
    }
  }
}

.about-section-two {
  max-width: 150rem;
  margin-top: -5rem;
  padding-top: 5rem;
}

.about-hero {
  top: 1rem;
  width: 100%;
  z-index: 2;
  opacity: .75;
  animation: fade-in 500ms linear forwards;
  background-color: var(--color-dark-grey);

  @media screen and (min-width: 768px) {
    margin-top: 14rem;
    width: 70%;
  }
}

.page-title {
  width: 100%;
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-top: 0;
    width: 30%;
    text-align: left;
  }
}

.load-wrapper {
  opacity: 0;
  transform: translateY(-3rem);
  animation: fade-in-list-items 1000ms ease-out forwards;
  animation-delay: 500ms;
}

.spinner-wrapper,
.headline-1 {
  height: 50%;
}

.headline-1 {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 0;
  height: auto;
  padding: 2rem;
  font-size: 5.5rem;
  color: var(--color-black);
  background-color: var(--color-white);
  z-index: 3;

  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: -.2rem;
    font-size: 7.5rem;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: -6rem;
    bottom: -2rem;
    width: 100vw;
    height: .2rem;
    transform: scaleX(0);
    transform-origin: left;
    border-top: .3rem solid black;
    animation: frame-draw2 500ms linear forwards;
    animation-delay: 1000ms;

    @media screen and (min-width: 768px) {
      width: 50vw;
    }
  }
}

.spinner-wrapper {
  @media screen and (min-width: 1020px) {
    background-color: var(--color-white);
    animation: background-in 2000ms ease-out forwards;
  }
}

.title-wrapper {
  justify-content: flex-end;
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

.column {
  @media screen and (min-width: 768px) {
    width: 50%;
    padding: 0;
    background-color: transparent;
  }
}

.values {
  margin: 0;
  padding: 3.5rem;
  font-weight: 600;
  background-color: white;
  z-index: 2;
  list-style: none;

  @media screen and (min-width: 768px) {
    background-color: transparent;
  }
}

.values-item {
  margin-bottom: 3rem;
  opacity: 0;

  &.active {
    animation: fade-in 500ms linear forwards;
    animation-delay: 750ms;
  }
}

.quote-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 0rem 3rem 5rem 3rem;
  background-color: var(--color-dark-grey);
  z-index: 5;
}

.quote {
  max-width: 60rem;
  text-align: center;
  font-weight: 400;
  font-size: 2.5rem;
  color: var(--color-white);
}

.quote-author {
  color: var(--color-white);
}

.page-detail-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-white);
  background-color: var(--color-dark-grey);
}

.skills {
  width: 100%;
  margin-top: -5rem;
  padding-top: 5rem;
  background-color: var(--color-dark-grey);


  li {
    font-size: 3rem;
    font-weight: 400;
    text-align: center;
    margin-right: 2.5rem;
  }

  @media screen and (min-width: 768px) {
    width: 50%;
  }

  .headline-3 {
    margin: 0;
    padding: 2.5rem;
    color: var(--color-white);
    background-color: var(--color-dark-grey);
    font-size: 4rem;
    text-align: center;
    z-index: 2;
  }
}

.skills-list {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0;
  padding: 2.5rem;
  list-style: none;
  font-weight: 700;
  color: var(--color-white);
  z-index: 3;
  background-color: var(--color-dark-grey);
  @media screen and (min-width: 768px) {
    flex-direction: column;
    background-color: transparent;
  }
}

.image-split-container {
  display: flex;
  align-items: flex-end;
  margin: 0;
  z-index: 3;
}

.split-image {
  right: 0;
  margin: auto;
  max-width: 85rem;
  padding: 0;

  @media screen and (min-width: 768px) {
    right: -21%;
  }
}

.about-block {
  width: 100%;
  padding: 2.5rem;

  @media screen and (min-width: 768px) {
    width: 50%;
    max-width: 65rem;
    background-color: white;
    z-index: 2;
  }
}

.about-blurb {
  font-size: 2.2rem;
  z-index: 3;
}

.caption {
  text-align: left;
  position: absolute;
  bottom: .8rem;
  background-color: white;
  padding: 1rem;
}

.final-image {
  max-width: 72.8rem;
}
</style>

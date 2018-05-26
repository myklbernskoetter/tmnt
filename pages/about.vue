<template>
  <div class="panel-container">
    <div class="page-header">
      <img class="about-hero" src="/images/about-1.jpg" alt="comptemplative ">
      <h1 class="headline-1 page-title" key="title">About</h1>
    </div>
    <ul class="Deep Thinks">
      <li>Always be learning</li>
      <li>Be humble and approachable</li>
      <li></li>
    </ul>
    <div class="quote-wrapper">
      <p class="quote">
        "Mykl has gone above and beyond to both perfect his craft and be an
        encouraging presence every day. He’s great on a team and trusted on
        his own, making him someone you want on your side when it comes time
        to #shipit!"<br/>
        - CK Hicks, Lead Developer at Barkley Interactive
        </p>
    </div>
    <figure class="image-split-container">
        <img class="split-image" src="/images/about-2.jpg"/>
        <!-- <figcaption class="caption">We found the sneaky ol' Sasquatch!</figcaption> -->
    </figure>
    <div class="section-31">
      <div class="skills">
        <h3 class="headline-3">Skills:</h3>
        <ul class="skills-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript: ES6</li>
          <li>npm</li>
          <li>jQuery</li>
          <li>Vue</li>
          <li>Wordpress</li>
          <li>Webpack</li>
          <li>Atom / Sublime 3</li>
        </ul>
      </div>
      <div class="about-block">
        <p class="about-blurb">I'm a front-end web developer that's interesting in building beautiful,
        fluid, and functional web interfaces. I've learned Vue this year, but I'm also
        fluid in jQuery and adaptable to anything.  I love learning and adding new tools to my skillset.</p>
        <p class="about-blurb">
          Outside of work I enjoy reading, gaming,the occasional float-trip, and spending time with my family.
        </p>
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

.panel-container {
  margin-top: 12rem;

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }

  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 5.5rem;
    display: block;
    width: 50vw;
    min-height: 130vh;
    background-color: var(--color-dark-grey);
    z-index: 1;
  }
}

.about-hero {
  width: 100%;
  z-index: 2;

  @media screen and (min-width: 768px) {
    margin-top: 14rem;
    width: 70%;
  }
}

.page-title {
  margin-top: -1rem;
  width: 100%;
  text-align: center;

  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: 0;
    margin-top: 0;
    width: 30%;
    text-align: left;
  }
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

  @media screen and (min-width: 1020px) {
    font-size: 7.5rem;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: -6rem;
    bottom: -2rem;
    width: 50vw;
    height: .2rem;
    transform: scaleX(0);
    transform-origin: left;
    border-top: .3rem solid black;
    animation: frame-draw2 500ms linear forwards;
    animation-delay: 1000ms;
  }
}

.headline-3 {
  margin: -1rem 0 0;
  padding-top: 2.5rem;
  color: var(--color-white);
  z-index: 2;
  background-color: var(--color-dark-grey);
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

.quote-wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 5rem;
  background-color: var(--color-dark-grey);
  z-index: 5;


  @media screen and (min-width: 768px) {
    padding: 10rem 3rem 7rem;
    background-color: transparent;
  }
}

.quote {
  max-width: 60rem;
  text-align: center;
  font-weight: 600;
  color: var(--color-white);
}

.page-detail-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-white);
  background-color: var(--color-dark-grey);
}

.section-31 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  mad-width: 102rem;


  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: -1rem;
    display: none;
    width: 50vw;
    min-height: 75vh;
    background-color: var(--color-dark-grey);
    z-index: 1;

    @media screen and (min-width: 768px) {
      display: block;
    }
  }
}

.skills {
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 40%;
  }
}

.skills-list {
  margin: 0;
  padding: 0;
  list-style: none;
  font-weight: 700;
  color: var(--color-white);
  z-index: 3;
  background-color: var(--color-dark-grey);
  @media screen and (min-width: 768px) {
    background-color: transparent;
  }
}

.image-split-container {
  margin: 0;
  text-align: center;
  z-index: 3;
}

.split-image {
  padding: 0;
  max-width: 130rem;
  margin: auto;
}

.about-block {
  width: 100%;
  padding: 2.5rem;

  @media screen and (min-width: 768px) {
    margin-right: 2.5rem;
    width: 50%;
    max-width: 65rem;
    background-color: white;
    z-index: 2;
  }
}

.about-blurb {
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

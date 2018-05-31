<template lang="html">
  <div class="panel-container">
    <img class="panel-featured-image" src="/images/mulu/mulu-bottle-1.jpg" alt="">
    <div class="panel-header">
      <h2 class="panel-title">Mülü</h2>
      <div class="close-wrapper">
        <button class="close-button" type="button" name="button" @click="closePanel()">Close</button>
      </div>
      <div class="logo-wrapper"><img class="logo" src="/images/mulu/mulu-logo.png" alt="dfa mulu logo"></div>
    </div>
    <p class="description">
      Mülü was a quick turn-around splash page for DFA(Dairy Farmers of America).
      The concept is a 'fake' product known as Mülü to grab people's attention,
      but in reality it is still Milk.  This splash page needed to be up in time
      to generate interest before World Milk Day on June 1st.
      <a class="live-link" href="http://www.drinkmulu.com/">Visit the Mülü site</a>
    </p>
    <div class="image-split-container">
      <span class="split-image image-right"><img src="/images/mulu/mulu-hero-reveal2.jpg"/></span>
    </div>
    <ul class="tools">
      <li>Static HTML</li>
      <li>Vue.js</li>
      <li>ScrollMagic js</li>
      <li>CSS Grid</li>
    </ul>
    <div class="panel-content">
      <div class="image-split-container">
        <span class="split-image image-right"><img src="/images/mulu/mulu-grid-1.jpg"/></span>
      </div>
      <p class="content-two description">
        The key piece of this site is that it needed a 'reveal' function to trigger on
        World Milk Day. This seemed a perfect job for Vue. By checking the date, on load,
        and using a single boolean, we achieved a simple solution for this problem.

        Now, on June 1st, the variables will update and the switch over will occur without any complicated
        timing functions or midnight code pushes.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closePanel(event) {
       this.$emit('closePanel', 'true');
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

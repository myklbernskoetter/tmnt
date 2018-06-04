<template lang="html">
  <div class="panel-container">
    <img class="panel-featured-image" src="/images/mulu/mulu-bottle-1.jpg" alt="Mulu bottle image">
    <div class="row-container">
      <div class="panel-header">
        <h2 class="panel-title">Mülü</h2>
        <div class="close-wrapper">
          <button class="close-button" type="button" name="button" @click="closePanel()">Close</button>
        </div>
        <div class="logo-wrapper"><img class="logo" src="/images/mulu/mulu-logo.png" alt="dfa mulu logo"></div>
      </div>
      <p class="description">
        Mülü is a quick turn-around splash page project for DFA(Dairy Farmers of America).
        The concept is a 'fake' product known as simply as 'Mülü' that grabs people's attention,
        but in reality it is still Milk.  This splash page needed to be up in time
        to generate interest before World Milk Day on June 1st.
        <span class="link-wrapper"><a class="live-link" rel="noopener" target="_blank" href="http://www.drinkmulu.com/">Visit the Mülü site</a></span>
      </p>
  </div>

    <div class="image-split-container">
      <span class="split-image image-right"><img src="/images/mulu/mulu-hero-reveal2.jpg" alt="celebrating world milk day with mulu"/></span>
    </div>
    <div class="tools-wrapper">
      <h3 class="headline-2 tools-headline">Tools Used</h3>
      <ul class="tools">
        <li>Static HTML</li>
        <li>Vue.js</li>
        <li>ScrollMagic.js</li>
        <li>CSS Grid</li>
      </ul>

      <p class="content-two">
        The key piece of this site is that it needed a 'reveal' function to trigger on
        World Milk Day. This seemed a perfect job for Vue.
        Now, since it is after June 1st, the variables update and the switch over occurs without any complicated
        timing functions or midnight code pushes.
      </p>
    </div>
    <div class="panel-content">
      <div class="image-split-container">
        <span class="split-image image-right"><img src="/images/mulu/mulu-grid-1.jpg" alt="instagram grid for mulu"/></span>
      </div>
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

<template lang="html">
  <div class="panel-container">
    <div class="panel-header">
      <h2 class="panel-title">Mülü</h2>
      <p class="description">
        Mülü was a quick turn-around splash page for DFA(Dairy Farmers of America).
        The concept is a 'fake' product known as Mülü to grab people's attention,
        but in reality it is still Milk.  This splash page needed to be up in time
        to generate interest before World Milk Day on June 1st.
      </p>
    </div>
    <div class="link-to-live">
      <a href="http://www.drinkmulu.com/">Visit the Mülü site</a>
    </div>
    <div class="panel-content">
      <img class="featured-image" src="" alt="">
      <ul class="tools">
        <li>Static HTML</li>
        <li>Vue.js</li>
        <li>ScrollMagic js</li>
        <li>CSS Grid</li>
      </ul>
      <div class="image-split">
        <span class="split-image image-left"><img src=""/></span>
        <span class="split-image image-right"><img src=""/></span>
      </div>
      <p class="content-two">
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
}
</script>

<style lang="scss" scoped>
</style>

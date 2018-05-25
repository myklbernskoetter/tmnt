<template lang="html">
  <div class="panel-container">
    <img class="panel-featured-image" src="/images/futurecast/futurecast-hero-1.jpg" alt="">
    <div class="panel-header">
      <h2 class="panel-title">FutureCast</h2>
      <div class="close-wrapper">
        <button class="close-button" type="button" name="button" @click="closePanel()">Close</button>
      </div>
      <div class="logo-wrapper"><img class="logo" src="/images/futurecast/futurecast-logo.png" alt="dfa mulu logo"></div>
    </div>
    <p class="description">
      A shakeup in the FutureCast structure also meant that it was time for a
      rebrand of their website. The new site is built on Wordpress, and while it
      is currently a single-page site, it is built with expansion in mind.
      <a class="live-link" href="https://www.thefuturecast.com/">Visit the FutureCast site</a>
    </p>
    <div class="image-split-container">
      <span class="split-image image-right"><img src="/images/futurecast/futurecast-work2.jpg"/></span>
    </div>
    <div class="panel-content">
      <ul class="tools">
        <li>Wordpress</li>
        <li>Jquery</li>
        <li>CSS Grid</li>
      </ul>
      <div class="image-split-container">
        <span class="split-image image-left"><img alt="futurecast form functionalty and styles" src="/images/futurecast/futureast-form.jpg"/></span>
      </div>
      <p class="content-two">
        content two
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
.logo-wrapper {
  top: 20rem;
  left: 8rem;
  width: 40rem;
}

.panel-featured-image {
  width: 75%;
}
</style>

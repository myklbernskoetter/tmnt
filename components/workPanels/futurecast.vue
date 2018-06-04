<template lang="html">
  <div class="panel-container">
    <img class="panel-featured-image" src="/images/futurecast/futurecast-hero-1.jpg" alt="The new Futurecast Hero ">
    <div class="row-container">
      <div class="panel-header">
        <h2 class="panel-title">FutureCast</h2>
        <div class="close-wrapper">
          <button class="close-button" type="button" name="button" @click="closePanel()">Close</button>
        </div>
        <div class="logo-wrapper"><img class="logo" src="/images/futurecast/futurecast-logo.png" alt="The Futurecast logo"></div>
      </div>
      <p class="description">
        A shakeup in the FutureCast company structure also meant that it was time for a
        rebrand of their website. With a short project time frame, they opted for a single splash page to begin the rebrand.
        Using Wordpress, this site is ready for the future.
        <span class="link-wrapper"><a class="live-link" rel="noopener" target="_blank" href="http://www.thefuturecast.com/">Visit the FutureCast site</a></span>
      </p>
    </div>
    <div class="image-split-container">
      <span class="split-image image-right"><img src="/images/futurecast/futurecast-work2.jpg" alt="FutureCast work with us headline image"/></span>
    </div>
    <div class="tools-wrapper">
      <h3 class="headline-2 tools-headline">Tools Used</h3>
      <ul class="tools">
        <li>Wordpress</li>
        <li>PHP</li>
        <li>Jquery</li>
        <li>CSS Grid</li>
        <li>ACF Pro Plugin</li>
      </ul>
      <p class="content-two">
        The new site is built on Wordpress, and was built with expansion in mind.

      </p>
    </div>
    <div class="panel-content">
      <div class="image-split-container">
        <span class="split-image image-left"><img alt="futurecast form functionalty and styles" src="/images/futurecast/futureast-form.jpg"/></span>
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
.logo-wrapper {
  width: 35rem;
  margin-top: 3rem;
  margin-bottom: 0;

  @media screen and (min-width: 728px) {
    margin-top: 0;
    margin-bottom: 2rem;
  }
}

.split-image {
  display: flex;
  align-items: flex-end;
}
</style>

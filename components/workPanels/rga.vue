<template lang="html">
  <div class="panel-container">
    <img class="panel-featured-image featured-desktop" src="/images/rga/rga-item-1.jpg" alt="GUM homepage example. Showing navigation, the hero and page content, and the worksheet functionality.">
    <img class="panel-featured-image featured-mobile" src="/images/rga/rga-item-5.jpg" alt="GUM homepage example. Showing navigation, the hero and page content, and the worksheet functionality.">
    <div class="panel-header">
      <h2 class="panel-title">RGA</h2>
      <div class="close-wrapper">
        <button class="close-button" type="button" name="button" @click="closePanel()">Close</button>
      </div>
      <div class="logo-wrapper"><img class="logo" src="/images/rga/rga-logo.jpg" alt="RGA logo"></div>
    </div>
    <p class="description">
      This project was a pleasure to work on and be a part of. 40Digits assembled an awesome team to handle this one.
      We built a functional prototype from designs
      during an agile sprint process over several months.
    </p>
    <div class="image-split-container">
      <span class="split-image image-right"><img src="/images/rga/rga-item-3.jpg" alt="RGA page content example showing navigation and the subpage content."/></span>
    </div>
    <ul class="tools">
      <li>Twig Templates</li>
      <li>jQuery</li>
      <li>Javascript</li>
      <li>Flexbox</li>
    </ul>
    <div class="panel-content">
      <div class="image-split-container">
        <span class="split-image image-right"><img src="/images/rga/rga-item-2.png" alt="RGA example showing the mobile table layouts as well as the subpage tabbed content structure."/></span>
      </div>
      <p class="content-two">
        RGA needed a new internal tool and landing site to help with the workload of their
        insurance underwriters. This prototype streamlined a lot of the pain points from their existing
        system, as well as giving everything a fresh, sleek coat of paint.
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

.panel-featured-image {
  padding: 0;

  @media screen and (min-width: 728px) {
    border: .1rem solid black;
  }
}

.logo-wrapper {
  top: 20rem;
  left: 0rem;
  width: 35rem;
}

.featured-desktop {
  display: none;

  @media screen and (min-width: 728px) {
    display: block;
  }
}

.featured-mobile {
  @media screen and (min-width: 728px) {
    display: none;
  }
}

.panel-header {
  padding: 2.5rem;
}
</style>

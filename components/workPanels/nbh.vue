<template lang="html">
  <div class="panel-container">
    <img class="panel-featured-image" src="/images/nbh/nbh-item-image-2.jpg" alt="">
    <div class="panel-header">
      <h2 class="panel-title">NBH Bank</h2>
      <div class="close-wrapper">
        <button class="close-button" type="button" name="button" @click="closePanel()">Close</button>
      </div>
      <div class="logo-wrapper"><img class="logo" src="/images/nbh/bmw-logo.jpg" alt="NBH: Bank Midwest Logo"></div>
    </div>
    <p class="description">
      This represents the largest project I was a part of in 2017.
      We built a custom multi-site with a single admin
      for NBH bank and all of its holding branches
      such as Bank Midwest, and Hillcrest Bank.
      This project also focused heavily on ensuring that accesibility was front
      of mind when building out the navigation, components, and other interactive elements.
      <a class="live-link" href="https://www.nbhbank.com/">Visit the NBH</a>
      <a class="live-link" href="https://www.bankmw.com/"> Visit Bank Midwest</a>
    </p>
    <div class="image-split-container">
      <span class="split-image image-right"><img src="/images/nbh/nbh-nav-1.jpg"/></span>
    </div>
    <div class="panel-content">
      <ul class="tools">
        <li>Wordpress</li>xw
        <li>Custom Site Switcher</li>
        <li>Flexbox</li>
        <li>Javascript</li>
        <li>jQuery</li>
      </ul>
      <div class="image-split-container">
        <span class="split-image image-right"><img src="/images/nbh/nbh-mobile-1.jpg"/></span>
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

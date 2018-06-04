<template lang="html">
  <div class="panel-container">
    <img class="panel-featured-image" src="/images/nbh/nbh-item-image-2.jpg" alt="NBH hero image example">
    <div class="row-container">
      <div class="panel-header">
        <h2 class="panel-title">NBH Bank</h2>
        <div class="logo-wrapper"><img class="logo" src="/images/nbh/bmw-logo.jpg" alt="NBH: Bank Midwest Logo"></div>
      </div>
      <p class="description">
        NBH needed to rebrand their entire family of websites- 40Digits devised a way to allow the content authors
        to use a single Wordpress admin-interface to build content across all their brands.
        <span class="links-wrapper">
          <span class="link-wrapper"><a class="live-link" href="https://www.nbhbank.com/">Visit NBH</a></span>
          <span class="link-wrapper"><a class="live-link" href="https://www.bankmw.com/"> Visit Bank Midwest</a></span>
        </span>
      </p>
    </div>
    <div class="image-split-container">
      <span class="split-image image-right"><img src="/images/nbh/nbh-nav-1.jpg" alt="bank midwest hero and navigation example"/></span>
    </div>
    <div class="tools-wrapper">
    <h3 class="headline-2 tools-headline">Tools Used</h3>
    <ul class="tools">
      <li>Wordpress</li>
      <li>PHP</li>
      <li>Custom Site Switcher</li>
      <li>Flexbox</li>
      <li>Javascript</li>
      <li>jQuery</li>
    </ul>
    <p class="content-two">
      This represents the largest project I was a part of in 2017.
      We built a custom multi-site with a single admin
      for NBH bank and all of its holding branches
      such as Bank Midwest, and Hillcrest Bank.
      This project also focused heavily on ensuring that accesibility was front
      of mind when building out the navigation, components, and other interactive elements.
    </p>
  </div>
    <div class="panel-content">
      <div class="image-split-container">
        <span class="split-image image-right"><img src="/images/nbh/nbh-mobile-1.jpg" alt="nbh mobile hero and navigation"/></span>
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
  margin-top: 5rem;
  width: 30rem;
}

.panel-header {
  width: 50%;
  justify-content: flex-start;
}

.links-wrapper {
  display: block;
}
</style>

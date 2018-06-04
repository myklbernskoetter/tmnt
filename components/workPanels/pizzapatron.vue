<template lang="html">
  <div class="panel-container">
    <img class="panel-featured-image" src="/images/pizza/pizza-hero.jpg" alt="">
    <div class="row-container">
      <div class="panel-header">
        <h2 class="panel-title">Pizza Patron</h2>
        <div class="logo-wrapper"><img class="logo" src="/images/pizza/pizza-logo.jpg" alt="Pizza Patron logo"></div>
      </div>
      <p class="description">
        Pizza Patron is a pizza franchise located predominantly in the American Southwest.
        Earlier this year they required a full brand overhaul and needed
        a fresh new website to go with it.
        <span class="link-wrapper"><a class="live-link" rel="noopener" target="_blank" href="https://pizzapatron.com">Visit Pizza Patron</a></span>
      </p>
    </div>
    <div class="image-split-container">
      <span class="split-image image-right"><img src="/images/pizza/pizza-middle.jpg" alt=""/></span>
    </div>
    <div class="tools-wrapper">
      <h3 class="headline-two tools-headline">Tools Used</h3>
      <ul class="tools">
        <li>Wordpress</li>
        <li>PHP</li>
        <li>CSS Flexbox</li>
        <li>CSS Grid</li>
      </ul>
      <p class="content-two">
        The page layouts for this new site lent themselves very well to using CSS Grid as the basis for much of the page structure.
        We did need to provide some fallbacks for IE 10 and 11 users, but we found it simple enough to provide those while providing
        more current browsers with the grid styles.

        In addition, the templates for several parts of the site were made very customizable by using ACF's Flex fields to provide the
        content authors great freedom to arrange and create their page layouts without hard-coding rigid template frameworks.
      </p>
    </div>
    <div class="panel-content">
      <div class="image-split-container">
        <span class="split-image image-right"><img src="/images/pizza/pizza-grid.jpg" alt="Animated figure on a ladder- an example of part of the art direction for the new C3 rebrand."/></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>

.logo-wrapper {
  width: 30rem;
}
</style>

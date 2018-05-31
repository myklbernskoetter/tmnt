<template>
  <div class="contact-container">
    <header class="page-header">
      <img class="contact-hero" src="/images/about-1.jpg" alt="comptemplative ">
      <h1 class="headline-1 page-title" key="title"><span class="load-wrapper">Contact</span></h1>
    </header>
    <div class="disclaimers">
    </div>
    <footer class="site-footer">
      kollektif font by <a href="http://www.bravenewfonts.com/">Brave New Fonts</a>
    </footer>
  </div>
</template>

<script>
export default {
  transition: 'fadeOpacity'
}
</script>

<style lang="scss" scoped>

.contact-container {
  margin-top: 12rem;
  border-bottom: 3rem solid var(--color-dark-grey);
  overflow-x: hidden;

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }

  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 5.5rem;
    display: block;
    width: 50%;
    min-height: 160vh;
    z-index: 1;

    @media screen and (min-width: 768px) {
      background-color: var(--color-dark-grey);
    }
  }
}

.contact-hero {
  top: 1rem;
  width: 100%;
  z-index: 2;
  opacity: 0;
  animation: fade-in 500ms linear forwards;
  background-color: var(--color-dark-grey);

  @media screen and (min-width: 768px) {
    margin-top: 14rem;
    width: 70%;
  }
}

  .site-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10rem;
    padding: 2.5rem;
    color: var(--color-white);
    background-color: var(--color-dark-grey);
  }
</style>

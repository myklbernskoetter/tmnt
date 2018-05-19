<template lang="html">
  <div class="container">
    <h1>About</h1>
    <div class="split-page">
    <div class="first-column">
    <div class="bio">
      <h2>Where I've been</h2>
      <p>
        I began coding in late 2013
      </p>
      <p>
        I enjoy working with and around passionate people who take pride in their work.
      </p>
      </div>
      <ul class="values">
        <li></li>
      </ul>
    </div>
    <div class="second-column page-detail-wrapper">
      <div class="learning-blurb">
        <!-- <div class="about-image-wrapper"><img class="about-image" src="~/assets/images/about-image1.jpg" alt=""></div> -->
        <h2>What am I learning about?</h2>
        <p>
          In this profession, it's not okay to just rest on your laurels.
          An important value that both 40Digits and I both believe in is to always be learning.
        </p>
        <p>
          This year I've taken time and applied it to learning Vue.js.
          Vue is a Javascript framework that isn't opinionated about the structure
          of your project.
        </p>
        <p>
          I began by reading <a href="https://www.smashingmagazine.com/2018/02/jquery-vue-javascript/">Sarah Drasner's piece</a>
          on replacing jQuery with Vue in our projects.
        </p>
        <p>
          I took this knowledge and used it to upgrade some of my existing personal projects and then applied it to create many
          of the examples that you can find on my <nuxt-link to="/experiments">experiments</nuxt-link> page.
        </p>
        <p>
          These examples include puzzle cubes, interactive ui's, and even the transitions you're enjoying between pages on this site.
        </p>
      </div>
    </div>
  </div>
</div>
</template>
<script>

export default {
  transition: 'fadeOpacity',
  data() {
    return {
      values: [
        'Positivity, patience, and good humor can do amazing things',
        'Never stop learning',
        ''
      ]
    }
  }
}
</script>

<style lang="scss">
.learning-blurb,
.bio {
  padding: 0 2rem;
}

.about-image-wrapper {
// transform: skew(-50deg);
// overflow: hidden;
}

.about-image {
  // transform: skew(50deg);
}
</style>

<template lang="html">
  <div class="container">
    <h1>About</h1>
    <div class="split-page">
    <div class="first-column">
    <div class="bio">
      <h2>About Me</h2>
      <p>
        In 2013 I had the chance to join a very small web development shop-
        and it changed my life.
        I realized quickly that this was a career worth pursuing,
        one that I loved waking up for each morning. Unfortunately for me,
        the company was soon bought and shutdown as the owner went to work with a larger
        firm in Washington DC.  I took my licks and partnered up with another Developer
        and we struggled for the better part of 2014 to make a go of freelance work.
      </p>
      <p>
        In late 2014 I read about a dev shop in Springfield that was growing and hiring.
        I took the opportunity to join them as a jr. developer. My first year consisted of
        a lot of email development, a job which many would decline, but it was my foot in the door
        of a company and a career that I love. While adding email dev to my toolkit of skills,
        I was also working to learn about the processes, tools, and skills that 40Digits used to build
        their projects.
      </p>
      <p>
        I enjoy working with and around passionate people who take pride in their work.
      </p>
      </div>
      <div class="values">
        <ul>
          <li>Positivity, patience, and good humor can do amazing things</li>
          <li>Never stop learning</li>
        </ul>
      </div>
    </div>
    <div class="second-column page-detail-wrapper">
      <div class="learning-blurb">
        <div class="about-image-wrapper"><img class="about-image" src="~/assets/images/about-image1.jpg" alt=""></div>
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
  transition: 'fadeOpacity'
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

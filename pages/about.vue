<template lang="html">
  <div class="container">
    <div class="split-page">
      <div class="title-wrapper">
        <h1 class="headline-1 site-title" key="title">About</h1>
      </div>
      <div class="page-detail-wrapper">
        content
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

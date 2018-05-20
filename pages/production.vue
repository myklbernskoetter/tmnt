<template lang="html">
  <div class="container">
    <div class="split-page">
      <transition-group name="test1" tag="div" class="title-wrapper">
        <h1 key="title" class="page-title">Production<br>Work</h1>
      </transition-group>
      <transition-group name="test2" tag="div" class="page-detail-wrapper">
        <div key="content" class="page-detail">
          <div class="featured-work">

          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
// import workBlocks from '~/components/workBlocks.vue';
export default {
  components: {
    // workBlocks,
  },
transition: 'fadeOpacity',
}
</script>

<style lang="scss" scoped>

</style>

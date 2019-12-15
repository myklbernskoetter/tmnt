<template>
  <span class="select-card">
    <span class="select-box-wrapper">
      <span class="select-box">
        <span><b>1</b>UP</span>
        <span class="arrow"></span>
      </span>
    </span>
    <span class="character-name"><span>{{ item.name }}</span></span>
    <button class="character-view" type="button" @click="emitStatus()" width="50" height="50">
      <span class="image-wrapper"><img :src="item.image1"/></span>
    </button>
  </span>
</template>

<script>
export default {
  props: ['item'],
  methods: {
    emitStatus: function() {
      this.$emit('statusChange');
    },
  }
};
</script>

<style lang="scss" scoped>

</style>

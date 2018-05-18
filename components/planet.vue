<template lang="html">
  <div class="scene">
      <div class="wrapper">
        <div class="globe">
          <span class="ring"></span>
          <span class="ring"></span>
          <span class="ring"></span>
          <span class="ring"></span>
          <span class="ring"></span>
          <span class="ring"></span>
          <span class="ring"></span>

          <span class="ring"></span>
          <span class="ring"></span>
          <span class="ring"></span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@keyframes spin {
    to {
      transform:rotateY(-360deg);
    }
  }

  @keyframes show {
  to {
    opacity: 1;
  }
}
  .component-wrapper {
    position: absolute;
  }

  .scene {
    position: absolute;
    bottom: 7.5rem;
    right: 5rem;
    width: 25rem;
    height: 25rem;
    margin: 2% auto;
    perspective: 100rem;
    opacity: 0;
  }

  .contact-active {
    animation: flicker-on-2 1000ms linear 1500ms forwards;
  }

  .wrapper {
    width:100%;
    height:100%;
    transform: rotateX(-8deg) rotateY(0deg);
    transform-style: preserve-3d;
  }

  .globe {
    position: relative;
    width: 70%;
    height: 70%;
    margin:0 auto;
    transform-style:  preserve-3d;
    animation: spin 25s 0ms linear infinite;
  }
  .ring {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: .1rem;
    border-style: solid;
    border-radius: 50%;
    color:grey;
    animation: show 0.75s forwards ease-in-out;
    opacity: 0;
  }

  .ring:nth-child(1) {
    transform: rotateY(4deg);
  }
  .ring:nth-child(2) {
    transform: rotateY(30deg);
  }
  .ring:nth-child(3) {
    transform: rotateY(56deg);
  }
  .ring:nth-child(4) {
    transform: rotateY(82deg);
  }
  .ring:nth-child(5) {
    transform: rotateY(108deg);
  }
  .ring:nth-child(6) {
    transform: rotateY(134deg);
  }
  .ring:nth-child(7) {
    transform: rotateY(160deg);
  }

  .ring:nth-child(8) {
    transform: rotateY(4deg)  rotateX(75deg) scale(2);
    border-style: dashed;
  }
  .ring:nth-child(9) {
    transform: rotateY(4deg)  rotateX(75deg) scale(1.75);
    border-style: solid;
  }

  .ring:nth-child(10) {
    transform: rotateY(4deg) rotateX(75deg) scale(1.5);
    border-style: dashed;
  }
</style>

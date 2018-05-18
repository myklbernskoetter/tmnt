<template lang="html">
  <ul class="work">
    <li class="work-container">
      <button class="interactive-wrapper" type="button">
        <span>Blurb</span>
        <span>Image</span>
        <span>Logo</span>
      </button>
    </li>
    <li class="work-container">
      <button class="interactive-wrapper" type="button">
        <span>Blurb</span>
        <span>Image</span>
        <span>Logo</span>
      </button>
    </li>
    <li class="work-container">
      <button class="interactive-wrapper" type="button">
        <span>Blurb</span>
        <span>Image</span>
        <span>Logo</span>
      </button>
    </li>
  </ul>
</template>

<script>
  export default {
    data() {
    return {
        button1: false,
        button2: false,
        button3: false,
      }
    }
  }
</script>

<style lang="scss">

@mixin increment-animation($time-default:250, $loops:1) {
  @for $i from 1 through $loops {
    &:nth-child(#{$i}) {
      animation-delay: $i * $time-default ;
    }
  }
}

  .work {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .work-container {
    margin-bottom: var(--block);
    width: 30%;
    min-height: 10rem;
    transform: translate3d(-200%, 0, 0);

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: .1rem;
      position: absolute;
      transform: scale(0);
      background-color: var(--color-black);
    }

    &::after {
      bottom: 0;
      left: 0;
      transform-origin: left;
    }

    .interactive-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      min-height: 10rem;
      background-color: transparent;
      border: 0;
      font-size: inherit;
      cursor: pointer;
      transition: transform 250ms;

      &:hover,
      &:focus {
        transform: translateX(10%);
      }
    }
  }

  .production-active {
    .work-container {
      animation: slideIn 1000ms ease-out forwards;
      @include increment-animation(500ms, 3);
    }
  }

@keyframes frame-in {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
}


</style>

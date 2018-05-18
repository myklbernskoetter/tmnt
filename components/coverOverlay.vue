<template lang="html">
  <div class="cover-overlay" v-bind:class="{inactive: enter}">
    <div class="scene">
      <div class="sign">
        Mykl <br/> Bernskoetter
      </div>
      <div class="hills">
        <span class="hill">
          <span class="road"></span>
        </span>
        <span class="hill">
          <span class="road"></span>
        </span>
        <span class="hill">
          <span class="road"></span>
        </span>
      </div>
      <div class="roof"></div>
      <div class="building">
        <div class="inside" @click="valueEnter()" v-show="open === true"><a href="#"></a></div>
        <div class="door-wrapper">
          <div class="doorway" v-bind:class="{doorOpen: open}">
            <button class="knob" @click="valueOpen()"></button>
          </div>
          <div class="door-frame-top"></div>
          <div class="door-frame-bottom-left"></div>
          <div class="door-frame-top-left"></div>
          <div class="door-frame-bottom-right"></div>
          <div class="door-frame-top-right"></div>
        </div>
      </div>
      <div class="tree">
        <span class="bark"></span>
        <span class="bark"></span>
        <span class="bark"></span>
      </div>
      <div class="bush">
        <span class="berry berries"></span>
        <span class="berry berries"></span>
        <span class="berry berries"></span>
        <span class="berry berries"></span>
        <span class="berry berries"></span>
        <span class="berry berries"></span>
        <span class="berry berries"></span>
        <span class="berry berries"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      enter: false,
      open: false,
    }
  },
  methods: {
    valueEnter() {
      this.enter = true;
    },
    valueOpen() {
      this.open = true;
    }
  }
}
</script>

<style lang="scss" scoped>
.cover-overlay {
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 3;
  background-color: var(--color-black);

  .scene {
    width: 100%;
    height: 100%;
    opacity: .5;
    background: linear-gradient(to bottom, #67d1fb 0%, var(--color-grey) 100%);


    @media screen and (min-width: 640px) {
      background: linear-gradient(to bottom, var(--color-grey) 0%, #67d1fb 100%);
    }
  }

  .home-active & {
    .scene {
      animation: fade-in 1000ms linear forwards;
    }
  }

  .active & {
    opacity: 0;
    z-index: -1;
  }

  &.inactive {
    animation: scene-out 500ms linear forwards;
  }
}

.hills {
  width: 100%;
  height: 100%;
  .hill {
    display: none;
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    background-color: var(--color-green);
    border-top: .1rem solid var(--color-black);
    transform: translateX(-200%);
    animation: hill-in 500ms ease-out forwards;
    overflow: hidden;

    @media screen and (min-width: 640px) {
      display: block;
    }

    &:first-child {
      left: -1rem;
      width: 40rem;
      height: 12rem;
      border-radius: 400px 0px 0px 18px / 150px 0px 0px 0px;
      z-index: 3;
      animation-delay: 2500ms;

      .road {
        left: 19rem;
        width: 2rem;
        -webkit-transform: rotate(-30deg) translateX(-94px) translateY(-28px);
        transform: rotate(-30deg) translateX(-94px) translateY(-40px);
        transform-origin: bottom;
        border-right: 25px solid var(--color-main-bg);
        border-radius: 50%;
        animation-delay: 3000ms;

        &::before {
          content: '';
          position: absolute;
          bottom: 0;
          right: -1.5rem;
          display: block;
          width: 1.5rem;
          height: 5rem;
          background-color: var(--color-main-bg);
        }
      }
    }

    &:nth-child(2) {
      left: -18rem;
      width: 40rem;
      height: 12rem;
      border-radius: 0px 363px 0px 0px / 2px 142px 0px 0px;
      z-index: 2;
      animation-delay: 3500ms;
      filter: blur(1px);

      .road {
        left: 27rem;
        width: 15rem;
        height: 0;
        transform: rotate(5deg) translateX(-94px) translateY(-6px);
        transform-origin: bottom;
        border-left: 18px solid var(--color-main-bg);
        border-radius: 50%;
        animation-delay: 4000ms;
      }
    }

    &:nth-child(3) {
      width: 40rem;
      height: 15rem;
      border-radius: 400px 400px 0px 0px / 250px 250px 0px 0px;
      animation-delay: 5000ms;
      filter: blur(2px);


      .road {
        left: 24rem;
        width: 3rem;
        transform: rotate(-30deg) translateX(-94px) translateY(-110px);
        transform-origin: bottom;
        border-right: 12px solid var(--color-main-bg);
        border-radius: 50%;
        animation-delay: 5500ms;
      }
    }
  }
}

.road {
  position: absolute;
  bottom: 0;
  display: block;
  animation: road-in 200ms linear forwards;
}

.building {
  position: absolute;
  bottom: 0;
  right: 0;
  border: .1rem solid var(--color-black);
  border-bottom: 0;
  margin: 0 auto;
  width: 95%;
  height: 85%;
  background-color: var(--color-grey);
  transform: rotateX(-90deg);
  animation: building-in 1000ms linear forwards;
  animation-delay: 500ms;
  transform-origin: bottom;
  z-index: 3;

  @media screen and (min-width: 640px) {
    display: block;
    width: 70%;
    margin: 0;
  }
}

.roof {
  position: absolute;
  top: 12%;
  right: 0;
  width: 100%;
  height: 5rem;
  border: .1rem solid var(--color-black);
  border-bottom-width: .3rem;
  background: linear-gradient(to bottom, var(--color-brown) 0%, var(--color-brown-dark) 100%);
  transform: translateY(-200%);
  animation: roof-in 750ms ease-out forwards;
  z-index: 4;
  @media screen and (min-width: 640px) {
    display: block;
    width: 90%;
  }
}

.door-wrapper {
  position: absolute;
  bottom: 0;
}

.doorway {
  left: 5rem;
  width: 15rem;
  height: 30rem;
  background-color: var(--color-brown);
  border: .1rem solid var(--color-black);
  border-bottom: 0;
  transform: rotateY(0deg);
  transform-origin: left;

  &.doorOpen {
    animation: door-opening 500ms ease-in forwards;
  }
}

.door-frame-bottom-left {
  position: absolute;
  bottom: 0;
  left: 2.9rem;
  display: block;
  width: 2rem;
  height: 27rem;
  border: .2rem solid var(--color-black);
  border-top: 0;
  border-bottom: 0;
  background-color: var(--color-brown);
}

.door-frame-top-left {
  position: absolute;
  top: -2rem;
  left: 4.25rem;
  display: block;
  width: 2.2rem;
  height: 6rem;
  border: .2rem solid var(--color-black);
  background-color: var(--color-brown);
  transform: rotate(30deg);
}

.door-frame-top {
  position: absolute;
  top: -2.25rem;
  left: 6rem;
  display: block;
  width: 13rem;
  height: 2.5rem;
  border: .2rem solid var(--color-black);
  border-left: 0;
  border-right: 0;
  background-color: var(--color-brown);
}

.door-frame-bottom-right {
  position: absolute;
  bottom: 0;
  right: -7.1rem;
  display: block;
  width: 2rem;
  height: 27rem;
  border: .2rem solid var(--color-black);
  border-top: 0;
  border-bottom: 0;
  background-color: var(--color-brown);
}

.door-frame-top-right {
  position: absolute;
  top: -2rem;
  right: -5.75rem;
  display: block;
  width: 2.2rem;
  height: 6rem;
  border: .2rem solid var(--color-black);
  background-color: var(--color-brown);
  transform: rotate(-30deg);
}

.inside {
  position: absolute;
  bottom: 0;
  left: 5rem;
  width: 15rem;
  height: 30rem;
  background-color: var(--color-black);
  border: .1rem solid var(--color-black);
  background-image: url(/assets/interior-image.png);
  background-repeat: no-repeat;
  background-size: cover;

  a {
    display: block;
    width: 100%;
    height: 100%;
  }
}

.knob {
  position: absolute;
  top: 50%;
  right: .5rem;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  cursor: pointer;
  border: .1rem solid var(--color-black);
}

.tree {
  display: none;
  position: absolute;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 5rem;
  background-color: var(--color-brown);
  border-left: .1rem solid var(--color-black);
  transform: translateX(100%);
  animation: tree-in 500ms linear forwards;
  animation-delay: 1000ms;
  background: linear-gradient(to right, var(--color-brown) 0%, var(--color-brown-dark) 100%);
  z-index: 5;

  @media screen and (min-width: 420px) {
    display: block;
  }
}

.bark {
  position: absolute;
  right: .75rem;
  top: 30%;
  display: block;
  background-color: var(--color-black);

  &:first-child {
    width: .1rem;
    height: 50%;
  }

  &:nth-child(2) {
    top: 32%;
    right: 1.5rem;
    width: .1rem;
    height: 15%;
  }

  &:nth-child(3) {
    top: 36%;
    right: 1.25rem;
    width: .1rem;
    height: 20%;
  }
}

.bush {
  display: none;
  position: absolute;
  bottom: -3rem;
  right: 5rem;
  width: 12rem;
  height: 12rem;
  border-top: .1rem solid var(--color-black);
  border-radius: 50%;
  background-color: var(--color-green);
  transform: translateX(200%);
  animation: bush-in 500ms linear forwards;
  animation-delay: 2000ms;
  z-index: 6;

  @media screen and (min-width: 640px) {
    display: block;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 9rem;
    height: 9rem;
    border-radius: 50%;
    background-color: inherit;
  }

  &::before {
    left: -7rem;
    bottom: -1rem;
    border-top: .1rem solid var(--color-black);
    border-left: .1rem solid var(--color-black);
  }

  &::after {
    right: -4rem;
    bottom: 1rem;
    border-right: .1rem solid var(--color-black);
  }
}

.berry {
  position: absolute;
  display: block;
  border-radius: 50%;
  width: .5rem;
  height: .5rem;
  background-color: var(--color-red);
  animation: pop-in 125ms linear forwards;
  box-shadow: 1px 1px 1px 0px rgba(0,0,0,0.75);
  opacity: 0;
  z-index: 1;

  &:first-child {
    top: 6rem;
    left: 1rem;
  }

  &:nth-child(2) {
    top: 3rem;
    left: 4rem;
    animation-delay: 3100ms;
  }

  &:nth-child(3) {
    top: 4rem;
    left: 6rem;
    animation-delay: 3300ms;
  }

  &:nth-child(4) {
    top: 8rem;
    left: -4rem;
    animation-delay: 3500ms;
  }
  &:nth-child(5) {
    top: 2rem;
    left: 9rem;
    animation-delay: 3700ms;
  }
  &:nth-child(6) {
    top: 7rem;
    left: 12rem;
    animation-delay: 4500ms;
  }
  &:nth-child(7) {
    top: 7rem;
    left: 7rem;
    animation-delay: 4650ms;
  }
  &:nth-child(8) {
    top: 5rem;
    left: 11rem;
    animation-delay: 4850ms;
  }
}

.sign {
  position: absolute;
  top: 13rem;
  left: 25%;
  border: .2rem solid var(--color-black);
  width: 175px;
  height: 115px;
  font-size: 1.8rem;
  color: var(--color-black);
  background-color: var(--color-brown);
  text-align: center;
  padding-top: 4rem;
  opacity: 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: -4.5rem;
    display: block;
    width: .2rem;
    height: 10rem;
    background-color: var(--color-black);
  }

  &::before {
    left: -.2rem;
  }

  &::after {
    right: -.2rem;
  }

  @media screen and (min-width: 640px) {
    display: block;
    top: 15rem;
    left: 13%;
  }
}
</style>

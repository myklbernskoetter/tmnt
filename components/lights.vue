<template lang="html">
    <div class="light-container" key="container-1">
        <div class="line line-1" key="line-1">
          <span class="base"></span>
          <nuxt-link class="bulb" exact to="/">
            <span class="filament filament-left"></span>
            <span class="filament filament-right"></span>
            <span class="bar"></span>
          </nuxt-link>
        </div>
        <div class="line line-2" key="line-2">
          <span class="base"></span>
          <nuxt-link class="bulb" to="/contact">
            <span class="filament filament-left"></span>
            <span class="filament filament-right"></span>
            <span class="bar"></span>
          </nuxt-link>
        </div>
        <div class="line line-3" key="line-3">
          <span class="base"></span>
          <nuxt-link class="bulb" to="/about">
            <span class="filament filament-left"></span>
            <span class="filament filament-right"></span>
            <span class="bar"></span>
          </nuxt-link>
        </div>
        <div class="line line-4" key="line-4">
          <span class="base"></span>
          <nuxt-link class="bulb" to="/production">
            <span class="filament filament-left"></span>
            <span class="filament filament-right"></span>
            <span class="bar"></span>
          </nuxt-link>
        </div>
        <div class="line line-5" key="line-5">
          <span class="base"></span>
          <nuxt-link class="bulb" to="/experiments">
            <span class="filament filament-left"></span>
            <span class="filament filament-right"></span>
            <span class="bar"></span>
          </nuxt-link>
        </div>
    </div>
</template>

<script>
  export default {
  }
</script>

<style lang="scss" scoped>
.light-container {
  z-index: 1;
}
.line {
  position: absolute;
  top: 0;
  width: .2rem;
  transform: translate3d(0,-200%,0);
  transition: all 0.4s ease;
  transition-delay: 500ms;
  background-color: var(--color-black);
}

.active {
  .line {
    height: 1rem;
    transform: translate3d(0, 0, 0);
    transition: all 550ms ease;

    @media screen and (min-width: 640px) {
      height: var(--block);
    }
  }
}

.line-1 {
  right: 440px;
  height: 270px;
}

.line-2 {
  right: 390px;
  height: 290px;
}

.line-3 {
  right: 325px;
  height: 230px;
}

.line-4 {
  right: 244px;
  height: 400px;
}

.line-5 {
  right: 180px;
  height: 190px;
}

.contact-active {
  .line-2 {
      @media screen and (min-width: 640px) {
        height: 180px;
      }

    .bulb {
      box-shadow: var(--light-glow);
    }
  }
}

.about-active {
  .line-3 {
      @media screen and (min-width: 640px) {
        height: 210px;
      }

    .bulb {
      box-shadow: var(--light-glow);
    }
  }
}

.production-active {
  .line-4 {
      @media screen and (min-width: 640px) {
        height: 175px;
      }
    .bulb {
      box-shadow: var(--light-glow);
    }
  }
}

.experiments-active {
  .line-5 {
      @media screen and (min-width: 640px) {
        height: 235px;
      }

    .bulb {
      box-shadow: var(--light-glow);
    }
  }
}

.base {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(7px);
  width: 5px;
  height: 5px;
  border: 2px solid var(--color-black);
}

.base::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(20px);
  width: 16px;
  height: 16px;
  border: 2px solid var(--color-black);
  border-radius: 3px;
}

.bulb {
  position: absolute;
  bottom: -25px;
  left: -5px;
  transition: all 0.4s ease;
}

.bulb::before {
  content: '';
  position: absolute;
  left: -11px;
  bottom: -45px;
  width: 35px;
  height: 40px;
  border-radius: 50%;
  border-bottom: 2px solid var(--color-black);
  border-left: 2px solid var(--color-black);
  border-right: 2px solid var(--color-black);
}

.bulb::after {
  content: '';
  position: absolute;
  left: 50%;
  border-left: 2px solid var(--color-black);
  border-right: 2px solid var(--color-black);
  width: 11px;
  height: 6px;
}

.filament {
  position: absolute;
  display: block;
  background-color: var(--color-black);
  width: 2px;
  height: 25px;
}

.filament-left {
  transform: rotate(18deg);
}

.filament-right {
  left: 12px;
  transform: rotate(-18deg);
}


.bar {
  width: 3px;
  height: 2px;
  border-radius: 50%;
  display: block;
  position: absolute;
  top: 23px;
  left: 0px;
  z-index: 1;
  border: 1px solid var(--color-black);
  border-top: none;
}

.bar::before {
  content: '';
  width: 3px;
  height: 2px;
  border-radius: 50%;
  display: block;
  position: absolute;
  top: 0;
  left: 4px;
  z-index: 1;
  border: 1px solid var(--color-black);
  border-top: none;
}

.bar::after {
  content: '';
  width: 3px;
  height: 2px;
  border-radius: 50%;
  display: block;
  position: absolute;
  top: 0;
  left: 8px;
  z-index: 1;
  border: 1px solid var(--color-black);
  border-top: none;
}
</style>

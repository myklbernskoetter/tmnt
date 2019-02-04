<template>
  <div class="wrapper heroes-wrapper">
    <div class="container" :class="{started : started}">
      <div v-if="!started">
        <h1>Hero Select</h1>
      </div>
        <ul class="character-list">
          <li class="character" v-if="item.status != 'disabled'" v-for="(item, key) in goodGuys" :key="key" :class="{ selected : item.status, disabled : item.status === 'disabled' }">
            <span class="character-name" v-bind:style="{ backgroundColor: item.color}"><span>{{ item.name }}</span></span>
            <button class="character-view" type="button" @click="selectStatus(item, 4)">
              <span class="image-wrapper"><img :src="item.image1"/></span>
            </button>
              <span class="data-panel">
                <span class="character-meta">
                  <span class="h2"><b>Stats</b></span>
                  <span class="attribute-wrapper">
                    <span>Move:</span> <span>{{ item.move }}</span>
                    <img :src="move" class="icon move-icon" />
                  </span>
                  <span class="attribute-wrapper">
                    <span>Attack:</span> <span>{{ item.attack }}</span>
                    <img :src="attack" class="icon attack-icon" />
                  </span>
                  <span class="attribute-wrapper">
                    <span>Defend:</span> <span>{{ item.defend }}</span>
                    <img :src="defend" class="icon defend-icon" />
                  </span>
                  <span class="attribute-wrapper">
                    <span>Skills:</span> <span>{{ item.skill }}</span>
                    <img :src="chi" class="icon chi-icon" />
                  </span>
                  <span class="attribute-wrapper">
                    <img :src="focus" class="icon focus-icon" />
                    <span>Focus: </span>
                    <span class="attribute-totals">{{ item.currentFocus }}/ {{item.maxFocus}}</span>
                    <span>
                      <button class="add-remove-button add-focus" @click="addHeroFocus(item)">+</button>
                      <button class="add-remove-button remove-focus" @click="removeHeroFocus(item)">-</button>
                    </span>
                  </span>
                  <span class="attribute-wrapper">
                    <img :src="pizza" class="icon pizza-icon" />
                    <span>Health: </span>
                    <span class="attribute-totals">{{ item.currentHealth }}/ {{item.maxHealth}}</span>
                    <span>
                      <button class="hero-add-remove-button add-health" @click="addHealth(item)">+</button>
                      <button class="hero-add-remove-button remove-health" @click="removeHealth(item)">-</button>
                    </span>
                  </span>
                </span>
              </span>
              <span class="full-width special-ability" v-html="item.specialAbility"><b>Special Ability: </b><br />{{ item.specialAbility }}</span>
              <button class="stop" @click="selectStatus(item, 4)">
                <img :src="stop" alt="stop, your turn is over" />
              </button>
              <span class="ko" v-if="item.currentHealth === 0">
                <img :src="ko" alt="stop, you're knocked out!" />
              </span>
          </li>
        </ul>
    </div>
    <div class="start-button" v-if="!started && selected > 0">
      <button class="button" type="button" @click="startGame('heroes')">Start</button>
    </div>
  </div>
</template>

<script>
import { select } from '../mixins/select';
import { heroData } from '../mixins/hero-data';
import { icons } from '../mixins/icons';

export default {
  mixins: [select, heroData, icons]
};
</script>

<style lang="scss">
$mq-tiny: 0;
$mq-mini: 480px;
$mq-small: 600px;
$mq-medium: 768px;
$mq-large: 1020px;
$mq-xlarge: 1230px;
$mq-xxlarge: 1320px;
$mq-xxxlarge: 1640px;

.heroes-wrapper {
  display: none;
  transform: translateX(-100%);
  transition: transform 500ms linear;

  .heroes-active & {
    display: block;
    transform: translateX(0);
  }
}

.wrapper {
  background-color: var(--color-background-grey);
}

.container {
  margin: 0 auto;
  padding: 2rem;
  padding-bottom: 10rem;
  background-image: url('~assets/rooftop1.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-color: var(--color-background-grey);
  background-position: center 0;
}

.stop {
  display: none;
  padding: 0;
  cursor: pointer;
}

.character-list {
  display: grid;
  grid-template-columns: minmax(35rem, 1fr);
  justify-content: center;
  grid-gap: 2.5rem;
  list-style: none;
  padding-bottom: 5rem;
  padding-left: 0;

  @media (min-width: $mq-small) {
    grid-template-columns: repeat(1, 35rem);
  }

  @media (min-width: $mq-medium) {
    grid-template-columns: repeat(2, 35rem);
  }

  @media (min-width: $mq-xxxlarge) {
    grid-template-columns: repeat(3, 35rem);
  }

  li {
    display: flex;
    flex-direction: column;
    border: 0.1rem solid black;
    background-color: var(--color-white);
    transform: translateY(-10%);
    animation: gridDropIn 250ms linear forwards;
    overflow: hidden;
    opacity: 0;
    @for $i from 1 through 12 {
      &:nth-child(#{$i}) {
        animation-delay: #{$i * 250}ms;
      }
    }

    .image-wrapper {
      filter: grayscale(100%);
    }

    &:hover {
      .image-wrapper {
        filter: grayscale(0);
      }
    }

    &.selected {
      border: 0.1rem solid green;
      box-shadow: 0.1rem 0.1rem 0.1rem 0.2rem green;
      .image-wrapper {
        filter: grayscale(0);
      }
    }

    &.active {
      filter: grayscale(0);
    }

    &.disabled {
      display: none;
    }
  }
}

.character-name {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3rem;
  font-size: 2rem;
  font-weight: bold;
  z-index: 1;
  text-transform: uppercase;
}

.character-view {
  padding: 0;
  background-color: none;
  border: none;
  cursor: pointer;
}

.image-wrapper {
  display: block;
  max-height: 39rem;
  overflow: hidden;
}

.character-select {
  background-color: transparent;
}

.data-panel {
  display: none;
  flex-grow: 1;
}

.character-meta {
  display: flex;
  flex-direction: column;
}

.full-width {
  display: none;
}

// Ater starting the Game
.started {
  margin: 0 auto;

  .h2 {
    border-bottom: 0.2rem solid var(--color-black);
    text-align: center;
  }

  .selected {
    .stop {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      opacity: 1;
      z-index: 2;
    }
  }

  .ko {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    opacity: 1;
    width: 30rem;
    height: 30rem;
    z-index: 3;
  }

  .character {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 2rem;

    @media (min-width: $mq-large) {
      flex-direction: row;
    }
  }

  .character-name {
    height: 5rem;
    grid-area: title;
  }

  .character-meta {
    > span {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding-top: 1rem;
      padding-bottom: 1rem;
      border-bottom: 0.1rem solid var(--color-light-grey);
      max-width: 30rem;
    }
  }

  .image-wrapper {
    margin-top: -1.5rem;
    background-color: var(--color-black);
  }

  .data-panel {
    display: flex;
    flex-direction: column;
    padding: 6rem 2rem 4rem;

    @media (min-width: 1020px) {
      border-left: 0.2rem solid var(--color-black);
    }
  }

  .full-width {
    display: block;
    border-top: 0.2rem solid black;
    padding: 2rem;

    @media (min-width: $mq-large) {
      width: 100%;
      flex-basis: 100%;
    }
  }

  .character-list {
    grid-gap: 2.5rem;
    padding: 0;

    @media (min-width: $mq-large) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    li {
      width: 100%;
      max-width: none;

      @media (min-width: $mq-large) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        width: auto;
        grid-template-areas:
          'title title'
          'image info'
          'ability ability';
      }
    }

    .image-wrapper {
      filter: grayscale(0);

      @media (min-width: $mq-large) {
        max-width: 35rem;
      }
    }
  }

  .character-view {
    position: static;
    padding: 0;
    width: 100%;
    grid-area: image;

    @media (min-width: $mq-medium) {
      background-color: transparent;
    }
  }

  .data-panel {
    grid-area: info;
  }

  .special-ability {
    grid-area: ability;
  }
}

.attribute-wrapper {
  display: block;
  padding-left: 8rem;
}

.icon {
  position: absolute;
  left: 0;
  top: 50%;
  width: 3rem;
  transform: translateY(-50%);
  z-index: 1;
}

.focus-icon,
.pizza-icon {
  width: 5rem;
  height: 5rem;
}

.attribute-totals {
  font-weight: bold;
  font-size: 2rem;
}
</style>

<template>
  <div class="container" :class="{started : started}">
    <div v-if="!started">
      <h1>Hero Select</h1>
    </div>
      <transition-group tag="ul" class="character-list" name="heroes-selected" mode="out-in">
        <li class="character" v-if="item.status != 'disabled'" v-for="(item, key) in goodGuys" :key="key" :class="{ selected : item.status, disabled : item.status === 'disabled' }">
          <span class="character-name" v-bind:style="{ backgroundColor: item.color}"><span>{{ item.name }}</span></span>
          <button class="character-view" type="button" @click="selectStatus(item, 4)">
            <span class="image-wrapper"><img v-bind:src="item.image1"/></span>
          </button>
            <span class="data-panel">
              <span class="character-meta">
                <span class="h2"><b>Stats</b></span>
                <span class="attribute-wrapper">
                  <span>Move:</span> <span>{{ item.move }}</span>
                  <img src="/move.png" class="icon move-icon" />
                </span>
                <span class="attribute-wrapper">
                  <span>Attack:</span> <span>{{ item.attack }}</span>
                  <img src="/attack.png" class="icon attack-icon" />
                </span>
                <span class="attribute-wrapper">
                  <span>Defend:</span> <span>{{ item.defend }}</span>
                  <img src="/defend.png" class="icon defend-icon" />
                </span>
                <span class="attribute-wrapper">
                  <span>Skills:</span> <span>{{ item.skill }}</span>
                  <img src="/chi.png" class="icon chi-icon" />
                </span>
                <span class="attribute-wrapper">
                  <img src="/focus.png" class="icon focus-icon" />
                  <span>Focus: </span>
                  <span class="attribute-totals">{{ item.currentFocus }}/ {{item.maxFocus}}</span>
                  <span>
                    <button class="add-remove-button add-focus" @click="addHeroFocus(item)">+</button>
                    <button class="add-remove-button remove-focus" @click="removeHeroFocus(item)">-</button>
                  </span>
                </span>
                <span class="attribute-wrapper">
                  <img src="/pizza.png" class="icon pizza-icon" />
                  <span>Health: </span>
                  <span class="attribute-totals">{{ item.currentHealth }}/ {{item.maxHealth}}</span>
                  <span>
                    <button class="add-remove-button add-health" @click="addHealth(item)">+</button>
                    <button class="add-remove-button remove-health" @click="removeHealth(item)">-</button>
                  </span>
                </span>
              </span>
            </span>
            <span class="full-width special-ability" v-html="item.specialAbility"><b>Special Ability: </b><br />{{ item.specialAbility }}</span>
            <button class="stop" @click="selectStatus(item, 4)">
              <img src="/stop.png" alt="stop, your turn is over" />
            </button>
            <span class="ko" v-if="item.currentHealth === 0">
              <img src="/ko.png" alt="stop, you're knocked out!" />
            </span>
        </li>
      </transition-group>
    <div class="start-button" v-if="!started && selected > 0">
      <button class="button" type="button" @click="startGame('heroes')">Start</button>
    </div>
  </div>
</template>

<script>
import { select } from '../mixins/select';
import { heroData } from '../mixins/hero-data';

export default {
  mixins: [select, heroData]
};
</script>

<style lang="scss">
.container {
  max-width: 150rem;
  margin: 0 auto;
  padding: 2rem;
  padding-bottom: 10rem;
}

.stop {
  display: none;
  padding: 0;
  cursor: pointer;
}

.start-button {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateY(-50%);
  margin-bottom: 5rem;

  button {
    background-color: #619939;
    color: white;
    border-radius: 0.5rem;
    border: none;
    font-size: 2.6rem;
    font-weight: bold;
    margin: 1rem;

    &:hover,
    &:focus {
      background-color: darken(#619939, 15%);
    }
    &:active {
      background-color: darken(#619939, 35%);
    }
  }
}

.character-list {
  display: grid;
  grid-template-columns: minmax(350px, 1fr);
  justify-content: center;
  grid-gap: 2.5rem;
  list-style: none;
  padding-bottom: 5rem;
  padding-left: 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 35rem);
  }

  @media (min-width: 1020px) {
    grid-template-columns: repeat(3, 35rem);
  }

  @media (min-width: 1640px) {
    grid-template-columns: repeat(4, 35rem);
  }

  li {
    display: flex;
    flex-direction: column;
    border: 0.1rem solid black;
    overflow: hidden;
    background-color: #fff;

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
      background-image: radial-gradient(black 50%, transparent 50%);
      background-size: 4px 4px;
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
    border-bottom: 0.2rem solid black;
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

    @media (min-width: 1020px) {
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
      border-bottom: 0.1rem solid lightgrey;
      max-width: 30rem;
    }
  }

  .image-wrapper {
    margin-top: -1.5rem;
    background-color: #000;
  }

  .data-panel {
    display: flex;
    flex-direction: column;
    padding: 6rem 2rem 4rem;

    @media (min-width: 1020px) {
      border-left: 0.2rem solid black;
    }
  }

  .full-width {
    display: block;
    border-top: 0.2rem solid black;
    padding: 2rem;

    @media (min-width: 1020px) {
      width: 100%;
      flex-basis: 100%;
    }
  }

  .character-list {
    grid-gap: 2.5rem;
    padding: 0;

    @media (min-width: 1020px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    li {
      width: 100%;
      max-width: none;

      @media (min-width: 1020px) {
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

      @media (min-width: 1020px) {
        max-width: 35rem;
      }
    }
  }

  .character-view {
    position: static;
    padding: 0;
    width: 100%;
    grid-area: image;

    @media (min-width: 720px) {
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

.add-remove-button {
  background-color: #619939;
  color: white;
  border-radius: 0.5rem;
  border: none;
  font-size: 2.6rem;
  font-weight: bold;
  margin: 1rem;

  &:hover,
  &:focus {
    background-color: darken(#619939, 15%);
  }
  &:active {
    background-color: darken(#619939, 35%);
  }
}

.attribute-totals {
  font-weight: bold;
  font-size: 2rem;
}

.heroes-selected-enter-active {
  animation: homeHeroFadeIn 500ms linear forwards;
}

.heroes-selected-leave-active {
  animation: homeHeroFadeOut 500ms linear forwards;
}
@keyframes homeHeroFadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes homeHeroFadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
</style>

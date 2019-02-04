<template>
  <div class="wrapper villains-wrapper">
    <div class="container" :class="{started : started}">
      <div v-if="!started">
        <h1 class="h1">Villian Select</h1>
      </div>
      <div class="attribute-wrapper villain-header" v-if="started">
        <img :src="focus" class="icon focus-icon" />
        <span><b>Villian Focus: {{currentFocus}} </b></span>
        <span>/ <b>{{maxFocus}}</b></span>
        <span>
          <button class="villain-add-remove-button add-focus" @click="addFocus()">+</button>
          <button class="villain-add-remove-button remove-focus" @click="removeFocus()">-</button>
        </span>
      </div>
        <ul class="villain-character-list">
          <li class="character" v-for="(item, key) in badGuys" :key="key" :class="{ selected : item.status, disabled : item.status === 'disabled' }">
            <span class="character-name"><span>{{ item.name }}</span></span>
            <button class="character-view" type="button" @click="selectStatus(item, 6)">
              <span class="image-wrapper"><img v-bind:src="item.image1"/></span>
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
                  <img :src="pizza" class="icon pizza-icon" />
                  <span>Max-Health: </span>
                  <span class="attribute-totals">{{item.maxHealth}}</span>
                </span>
              </span>
            </span>
            <span class="full-width special-ability" v-html="item.specialAbility"><b>Special Ability: </b><br />{{ item.specialAbility }}</span>
        </li>
      </ul>
    </div>
    <div class="start-button" v-if="!started && selected > 0">
      <button class="button" type="button" @click="startGame('villains')">Start</button>
    </div>
  </div>
</template>

<script>
import { select } from '../mixins/select';
import { villainData } from '../mixins/villain-data';
import { icons } from '../mixins/icons';

export default {
  mixins: [select, villainData, icons]
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

.villains-wrapper {
  display: none;
  transform: translateX(100%);
  transition: transform 500ms linear;

  .villains-active & {
    display: block;
    transform: translateX(0);
  }
}

.h1 {
  color: var(--color-white);
}

.h2 b {
  color: var(--color-black);
}

.villain-header {
  color: var(--color-white);
}

.wrapper {
  background-color: var(--color-background-grey);
}
.container {
  padding: 2rem;
  padding-bottom: 10rem;
  background: transparent;
}

.stop {
  display: none;
}

.villain-character-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  padding-bottom: 5rem;
  padding-left: 0;

  li {
    display: flex;
    flex-direction: column;
    border: 0.1rem solid black;
    overflow: hidden;
    min-width: 15%;
    max-width: 18rem;
    margin: 1rem;
    background-color: var(--color-black);
    animation: gridDropIn 200ms linear forwards;
    overflow: hidden;
    opacity: 0;
    @for $i from 1 through 25 {
      &:nth-child(#{$i}) {
        animation-delay: #{$i * 150}ms;
      }
    }

    .image-wrapper {
      filter: grayscale(85%);
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
  padding: 1rem;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  background-color: var(--color-black);
  color: #fff;
  z-index: 1;
}

.character-view {
  background-color: none;
  cursor: pointer;
  padding: 0;
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
  padding-top: 12rem;

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

    @media (min-width: $mq-medium) {
      flex-direction: row;
    }
  }

  .character-name {
    height: 5rem;
  }

  .character-meta {
    > span {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding-top: 1rem;
      padding-bottom: 1rem;
      border-bottom: 0.1rem solid lightgrey;
      max-width: 35rem;
    }
  }

  .character-list {
    li {
      background-color: #fff;
    }
  }

  .image-wrapper {
    margin-top: -1.5rem;
    background-color: #000;
  }

  .data-panel {
    display: flex;
    flex-direction: column;
    padding: 6rem 4rem 4rem;

    @media (min-width: $mq-medium) {
      border-left: 0.2rem solid black;
    }
  }

  .full-width {
    display: block;
    border-top: 0.2rem solid black;
    padding: 2rem;

    @media (min-width: $mq-medium) {
      width: 100%;
      flex-basis: 100%;
    }
  }

  .character-list {
    padding: 0;

    li {
      width: 100%;
      max-width: none;

      @media (min-width: $mq-medium) {
        min-width: 100%;
        max-width: 25rem;
        width: auto;
      }

      @media (min-width: $mq-large) {
        min-width: 45%;
      }
    }

    .image-wrapper {
      filter: grayscale(0);

      @media (min-width: $mq-medium) {
        max-width: 35rem;
      }
    }
  }

  .character-view {
    position: static;
    padding: 0;
    width: 100%;

    @media (min-width: $mq-medium) {
      padding-top: 5rem;
      max-width: 40%;
      background-color: #000;
    }
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

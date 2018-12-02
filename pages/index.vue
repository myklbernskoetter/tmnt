<template>
  <div class="container" :class="{started : started}">
    <div v-if="!started">
      <h1>Character Select</h1>
    </div>
    <ul class="character-list">
      <li class="character" v-for="(item, key) in goodGuys" :key="key" :class="{ selected : item.status, disabled : item.status === 'disabled' }">
        <button class="character-view" type="button" @click="selectStatus(item)">
          <span class="character-name" v-bind:style="{ backgroundColor: item.color}"><span>{{ item.name }}</span></span>
          <span class="image-wrapper"><img v-bind:src="item.image1"/></span>
        </button>
          <span class="data-panel">
            <span class="character-meta">
              <span class="h2"><b>Stats</b></span>
              <span class="attribute-wrapper">
                <span>Move:</span> <span>{{ item.move }}</span>
                <img src="/images/icons/move.png" class="icon move-icon" />
              </span>
              <span class="attribute-wrapper">
                <span>Attack:</span> <span>{{ item.attack }}</span>
                <img src="/images/icons/attack.png" class="icon attack-icon" />
              </span>
              <span class="attribute-wrapper">
                <span>Defend:</span> <span>{{ item.defend }}</span>
                <img src="/images/icons/defend.png" class="icon defend-icon" />
              </span>
              <span class="attribute-wrapper">
                <span>Skills:</span> <span>{{ item.skill }}</span>
                <img src="/images/icons/chi.png" class="icon chi-icon" />
              </span>
              <span class="attribute-wrapper">
                <img src="/images/icons/focus.png" class="icon focus-icon" />
                <span>Focus: </span>
                <span class="attribute-totals">{{ item.currentFocus }}/ {{item.maxFocus}}</span>
                <span>
                  <button class="add-remove-button add-focus" @click="addFocus(item)">+</button>
                  <button class="add-remove-button remove-focus" @click="removeFocus(item)">-</button>
                </span>
              </span>
              <span class="attribute-wrapper">
                <img src="/images/icons/pizza.png" class="icon pizza-icon" />
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
          <span class="stop">
            <img src="/images/icons/stop.png" alt="stop, your turn is over" />
          </span>
          <span class="ko" v-if="item.currentHealth === 0">
            <img src="/images/icons/ko.png" alt="stop, you're knocked out!" />
          </span>
      </li>
    </ul>
    <div class="start-button" v-if="!started && selected > 0">
      <button class="button" type="button" @click="startGame()">Start</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: 0,
      started: false,
      goodGuys: [
        {
          name: 'Leonardo',
          image1: '/images/leo-1.jpg',
          color: '#4aa9e0',
          imageSelected: '',
          status: false,
          maxHealth: 12,
          currentHealth: 12,
          maxFocus: 3,
          currentFocus: 3,
          attack: 1,
          defend: 3,
          move: 3,
          skill: 4,
          specialAbility: `
            <b>Leader:</b> </br>After Action dice are rolled and any re-rolls are made,
            Leo may trade one Action die belonging to any hero with an Action
            die belonging to another hero until the end of the round.`
        },
        {
          name: 'Donatello',
          description: 'text',
          image1: '/images/donatello-1.jpg',
          color: '#905f9c',
          imageSelected: '',
          status: false,
          maxHealth: 11,
          currentHealth: 11,
          maxFocus: 4,
          currentFocus: 4,
          attack: 1,
          defend: 4,
          move: 3,
          skill: 3,
          specialAbility: `
            <b>Smart:</b></br>At the end of each round, Donnie may either regain
            1 Focus or give 1 of his Focus to another hero of his choice
            (not to exceed that hero\'s maximum Focus).`
        },
        {
          name: 'Raphael',
          description: 'text',
          image1: '/images/raphael-1.jpg',
          color: '#d1432d',
          imageSelected: '',
          status: false,
          maxHealth: 13,
          currentHealth: 13,
          maxFocus: 3,
          currentFocus: 3,
          attack: 2,
          defend: 3,
          move: 3,
          skill: 2,
          specialAbility: `
            <b>Loner:</b></br>Raph has 6 Action dice instead of 3. However,
            he cannot share other heroes' Action Dice.
            Other heroes may share his dice as usual.`
        },
        {
          name: 'Michaelangelo',
          description: 'text',
          image1: '/images/mikey-1.jpg',
          color: '#de9835',
          imageSelected: '',
          status: false,
          maxHealth: 12,
          currentHealth: 12,
          maxFocus: 2,
          currentFocus: 2,
          attack: 1,
          defend: 3,
          move: 4,
          skill: 3,
          specialAbility: `
            <b>Nimble:</b></br>Once per turn, Mikey may move 1 space for free,
            ignoring terrain and break away rules. Also, terrain moves cost
            Mikey 1 lewss icon of your choice to use.`
        },
        {
          name: 'Splinter',
          description: 'text',
          image1: '/images/splinter-1.jpg',
          color: 'brown',
          imageSelected: '',
          status: false,
          maxHealth: 7,
          currentHealth: 7,
          maxFocus: 4,
          currentFocus: 4,
          attack: 1,
          defend: 4,
          move: 2,
          skill: 5,
          specialAbility:
            '<b>Master: </b></br>Master Spliter may use 2 special moves per round instead of only 1.'
        },
        {
          name: 'April',
          description: 'text',
          image1: '/images/april-1.jpg',
          color: 'yellow',
          imageSelected: '',
          status: false,
          maxHealth: 11,
          currentHealth: 11,
          maxFocus: 5,
          currentFocus: 5,
          attack: 1,
          defend: 3,
          move: 4,
          skill: 2,
          specialAbility: `
            <b>Beta Tech: </b></br> April receives the Stealth Suit
            and Gravity Gauntlet special moves in addition to her other moves.
            These moves do not count against her limit of 1 special move per turn when used.`
        },
        {
          name: 'Casey Jones',
          description: 'text',
          image1: '/images/casey-1.jpg',
          color: 'grey',
          imageSelected: '',
          status: false,
          maxHealth: 15,
          currentHealth: 15,
          maxFocus: 2,
          currentFocus: 2,
          attack: 2,
          defend: 2,
          move: 4,
          skill: 2,
          specialAbility: `
            <b>Walk It Off: </b></br>Casey regains Life (but not focus) when he rolls skateboard
            icons on his Action dice, just as though he had rolled a chi icon.`
        }
      ]
    };
  },
  methods: {
    selectStatus: function(item) {
      if (this.selected < 4) {
        item.status = !item.status;
        if (item.status) {
          this.selected++;
        } else {
          this.selected--;
        }
      } else if (this.selected === 4) {
        if (item.status) {
          this.selected--;
          item.status = false;
        }
      }
    },
    startGame: function() {
      const $this = this;
      $this.started = true;
      const characters = document.getElementsByClassName('character');
      for (let i = 0; i < characters.length; i++) {
        if (!characters[i].classList.contains('selected')) {
          $this.goodGuys[i]['status'] = 'disabled';
        }
      }
    },
    addHealth: function(item) {
      if (item.currentHealth < item.maxHealth) {
        item.currentHealth++;
      }
    },
    removeHealth: function(item) {
      if (item.currentHealth > 0) {
        item.currentHealth--;
      }
    },
    addFocus: function(item) {
      if (item.currentFocus < item.maxFocus) {
        item.currentFocus++;
      }
    },
    removeFocus: function(item) {
      if (item.currentFocus > 0) {
        item.currentFocus--;
      }
    }
  }
};
</script>

<style lang="scss">
.container {
  max-width: 150rem;
  padding: 2rem;
  padding-bottom: 10rem;
  background-color: lightgrey;
}

.stop {
  display: none;
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  padding-bottom: 5rem;

  li {
    display: flex;
    flex-direction: column;
    border: 0.1rem solid black;
    overflow: hidden;
    min-width: 25%;
    max-width: 28rem;
    background-color: #fff;

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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3rem;
  font-size: 2rem;
  font-weight: bold;
  z-index: 1;
  text-transform: uppercase;
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

    @media (min-width: 720px) {
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

  .image-wrapper {
    margin-top: -1.5rem;
    background-color: #000;
  }

  .data-panel {
    display: flex;
    flex-direction: column;
    padding: 6rem 4rem 4rem;

    @media (min-width: 720px) {
      border-left: 0.2rem solid black;
    }
  }

  .full-width {
    display: block;
    border-top: 0.2rem solid black;
    padding: 2rem;

    @media (min-width: 720px) {
      width: 100%;
      flex-basis: 100%;
    }
  }

  .character-list {
    padding: 0;

    li {
      width: 100%;
      max-width: none;

      @media (min-width: 720px) {
        min-width: 100%;
        max-width: 25rem;
        width: auto;
      }

      @media (min-width: 1020px) {
        min-width: 45%;
      }
    }

    .image-wrapper {
      filter: grayscale(0);

      @media (min-width: 720px) {
        max-width: 35rem;
      }
    }
  }

  .character-view {
    position: static;
    padding: 0;
    width: 100%;

    @media (min-width: 720px) {
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
</style>

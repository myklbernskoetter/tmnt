<template>
  <div class="container" :class="{started : started}">
    <div v-if="!started">
      <h1>Villian Select</h1>
    </div>
    <div class="attribute-wrapper">
      <img src="/images/icons/focus.png" class="icon focus-icon" />
      <span><b>Villian Focus: {{currentFocus}} </b></span>
      <span>/ <b>{{maxFocus}}</b></span>
      <span>
        <button class="add-remove-button add-focus" @click="addFocus()">+</button>
        <button class="add-remove-button remove-focus" @click="removeFocus()">-</button>
      </span>
    </div>
    <ul class="character-list">
      <li class="character" v-for="(item, key) in badGuys" :key="key" :class="{ selected : item.status, disabled : item.status === 'disabled' }">
        <span class="character-name"><span>{{ item.name }}</span></span>
        <button class="character-view" type="button" @click="selectStatus(item)">
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
                <img src="/images/icons/pizza.png" class="icon pizza-icon" />
                <span>Max-Health: </span>
                <span class="attribute-totals">{{item.maxHealth}}</span>
              </span>
            </span>
          </span>
          <span class="full-width special-ability" v-html="item.specialAbility"><b>Special Ability: </b><br />{{ item.specialAbility }}</span>
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
      maxFocus: 3,
      currentFocus: 3,
      badGuys: [
        {
          name: 'Master Shredder',
          image1: '/images/shredder-2.png',
          color: 'grey',
          imageSelected: '',
          status: false,
          maxHealth: '16 (11 to awaken)',
          attack: 3,
          defend: 4,
          move: 3,
          specialAbility: `
            <b>Commanding: </b></br>
            The Villain players' hand size is increaed by 1 card while Shredder is in play.`
        },
        {
          name: 'Street Thug Gunner',
          image1: '/images/casey-1.jpg',
          color: 'grey',
          imageSelected: '',
          status: false,
          maxHealth: 1,
          attack: 1,
          defend: 2,
          move: 3,
          specialAbility: `
            <b>Gunner: </b></br>
            Street Thug Gunner's ranged strikes do not weaken for the first 4 spaces.`
        },
        {
          name: 'Street Thug Brawler',
          image1: '/images/casey-1.jpg',
          color: 'grey',
          imageSelected: '',
          status: false,
          maxHealth: 3,
          attack: 1,
          defend: 2,
          move: 3,
          specialAbility: `
            <b>Sure-Footed: </b></br>
            Street Thug Brawlers ignore slow and rough terrain.`
        },
        {
          name: 'Aloplex',
          image1: '/images/casey-1.jpg',
          color: 'grey',
          imageSelected: '',
          status: false,
          maxHealth: '9 (9 to awaken)',
          attack: 1,
          defend: 3,
          move: 5,
          specialAbility: `
            <b>Agile: </b></br>
            Alopex does not lose her remaining Move points when she begins a new action.`
        },
        {
          name: 'Old Hob',
          image1: '/images/casey-1.jpg',
          color: 'grey',
          imageSelected: '',
          status: false,
          maxHealth: '11 (8 to awaken)',
          attack: 1,
          defend: 3,
          move: 3,
          specialAbility: `
            <b>Cunning: </b></br>
            Allied minions within 3 spaces of Old Hob roll +1 die each time they roll dice.`
        },
        {
          name: 'Rocksteady',
          image1: '/images/casey-1.jpg',
          color: 'grey',
          imageSelected: '',
          status: false,
          maxHealth: 8,
          attack: 3,
          defend: 5,
          move: 3,
          specialAbility: `
          Cost: 2 Focus (Enhanced Foot Clan Bruiser)
          <b>Rhino Charge: </b></br>
          For 1 melee icon and 1 move icon,Rockstead may make a charge action.
          He receives 6 move points but must move in a straight line. At the end of his move,
          Rocksteady may make an Attack +2 melee strike.`
        },
        {
          name: 'Bebop',
          image1: '/images/casey-1.jpg',
          color: 'grey',
          imageSelected: '',
          status: false,
          maxHealth: 8,
          attack: 3,
          defend: 4,
          move: 4,
          specialAbility: `
            Cost: 2 Focus (Enhanced Foot Clan Bruiser)
            <b>Roberta: </b></br>
            Bebop's chainsaw, Roberta, cuts easily through armor.
            Any defense rolls made against Bebop's attacks are made at
            Defend - 2 penalty`
        },
        {
          name: 'Foot Clan Ninja',
          image1: '/images/casey-1.jpg',
          color: 'grey',
          imageSelected: '',
          status: false,
          maxHealth: 10,
          currentHealth: 10,
          attack: 1,
          defend: 1,
          move: 1,
          specialAbility: `
            <b>Numerous: </b></br>
            You may spend 1 focus at the start of your turn to add 2
            Foot Clan Ninjas to your figure pool and immediately spawn 1.`
        },
        {
          name: 'Mouser',
          image1: '/images/mousers-1.jpg',
          color: 'grey',
          imageSelected: '',
          status: false,
          maxHealth: 3,
          attack: '*',
          defend: 0,
          move: 1,
          specialAbility: `
            <b>Machine Minion</b></br>
            <b>Automatons: </b></br>
            All mousers activate at the end of each Villain player's turn and move towards
            the nearest non-KO'ed hero with the lowest Life plus Defend stat.
            After movement, each hero adjacent to a Mouser suffers a melee strike with strength
            equal to the number of Mousers adjacent to that hero.`
        },
        {
          name: 'Foot Clan Elite',
          image1: '/images/casey-1.jpg',
          color: 'grey',
          imageSelected: '',
          status: false,
          maxHealth: 4,
          attack: 2,
          defend: 3,
          move: 4,
          specialAbility: `
            <b>Skilled: </b></br>
            For Foot Clan Elites, double hit results count as triple hits when
            attacking and as single blocks when defending.`
        },
        {
          name: 'Foot Clan Bruiser',
          image1: '/images/casey-1.jpg',
          color: 'grey',
          imageSelected: '',
          status: false,
          maxHealth: 6,
          attack: 3,
          defend: 4,
          move: 2,
          specialAbility: `
            <b>Big</b></br>
            Figures adjacent to Foot Clan Bruiser treat him as
            2 figures when breaking away or awakening
            `
        },
        {
          name: 'Foot Clan Mystic',
          image1: '/images/casey-1.jpg',
          color: 'grey',
          imageSelected: '',
          status: false,
          maxHealth: 10,
          currentHealth: 10,
          attack: 1,
          defend: 1,
          move: 1,
          skill: 1,
          specialAbility: `
            <b>Title: </b></br>Ability.`
        },
        {
          name: 'Karai',
          image1: '/images/casey-1.jpg',
          color: 'grey',
          imageSelected: '',
          status: false,
          maxHealth: '10 (7 to awaken)',
          attack: 2,
          defend: 3,
          move: 4,
          specialAbility: `
            <b>Archer: </b></br>
            Karai's ranged strikes do not weaken for the first 5 spaces.`
        },
        {
          name: 'Super-Shredder',
          image1: '/images/shredder-1.jpg',
          color: 'grey',
          imageSelected: '',
          status: false,
          maxHealth: '16 (11 to awaken)',
          attack: 4,
          defend: 5,
          move: 4,
          specialAbility: `
            <b>Bown Down to his Evil: </b></br>
            Ultimate Shredder may activate more than once on the Villain player's turn.`
        }
      ]
    };
  },
  methods: {
    selectStatus: function(item) {
      if (this.selected < 6) {
        item.status = !item.status;
        if (item.status) {
          this.selected++;
        } else {
          this.selected--;
        }
      } else if (this.selected === 6) {
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
          $this.badGuys[i]['status'] = 'disabled';
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
    addFocus: function() {
      if (this.currentFocus < this.maxFocus) {
        this.currentFocus++;
      }
    },
    removeFocus: function(item) {
      if (this.currentFocus > 0) {
        this.currentFocus--;
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
  background-color: rgba(0, 0, 0, 0.1);
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
  padding-left: 0;

  li {
    display: flex;
    flex-direction: column;
    border: 0.1rem solid black;
    overflow: hidden;
    min-width: 15%;
    max-width: 18rem;
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
  width: 100%;
  height: 3rem;
  font-size: 2rem;
  font-weight: bold;
  z-index: 1;
  text-transform: uppercase;
  background-color: #000;
  color: #fff;
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

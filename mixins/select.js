export const select = {
  data: function () {
    return {
      selected: 0,
      started: false,
    }
  },
  methods: {
    selectStatus: function(item, count) {
      const selectAudio = new Audio('/sounds/select1.mp3');
      const deselectAudio = new Audio('/sounds/deselect1.mp3');

      if (this.selected < count) {
        item.status = !item.status;
        if (item.status) {
          if (this.started === false) {
            selectAudio.play();
          }
          this.selected++;
        } else {
          if (this.started === false) {
            deselectAudio.play();
          }
          this.selected--;
        }
      } else if (this.selected === count) {
        if (item.status) {
          if (this.started === false) {
            deselectAudio.play();
          }
          this.selected--;
          item.status = false;
        }
      }
    },
    startGame: function(characterSet) {
      const startAudio = new Audio('/sounds/tmnt-start3.mp3');
      const villainAudio = new Audio('/sounds/technodrome1.mp3');
      const $this = this;

      $this.started = true;

      if (characterSet == 'heroes') {
        startAudio.play();

        for (let i = 0; i <= $this.goodGuys.length; i++) {
          if (!$this.goodGuys[i]['status'] == true) {
            $this.goodGuys.splice(i, 1);
            i = 0;
          }
        }
      } else {
        villainAudio.play();

        for (let i = 0; i <= $this.badGuys.length; i++) {
          if (!$this.badGuys[i]['status'] == true) {
            $this.badGuys.splice(i, 1);
            i = 0;
          }
        }
      }
    },
    addHealth: function(item) {
      const hitAudio = new Audio('/sounds/tmnt-hit1.mp3');

      if (item.currentHealth < item.maxHealth) {
        item.currentHealth++;
        hitAudio.play();
      }
    },
    removeHealth: function(item) {
      const koAudio = new Audio('/sounds/tmnt-ko1.mp3');
      const deselectAudio = new Audio('/sounds/deselect1.mp3');

      if (item.currentHealth > 0) {
        deselectAudio.play();
        item.currentHealth--;
        if(item.currentHealth === 0) {
          koAudio.play();
        }
      }
    },
    addFocus: function() {
      const hitAudio = new Audio('/sounds/tmnt-hit1.mp3');

      if (this.currentFocus < this.maxFocus) {
        hitAudio.play();
        this.currentFocus++;
      }
    },
    removeFocus: function(item) {
      const hitAudio = new Audio('/sounds/tmnt-hit1.mp3');

      if (this.currentFocus > 0) {
        hitAudio.play();
        this.currentFocus--;
      }
    },

    addHeroFocus: function(item) {
      const hitAudio = new Audio('/sounds/tmnt-hit1.mp3');

      if (item.currentFocus < item.maxFocus) {
        hitAudio.play();
        item.currentFocus++;
      }
    },
    removeHeroFocus: function(item) {
      const deselectAudio = new Audio('/sounds/deselect1.mp3');

      if (item.currentFocus > 0) {
        item.currentFocus--;
        deselectAudio.play();
      }
    },
  },
};

export const select = {
  data: function () {
    return {
      selected: 0,
      started: false,
    }
  },
  methods: {
    selectStatus: function(item, count) {
      if (this.selected < count) {
        item.status = !item.status;
        if (item.status) {
          this.selected++;
        } else {
          this.selected--;
        }
      } else if (this.selected === count) {
        if (item.status) {
          this.selected--;
          item.status = false;
        }
      }
    },
    startGame: function(characterSet) {
      console.log(characterSet);
      const $this = this;
      $this.started = true;

      if (characterSet == 'heroes') {
        for (let i = 0; i <= $this.goodGuys.length; i++) {
          if (!$this.goodGuys[i]['status'] == true) {
            $this.goodGuys.splice(i, 1);
            i = 0;
          }
        }
      } else {
        for (let i = 0; i <= $this.badGuys.length; i++) {
          if (!$this.badGuys[i]['status'] == true) {
            $this.badGuys.splice(i, 1);
            i = 0;
          }
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
      console.log('add focus');
      if (this.currentFocus < this.maxFocus) {
        this.currentFocus++;
      }
    },
    removeFocus: function(item) {
      console.log('remove focus');
      if (this.currentFocus > 0) {
        this.currentFocus--;
      }
    },

    addHeroFocus: function(item) {
      console.log('add focus');
      if (item.currentFocus < item.maxFocus) {
        item.currentFocus++;
      }
    },
    removeHeroFocus: function(item) {
      console.log('remove focus');
      if (item.currentFocus > 0) {
        item.currentFocus--;
      }
    },
  },
};

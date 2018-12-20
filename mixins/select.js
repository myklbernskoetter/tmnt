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
      const $this = this;
      $this.started = true;
      const characters = document.getElementsByClassName('character');
      for (let i = 0; i < characters.length; i++) {
        if (!characters[i].classList.contains('selected')) {
          if (characterSet === 'villains') {
            $this.badGuys[i]['status'] = 'disabled';
          } else {
            $this.goodGuys[i]['status'] = 'disabled';
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
      if (this.currentFocus < this.maxFocus) {
        this.currentFocus++;
      }
    },
    removeFocus: function(item) {
      if (this.currentFocus > 0) {
        this.currentFocus--;
      }
    }
  },
};

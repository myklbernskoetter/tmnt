<template>
  <span class="game-card">
    <button class="character-view" type="button" @click="emitStatus">
      <span class="image-wrapper"><img :src="item.image1"/></span>
    </button>
    <span class="data-panel">
      <transition-group tag="span" class="character-meta" name="attribute-slide">
        <span class="h2" :key="0"><b>Stats</b></span>
        <span class="attribute-wrapper" :key="1">
          <span>Move:</span> <span>{{ item.move }}</span>
          <img :src="move" class="icon move-icon" />
        </span>
        <span class="attribute-wrapper" :key="2">
          <span>Attack:</span> <span>{{ item.attack }}</span>
          <img :src="attack" class="icon attack-icon" />
        </span>
        <span class="attribute-wrapper" :key="3">
          <span>Defend:</span> <span>{{ item.defend }}</span>
          <img :src="defend" class="icon defend-icon" />
        </span>
        <span class="attribute-wrapper" :key="4">
          <span>Skills:</span> <span>{{ item.skill }}</span>
          <img :src="chi" class="icon chi-icon" />
        </span>
        <span class="attribute-wrapper" :key="5">
          <img :src="focus" class="icon focus-icon" />
          <span>Focus: </span>
          <span class="attribute-totals">{{ item.currentFocus }}/ {{item.maxFocus}}</span>
          <span>
            <button class="hero-add-remove-button add-focus" @click="addFocus">+</button>
            <button class="hero-add-remove-button remove-focus" @click="removeFocus">-</button>
          </span>
        </span>
        <span class="attribute-wrapper" :key="6">
          <img :src="pizza" class="icon pizza-icon" />
          <span>Health: </span>
          <span class="attribute-totals">{{ item.currentHealth }}/ {{item.maxHealth}}</span>
          <span>
            <button class="hero-add-remove-button add-health" @click="addHealth">+</button>
            <button class="hero-add-remove-button remove-health" @click="removeHealth">-</button>
          </span>
        </span>
      </transition-group>
    </span>
    <span class="full-width special-ability" v-html="item.specialAbility">
      <b>Special Ability: </b>
      <br />
      {{ item.specialAbility }}
    </span>
    <button class="stop" @click="emitStatus">
      <img :src="stop" alt="stop, your turn is over" />
    </button>
    <span class="ko" v-if="item.currentHealth === 0">
      <img :src="ko" alt="Stop! you're knocked out!" />
    </span>
  </span>
</template>

<script>
import { icons } from '../mixins/icons';

export default {
  props: ['item'],
  mixins: [icons],
  methods: {
    emitStatus: function() {
      this.$emit('statusChange');
    },
    addHealth: function() {
      this.$emit('addHealth');
    },
    removeHealth: function() {
      this.$emit('removeHealth');
    },
    addFocus: function() {
      this.$emit('addFocus');
    },
    removeFocus: function() {
      this.$emit('removeFocus');
    },
  }
};
</script>

<style lang="scss" scoped>

</style>

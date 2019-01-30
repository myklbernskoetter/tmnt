<template>
  <div class="terrain-panel">
  <h3 class="h3"><button type="button" @click="active = !active">Terrain</button></h3>
    <transition-group name="card-fade" tag="ul" class="card-list" v-if="active">
      <li class="card" v-for="(item, key) in terrain" :key="key">
        <span class="h2">{{item.name}}</span>
        <span class="terrain-image">{{item.image}}</span>
        <span class="description">{{item.text}}</span>
        <span class="example">{{item.example}}</span>
        <span class="terrain-icon">{{item.icon}}</span>
        <button class="remove-button" type="button" @click="removeCard(key)">X</button>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { terrainData } from '../mixins/terrain-data';

export default {
  mixins: [terrainData],
  data() {
    return {
      active: false
    };
  },
  methods: {
    removeCard(index) {
      this.terrain.splice(index, 1);
    }
  }
};
</script>

<style lang="scss">
.h3 {
  display: flex;
}

.h2 {
  font-size: 2.4rem;
  align-self: flex-start;
  border-bottom: 0.2rem solid #666;
  margin-bottom: 2.5rem;
}

.card-list {
  padding: 2rem;

  @media (min-width: 600px) {
    display: grid;
    grid-gap: 2.5rem;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 728px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1020px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  border: 0.1rem solid #666;
  padding: 3rem 1rem 1rem;
  margin-bottom: 2.5rem;
  background-color: #fff;
  box-shadow: 0.1rem 0.2rem 0.2rem 0.1rem #666;
  min-height: 400px;

  @media (min-width: 600px) {
    margin-bottom: 0;
  }
}

.remove-button {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 1rem;
  background-color: transparent;
  font-size: 1.8rem;
  font-weight: bold;
  border: none;
  cursor: pointer;

  &:hover,
  &:focus {
    color: green;
    text-decoration: underline;
  }
}

.card-fade-enter-active,
.card-fade-leave-active {
  transition: opacity 0.5s;
}
.card-fade-enter, .card-fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

<template>
  <div class="terrain-panel">
    <h3 class="h3 start-button"><button class="button" type="button" @click="active = !active">Terrain</button></h3>
    <transition-group name="card-fade" tag="ul" class="card-list" v-if="active">
      <li class="card" v-for="(item, key) in terrain" :key="key" :style="{ borderColor: item.color}">
        <span class="h2" :style="{ backgroundColor: item.color}">{{item.name}}</span>
        <!-- <span class="terrain-image">{{item.image}}</span> -->
        <span class="description" v-html="item.text">{{item.text}}</span>
        <!-- <span class="example">{{item.example}}</span> -->
        <!-- <span class="terrain-icon">{{item.icon}}</span> -->
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
  position: relative;
  top: 0;
  display: flex;
}

.h2 {
  align-self: stretch;
  text-align: center;
  font-size: 2.4rem;
  border-bottom: 0.2rem solid #666;
  margin-bottom: 2.5rem;
  color: #fff;
  margin-top: 1rem;
  margin-right: 3rem;
}

.card-list {
  padding: 2rem;
  margin-bottom: 0;

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
  padding: 1rem;
  margin-bottom: 2.5rem;
  background-color: #fdfdfd;
  min-height: 400px;
  font-size: 1.6rem;
  border: 0.3rem solid #000;

  @media (min-width: 600px) {
    margin-bottom: 0;
  }
}

.terrain-panel {
  .home-active & {
    display: none;
  }
}
</style>

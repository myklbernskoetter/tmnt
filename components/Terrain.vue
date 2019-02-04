<template>
  <div class="terrain-panel">
    <h3 class="h3 start-button"><button class="button" type="button" @click="active = !active">Terrain</button></h3>
    <ul name="card-fade" class="card-list" v-if="active">
      <li class="card" v-for="(item, key) in terrain" :key="key" :style="{ borderColor: item.color}">
        <span class="h2" :style="{ backgroundColor: item.color}">{{item.name}}</span>
        <!-- <span class="terrain-image">{{item.image}}</span> -->
        <span class="description" v-html="item.text">{{item.text}}</span>
        <!-- <span class="example">{{item.example}}</span> -->
        <!-- <span class="terrain-icon">{{item.icon}}</span> -->
        <button class="remove-button" type="button" @click="removeCard(key)">X</button>
      </li>
    </ul>
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
$mq-small: 600px;
$mq-medium: 768px;
$mq-large: 1020px;
.h3 {
  position: relative;
  top: 0;
  display: flex;
}

.h2 {
  align-self: stretch;
  text-align: center;
  font-size: 2.4rem;
  border-bottom: 0.2rem solid var(--color-dark-grey);
  margin-top: 1rem;
  margin-right: 3rem;
  margin-bottom: 2.5rem;
  font-weight: bold;
  color: var(--color-white);
}

.card-list {
  padding: 2rem;
  margin-bottom: 0;

  @media (min-width: $mq-small) {
    display: grid;
    grid-gap: 2.5rem;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: $mq-large) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  border: 0.1rem solid var(--color-dark-grey);
  padding: 1rem;
  margin-bottom: 2.5rem;
  background-color: #fdfdfd;
  min-height: 40rem;
  font-size: 1.6rem;
  animation: gridDropIn 125ms linear forwards;
  overflow: hidden;
  opacity: 0;
  @for $i from 1 through 12 {
    &:nth-child(#{$i}) {
      animation-delay: #{$i * 100}ms;
    }
  }

  @media (min-width: $mq-small) {
    margin-bottom: 0;
  }

  .h2 {
    color: #fff;
  }
}

.terrain-panel {
  .home-active & {
    display: none;
  }
}
</style>

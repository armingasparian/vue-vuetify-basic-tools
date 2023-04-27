<template>
  <div class="game">
    <h1 class="text-h6 text-grey">Burst Game</h1>
    <v-container class="my-0 py-5 px-0 v-col-md-12">
      <v-layout row class="my-5 v-col-lg-12 py-0 px-0 mx-auto">
        <v-card flat class="bg-grey-lighten-4 v-col-lg-12 pa-0 mx-auto">
          <div id="bag" :class="{ burst: ended }"></div>
          <div id="bag-health">
            <div :style="{ width: health + '%' }"></div>
          </div>
          <div id="controls">
            <button @click="punch" v-show="!ended">Punch</button>
            <button @click="restart">Restart</button>
          </div>
        </v-card>
      </v-layout>

    </v-container>
  </div>
</template>

<script>
export default {
  name: "BurstGame",
  data() {
    return {
      health: 100,
      ended: false,
    };
  },
  methods: {
    punch() {
      this.health -= 10;
      if (this.health <= 0) {
        this.ended = true;
      }
    },
    restart() {
      this.health = 100;
      this.ended = false;
    },
  },
};
</script>

<style scoped>
#bag {
  width: 200px;
  height: 350px;
  margin: 0 auto;
  background: url("/public/bag.png") center no-repeat;
  background-size: 50%;
}

#bag.burst {
  width: 170px;
  height: 350px;
  margin: 0 auto;
  background: url("/public/bag-burst.png") center no-repeat;
  background-size: 60%;
}

#bag-health {
  width: 200px;
  border: 2px solid #000;
  margin: 0 auto 20px auto;
}

#bag-health div {
  height: 20px;
  transition: 0.5s;
  background: crimson;
}

#controls {
  width: fit-content;
  margin: 0 auto;
  margin-bottom: 30px;
}

#controls button {
  width: 86px;
  height: 34px;
  border-radius: 4px;
  border: 1px solid tomato;
  margin: 0 5px;
}

#controls button:hover {
  transition: 0.5s;
  background: crimson;
  color: white;
}
</style>

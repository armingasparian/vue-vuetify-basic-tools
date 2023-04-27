<template>
  <div id="ninjas">
    <ul class="mb-3">
      <li v-for="ninja in ninjas" :key="ninja.name" @click="ninja.show = !ninja.show" class="bg-blue-grey-lighten-5">
        <h2>{{ ninja.name }}</h2>
        <h3 v-show="ninja.show">{{ ninja.speciality }}</h3>
      </li>
    </ul>
    <v-btn @click="DeleteMe" class="ma-3 bg-warning mx-auto">
      <v-icon class="pr-3">mdi-account-remove</v-icon>
      Delete Ninja
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "Content",
  props: {
    ninjas: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    DeleteMe() {
      this.ninjas.pop();
    },
  },
};
</script>
<style scoped>
#ninjas {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
  text-align: center;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}

li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  margin: 10px;
  border: 1px solid #222;
  border-radius: 4px;
  cursor: pointer;
}

li:hover {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
  0px 2px 2px 0px rgba(0, 0, 0, 0.14),
  0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

h3 {
  color: crimson;
  font-weight: normal;
}
</style>

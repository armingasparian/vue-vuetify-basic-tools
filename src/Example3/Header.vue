<template>
  <header v-on:click="changeTitle">
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
    },
  },
  data() {
    return {
      title: "Click on this Header !!!",
    }
  },
  methods: {
    changeTitle() {
      this.title = "The title changed :)";
    }
  }
};
</script>

<style scoped>
header {
  background: #3cd1c2;
  padding: 10px;
  border-radius: 4px;
}

h1 {
  color: #222;
  text-align: center;
  font-weight: normal;
  font-size: 20px;
  cursor: pointer;
}
</style>

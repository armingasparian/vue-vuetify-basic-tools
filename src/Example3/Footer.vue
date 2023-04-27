<template>
  <footer>
    <p>{{ copyright }} {{ title }}</p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    title: {
      type: String,
    },
  },
  data() {
    return {
      copyright: "Copyright 2022",
    };
  },
};
</script>

<style scoped>
footer {
  background: #222;
  padding: 10px;
}

p {
  color: rgb(3, 206, 3);
  text-align: center;
}
</style>

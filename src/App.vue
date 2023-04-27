<template>
  <v-app class="bg-grey-lighten-4 h100vh">
    <Navbar/>
    <v-content class="mb-8 mx-8 h100vh-64px">
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {Navbar},
};
</script>

<style scoped>
.h100vh {
  height: 100vh;
}

.h100vh-64px {
  height: calc(100vh - 64px);
}
</style>

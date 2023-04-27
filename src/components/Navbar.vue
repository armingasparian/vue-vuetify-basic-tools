<template>
  <nav>
    <v-toolbar app flat class="bg-grey-lighten-4">
      <v-app-bar-nav-icon
        class="text-grey"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase text-grey">
        <span class="font-weight-light">Todo</span>
        <span class="font-weight-bold">Vue</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- dropdown meu -->

      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn color="grey" v-bind="props">
            <v-icon left>mdi-chevron-down</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>

        <v-list class="pa-0">
          <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn flat color="grey">
        <span>Sign Out </span>
        <v-icon right> mdi-login</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" temporary stateless class="bg-primary">
      <v-divider></v-divider>
      <v-layout class="justify-center py-5 flex-column align-center">
        <v-flex>
          <v-avatar size="80">
            <img src="/avatar-1.png"/>
          </v-avatar>
          <p class="mt-3 text-white text-center text-uppercase">Armine</p>
        </v-flex>
        <v-flex class="mt-5 mb-3">
          <Popup/>
        </v-flex>
      </v-layout>
      <v-list class="bg-primary d-flex flex-column">
        <router-link
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
          class="pa-3 text-white text-decoration-none"
        >
          <v-list-tile-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="ml-5"> {{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </router-link>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>
<script>
import Popup from "./PopupAddProject.vue";

export default {
  components: {
    Popup,
  },
  data() {
    return {
      drawer: false,
      links: [
        {icon: "mdi-view-dashboard", text: "Dashboard", route: "/"},
        {icon: "mdi-folder", text: "My Projects", route: "/projects"},
        {icon: "mdi-account-supervisor", text: "Team", route: "/team"},
        {icon: "mdi-nintendo-game-boy", text: "Burst - Game", route: "/burst-game"},
        {icon: "mdi-newspaper-plus", text: "Blog", route: "/blog"},
        {icon: "mdi-pin", text: "Example - 1", route: "/example-1"},
        {icon: "mdi-pin", text: "Example - 2", route: "/example-2"},
        {icon: "mdi-pin", text: "Example - 3", route: "/example-3"},
        {icon: "mdi-pin", text: "Example - 4 /slots, form/", route: "/example-4"},
        {icon: "mdi-pin", text: "Example - 5 /slots, form/", route: "/example-5"},
      ],
    };
  },
};
</script>

<style scoped>
img {
  width: 100%;
}

.v-list--density-default.v-list--one-line .v-list-item {
  min-height: unset;
}

.v-list-item.v-list-item--active .v-list-item-title {
  color: #1cc3b5;
}

.v-list-item.v-list-item--active {
  background: white;
}

.v-list-item--active .v-list-item__overlay {
  opacity: 0 !important;
}
</style>

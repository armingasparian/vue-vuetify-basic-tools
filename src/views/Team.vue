<template>
  <div class="team">
    <h1 class="text-h6 text-grey">Team</h1>
    <v-container class="my-0 py-5 px-0 v-col-md-12">
      <v-layout row class="my-5 v-col-lg-12 py-0 px-0 mx-auto">
        <v-row>
          <v-col
            xs="12"
            sm="6"
            md="3"
            lg="3"
            v-for="person in team"
            :key="person.name"
            class="py-4 px-3"
          >
            <v-card flat class="v-card--hover text-center bg-blue-grey-lighten-5">
              <v-responsive class="pt-4">
                <v-avatar size="120" class="bg-grey">
                  <img :src="person.avatar">
                </v-avatar>
              </v-responsive>
              <v-card-text>
                <div class="justify-center v-card-title font-weight-bold pa-0">
                  {{ person.name }}
                </div>
                <div class="pa-0 v-alert-title">
                  {{ person.role }}
                </div>
              </v-card-text>
              <v-card-actions class="justify-center bg-warning">
                <v-btn color="white" id="no-background-hover">
                  <v-icon class="pr-3" size="large">mdi-email-outline</v-icon>
                  <span>Message</span>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-layout>
    </v-container>
  </div>
</template>

<script>

export default {
  name: "Team",
  components: {},
  data() {
    return {
      team: [
        {name: "Armine", role: "Web Developer", avatar: "/avatar-1.png"},
        {name: "Ryu", role: "Web Designer", avatar: "/avatar-2.png"},
        {name: "Emily", role: "Back-end Developer", avatar: "/avatar-3.png"},
        {name: "Clarck", role: "Graphic Designer", avatar: "/avatar-4.png"},
        {name: "Daniel", role: "Front-end Developer", avatar: "/avatar-5.png"},
      ],
    };
  },
};
</script>

<style scoped>
.v-btn:hover {
  background: #eceff1;
}

img {
  width: 100%;
}

.v-card:hover {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
  0px 2px 2px 0px rgba(0, 0, 0, 0.14),
  0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

#no-background-hover:hover {
  background-color: transparent !important;
}
</style>

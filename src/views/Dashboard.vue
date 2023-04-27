<template>
  <div class="dashboard">
    <h1 class="text-h6 text-grey">Dashboard</h1>
    <v-container class="my-0 py-5 px-0 v-col-md-12">
      <v-layout row class="my-5 v-col-lg-12 py-0 px-0 mx-auto">
        <v-btn flat class="bg-grey-lighten-4 filter-btns mr-5" @click="sortBy('title')">
          <v-icon class="pr-3 text-blue-grey-lighten-3">mdi-folder</v-icon>
          By project name
          <v-tooltip activator="parent" anchor="top"
          >Sort projects by project name
          </v-tooltip
          >
        </v-btn>

        <v-btn flat class="bg-grey-lighten-4 filter-btns" @click="sortBy('person')">
          <v-icon class="pr-3 text-blue-grey-lighten-3">mdi-account</v-icon>
          By person
          <v-tooltip activator="parent" anchor="top">Sort projects by person</v-tooltip>
        </v-btn>
      </v-layout>

      <v-card
        flat
        v-for="project in projects"
        :key="project.title"
        :class="`bg-grey-lighten-4 v-col-lg-12 pa-0 mx-auto project ${project.status}`"
      >
        <v-layout class="d-flex flex-wrap px-3 bg-white">
          <v-flex class="v-col-md-4">
            <div class="text-grey text-subtitle-1">Project title</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex class="v-col-sm-4 v-col-md-3">
            <div class="text-grey text-subtitle-1">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex class="v-col-sm-4 v-col-md-3">
            <div class="text-grey text-subtitle-1">Due by</div>
            <div>{{ project.due }}</div>
          </v-flex>
          <v-flex class="v-col-sm-4 v-col-md-2 d-flex align-center justify-end">
            <div>
              <v-chip :class="`${project.status} text-white`">
                {{ project.status }}
              </v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      projects: [
        {
          title: "Design a new website",
          person: "Armine",
          due: "14 April, 2022",
          status: "ongoing",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          title: "Code up the homepage",
          person: "Emily",
          due: "1 April, 2022",
          status: "completed",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          title: "Design for video",
          person: "Denis",
          due: "20 March, 2022",
          status: "overdue",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          title: "Create a comunity forum",
          person: "Sofia",
          due: "24 May, 2022",
          status: "completed",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
      ],
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
  },
};
</script>

<style scoped>
.project.completed {
  border-left: 4px solid #3cd1c2 !important;
}

.project.ongoing {
  border-left: 4px solid orange !important;
}

.project.overdue {
  border-left: 4px solid tomato !important;
}

.v-card.project:nth-child(2) {
  border-top: 1px solid #d8d8d8 !important;
}

.project {
  border-right: 1px solid #d8d8d8;
}

.v-chip.completed {
  background: #3cd1c2;
}

.v-chip.ongoing {
  background: orange;
}

.v-chip.overdue {
  background: tomato;
}

.filter-btns {
  color: #b0bec5 !important;
  caret-color: #b0bec5 !important;
  text-transform: none !important;
}

.filter-btns:hover {
  background: #eceff1 !important;
}
</style>

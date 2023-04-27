<template>
  <div class="projects">
    <h1 class="text-h6 text-grey">Projects</h1>
    <v-container class="my-0 py-5 px-0 v-col-md-12">
      <v-layout row class="my-5 v-col-lg-12 py-0 px-0 mx-auto">
        <v-expansion-panels variant="accordion">
          <v-expansion-panel v-for="project in projects" :key="project.title" class="border-grey mb-2">
            <v-expansion-panel-title class="py-5">
              <v-icon class="pr-3" color="red">mdi-label-variant</v-icon>
              {{ project.title }}
            </v-expansion-panel-title>
            <v-expansion-panel-text class="text-grey tomato-border">
              <div class="font-weight-bold">due by {{ project.due }}</div>
              <div>{{ project.content }}</div>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Projects",
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
    }
  },
};
</script>

<style scoped>
.v-expansion-panel-title {
  border-width: 1px 1px 0 1px;
  border-radius: 4px;
  border-style: solid;
  border-color: tomato;
}

.tomato-border {
  border-left: 1px solid tomato;
  border-right: 1px solid tomato;
}
</style>

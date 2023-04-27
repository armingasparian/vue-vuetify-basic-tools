<template>
  <v-layout>
    <v-dialog
      max-width="600px"
      width="100%"
      class="mx-auto"
      persistent
      v-model="dialog"
    >
      <template v-slot:activator="{ props }">
        <v-btn flat v-bind="props" color="warning" class="text-white-color-btn">
          <span>Add a new project </span>
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="d-flex">
          <h4 class="text-grey px-8 d-flex align-center">
            <v-icon class="pr-5 text-success" small
            >mdi-rocket-launch-outline
            </v-icon
            >
            Add a new project
          </h4>
          <v-spacer></v-spacer>
          <v-btn flat depressed class="pa-0" @click="dialog = false">
            <v-icon class="w-100 text-success">mdi-window-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-form class="pa-3" v-model="valid" ref="form">
            <v-text-field
              label="Title"
              v-model="projectInfo.title"
              dense
              regular
              prepend-icon="mdi-folder-account"
              counter="50"
              required
              :rules="rules.title"
              @blur="validate"
              @keydown.enter="validate"
            ></v-text-field>
            <v-textarea
              label="Info"
              v-model="projectInfo.content"
              dense
              regular
              prepend-icon="mdi-account-edit"
              counter="50"
              required
              :rules="rules.content"
              @blur="validate"
              @keydown.enter="validate"
            ></v-textarea>
            <v-text-field
              type="date"
              v-model="projectInfo.date"
              label="Due time"
              dense
              regular
              prepend-icon="mdi-clock-time-eight"
              required
              :rules="rules.date"
              @blur="validate"
              @keydown.enter="validate"
            >
            </v-text-field>
            <v-btn
              :disabled="!valid"
              color="success"
              class="mx-auto mt-3"
              @click="addNewProject"
            >Add project
            </v-btn
            >
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  name: "PopupAddProject",
  data() {
    return {
      dialog: false,
      valid: false,
      projectInfo: {
        title: "",
        content: "",
        date: null,
      },
      rules: {
        title: [
          (v) => !!v || "Input is required",
          (v) => (v && v.length <= 50) || "Input must be less than 50 characters",
        ],
        content: [
          (v) => !!v || "Input is required",
          (v) => (v && v.length <= 50) || "Input must be less than 50 characters",
        ],
        date: [
          (v) => !!v || "Input is required"
        ],
      },
    };
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    addNewProject() {
      this.reset();
    },
    reset() {
      this.projectInfo.title = null;
      this.projectInfo.content = null;
      this.projectInfo.date = null;
    },
  },
};
</script>

<style scoped>
.v-dialog .v-overlay__content > .v-card,
.v-dialog .v-overlay__content > .v-sheet {
  width: 100%;
  min-width: 600px;
  min-height: unset;
}

.text-white-color-btn {
  color: white !important;
}
</style>

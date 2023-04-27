<template>
  <v-layout>
    <v-dialog max-width="600px" width="100%" class="mx-auto" persistent v-model="dialog">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" class="text-white-color-btn" v-bind="props">
          <span>Add Employee</span>
          <v-icon class="pl-3"> mdi-account-plus</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="d-flex">
          <h4 class="text-grey px-8 d-flex align-center">
            <v-icon class="pr-5 text-success" small>mdi-rocket-launch-outline</v-icon>
            Add
            a new employee
          </h4>
          <v-spacer></v-spacer>
          <v-btn flat depressed class="pa-0" @click="dialog = false">
            <v-icon class="w-100 text-success">mdi-window-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-form
            class="d-flex flex-wrap pa-0 justify-space-between"
            v-model="valid"
            ref="form"
          >
            <v-text-field
              class="v-col-md-6"
              v-model="popupItem.specialization"
              label="Specialization"
              dense
              counter="50"
              required
              :rules="rules.specialization"
              @blur="validate"
              @keydown.enter="validate"
            ></v-text-field>
            <v-text-field
              class="v-col-md-6"
              v-model="popupItem.name"
              label="Name"
              dense
              counter="50"
              required
              :rules="rules.name"
              @blur="validate"
              @keydown.enter="validate"
            ></v-text-field>
            <v-text-field
              class="v-col-md-6"
              v-model="popupItem.surname"
              label="Surname"
              dense
              counter="50"
              required
              :rules="rules.surname"
              @blur="validate"
              @keydown.enter="validate"
            ></v-text-field>
            <v-text-field
              class="v-col-md-6"
              v-model="popupItem.email"
              label="E-mail"
              dense
              :rules="rules.email"
              required
              @blur="validate"
              @keydown.enter="validate"
            ></v-text-field>
            <v-select
              class="v-col-md-6 v-col-lg-12"
              v-model="popupItem.status"
              :items="items"
              dense
              label="Status"
              required
              @blur="validate"
              @keydown.enter="validate"
              :rules="rules.status"
            ></v-select>
            <v-btn
              :disabled="!valid"
              color="success"
              class="ma-3"
              @click="addNewEmployee"
            >{{ buttonText }}
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
  name: "PopupAddEmployee",
  data() {
    return {
      dialog: false,
      valid: false,
      clicked: false,
      popupItem: {
        specialization: "",
        name: "",
        surname: "",
        email: "",
        status: "",
      },
      rules: {
        specialization: [
          (v) => !!v || "Input is required",
          (v) => (v && v.length <= 50) || "Input must be less than 50 characters",
        ],
        name: [
          (v) => !!v || "Input is required",
          (v) => (v && v.length <= 50) || "Input must be less than 50 characters",
        ],
        surname: [
          (v) => !!v || "Input is required",
          (v) => (v && v.length <= 50) || "Input must be less than 50 characters",
        ],
        email: [
          (v) => !!v || "E-mail is required",
          (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
        ],
        status: [(v) => !!v || "Item is required"],
      },
      items: ["completed", "overdue", "ongoing"],
    };
  },

  computed: {
    buttonText() {
      return this.clicked ? "Submitting..." : "Add Employee";
    },
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    addNewEmployee() {
      this.clicked = true;
      this.$emit("addItem", this.popupItem);
      this.reset();
      this.clicked = false;
    },
    reset() {
      this.popupItem.specialization = null;
      this.popupItem.name = null;
      this.popupItem.surname = null;
      this.popupItem.email = null;
      this.popupItem.status = null;
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

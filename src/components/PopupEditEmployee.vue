<template>
  <v-layout class="justify-center">
    <v-dialog max-width="600px" width="100%" class="mx-auto" persistent v-model="dialog">
      <template v-slot:activator="{ props }">
        <v-btn class="bg-warning" flat rounded v-bind="props">
          <span>Edit employee</span>
          <v-icon class="pl-3">mdi-account-edit</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="d-flex">
          <h4 class="text-grey px-8 d-flex align-center">
            <v-icon class="pr-5 text-warning" small>mdi-account-edit-outline</v-icon>
            Edit
            employee
          </h4>
          <v-spacer></v-spacer>
          <v-btn flat depressed class="pa-0" @click="closeDialog">
            <v-icon class="w-100 text-warning">mdi-window-close</v-icon>
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
              color="warning"
              class="ma-3"
              @click="editEmployee"
            >{{ buttonText }}
            </v-btn
            >
          </v-form>
          <div v-bind:class="{'text-edited': textEdited.length > 0}">
            <p>{{ textEdited }}</p>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
    },
    product: {
      type: Object,
    },
  },
  name: "PopupEditEmployee",
  data() {
    return {
      dialog: false,
      valid: false,
      clicked: false,
      textEdited: "",
      popupItem: {
        id: null,
        specialization: this.product.specialization,
        name: this.product.name,
        surname: this.product.surname,
        email: this.product.email,
        status: this.product.status,
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
      return this.clicked ? "Submitting..." : "Edit Employee";
    },
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    editEmployee() {
      this.clicked = true;
      this.popupItem.id = this.id;
      this.$emit("editItem", this.popupItem);
      this.textEdited = "Employee was edited !!!";
      this.clicked = false;
    },
    closeDialog() {
      this.dialog = false;
      this.textEdited = "";
    }
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

.text-edited {
  color: green;
  text-align: center;
  font-weight: 600;
  border-radius: 4px;
  padding: 6px 12px;
  background-color: lightgreen;
  width: fit-content;
  margin: 0 auto;
}
</style>

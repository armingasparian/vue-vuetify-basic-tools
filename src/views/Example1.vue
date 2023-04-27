<template>
  <div class="example1">
    <h1 class="text-h6 text-grey">Example-1</h1>
    <v-container class="my-0 py-5 px-0 v-col-md-12">
      <div class="my-5 v-col-lg-12 py-0 px-0 mx-auto">
        <v-form
          class="d-flex flex-wrap my-5 pa-0 justify-space-between"
          v-model="valid"
          ref="form"
        >
          <v-text-field
            class="v-col-lg-2 v-col-md-4 v-col-sm-6 pa-0"
            v-model="products.specialization"
            label="Specialization"
            dense
            counter="50"
            required
            :rules="rules.specialization"
            @blur="validate"
            @keydown.enter="validate"
          ></v-text-field>
          <v-text-field
            class="v-col-lg-2 v-col-md-4 v-col-sm-6 pa-0"
            v-model="products.name"
            label="Name"
            dense
            counter="50"
            required
            :rules="rules.name"
            @blur="validate"
            @keydown.enter="validate"
          ></v-text-field>
          <v-text-field
            class="v-col-lg-2 v-col-md-4 v-col-sm-6 pa-0"
            v-model="products.surname"
            label="Surname"
            counter="50"
            required
            :rules="rules.surname"
            @blur="validate"
            @keydown.enter="validate"
          ></v-text-field>
          <v-text-field
            class="v-col-lg-2 v-col-md-4 v-col-sm-6 pa-0"
            v-model="products.email"
            label="E-mail"
            dense
            required
            :rules="rules.email"
            @blur="validate"
            @keydown.enter="validate"
          ></v-text-field>
          <v-select
            class="v-col-lg-2 v-col-md-4 v-col-sm-6 pa-0"
            v-model="products.status"
            :items="items"
            dense
            label="Status"
            required
            :rules="rules.status"
            @blur="validate"
            @keydown.enter="validate"
          ></v-select>
          <v-btn
            :disabled="!valid"
            color="primary"
            class="text-white-color-btn ma-3"
            @click="addNew"
          >
            Add Employee
            <v-icon class="pl-3"> mdi-account-plus</v-icon>
          </v-btn>
        </v-form>
        <v-card flat class="mt-5">
          <v-layout class="d-flex flex-wrap px-3 v-layout-header">
            <v-flex class="v-col-md-2">
              <div class="text-grey text-subtitle-1">Specialization</div>
            </v-flex>
            <v-flex class="v-col-sm-2 v-col-md-2">
              <div class="text-grey text-subtitle-1">Name</div>
            </v-flex>
            <v-flex class="v-col-sm-2 v-col-md-2">
              <div class="text-grey text-subtitle-1">Surname</div>
            </v-flex>
            <v-flex class="v-col-sm-2 v-col-md-2">
              <div class="text-grey text-subtitle-1">E-mail</div>
            </v-flex>
            <v-flex class="v-col-sm-2 v-col-md-2">
              <div class="text-grey text-subtitle-1">Status</div>
            </v-flex>
            <v-flex class="v-col-sm-1 v-col-md-1">
              <div class="text-grey text-subtitle-1">Delete</div>
            </v-flex>
          </v-layout>

          <v-layout
            :class="`d-flex flex-wrap px-3 v-layout-content product ${product.status}`"
            v-for="product in products"
            :key="product.specialization"
          >
            <v-flex class="w-100 my-3" v-if="this.products.specialization !== null || this.products.length < 2">
              <NoData/>
            </v-flex>
          </v-layout>

          <v-layout
            :class="`d-flex flex-wrap px-3 v-layout-content product ${product.status}`"
            v-for="(product, index) in products"
            :key="index"
          >
            <v-flex class="v-col-md-2" v-if="product.specialization.length > 0">
              <div>{{ product.specialization }}</div>
            </v-flex>
            <v-flex class="v-col-md-2" v-if="product.name.length > 0">
              <div>{{ product.name }}</div>
            </v-flex>
            <v-flex class="v-col-md-2" v-if="product.surname.length > 0">
              <div>{{ product.surname }}</div>
            </v-flex>
            <v-flex class="v-col-sm-2 v-col-md-2" v-if="product.email.length > 0">
              <div>{{ product.email }}</div>
            </v-flex>
            <v-flex
              :class="`${product.status} v-col-sm-2 v-col-md-2`"
              v-if="product.status.length > 0"
            >
              <div>{{ product.status }}</div>
            </v-flex>
            <v-flex class="v-col-sm-1 v-col-md-1" v-if="product.status.length > 0">
              <div>
                <v-btn class="bg-error" flat rounded @click="deleteRow(index)"
                >Delete
                  <v-icon class="w-100 text-white pl-0">mdi-window-close</v-icon>
                </v-btn>
              </div>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<script>
import NoData from "../components/NoData.vue";

export default {
  name: "Example1",
  components: {
    NoData,
  },
  data() {
    return {
      valid: false,
      products: [
        {
          specialization: "",
          name: "",
          surname: "",
          email: "",
          status: "",
        },
      ],
      items: ["completed", "overdue", "ongoing"],
      rules: {
        specialization: [
          (v) => !!v || "Input is required",
          (v) =>
            (v && v.length <= 50) || "Input must be less than 50 characters",
        ],
        name: [
          (v) => !!v || "Input is required",
          (v) =>
            (v && v.length <= 50) || "Input must be less than 50 characters",
        ],
        surname: [
          (v) => !!v || "Input is required",
          (v) =>
            (v && v.length <= 50) || "Input must be less than 50 characters",
        ],
        email: [
          (v) => !!v || "E-mail is required",
          (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
        ],
        status: [(v) => !!v || "Item is required"],
      },
    };
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    addNew() {
      this.products.push({
        specialization: this.products.specialization,
        name: this.products.name,
        surname: this.products.surname,
        email: this.products.email,
        status: this.products.status,
      });
      this.reset();
    },
    reset() {
      this.products.specialization = null;
      this.products.name = null;
      this.products.surname = null;
      this.products.email = null;
      this.products.status = null;
    },
    deleteRow(index) {
      this.products.splice(index, 1);
    },
  },

};
</script>

<style scoped>
.project.completed {
  border-left: 4px solid #3cd1c2;
}

.project.ongoing {
  border-left: 4px solid orange;
}

.project.overdue {
  border-left: 4px solid tomato;
}

.text-white-color-btn {
  color: white !important;
}

.v-layout-header {
  border-bottom: 1px solid #eae9e9;
  background: #eeeeee;
}

.v-layout-content {
  border-bottom: 1px solid #eae9e9;
  align-items: center;
}

.v-layout-content.completed {
  border-left: 4px solid #4caf50;
}

.v-layout-content.ongoing {
  border-left: 4px solid #e94562;
}

.v-layout-content.overdue {
  border-left: 4px solid #fb8c00;
}

.v-layout-content .completed div {
  background: #4caf50;
  border-radius: 24px;
  text-align: center;
  color: white;
  width: fit-content;
  padding: 6px 16px;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.0892857143em;
}

.v-layout-content .ongoing div {
  background: #e94562;
  border-radius: 24px;
  text-align: center;
  color: white;
  width: fit-content;
  padding: 6px 16px;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.0892857143em;
}

.v-layout-content .overdue div {
  background: #fb8c00;
  border-radius: 24px;
  text-align: center;
  color: white;
  width: fit-content;
  padding: 6px 16px;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.0892857143em;
}
</style>

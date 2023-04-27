<template>
  <div class="example2">
    <h1 class="text-h6 text-grey">Example-2</h1>
    <v-container class="my-0 py-5 px-0 v-col-md-12">
      <div class="my-5 v-col-lg-12 py-0 px-0 mx-auto">
        <PopupAddEmployee @addItem="getMyInfo"/>
        <v-card flat class="mx-0 mt-5">
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
            <v-flex class="v-col-sm-1 v-col-md-1">
              <div class="text-grey text-subtitle-1 text-center">Status</div>
            </v-flex>
            <v-flex class="v-col-sm-2 v-col-md-2">
              <div class="text-grey text-subtitle-1 text-center">Edit</div>
            </v-flex>
            <v-flex class="v-col-sm-1 v-col-md-1">
              <div class="text-grey text-subtitle-1 text-center">Delete</div>
            </v-flex>
          </v-layout>

          <v-layout
            class="d-flex flex-wrap px-3 v-layout-content product"

          >
            <v-flex class="w-100 my-3" v-if="this.products.length < 1">
              <NoData/>
            </v-flex>
          </v-layout>

          <v-layout
            v-for="(product, index) in products"
            :key="index"
            :class="`d-flex flex-wrap px-3 v-layout-content product ${product.status}`"
          >
            <v-flex class="v-col-md-2" v-if="product.specialization.length > 0">
              <div>{{ product.specialization }}</div>
            </v-flex>
            <v-flex class="v-col-sm-2 v-col-md-2" v-if="product.name.length > 0">
              <div>{{ product.name }}</div>
            </v-flex>
            <v-flex class="v-col-sm-2 v-col-md-2" v-if="product.surname.length > 0">
              <div>{{ product.surname }}</div>
            </v-flex>
            <v-flex class="v-col-sm-2 v-col-md-2" v-if="product.email.length > 0">
              <div>{{ product.email }}</div>
            </v-flex>
            <v-flex :class="`${product.status} v-col-sm-1 v-col-md-1`" v-if="product.status.length > 0">
              <div>{{ product.status }}</div>
            </v-flex>
            <v-flex class="v-col-sm-2 v-col-md-2">
              <div class="text-center">
                <PopupEditEmployee
                  :product="product"
                  :id="product.id"
                  @editItem="getEditedInfo"
                />
              </div>
            </v-flex>
            <v-flex class="v-col-sm-2 v-col-md-1">
              <div class="text-center">
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
import PopupAddEmployee from "../components/PopupAddEmployee.vue";
import PopupEditEmployee from "../components/PopupEditEmployee.vue";
import NoData from "@/components/NoData";

export default {
  name: "Example2",
  components: {
    PopupAddEmployee,
    PopupEditEmployee,
    NoData,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          specialization: "Web Designer",
          name: "Frank",
          surname: "Hendrik",
          email: "frank1996@gmail.com",
          status: "completed",
        },
      ],
    };
  },

  methods: {
    getMyInfo(value) {
      const data = value;
      this.products.push({
        id: Math.random() * 100,
        specialization: data.specialization,
        name: data.name,
        surname: data.surname,
        email: data.email,
        status: data.status,
      });
    },
    getEditedInfo(value) {
      const index = this.products.findIndex((item) => item.id === value.id);
      this.products[index] = {
        id: value.id,
        specialization: value.specialization,
        name: value.name,
        surname: value.surname,
        email: value.email,
        status: value.status,
      };
    },
    deleteRow(index) {
      this.products.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.text-white-color-btn {
  color: white !important;
  font-size: 12px;
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
  margin: 0 auto;
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
  margin: 0 auto;
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
  margin: 0 auto;
  width: fit-content;
  padding: 6px 16px;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.0892857143em;
}
</style>

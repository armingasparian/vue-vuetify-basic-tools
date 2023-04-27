<template>
  <div class="example5">
    <h1 class="text-h6 text-grey">Example-5 /form/</h1>
    <v-container class="v-container my-10 py-5 px-0 v-col-md-10">
      <keep-alive>
        <component :is="component"></component>
      </keep-alive>
      <div class="text-center">
        <v-btn v-on:click="component = 'form-one'" color="primary">Show for one</v-btn>
        <v-btn v-on:click="component = 'form-two'" color="primary">Show for two</v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
import formOne from "../Example5/formOne.vue";
import formTwo from "../Example5/formTwo.vue";

export default {
  name: "Example5",
  components: {
    "form-one": formOne,
    "form-two": formTwo,
  },
  data() {
    return {
      component: "form-two",
    };
  },
};
</script>

<style scoped>
input {
  border: 1px solid rebeccapurple;
  border-radius: 4px;
  padding: 8px 24px;
  margin: 10px 20px 10px 0;
}

#form-controls button {
  background: rgb(189, 134, 245);
  padding: 8px 16px;
  color: white;
  border-radius: 4px;
}

.v-btn {
  margin: 5px;
}
</style>

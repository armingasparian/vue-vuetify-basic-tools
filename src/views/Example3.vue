<template>
  <div class="example3">
    <h1 class="text-h6 text-grey">Example-3</h1>
    <v-container class="my-0 py-5 px-0 v-col-md-12">
      <div class="my-5 v-col-lg-12 py-0 px-0 mx-auto">
        <Header :title="title" />
        <Content :ninjas="ninjas" />
        <Footer :title="title" />
      </div>
    </v-container>
  </div>
</template>

<script>
import Header from "../Example3/Header.vue";
import Content from "../Example3/Content.vue";
import Footer from "../Example3/Footer.vue";

export default {
  name: "Example3",
  components: {
    Header,
    Content,
    Footer,
  },
  data() {
    return {
      ninjas: [
        { name: "Richard", speciality: "Vue Components", show: false },
        { name: "Daniel", speciality: "HTML Wizardy", show: false },
        { name: "Tami", speciality: "Click Events", show: false },
        { name: "Syuzi", speciality: "Conditionals", show: false },
        { name: "Kami", speciality: "Webpacks", show: false },
        { name: "Yoshi", speciality: "Data Diggin", show: false },
      ],
      title: "Vue js",
    };
  },
};
</script>

<style scoped></style>

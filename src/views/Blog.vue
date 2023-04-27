<template>
  <div class="blog">
    <h1 class="text-h6 text-grey">Blog</h1>
    <v-container class="my-0 py-5 px-0 v-col-md-12">
      <v-layout row class="my-5 v-col-lg-12 py-0 px-0 mx-auto">
        <div>
          <div class="text-center">
            <v-btn v-on:click="component = 'add-blog'" color="warning" class="ma-3" flat
              >Add Blog</v-btn
            >
            <v-btn v-on:click="component = 'show-blogs'" color="warning" class="ma-3" flat
              >Show Blogs</v-btn
            >
          </div>
          <component :is="component"></component>
        </div>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import AddBlog from "../components/AddBlog.vue";
import ShowBlogs from "../components/ShowBlogs.vue";

export default {
  name: "Blog",
  components: {
    "add-blog": AddBlog,
    "show-blogs": ShowBlogs,
  },
  data() {
    return {
      component: "show-blogs",
    };
  },
};
</script>

<style scoped></style>

<template>
  <div class="show-blogs">
    <h1 class="text-h6 text-grey text-center my-3">Show Blogs</h1>
    <div id="show-blogs">
      <h2>All Blog Articles</h2>
      <div class="single-blog">
        <h4 class="text-capitalize mb-3">{{ title }}</h4>
        <p>
          User Id -> <span>{{ userId }}</span>
        </p>
        <span>Id -> {{ id }}</span>
        <article>{{ blogs }}</article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowBlogs",
  data() {
    return {
      blogs: [],
      title: "",
      id: "",
      userId: "",
    };
  },
  created() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((json) => {
        this.userId = json.userId;
        this.blogs = json.body;
        this.title = json.title;
        this.id = json.id;
      });
  },
};
</script>

<style scoped>
#show-blogs * {
  border-radius: 5px;
}

#show-blogs {
  width: 100%;
  margin: 0 auto;
  background: #fff;
  padding: 20px;
  max-width: 700px;
}

.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eeeeee;
}
</style>

<template>
  <div class="add-blog">
    <h1 class="text-h6 text-grey text-center my-3">Add Blog</h1>
    <div id="add-blog">
      <h2>Add a new Post</h2>
      <div class="d-flex blog-content">
        <v-form v-if="!submitted">
          <div>
            <label>Blog Title: </label>
            <input type="text" required v-model.lazy="blog.title"/>
          </div>
          <div>
            <label>Blog Content: </label>
            <textarea v-model.lazy="blog.content"></textarea>
          </div>
          <div id="checkboxes">
            <label>Ninjas</label>
            <input type="checkbox" v-model="blog.categories" value="ninjas"/>
            <label>Wizards</label>
            <input type="checkbox" v-model="blog.categories" value="wizards"/>
            <label>Mario</label>
            <input type="checkbox" v-model="blog.categories" value="mario"/>
            <label>Cheese</label>
            <input type="checkbox" v-model="blog.categories" value="cheese"/>
          </div>
          <div>
            <select v-model="blog.author">
              <option v-for="author in authors" :key="author">{{ author }}</option>
            </select>
          </div>
          <div>
            <v-btn color="primary" @click.prevent="post" class="mt-3">Add Blog</v-btn>
          </div>
          <notify-success :snackbar="snackbar" :text="text" :color="snackbarColor"/>
        </v-form>
        <div v-if="submitted">
          <h3 class="text-warning">Thanks for adding your post</h3>
        </div>
        <div id="preview">
          <h3>Preview Blog</h3>
          <p><i>Blog title:</i> {{ blog.title }}</p>
          <p><i>Blog content:</i></p>
          <p>{{ blog.content }}</p>
          <p><i>Blog categories:</i></p>
          <ul>
            <li v-for="category in blog.categories" :key="category">{{ category }}</li>
          </ul>
          <p><i>Blog author: </i>{{ blog.author }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import notifySuccess from './notifySuccess.vue'

export default {
  name: "AddBlog",
  data() {
    return {
      snackbar: false,
      text: '',
      color: '',
      blog: {
        title: "",
        content: "",
        categories: [],
        author: "",
      },
      authors: ["Daniel", "Rackel", "Frank"],
      submitted: false,
    };
  },
  components: {
    notifySuccess
  },
  methods: {
    post() {
      fetch('https://jsonplaceholder.typicode.com/posts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: 1,
          title: this.blog.title,
          body: this.blog.content,
        })
      }).then(() => {
        this.text = "Added Successfully"
        this.snackbar = true
        this.snackbarColor = "primary"
      }).catch(() => {
          this.text = "Ups, you failed it :("
          this.snackbar = true
          this.snackbarColor = "error"
          console.log('Error type')
        }
      )
    }
  },
}
</script>

<style scoped>
#add-blog * {
  border-radius: 5px;
}

#add-blog {
  width: 100%;
  margin: 0 auto;
  background: #fff;
  padding: 20px;
  max-width: 700px;
}

label {
  display: block;
  margin: 20px 10px 20px 0;
  min-width: max-content;
}

input,
textarea {
  border: 1px solid rebeccapurple;
  border-radius: 4px;
  height: 56px;
  display: block;
  width: 100%;
  padding: 5px;
}

select {
  border: 1px solid rebeccapurple;
  border-radius: 4px;
  height: 35px;
  display: block;
  width: 100%;
  padding: 5px;
}

#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}

#checkboxes input {
  display: inline-block;
  margin-right: 30px;
  width: auto;
  height: auto;
}

#checkboxes label {
  display: inline-block;
}

ul {
  padding-left: 40px;
}

h3 {
  margin-bottom: 10px;
}

h2 {
  margin-bottom: 20px;
}

.blog-content {
  gap: 24px;
}
</style>

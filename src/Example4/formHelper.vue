<template>
  <div>
    <h1>Please fill out the form ....</h1>
    <v-form>
      <div id="form-header">
        <slot name="form-header"></slot>
      </div>
      <div id="form-fields">
        <slot name="form-fields"></slot>
      </div>
      <div id="form-controls">
        <slot name="form-controls"></slot>
      </div>
      <div id="useful-links">
        <ul>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
          <li><a href="#">Link 4</a></li>
        </ul>
      </div>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "formHelper",
};
</script>

<style scoped>
#form-header {
  background: #ddd;
  border: 1px solid #bbb;
}

form > div {
  padding: 20px;
  background: #eee;
  margin: 20px 0;
}

#useful-links li {
  display: inline-block;
  margin-right: 10px;
}

#useful-links ul {
  padding: 0;
}

form {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
}
</style>

<template>
  <div class="example4">
    <h1 class="text-h6 text-grey">Example-4 /slots/</h1>
    <v-container class="v-container my-10 py-5 px-0 v-col-md-10">
      <form-helper>
        <template v-slot:form-header>
          <h3>This is the title of the form...</h3>
          <p>Information about the form...</p>
        </template>
        <template v-slot:form-fields>
          <input type="text" placeholder="name" required/>
          <input type="password" placeholder="password" required/>
        </template>
        <template v-slot:form-controls>
          <button @click="handleSubmit">Submit</button>
        </template>
      </form-helper>
    </v-container>
  </div>
</template>

<script>
import formHelper from "../Example4/formHelper.vue";

export default {
  name: "Example4",
  components: {
    formHelper,
  },
  data() {
    return {
      text: "Here's some text info",
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

</style>

<template>
  <div>
    <form-helper>
      <template v-slot:form-header>
        <h3>Form One - Contact Us</h3>
        <p>Fill in this form to contact us</p>
      </template>
      <template v-slot:form-fields>
        <div>
          <label>Your Name:</label>
          <input type="text" placeholder="name" required/>
        </div>
        <div>
          <label>Your Message:</label>
          <textarea placeholder="message"></textarea>
        </div>
      </template>
      <template v-slot:form-controls>
        <button @click="handleSubmit">Submit</button>
      </template>
    </form-helper>
  </div>
</template>

<script>
import formHelper from "../Example5/formHelper.vue";

export default {
  name: "formOne",
  components: {
    formHelper,
  },
};
</script>

<style scoped>
input {
  border: 1px solid rebeccapurple;
  border-radius: 4px;
  padding: 8px 24px;
  margin: 10px 20px 10px 20px;
}

textarea {
  border: 1px solid rebeccapurple;
  border-radius: 4px;
  margin: 10px 20px 10px 20px;
  padding: 8px 24px;
}

#form-fields div {
  display: flex;
  align-items: center;
}
</style>

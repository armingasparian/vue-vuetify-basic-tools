<template>
  <v-snackbar
    :v-model="snackbar"
    :timeout="2000"
    top
    color="snackbarColor"
  >
    {{ text }}
    <template v-slot:action="{ attrs }">
      <v-btn
        color="blue"
        text
        v-bind="attrs"
        @click="snackbar === false"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  props: {
    snackbar: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
    },
    snackbarColor: {
      type: String,
    }
  }

}
</script>

<style>

</style>

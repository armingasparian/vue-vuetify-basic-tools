<template>
  <div class="no-data pa-5">{{ noData }}</div>
</template>

<script>
export default {
  name: "NoData",
  data() {
    return {
      noData: "There is No Data",
    };
  },
};
</script>

<style scoped>
.no-data {
  width: 100%;
  text-align: center;
  color: #9e9e9e;
  font-weight: 600;
  background-color: linen;
  border-radius: 4px;
  box-shadow: 0 1px 5px 2px rgb(0 0 0 / 12%);
}
</style>

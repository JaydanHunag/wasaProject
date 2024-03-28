<template>
  <div class="about">
    <div class="pt-5">
      <h3>該頁面會顯示串接API回傳的資料</h3>
      <h5>使用的API是 RandomUser_API</h5>
    </div>

    <div style="width: 100%">
      <tableUser :tableOptions="tableOptions" class="p-5" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

<script>
import tableUser from "@/components/tableUser.vue";
export default {
  components: { tableUser },
  data() {
    return {
      tableOptions: {},
    };
  },
  methods: {
    getUser() {
      this.$axios
        .get("https://randomuser.me/api/")
        .then((res) => {
          console.log(res.data.results[0]);
          this.tableOptions = res.data.results[0];
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getUser();
  },
};
</script>

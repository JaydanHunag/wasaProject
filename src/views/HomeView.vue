<template>
  <div>
    <div class="row d-flex justify-content-center">
      <div class="col-3 m-5 d-flex me-0">
        <label class="col-auto fs-3">類型：</label>
        <select class="form-select col" @change="changeInputType($event.target.value)">
          <option :value="type" v-for="(type, index) in selectType" :key="index">
            {{ type }}
          </option>
        </select>
      </div>
      <div class="col-3 m-5 ms-0">
        <InputSelector
          :inputType="inputType"
          @dataEmit="showResult"
          :radioOptions="radioOptions"
          :selectOptions="selectOptions"
        />
      </div>
    </div>

    <div class="result-set">您的選擇結果：{{ results }}</div>
  </div>
</template>

<style scoped lang="scss">
.result-set {
  margin-top: 15px;
  font-size: 2rem;
  font-weight: bolder;
}
</style>

<script>
import InputSelector from "@/components/InputSelector.vue";

export default {
  data() {
    return {
      inputType: "text",
      selectType: ["text", "radio", "select"],
      radioOptions: [
        { label: "小辣", id: "lowSpicy" },
        { label: "中辣", id: "midSpicy" },
        { label: "大辣", id: "highSpicy" },
      ],
      selectOptions: ["Apple", "Banana", "WaterMelon"],
      results: "",
    };
  },
  methods: {
    changeInputType(type) {
      this.inputType = type;
    },
    showResult(data) {
      console.log(data);
      this.results = data;
    },
  },

  components: {
    InputSelector,
  },

  computed: {
    results() {
      if (this.results === "Apple") {
        return "蘋果";
      } else if (this.results === "Banana") {
        return "香蕉";
      } else if (this.results === "WaterMelon") {
        return "西瓜";
      } else {
        return this.results;
      }
    },
  },
  mounted() {},
};
</script>

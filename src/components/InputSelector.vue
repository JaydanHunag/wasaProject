<template>
  <div>
    <!-- 文字 -->
    <div class="form-floating" v-if="inputType === 'text'">
      <input
        type="text"
        class="form-control"
        id="text"
        placeholder="text"
        @blur="emitData($event.target.value)"
      />
      <label for="text">文字</label>
    </div>
    <!-- radio -->
    <div v-else-if="inputType === 'radio'" class="d-flex justify-content-around pt-2">
      <div
        class="form-check"
        v-for="(option, index) in radioOptions"
        :key="index"
        style="font-size: 1.2rem"
      >
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          :id="option.id"
          @click="emitData(option.label)"
        />
        <label class="form-check-label" :for="option.id"> {{ option.label }} </label>
      </div>
    </div>
    <!-- select -->
    <select
      class="form-select"
      v-else-if="inputType === 'select'"
      @change="emitData($event.target.value)"
    >
      <option selected hidden>選擇一種</option>
      <option :value="value" v-for="(value, index) in selectOptions" :key="index">
        {{ value }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: ["inputType", "radioOptions", "selectOptions"],
  data() {
    return {};
  },
  methods: {
    emitData(data) {
      this.$emit("dataEmit", data);
    },
  },
};
</script>

<style lang="scss" scoped></style>

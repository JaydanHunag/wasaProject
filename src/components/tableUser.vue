<template>
  <div>
    <table class="table" v-if="Object.keys(tableOptions).length > 0">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Nat</th>
          <th scope="col">City</th>
          <th scope="col">Phone</th>
          <th scope="col">photo</th>
        </tr>
      </thead>
      <tbody>
        <tr style="vertical-align: middle">
          <th scope="row">1</th>

          <td>{{ tableOptions.name.first }}</td>
          <td>{{ tableOptions.name.last }}</td>
          <td>{{ tableOptions.nat }}</td>
          <td>{{ tableOptions.location.city }}</td>
          <td>{{ tableOptions.phone }}</td>
          <td><img :src="tableOptions.picture.medium" alt="" /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["tableOptions"],
  mounted() {
    console.log(this.tableOptions);
  },
};
</script>

<style lang="scss" scoped></style>

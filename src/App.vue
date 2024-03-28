<template>
  <div>
    <!-- 路由調整 -->
    <nav>
      <router-link to="/" class="routerLink-set">Home</router-link> |
      <router-link to="/about" class="routerLink-set">About Me</router-link>
    </nav>
    <!-- 顏色選擇器 -->
    <div class="row justify-content-center d-flex" style="transform: translate(3.5%, 0)">
      <div class="form-floating col-1 px-1 pb-1">
        <input
          type="text"
          class="form-control"
          id="fontColor"
          placeholder="fontColor"
          v-model="theme.color"
          @input="changeTheme"
        />
        <label for="fontColor">字體顏色</label>
      </div>
      <div class="form-floating col-1 px-1 pb-1">
        <input
          type="text"
          class="form-control"
          id="bgColor"
          placeholder="bgColor"
          v-model="theme.backgroundColor"
          @input="changeTheme"
        />
        <label for="bgColor">背景顏色</label>
      </div>
      <div class="col-1 d-flex align-items-center">
        <button type="button" class="btn btn-success" @click="resetTheme">復原</button>
      </div>
    </div>
    <!-- 顯示子元件 -->
    <div class="container">
      <router-view
        :style="{ backgroundColor: $theme.backgroundColor, color: $theme.color }"
        class="routerView-set"
      />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #2c3e50;
  height: 100vh;
  overflow-x: hidden;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: white;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.routerView-set {
  margin-top: 15px;
  border-radius: 30px;
  height: 35vh;
}

.routerLink-set {
  text-decoration: none;
  font-size: 1.5rem;
}
</style>

<script>
export default {
  data() {
    return {
      theme: {
        color: this.$theme.color,
        backgroundColor: this.$theme.backgroundColor,
      },
    };
  },
  methods: {
    changeTheme() {
      this.$theme.color = this.theme.color;
      this.$theme.backgroundColor = this.theme.backgroundColor;
      console.log(this.$theme.color);
    },
    resetTheme() {
      this.theme.color = "black";
      this.theme.backgroundColor = "white";
      this.changeTheme();
    },
  },
};
</script>

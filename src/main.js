import { createApp } from "vue";
import "bootstrap";
import * as bootstrap from "bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App.vue";
import axios from "axios";
import router from "./router";

const app = createApp(App);
app.config.globalProperties.$axios = axios;
app.config.globalProperties.$theme = {
  color: "black",
  backgroundColor: "white",
};

app.use(router);
app.mount("#app");

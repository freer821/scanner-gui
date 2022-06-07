import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import router from "./routes";
import store from "./store";
import "tailwindcss/tailwind.css";
import "element-plus/dist/index.css";
import Viewer from "viewerjs";

const app = createApp(App);
app.provide("viewer", Viewer);
app.use(ElementPlus);
app.use(router);
app.use(store);
app.mount("#app");

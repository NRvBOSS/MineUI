import Button from "./components/mButton.vue";

export { Button };

export default {
  install(app) {
    app.component("mButton", Button);
  },
};

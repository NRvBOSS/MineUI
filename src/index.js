import Button from "./components/mButton.vue";
import Input from "./components/mInput.vue"
import Badge from "./components/mBadge.vue"

export { Button };

export default {
  install(app) {
    app.component("mButton", Button);
    app.component("mInput", Input);
    app.component("mBadge", Badge);
  },
};

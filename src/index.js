import Button from "./components/mButton.vue";
import Input from "./components/mInput.vue";
import Badge from "./components/mBadge.vue";
import Title from "./components/mTitle.vue";
import Card from "./components/mCard.vue";

export default {
  install(app) {
    app.component("mButton", Button);
    app.component("mInput", Input);
    app.component("mBadge", Badge);
    app.component("mTitle", Title);
    app.component("mCard", Card);
  },
};

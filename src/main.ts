import { createApp } from "vue";
import App from "./App.vue";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";
import './rules';

import FormInput from '@/components/forms/FormInput.vue';
import FormRadio from '@/components/forms/FormRadio.vue';
import FormDropdown from '@/components/forms/FormDropdown.vue';

createApp(App)
  .use(Quasar, quasarUserOptions)
  .component('form-input', FormInput)
  .component('form-radio', FormRadio)
  .component('form-dropdown', FormDropdown)
  .mount('#app');

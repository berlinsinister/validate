import { createApp } from "vue";
import App from "./App.vue";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";
import './rules';

import FormWrapper from '@/components/forms/FormWrapper.vue'
import FormInput from '@/components/forms/FormInput.vue';
import FormRadio from '@/components/forms/FormRadio.vue';
import FormDropdown from '@/components/forms/FormDropdown.vue';

import UserField from '@/components/inputs/UserField.vue';

createApp(App)
  .use(Quasar, quasarUserOptions)
  .component('form-wrapper', FormWrapper)
  .component('form-input', FormInput)
  .component('form-radio', FormRadio)
  .component('form-dropdown', FormDropdown)
  .component('user-field', UserField)
  .mount('#app');

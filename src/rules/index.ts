import { defineRule, configure } from 'vee-validate';
import { required, min, max, alpha } from '@vee-validate/rules';
import { getComponent } from '@/helpers';
import { FieldValidationInfoI } from '@/types';

configure({
  generateMessage: ({ field, rule }: FieldValidationInfoI) => {
    if (!rule) return 'this field is invalid';

    const { errorMessage: { required, min, max, alpha, password } } = getComponent('', field);

    const messages: Record<string, string> = {
      required,
      ...(min && { min }),
      ...(max && { max }),
      ...(alpha && { alpha }),
      ...(password && { password }),
    };
    
    return messages[rule.name];
  },
});

defineRule('required', required);
defineRule('min', min);
defineRule('max', max);
defineRule('alpha', alpha);
defineRule('password', (value: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).*$/.test(value) || false);

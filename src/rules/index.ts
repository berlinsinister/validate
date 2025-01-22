import { defineRule, configure } from 'vee-validate';
import { required, min, max, alpha } from '@vee-validate/rules';
import { FieldValidationInfoI } from '@/types';
import { camelCaseToWords } from '@/helpers';

configure({
  generateMessage: ({ field, rule }: FieldValidationInfoI) => {
    const displayFieldName = camelCaseToWords(field);

    if (!rule) return `The ${displayFieldName} field is invalid.`;

    const messages: Record<string, string> = {
      required: `${displayFieldName} field is required`,
      min: `${displayFieldName} field must be at least ${rule.params} characters length`,
      max: `${displayFieldName} field must be at most ${rule.params} characters long`,
      alpha: `${displayFieldName} field should only contain letters`,
    };

    return messages[rule.name];
  },
});

defineRule('required', required);
defineRule('min', min);
defineRule('max', max);
defineRule('alpha', alpha);

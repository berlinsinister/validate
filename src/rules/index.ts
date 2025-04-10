import { defineRule, configure } from 'vee-validate';
import { required, min, max, alpha } from '@vee-validate/rules';
import { getComponent, isBooleanString, toBooleanValue } from '@/helpers';
import { FieldValidationInfoI, ErrorMessageI } from '@/types';
import { VISIBLE_IF } from '@/config/constants';

configure({
  generateMessage: (ctx: FieldValidationInfoI) =>
    ctx.rule?.name === VISIBLE_IF
      ? 'wrong visibility rule'
      : getComponent('', ctx.field).errorMessage[ctx.rule?.name as keyof ErrorMessageI] || '',
});

defineRule('required', required);
defineRule('min', min);
defineRule('max', max);
defineRule('alpha', alpha);
defineRule('password', (value: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).*$/.test(value) || false);
defineRule(VISIBLE_IF, (value, [paramOne, paramTwo]: [string, string], ctx) => {
  if (isBooleanString(paramOne) && paramTwo === undefined) {
    return toBooleanValue(paramOne);
  }

  const actual = ctx.form?.[paramOne] as string | boolean;
  const expected: string | boolean = isBooleanString(paramTwo) ? toBooleanValue(paramTwo) : paramTwo;

  return actual === expected;
});

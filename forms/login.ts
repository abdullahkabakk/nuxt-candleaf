import { object, string } from 'yup';
import { FieldType, FormBuilder, FormSize } from '~/types/FormBuilder';
import { i18n } from '~/i18n.config';

const FIELDS = {
  username: 'username',
  password: 'password'
};

export const loginSchema = object().shape({
  [FIELDS.username]: string().required(() => i18n.global.t('login.form.username.required')),
  [FIELDS.password]: string().required(() => i18n.global.t('login.form.password.required'))
});

const formBuilder = new FormBuilder();

export const loginFields = formBuilder
  .addField(FieldType.Input, FormSize.Full, {
    name: FIELDS.username,
    type: 'text',
    placeholder: i18n.global.t('login.form.username.placeholder'),
    leadingIcon: 'material-symbols:account-circle-full',
    label: i18n.global.t('login.form.username.label')
  })
  .addField(FieldType.Input, FormSize.Full, {
    name: FIELDS.password,
    type: 'password',
    placeholder: i18n.global.t('login.form.password.placeholder'),
    leadingIcon: 'material-symbols:lock-outline',
    label: i18n.global.t('login.form.password.label')
  })
  .build();

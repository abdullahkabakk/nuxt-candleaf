import { object, string } from 'yup';
import { FieldType, FormBuilder, FormSize } from '~/types/FormBuilder';
import { i18n } from '~/i18n.config';

const FIELDS = {
  name: 'name',
  surname: 'surname',
  username: 'username',
  email: 'email',
  password: 'password'
};

export const registerSchema = object().shape({
  [FIELDS.name]: string().required(() => i18n.global.t('register.form.name.required')),
  [FIELDS.surname]: string().required(() => i18n.global.t('register.form.surname.required')),
  [FIELDS.username]: string().required(() => i18n.global.t('register.form.username.required')),
  [FIELDS.email]: string()
    .email(() => i18n.global.t('register.form.email.invalid'))
    .required(() => i18n.global.t('register.form.email.required')),
  [FIELDS.password]: string()
    .min(6, () => i18n.global.t('register.form.password.minLength'))
    .required(() => i18n.global.t('register.form.password.required'))
});

const formBuilder = new FormBuilder();

export const registerFields = formBuilder
  .addField(FieldType.Input, FormSize.Half, {
    name: FIELDS.name,
    type: 'text',
    placeholder: i18n.global.t('register.form.name.placeholder'),
    leadingIcon: 'ph:identification-card-light',
    label: i18n.global.t('register.form.name.label')
  })
  .addField(FieldType.Input, FormSize.Half, {
    name: FIELDS.surname,
    type: 'text',
    placeholder: i18n.global.t('register.form.surname.placeholder'),
    leadingIcon: 'ph:identification-card-light',
    label: i18n.global.t('register.form.surname.label')
  })
  .addField(FieldType.Input, FormSize.Full, {
    name: FIELDS.username,
    type: 'text',
    placeholder: i18n.global.t('register.form.username.placeholder'),
    leadingIcon: 'material-symbols:account-circle-full',
    label: i18n.global.t('register.form.username.label')
  })
  .addField(FieldType.Input, FormSize.Full, {
    name: FIELDS.email,
    type: 'email',
    placeholder: i18n.global.t('register.form.email.placeholder'),
    leadingIcon: 'material-symbols:mail-outline-rounded',
    label: i18n.global.t('register.form.email.label')
  })
  .addField(FieldType.Input, FormSize.Full, {
    name: FIELDS.password,
    type: 'password',
    placeholder: i18n.global.t('register.form.password.placeholder'),
    leadingIcon: 'material-symbols:lock-outline',
    label: i18n.global.t('register.form.password.label')
  })
  .build();

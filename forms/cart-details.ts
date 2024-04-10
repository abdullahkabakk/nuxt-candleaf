import { object, string } from 'yup';
import { FieldType, FormBuilder, FormSize } from '~/types/FormBuilder';
import { i18n } from '~/i18n.config';

const SHIPPING_FIELDS = {
  name: 'name',
  surname: 'surname',
  address: 'address',
  note: 'note',
  city: 'city',
  state: 'state',
  zip: 'zip',
  country: 'country'
};

export const shippingSchema = object({
  [SHIPPING_FIELDS.name]: string().required(() => i18n.global.t('shippingForm.form.name.required')),
  [SHIPPING_FIELDS.surname]: string().required(() => i18n.global.t('shippingForm.form.surname.required')),
  [SHIPPING_FIELDS.address]: string().required(() => i18n.global.t('shippingForm.form.address.required')),
  [SHIPPING_FIELDS.note]: string().optional(),
  [SHIPPING_FIELDS.city]: string().required(() => i18n.global.t('shippingForm.form.city.required')),
  [SHIPPING_FIELDS.state]: string().required(() => i18n.global.t('shippingForm.form.state.required')),
  [SHIPPING_FIELDS.zip]: string().required(() => i18n.global.t('shippingForm.form.zip.required')),
  [SHIPPING_FIELDS.country]: string().required(() => i18n.global.t('shippingForm.form.country.required'))
});

const formBuilder = new FormBuilder();

export let shippingFields = formBuilder
  .addField(FieldType.Input, FormSize.Half, {
    name: SHIPPING_FIELDS.name,
    type: 'text',
    placeholder: i18n.global.t('shippingForm.form.name.placeholder'),
    label: i18n.global.t('shippingForm.form.name.label')
  })
  .addField(FieldType.Input, FormSize.Half, {
    name: SHIPPING_FIELDS.surname,
    type: 'text',
    placeholder: i18n.global.t('shippingForm.form.surname.placeholder'),
    label: i18n.global.t('shippingForm.form.surname.label')
  })
  .addField(FieldType.Input, FormSize.Full, {
    name: SHIPPING_FIELDS.address,
    type: 'text',
    placeholder: i18n.global.t('shippingForm.form.address.placeholder'),
    label: i18n.global.t('shippingForm.form.address.label')
  })
  .build();

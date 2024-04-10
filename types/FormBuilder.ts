import type { InputProps, SelectProps } from '~/types/formProps';
import { FormInput, FormSelect } from '#components';

export enum FieldType {
  Input = 'Input',
  Select = 'Select'
}

export enum FormSize {
  Full = 'full',
  Half = 'half',
  Third = 'third',
  Quarter = 'quarter',
  Fifth = 'fifth',
  Sixth = 'sixth',
  Auto = 'auto'
}

const componentMap: Record<FieldType, any> = {
  [FieldType.Input]: FormInput,
  [FieldType.Select]: FormSelect
};

export function getComponentByType(type: FieldType): any {
  return componentMap[type];
}

type FormFieldProps = InputProps | SelectProps;

export class FormBuilder {
  private readonly formFields: { type: FieldType; props: FormFieldProps; size: FormSize }[];

  constructor() {
    this.formFields = [];
  }

  addField(type: FieldType, size: FormSize, props: FormFieldProps): this {
    this.formFields.push({ type, props, size });
    return this;
  }

  build(): { type: FieldType; props: any }[] {
    return this.formFields;
  }
}

// @flow
export type InputValidations = {
  minValue?: number,
  maxValue?: number,
  pattern?: any,
  minLength?: number,
  maxLength?: number,
  minDate?: string | number,
  maxDate?: string | number
};

export type InputSchema = {
  name: string,
  required: boolean,
  value: any,
  type: string,
  error: string,
  placeholder?: string,
  validations?: InputValidations
};

export type FormSchema = {
  [key: string]: InputSchema
};

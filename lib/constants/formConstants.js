export const DEFAULT_SCHEMA = {
  name: '',
  type: '',
  placeholder: '',
  value: '',
  error: '',
  required: true,
  validations: {}
};
export const SCHEMA_TYPE = {
  TEXT: 'text',
  PASSWORD: 'password',
  EMAIL: 'email',
  NUMBER: 'number',
  RADIO: 'radio',
  CHECKBOX: 'checkbox',
  DROPDOWN: 'select',
  TEXTAREA: 'textarea',
  DATE: 'date',
  DATETIME: 'datetime-local',
  TIME: 'time'
};
export const VALIDATIONS = {
  NAME: {
    pattern: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
    minLength: 1,
    maxLength: 50
  },
  PASSWORD: {
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  },
  EMAIL: {
    pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  },
  USERNAME: {
    pattern: /^[a-z0-9_-]{3,15}$/
  },
  COMMENT: {
    maxLength: 500
  },
  AMOUNT: {
    pattern: /^[0-9]*$/,
    minValue: 0,
    maxValue: 500
  }
};
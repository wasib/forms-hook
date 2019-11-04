export const validateForm = schema => {
  let flag = false;

  for (let key in schema) {
    if (schema[key].required ? schema[key].value.length === 0 || schema[key].error !== '' : schema[key].error !== '') {
      flag = true;
    }
  }

  return flag;
};
export const getFormData = schema => {
  let data = {};

  for (let key in schema) {
    data[schema[key].name] = schema[key].value;
  }

  return data;
};
export const populateErrors = schema => {
  for (let key in schema) {
    let newVal = validateInput({ ...schema[key]
    });
    schema = { ...schema,
      [key]: newVal
    };
  }

  return schema;
};
export const setInitialSchema = schema => {
  for (let key in schema) {
    schema[key]['name'] = key;
  }

  return schema;
};
export const validateInput = schema => {
  if (schema.required && schema.value.length === 0) {
    schema.error = 'required';
    return schema;
  }

  for (let key in schema.validations) {
    if (key === 'pattern') {
      // $FlowFixMe
      let result = schema.validations[key].test(schema.value);

      if (result) {
        schema.error = '';
      } else {
        schema.error = 'pattern does not match';
        break;
      }
    }

    if (key === 'minLength') {
      if (schema.value.length >= schema.validations[key]) {
        schema.error = '';
      } else {
        // $FlowFixMe
        schema.error = 'minimum length is ' + schema.validations[key];
        break;
      }
    }

    if (key === 'maxLength') {
      if (schema.value.length <= schema.validations[key]) {
        schema.error = '';
      } else {
        // $FlowFixMe
        schema.error = 'maximum length is ' + schema.validations[key];
        break;
      }
    }

    if (key === 'minValue') {
      if (schema.value >= schema.validations[key]) {
        schema.error = '';
      } else {
        // $FlowFixMe
        schema.error = 'minimum value is ' + schema.validations[key];
        break;
      }
    }

    if (key === 'maxValue') {
      if (schema.value <= schema.validations[key]) {
        schema.error = '';
      } else {
        // $FlowFixMe
        schema.error = 'maximum value is ' + schema.validations[key];
        break;
      }
    }

    if (key === 'minDate') {
      if (schema.value >= schema.validations[key]) {
        schema.error = '';
      } else {
        // $FlowFixMe
        schema.error = 'date should be greater than ' + schema.validations[key];
        break;
      }
    }

    if (key === 'maxDate') {
      if (schema.value <= schema.validations[key]) {
        schema.error = '';
      } else {
        // $FlowFixMe
        schema.error = 'date should be less than ' + schema.validations[key];
        break;
      }
    }
  }

  return schema;
};
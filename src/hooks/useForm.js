// @flow
import { useState, useEffect } from 'react';
import {
  validateInput,
  validateForm,
  getFormData,
  setInitialSchema,
  populateErrors
} from '../utils/validations';
import type { FormSchema } from '../types/formTypes';

export const useForm = (initialSchema: FormSchema) => {
  const [schema, setSchema] = useState(setInitialSchema(initialSchema));
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  useEffect(() => {
    setIsSubmitDisabled(validateForm(schema));
  }, [schema]);

  const setValue = (name: string, value: any) => {
    let newVal = validateInput({ ...schema[name], value });
    setSchema({ ...schema, [name]: newVal });
  };

  const setValueNoValidate = (name: string, value: any) => {
    let newVal = { ...schema[name], value };
    setSchema({ ...schema, [name]: newVal });
  };

  const setRequired = (name: string, required: boolean) => {
    let newVal = { ...schema[name], required };
    setSchema({ ...schema, [name]: newVal });
  };

  const onFormSubmit = (event: any, callback: any => void) => {
    event.preventDefault();
    if (isSubmitDisabled) {
      setSchema(populateErrors({ ...schema }));
    } else callback(getFormData(schema));
  };

  const resetForm = () => {
    setSchema(setInitialSchema(initialSchema));
  };

  return {
    schema,
    isSubmitDisabled,
    setValue,
    setValueNoValidate,
    setRequired,
    onFormSubmit,
    resetForm
  };
};

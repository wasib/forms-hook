import { useState, useEffect } from 'react';
import { validateInput, validateForm, getFormData, setInitialSchema, populateErrors } from '../utils/validations';
export const useForm = initialSchema => {
  const [schema, setSchema] = useState(setInitialSchema(initialSchema));
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  useEffect(() => {
    setIsSubmitDisabled(validateForm(schema));
  }, [schema]);

  const setValue = (name, value) => {
    let newVal = validateInput({ ...schema[name],
      value
    });
    setSchema({ ...schema,
      [name]: newVal
    });
  };

  const setValueNoValidate = (name, value) => {
    let newVal = { ...schema[name],
      value
    };
    setSchema({ ...schema,
      [name]: newVal
    });
  };

  const onFormSubmit = (event, callback) => {
    event.preventDefault();

    if (isSubmitDisabled) {
      setSchema(populateErrors({ ...schema
      }));
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
    onFormSubmit,
    resetForm
  };
};
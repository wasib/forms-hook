import { DEFAULT_SCHEMA } from '../constants/formConstants';
export const generateSchema = (type, required = true, placeholder, validations) => {
  return { ...DEFAULT_SCHEMA,
    type,
    placeholder,
    required,
    validations
  };
};
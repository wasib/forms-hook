import { DEFAULT_SCHEMA } from '../constants/formConstants';
export const generateSchema = (type, required, placeholder, validations) => {
  return { ...DEFAULT_SCHEMA,
    type,
    placeholder,
    required,
    validations
  };
};
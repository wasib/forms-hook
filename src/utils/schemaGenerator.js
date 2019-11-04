// @flow
import { DEFAULT_SCHEMA } from '../constants/formConstants';
import type { InputValidations, InputSchema } from '../types/formTypes';

export const generateSchema = (
  type: string,
  required: boolean,
  placeholder?: string,
  validations?: InputValidations
): InputSchema => {
  return { ...DEFAULT_SCHEMA, type, placeholder, required, validations };
};

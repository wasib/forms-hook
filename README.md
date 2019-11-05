# forms-hook

A custom react hook based form management library built to simplify the way forms are handled. Does not interfere in any way with your default elements. Does not override any default functionality. All behaviour of the UI elements is completely user controlled. This allows for high customisability and more control over your components.

[![TravisCI](https://travis-ci.org/wasib/forms-hook.svg?branch=master)](https://travis-ci.org/wasib/forms-hook)

## Features

- Built with performance and simplicity in mind
- Controlled form validation
- [Ultra lightweight (1kB gzipped)](https://bundlephobia.com/result?p=forms-hook@latest) without any dependency
- Allows type checking with FLOW support
- Allows both HTML5 validations and JS validations
- Works with any third party / UI Library
- Compatible with React Native
- Support browser native validation

## Install

\$ npm i forms-hook

## Live Demo

[CodeSandbox](https://codesandbox.io/s/beautiful-mountain-x7c8e)

## Quickstart

```jsx
import React from 'react';
import { useForm, generateSchema } from 'forms-hook';

const formSchema = {
  firstName: generateSchema('text', false),
  lastName: generateSchema('text'),
  age: generateSchema('number')
};

function App() {
  const { schema, setValue, onFormSubmit } = useForm(formSchema); // initialise the hook

  const handleSubmit = data => {
    console.log(data);
  };

  handleChange = ({ target: { name, value } }) => {
    setValue(name, value);
  };

  return (
    <form onSubmit={onFormSubmit(handleSubmit)}>
      <input {...schema.firstName} onChange={handleChange} />
      <input {...schema.lastName} onChange={handleChange} />
      {schema.lastName.error}
      <input {...schema.age} onChange={handleChange} />
      {schema.age.error}
      <input type="submit" />
    </form>
  );
}
```

## API Reference

```js
const {
  schema,
  isSubmitDisabled,
  setValue,
  setValueNoValidate,
  onFormSubmit,
  resetForm
} = useForm(initialSchema);
```

where

- `schema : FormSchema` the schema for your form (type specified below)
- `isSubmitDisabled : boolean` returns false if form has no errors and passes all validations
- `setValue : (name,value)=>void` to set the value for a particular input in the form
- `onFormSubmit : (callback)=>void` passes the form data to your callback function
- `resetForm : ()=>void` resets the form to its initial state.

#### Schema Generator Function

```js
generateSchema = (
  type: string,
  required?: boolean = true,
  placeholder?: string,
  validations?: InputValidations //types defined below
) => InputSchema; //types defined below
```

- Generates the input schema for individual form elements. mandatory parameter is type which can be "text", "number"..etc
- You can use the provided type constants to avoid typos. Ex:
  `js import { useForm, generateSchema, SCHEMA_TYPE, VALIDATIONS} from 'forms-hook'; const formSchema = { userName: generateSchema(SCHEMA_TYPE.TEXT,true,"username",VALIDATIONS.USERNAME), password: generateSchema(SCHEMATYPE.PASSWORD,true,"password",VALIDATIONS.PASSWORD) }`
- The second parameter is the required attribute. It is set to true by default.
- The third parameter is the placeholder. it is send to empty by default.
- The final parameter is the validations object. (defined in types below)

### TYPES

```js
type InputValidations = {
  minValue?: number,
  maxValue?: number,
  pattern?: any,
  minLength?: number,
  maxLength?: number,
  minDate?: string | number,
  maxDate?: string | number
};

type InputSchema = {
  name: string,
  required: boolean,
  value: any,
  type: string,
  error: string,
  placeholder?: string,
  validations?: InputValidations
};

type FormSchema = {
  [key: string]: InputSchema
};
```

### Contribute

- If you find any bugs/issues feel free to create a github issue
- If you want a feature request or want to contribute directly, please do so in the below repository.
- [GitHub](https://github.com/wasib/forms-hook)

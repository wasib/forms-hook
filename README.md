# forms-hook

A custom react hook based form management library built to simplify the way forms are handled. Does not interfere in any way with your default elements. Does not override any default functionality. All behaviour of the UI elements is completely user controlled. This allows for high customisability and more control over your components.

## Features

- Built with performance and simplicity in mind
- Controlled form validation
- [Ultra lightweight (1kB gzipped)](https://bundlephobia.com/result?p=forms-hook@0.5.4) without any dependency
- Allows type checking with FLOW support
- Allows both HTML5 validations and JS validations
- Works with any third party / UI Library
- Compatible with React Native
- Support browser native validation

## Install

    $ npm i forms-hook

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

Adding Soon...



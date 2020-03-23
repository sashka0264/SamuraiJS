import React from "react";
import {Field} from "redux-form";
import style from "./FormsControl.module.css";


const FormControl = ({meta, children}) => {
  const showError = meta.touched && meta.error;
  return (
    <div className={style.formControl + " " + (showError && style.error) }>
      <div>
        {children}
      </div>
      {showError && <span>{meta.error}</span>}
    </div>
  );
};

export const PostFormControl = (props) => {
  const {input, ...restProps} = props;
  return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>;
};

export const MessageFormControl = (props) => {
  const {input, ...restProps} = props;
  return <FormControl {...props}><input {...input} {...restProps}/></FormControl>;
};

export const LoginInputControl = (props) => {
  const {input, ...restProps} = props;
  return <FormControl {...props}><input {...input} {...restProps}/></FormControl>;
};

export const createField = (placeholder, name, validators, component, type, props = {}) => {
  return (
    <Field 
      placeholder={placeholder}
      name={name}
      type={type}
      validators={validators}
      component={component}
      {...props}
    />
  )
}


import React from 'react';
import {useForm} from "react-hook-form";
import './App.css';

export default function App() {
  const {register, handleSubmit, errors} = useForm();

  const onSubmit = (data) => {
    console.log(data.list.split(" "));
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="List" name="list" ref={register({required: "Lists are required"})}/>
      {errors.list && <p>{errors.list.message}</p>}
      <input type="submit"/>
    </form>
  );
}
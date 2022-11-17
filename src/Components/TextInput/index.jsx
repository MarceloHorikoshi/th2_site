import React from "react"
import { useForm } from "react-hook-form"
import "./textInput.module.css";

export default function TextInput() {
  const {
    register,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="Digite seu email..." {...register("example")} />
      </form>
    </div>
  )
}

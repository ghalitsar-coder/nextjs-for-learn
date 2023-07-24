"use client";
import FormInput from "@/components/FormInput";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { TFormInputs, formInputs } from "./constants";
import { TFormData } from "@/types/pages/react-form";

const ReactForm = () => {
  const [formData, setFormData] = useState<TFormData>(() => {
    return formInputs(undefined)
      .map((item: TFormInputs) => item.name)
      .reduce((obj, key) => {
        return { ...obj, [key]: "" };
      }, {}) as TFormData;
  });
  console.log(`THIS IS   formData:`, formData)
  const [currentErrorForm, setCurrentErrorForm] = useState({});
  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | Date | undefined
  ) => {
    if (e instanceof Date) {
      setFormData((prev) => ({ ...prev, birthDay: e }));
    } else {
      const { name, value } = e?.target as HTMLInputElement;
      setFormData((prev: TFormData) => ({ ...prev, [name]: value }));
    }
  };

  const isAllTrue = Object.keys(formData).every(
    (key) => formData[key as keyof TFormData]
  );
  console.log(`THIS IS   isAllTrue:`, isAllTrue);
  const validateFormData = (formData, regexData) => {
    const errors = {};
  
    for (const key in regexData) {
      if (formData.hasOwnProperty(key)) {
        const regex = new RegExp(regexData[key]);
        const value = formData[key];
  
        if (!regex.test(value)) {
          errors[key] = "Invalid value";
        }
      }
    }
  
    return errors;
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const regexInputs = formInputs(undefined)
      .filter((input) => input.pattern)
      .map((item) => ({ pattern: item.pattern, name: item.name }))
      .reduce((obj, key) => {
        return { ...obj, [key.name]: key.pattern };
      }, {});
    console.log(`THIS IS   regexInputs:`, regexInputs);
    // const inputWithRegex = Object.keys(regexInputs)
    //   .filter((item) => regexInputs[item])
    //   .map((item) => ({ item: regexInputs[item] }));
    const errors = validateFormData(formData, regexInputs);
    console.log('CURRENT ERROR ->',errors);
  };

  return (
    <section id="react-form" className="mt-20 mb-40">
      <form onSubmit={handleSubmit} className="container grid gap-y-5  py-5 ">
        {formInputs(formData.password).map((item) => (
          <FormInput
            key={item.id}
            {...item}
            onChange={handleChange}
            value={formData[item.name as keyof TFormData]}
          />
        ))}
        <button
          type="submit"
          disabled={!isAllTrue}
          className="bg-teal-500 p-2.5 text-white w-fit mx-auto rounded-md shadow-md disabled:bg-gray-300 "
        >
          Submit!
        </button>
      </form>
    </section>
  );
};

export default ReactForm;

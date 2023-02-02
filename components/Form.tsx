import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function Form({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) =>
    (window.location.href = `mailto:marionejudy@gmail.com?subject=${formData.subject}&body="Hi, my name is ${formData.name}, ${formData.message}`);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full p text-start text-base lg:max-w-3xl m-auto"
    >
      <div className="md:flex flex-wrap">
        <div className="md:w-1/2 md:pr-4">
          <label htmlFor="firstName" className="label">
            First Name
          </label>
          <input
            {...register("name")}
            name="firstName"
            className="contactInput"
            type="text"
          />
        </div>
        <div className="md:w-1/2 md:pl-4">
          <label htmlFor="lastName" className="label">
            Last Name
          </label>
          <input
            {...register("name")}
            name="lastName"
            className="contactInput"
            type="text"
          />
        </div>
      </div>
      <div className="md:flex flex-wrap">
        <div className="md:w-1/2 md:pr-4">
          <label htmlFor="email" className="label">
            Email Address
          </label>
          <input
            {...register("email")}
            name="email"
            className="contactInput"
            type="email"
          />
        </div>
        <div className="md:w-1/2 md:pl-4">
          <label htmlFor="email" className="label">
            Message Subject
          </label>
          <input
            {...register("subject")}
            name="subject"
            className="contactInput"
            type="text"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="label">
          Message
        </label>
        <textarea
          {...register("message")}
          name="subject"
          className="contactInput min-h-[200px] scroll mb-6 md:mb-12"
        />
      </div>

      <button
        type="submit"
        className="button text-xs px-6 md:px-10  transition-colors ease-in-out hover:bg-white duration-500"
      >
        Submit
      </button>
    </form>
  );
}

export default Form;

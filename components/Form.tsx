import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import { ThreeDots } from "react-loader-spinner";

type Props = {};

function Form({}: Props) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);

  // Please update the Access Key in the .env
  const apiKey =
    process.env.PUBLIC_ACCESS_KEY || "124ceb2f-d979-485c-9695-98a16e3aded1";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "Dirty Carrots",
      subject: "New Contact Message from Dirty Carrots",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="checkbox"
        id=""
        className="hidden"
        style={{ display: "none" }}
        {...register("botcheck")}
      ></input>

      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          autoComplete="false"
          {...register("name", {
            required: "Full name is required",
            maxLength: 80,
          })}
        />
        {/* <input
          type="text"
          autoComplete="false"
          className={`${errors.name ? "error" : "no-error"}`}
          {...register("name", {
            required: "Full name is required",
            maxLength: 80,
          })}
        /> */}
        {errors.name && (
          <div>
            {/* <small className={style.small}>{errors.name.message}</small> */}
          </div>
        )}
      </div>

      <div>
        <label htmlFor="email_address">Email Address</label>
        <input
          id="email_address"
          type="email"
          name="email"
          autoComplete="false"
          className={`${errors.email ? "error" : "no-error"}`}
          {...register("email", {
            required: "Enter your email",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Please enter a valid email",
            },
          })}
        />
        {errors.email && (
          <div>
            <small>{errors.email.message}</small>
          </div>
        )}
      </div>

      <div>
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          className={`${errors.message ? "error" : "no-error"}`}
          {...register("message", {
            required: "Enter your Message",
          })}
        />
        {errors.message && (
          <div>
            {" "}
            <small>{errors.message.message}</small>
          </div>
        )}
      </div>

      <button type="submit">
        {isSubmitting ? (
          <ThreeDots
            height="20"
            width="50"
            radius="20"
            color="#fff"
            ariaLabel="three-dots-loading"
            visible={true}
            wrapperStyle={{ marginBottom: 0 }}
          />
        ) : (
          "Send Message"
        )}
      </button>
      {isSubmitSuccessful && isSuccess && (
        <div>{message || "Success. Message sent successfully"}</div>
      )}
      {isSubmitSuccessful && !isSuccess && (
        <div>{message || "Something went wrong. Please try later."}</div>
      )}
    </form>
  );
}

export default Form;

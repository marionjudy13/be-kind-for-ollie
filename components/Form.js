import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import { ThreeDots } from "react-loader-spinner";

export default function Contact() {
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
      from_name: "Be Kind for Ollie Website",
      subject: "New Message from the Be Kind Site",
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full p text-start text-base lg:max-w-3xl m-auto"
    >
      {/* New Form */}
      <div className="md:flex flex-wrap">
        <input
          type="checkbox"
          id=""
          className="hidden"
          style={{ display: "none" }}
          {...register("botcheck")}
        ></input>

        <div className="md:w-1/2 md:pr-4">
          <label htmlFor="firstName" className="label">
            First Name
          </label>
          <input
            type="text"
            autoComplete="false"
            className={`contactInput ${errors.name ? "error" : "no-error"}`}
            {...register("first-name", {
              required: "First name is required",
              maxLength: 80,
            })}
          />
          {errors.name && (
            <div>
              <small>{errors.name.message}</small>
            </div>
          )}
        </div>
        <div className="md:w-1/2 md:pl-4">
          <label htmlFor="lastName" className="label">
            Last Name
          </label>
          <input
            type="text"
            autoComplete="false"
            className={`contactInput ${errors.name ? "error" : "no-error"}`}
            {...register("last-name", {
              required: "Last name is required",
              maxLength: 80,
            })}
          />
          {errors.name && (
            <div>
              <small>{errors.name.message}</small>
            </div>
          )}
        </div>
      </div>

      {/* old form */}
      {/* End old form */}
      <div className="md:flex flex-wrap">
        <div className="w-full">
          <label htmlFor="email" className="label">
            Email Address
          </label>
          <input
            id="email_address"
            type="email"
            name="email"
            autoComplete="false"
            className={`contactInput ${errors.email ? "error" : "no-error"}`}
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
      </div>

      <div>
        <label htmlFor="message" className="label">
          Message
        </label>
        <textarea
          name="message"
          className={`contactInput min-h-[200px] scroll mb-6 md:mb-12 ${
            errors.message ? "error" : "no-error"
          }`}
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

      <button className="block m-auto button mt-12" type="submit">
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

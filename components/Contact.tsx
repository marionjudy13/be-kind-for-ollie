import React from "react";
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import useWeb3Forms from "@web3forms/react";
// import { ThreeDots } from "react-loader-spinner";

type Props = {};

function Contact({}: Props) {
  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: { errors, isSubmitSuccessful, isSubmitting },
  // } = useForm({
  //   mode: "onTouched",
  // });
  // const [isSuccess, setIsSuccess] = useState(false);
  // const [message, setMessage] = useState(false);

  // // Please update the Access Key in the .env
  // const apiKey =
  //   process.env.PUBLIC_ACCESS_KEY || "124ceb2f-d979-485c-9695-98a16e3aded1";

  // const { submit: onSubmit } = useWeb3Forms({
  //   access_key: apiKey,
  //   settings: {
  //     from_name: "Website Submission",
  //     subject: "New Contact Message from the Be Kind Website",
  //   },
  //   onSuccess: (msg, data) => {
  //     setIsSuccess(true);
  //     setMessage(msg);
  //     reset();
  //   },
  //   onError: (msg, data) => {
  //     setIsSuccess(false);
  //     setMessage(msg);
  //   },
  // });

  return (
    <section className="bg-darkGreen padding" id="contact">
      <h2 className="h2 text-mint">Contact Us</h2>
      <p className="p text-white mb-12">
        We would love to hear from you. We will respond to your message as soon
        as possible.
      </p>
      {/* <form
        onSubmit={handleSubmit(onSubmit)}
        className="p text-white text-left"
      >
        <input
          type="checkbox"
          id=""
          className="hidden"
          {...register("botcheck")}
        ></input>

        <div className="mb-6 small">
          <label htmlFor="name" className="label">
            Name
          </label>
          <input
            type="text"
            autoComplete="false"
            className={`input ${errors.name ? "error" : "no-error"}`}
            {...register("name", {
              required: "Full name is required.",
              maxLength: 80,
            })}
          />
          {errors.name && (
            <div>
              <small>{errors.name.message}</small>
            </div>
          )}
        </div>

        <div className="mb-6 small">
          <label htmlFor="email_address" className="label">
            Email Address
          </label>
          <input
            id="email_address"
            type="email"
            name="email"
            autoComplete="false"
            className={`input ${errors.email ? "error" : "no-error"}`}
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

        <div className="mb-6 small negMargin">
          <label htmlFor="message" className="label">
            Message
          </label>
          <textarea
            name="message"
            className={`input min-h-[100px] ${
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

        <button type="submit" className="block m-auto button mt-12">
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
      </form> */}
    </section>
  );
}

export default Contact;

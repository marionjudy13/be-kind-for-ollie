import React from "react";
import Form from "./Form";

type Props = {};

function Contact({}: Props) {
  return (
    <section className="bg-darkGreen padding" id="contact">
      <h2 className="h2 text-mint">Contact Us</h2>
      <p className="p text-white mb-12 m-auto lg:max-w-xl">
        We would love to hear from you. We will respond to your message as soon
        as possible.
      </p>
      <Form />
    </section>
  );
}

export default Contact;

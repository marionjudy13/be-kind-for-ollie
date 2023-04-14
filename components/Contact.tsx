import React from "react";

type Props = {};

function Contact({}: Props) {
  return (
    <section className="bg-darkGreen padding" id="contact">
      <h2 className="h2 text-mint">Contact Us</h2>
      <p className="p text-white mb-12 m-auto lg:max-w-xl">
        We would love to hear from you. We will respond to your message as soon
        as possible.
      </p>
      <form className="p text-white">
        Form Goes Here
        <button className="block m-auto button mt-12">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;

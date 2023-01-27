import React from "react";

type Props = {};

function Contact({}: Props) {
  return (
    <div className="bg-darkGreen padding">
      <h2 className="h2 text-mint">Contact Us</h2>
      <p className="p text-white mb-12">
        We would love to hear from you. We will respond to your message as soon
        as possible.
      </p>
      <form className="p text-white">
        Form Goes Here
        <button className="block m-auto button mt-12">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;

import React from "react";
import ContactForm from "../../components/ContactForm";
import "./contact-page.component.css";

const ContactPage = () => {
  return (
    <section>
      <h1 className="contact-title">Contact Me</h1>
      <ContactForm />
    </section>
  );
};

export default ContactPage;

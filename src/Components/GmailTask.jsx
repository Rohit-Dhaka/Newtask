import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const GmailTask = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_rvrdz6z', 'template_pjeq2yc', form.current, {
        publicKey: 'C6NIoC6x1YM3TUzDy',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section >


      <h2>Email js Task</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="to_name" /> <br />
        <label>Email</label>
        <input type="email" name="from_name" /> <br />
        <label>Message</label>
        <textarea name="message" /> <br />
        <input type="submit" value="Send" />
      </form>
    </section>
  );
};
export default GmailTask
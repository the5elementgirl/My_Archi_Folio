import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import userData from "@constants/data";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  //Create a ref to easily reset the captcha later
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // 3. Get the reCAPTCHA response
    // window.grecaptcha is available because you added the script in _app.js
    const captchaResponse = window.grecaptcha.getResponse();

    if (!captchaResponse) {
      setStateMessage("Please complete the reCAPTCHA first!");
      setTimeout(() => setStateMessage(null), 5000);
      return;
    }

    setIsSubmitting(true);

    emailjs
      .sendForm(
        'service_16xjlt9', 
        'template_kpd12tr', 
        e.target, 
        'glpKFyVcpUIGaXasp'
      )
      .then(
        (result) => {
          setStateMessage('Message Sent Successfully!');
          setIsSubmitting(false);
          e.target.reset();
          window.grecaptcha.reset();
          setTimeout(() => setStateMessage(null), 5000);
        },
        (error) => {
          setStateMessage('Something went wrong! Please try again later');
          setIsSubmitting(false);
          setTimeout(() => setStateMessage(null), 5000);
        }
      );
  };

  return (
    <section className="dark:bg-gray-900 pb-20 transition-colors duration-500">
      <div className="max-w-6xl mx-auto h-48 dark:bg-ink antialiased">
        <h1 className="text-5xl md:text-9xl py-20 font-bold text-center md:text-left dark:bg-gray-900 text-ink dark:text-concrete-light">
          Contact
        </h1>
      </div>
      
      <div className="relative z-10 rounded-2xl shadow-2xl bg-ink dark:bg-ink p-4 md:p-10 lg:p-20 max-w-6xl mx-auto border-b-8 border-brass">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          <div className="md:ml-4">
            <header>
              <h1 className="text-gray-50 font-semibold text-2xl">
                Get in touch, I'd love to talk 🦜
              </h1>
              <p className="font-light text-base text-gray-200 mt-2">
                Fill in the details and I'll get back to you as soon as I can.
              </p>
            </header>

            <div className="icons-container inline-flex flex-col my-10 space-y-4">
              {/* Email */}
              <div className="flex flex-row items-center space-x-6 p-4 border border-transparent hover:border-brass transition-all ease-in-out duration-300 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="h-5 w-5 text-brass" viewBox="0 0 16 16">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                </svg>
                <p className="text-gray-50 font-light text-sm">{userData.email}</p>
              </div>

              {/* Address */}
              <div className="flex flex-row items-center space-x-6 p-4 border border-transparent hover:border-brass transition-all ease-in-out duration-300 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="h-5 w-5 text-brass" viewBox="0 0 16 16">
                  <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354z" />
                </svg>
                <p className="text-gray-50 font-light text-sm">{userData.address}</p>
              </div>
            </div>
          </div>

          <form onSubmit={sendEmail} className="rounded-lg bg-paper p-6 md:p-8 flex flex-col shadow-inner">
            <label htmlFor="user_name" className="text-sm font-bold text-ink uppercase tracking-widest">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              required
              className="font-light rounded-none border-b-2 border-concrete-light text-concrete-dark focus:border-brass focus:outline-none py-3 mt-2 bg-transparent transition-colors"
            />

            <label htmlFor="user_email" className="text-sm font-bold text-ink uppercase tracking-widest mt-8">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              required
              className="font-light rounded-none border-b-2 border-concrete-light text-concrete-dark focus:border-brass focus:outline-none py-3 mt-2 bg-transparent transition-colors"
            />

            <label htmlFor="message" className="text-sm font-bold text-ink uppercase tracking-widest mt-8">
              Message
            </label>
            <textarea
              rows="4"
              name="message"
              required
              className="font-light rounded-none border-b-2 border-concrete-light text-concrete-dark focus:border-brass focus:outline-none py-3 mt-2 bg-transparent transition-colors"
            ></textarea>

            {/* 5. ADD THE RECAPTCHA WIDGET HERE */}
            <div className="mt-8">
              <div 
                className="g-recaptcha" 
                data-sitekey="6Ld8EEksAAAAAKOV4lASYjrDJpWT1-k4F49bSX1-" // REPLACE WITH YOUR ACTUAL KEY
              ></div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-ink text-paper mt-10 py-4 px-8 font-bold uppercase tracking-widest hover:bg-brass hover:text-ink transition-all duration-300 disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {stateMessage && (
              <p className="mt-8 text-center text-xs font-bold uppercase text-red-500 animate-pulse">
                {stateMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
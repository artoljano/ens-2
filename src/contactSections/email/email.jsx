import React from "react";
import "./email.css";

function email() {
  return (
    <section className="contact-form section__padding">
      <div className="contact-form-header">
        <div className="header-left">
          <h1>Reach out and Share your Ideas</h1>
        </div>
        <div className="header-right">
          <p>We will schedule a first meeting with you within a few hours.</p>
          <p>
            Want to learn more <a href="/about">about us</a>?
          </p>
        </div>
      </div>
      <div className="col-start-1 col-end-14 lg:col-start-4 lg:col-end-15">
        <form className="send-email  pb-[calc(30/16*1rem)] pt-16 lg:pb-32 lg:pt-10">
          <div className="flex flex-col gap-y-6 lg:gap-y-[calc(30/16*1rem)]">
            <div className="grid row -lg:gap-y-6 lg:grid-cols-2 lg:gap-x-5">
              <div className="flex flex-col">
                <label className="mb-2" for="html">
                  First name*
                </label>
                <input name="name" type="text" required="" />
              </div>
              <div className="flex flex-col">
                <label className="mb-2" for="lastname">
                  Last name*
                </label>
                <input name="lastname" type="text" required="" />
              </div>
            </div>
            <div className="grid row -lg:gap-y-6 lg:grid-cols-2 lg:gap-x-5">
              <div className="flex flex-col">
                <label className="mb-2" for="company">
                  Company*
                </label>
                <input name="company" type="text" required="" />
              </div>
              <div className="flex flex-col">
                <label className="mb-2" for="function">
                  Function
                </label>
                <input name="function" type="text" />
              </div>
            </div>
            <div className="grid row -lg:gap-y-6 lg:grid-cols-2 lg:gap-x-5">
              <div className="flex flex-col">
                <label className="mb-2" for="phone">
                  Phone number*
                </label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="06123456789"
                  required=""
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2" for="email">
                  E-mail*
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="name@address.com"
                  required=""
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="mb-2" for="message">
                How can we help?*
              </label>
              <textarea name="message" rows="5" required=""></textarea>
            </div>
            <button className="btn-container">
              <a className="btn">Send Email</a>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default email;

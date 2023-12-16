import React from "react";
import { FaFacebookSquare, FaFacebookMessenger } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";

import "./main.css";

export default function Contacts() {
  return (
    <section id="contact-section" className="contact-section">
      <div className="contact-section-header">
        <h1>დაგვიკავშირდით</h1>
        <p>ჩვენ ვმუშაობთ 24/7</p>
      </div>
      <div className="contact-links">
        <Contact
          url="http://surl.li/oauds"
          icon={<FaFacebookSquare />}
          name="ფეისბუქი"
        />
        <Contact
          url="https://m.me/rostom.putkaradze"
          icon={<FaFacebookMessenger className="icon" />}
          name="მესენჯერი"
        />
        <Contact
          url="tel:+995-557-656-406"
          icon={<LuPhoneCall />}
          name="დარეკვა"
        />
      </div>
      <h1 className="phone-number">ტელ: +995-557-656-406</h1>
    </section>
  );
}

function Contact(props) {
  return (
    <>
      <a
        href={props.url}
        target="_blank"
        className="btn contact-details"
        rel="noreferrer"
      >
        {props.icon} {props.name}
      </a>
    </>
  );
}

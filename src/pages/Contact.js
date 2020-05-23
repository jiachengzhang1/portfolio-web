import "./Contact.css";
import React from "react";

import PageLayout from "../layouts/PageLayout";
import Title from "../components/Title";
import Link from "../utils/Link";

const getContactItems = (contacts) => {
  return contacts.map(({ name, content, link, icon }) => (
    <div className="contact-item">
      <div className="contact-item-title">
        <span>{name}</span>
      </div>
      <Link
        uppercase={false}
        href={link}
        content={
          <div>
            <div className="contact-item-icon">{icon}</div>
            <div className="contact-item-content">{content}</div>
          </div>
        }
      />
    </div>
  ));
};

const Contact = ({ contacts }) => {
  return (
    <PageLayout
      header={<Title title={"Contact Me"} />}
      content={
        <div className="contact-content text-center">
          {getContactItems(contacts)}
        </div>
      }
    />
  );
};

export default Contact;

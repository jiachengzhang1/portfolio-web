import "./Contact.css";
import React from "react";

import PageLayout from "../layouts/PageLayout";
import Title from "../components/Title";
import Link from "../utils/Link";

const getContactItems = (contacts, windowSize) => {
  return contacts.map(({ name, content, link, icon }) => (
    <div key={name} className="contact-item">
      <div className="contact-item-title">
        <span>{name}</span>
      </div>
      <div className="row justify-content-md-center">
        {windowSize.width > 769 ? (
          <div className="col col-md-2"></div>
        ) : (
          <div></div>
        )}
        <div className="col col-md-auto">
          <Link
            uppercase={false}
            href={link}
            content={
              <div className="contact-item-content">
                <div className="contact-item-icon">{icon}</div>
                <p className="contact-item-text">{content}</p>
              </div>
            }
          />
        </div>
        {windowSize.width > 769 ? (
          <div className="col col-md-2"></div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  ));
};

const Contact = ({ contacts, windowSize }) => {
  return (
    <PageLayout
      header={<Title title={"Contact Me"} />}
      content={
        <div className="contact-content text-center">
          {getContactItems(contacts, windowSize)}
        </div>
      }
    />
  );
};

export default Contact;

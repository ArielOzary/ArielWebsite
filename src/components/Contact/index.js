import React from "react";
import {
  ContactContainer,
  ContactTitle,
  ContactWrapper,
  IconsWrapper,
  IconWrapperLinkedIn,
  IconWrapperGmail,
} from "./ContactElements";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";

const Contact = () => {
  library.add(faLinkedin);

  const openGmail = () => {
    // Replace 'your-email@gmail.com' with the actual email address
    const email = "arielozary@gmail.com";
    const subject = "Hello Ariel :)";
    // Create the Gmail URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}`;
    // Open Gmail in a new tab or window
    window.open(gmailUrl, "_blank");
  };

  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/ariel-ozary/", "_blank");
  };

  return (
    <ContactContainer id="contact">
      <ContactTitle>Lets keep in touch</ContactTitle>
      <ContactWrapper>
        <IconsWrapper>
          <IconWrapperLinkedIn>
            <FontAwesomeIcon
              onClick={() => openLinkedIn()}
              icon={faLinkedin}
              size="2x"
            />
          </IconWrapperLinkedIn>

          <IconWrapperGmail>
            <FontAwesomeIcon
              onClick={() => openGmail()}
              icon={faEnvelope}
              size="2x"
            />
          </IconWrapperGmail>
        </IconsWrapper>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;

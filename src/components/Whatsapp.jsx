import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Whatsapp = () => {
  return (
    <a
      href="https://wa.link/jdmx80"
      rel="noreferrer"
      target="_blank"
      aria-label="link to whatsapp">
      {' '}
      <FontAwesomeIcon
        icon={faWhatsapp}
        className="fixed bottom-32 right-0 z-40 h-10  rounded-bl-xl rounded-tl-xl bg-one p-3 text-two duration-100 hover:bg-two hover:text-one"
      />
    </a>
  );
};

export default Whatsapp;

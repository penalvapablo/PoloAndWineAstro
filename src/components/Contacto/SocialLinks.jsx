import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SocialLinks = () => {
  return (
    <div className="mx-auto mt-2 flex h-9 w-32 justify-between text-one ">
      <a
        href="https://wa.link/jdmx80"
        rel="noreferrer"
        target="_blank"
        aria-label="link to whatsapp">
        {' '}
        <FontAwesomeIcon
          icon={faWhatsapp}
          className="h-full  duration-100 hover:border-five hover:text-five"
        />
      </a>

      <a
        href="https://instagram.com/poloandwine"
        rel="noreferrer"
        target={'_blank'}
        aria-label="link a instagram">
        <FontAwesomeIcon
          icon={faInstagram}
          className="h-full  duration-100 hover:border-five hover:text-five"
        />
      </a>
      <a
        href="https://www.facebook.com/poloandwine"
        rel="noreferrer"
        target={'_blank'}
        aria-label="link a facebook">
        <FontAwesomeIcon
          icon={faFacebookF}
          className="h-full  duration-100 hover:border-five hover:text-five"
        />
      </a>
    </div>
  );
};

export default SocialLinks;

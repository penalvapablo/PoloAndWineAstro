import React, { useState } from 'react';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
        console.log('object');
      } else {
        setIsScrolled(false);
      }
    });
  }

  return (
    <nav>
      <ul
        className={`absolute left-1/2 hidden w-[45rem] translate-x-[-50%] justify-between pt-9 text-xl text-one lg:flex xl:w-[50rem] ${
          isScrolled ? 'fixed bg-burger' : ''
        }`}>
        <li>
          <a
            href="/"
            className="hover:border-b-2 hover:border-b-one">
            Home
          </a>
        </li>
        <li>
          <a
            href="/#products"
            className="hover:border-b-2 hover:border-b-one">
            Productos
          </a>
        </li>
        <li>
          <a
            href="/#courses"
            className="hover:border-b-2 hover:border-b-one">
            Cursos
          </a>
        </li>
        <li>
          <a
            href="/#business"
            className="hover:border-b-2 hover:border-b-one">
            Business Solutions
          </a>
        </li>
        <li>
          <a
            href="/about"
            className="hover:border-b-2 hover:border-b-one">
            Sobre nostrosos
          </a>
        </li>
        <li>
          <a
            href="/#contact"
            className="hover:border-b-2 hover:border-b-one">
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

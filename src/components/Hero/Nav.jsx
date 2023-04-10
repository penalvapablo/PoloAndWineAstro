import React, { useState } from 'react';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
        // console.log(true);
      } else {
        setIsScrolled(false);
        // console.log(false);
      }
    });
  }

  return (
    <nav
      className={`sticky top-0 z-50  hidden h-24 w-full items-center justify-center border-one bg-two bg-opacity-0 duration-500 xl:flex ${
        isScrolled ? 'border-b-2  bg-opacity-100' : ' '
      }`}>
      <ul
        className={`w-[45rem] items-center justify-between text-xl text-one lg:flex xl:w-[50rem]`}>
        <li>
          <a
            href="/"
            className="duration-200 hover:text-five">
            Home
          </a>
        </li>
        <li>
          <a
            href="/#products"
            className="duration-200 hover:text-five">
            Productos
          </a>
        </li>
        <li>
          <a
            href="/#courses"
            className="duration-200 hover:text-five">
            Cursos
          </a>
        </li>
        <li>
          <a
            href="/#business"
            className="duration-200 hover:text-five">
            Business Solutions
          </a>
        </li>
        <li>
          <a
            href="/about"
            className="duration-200 hover:text-five">
            Sobre nostrosos
          </a>
        </li>
        <li>
          <a
            href="/#contact"
            className="duration-200 hover:text-five">
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

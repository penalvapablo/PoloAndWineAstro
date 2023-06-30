import React, { useState } from 'react';

const NavHome = () => {
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
        isScrolled ? 'bg-opacity-100' : ' '
      }`}>
      <ul
        className={`w-[45rem] items-center justify-between font-title text-xl text-one lg:flex xl:w-[50rem]`}>
        <li>
          <a
            href="/"
            className="duration-200 hover:text-five">
            Home
          </a>
        </li>
        <li>
          <a
            href="/#paquetes"
            className="duration-200 hover:text-five">
            Paquetes
          </a>
        </li>
        <li>
          <a
            href="/#cursos"
            className="duration-200 hover:text-five">
            Cursos de inglés
          </a>
        </li>
        <li>
          <a
            href="/#servicios"
            className="duration-200 hover:text-five">
            Servicios
          </a>
        </li>
        <li>
          <a
            href="/about"
            className="duration-200 hover:text-five">
            Sobre nosotros
          </a>
        </li>
        <li>
          <a
            href="/#contacto"
            className="duration-200 hover:text-five">
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavHome;

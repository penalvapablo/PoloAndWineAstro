import React from 'react';

const MobileNav = ({ mobileNavFn, mobileNav }) => {
  return (
    <div
      className={`absolute  bottom-0  mb-[54px] flex h-[calc(100vh-55px)] w-screen flex-col items-center  justify-center gap-9 bg-two text-center font-title text-xl   text-one   duration-300
        ${
          !mobileNav
            ? 'invisible opacity-0'
            : 'visible opacity-100'
        }`}>
      <nav>
        <ul className="  flex flex-col gap-5 ">
          <li>
            <a
              href="/"
              onClick={mobileNavFn}>
              Home
            </a>
          </li>
          <li>
            <a
              href="/#productos"
              onClick={mobileNavFn}>
              Productos
            </a>
          </li>
          <li>
            <a
              href="/#cursos"
              onClick={mobileNavFn}>
              Cursos
            </a>
          </li>
          <li>
            <a
              href="/#servicios"
              onClick={mobileNavFn}>
              Servicios
            </a>
          </li>
          <li>
            <a
              href="/about"
              onClick={mobileNavFn}>
              Sobre nosotros
            </a>
          </li>
          <li>
            <a
              href="/#contacto"
              onClick={mobileNavFn}>
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;

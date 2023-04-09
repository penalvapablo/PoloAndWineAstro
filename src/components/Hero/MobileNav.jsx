import React from 'react';

const MobileNav = ({ mobileNavFn }) => {
  return (
    <nav
      className={`absolute  left-1/2 top-[-300px] z-20  h-[300px] w-[100%] translate-x-[-50%] bg-burger`}>
      <ul className="flex h-[100%] flex-col items-center justify-around border-t-4 border-t-one text-center font-text text-[1.30rem] text-one">
        <li>
          <a
            href="/"
            onClick={mobileNavFn}>
            Home
          </a>
        </li>
        <li>
          <a
            href="/#products"
            onClick={mobileNavFn}>
            Productos
          </a>
        </li>
        <li>
          <a
            href="/#courses"
            onClick={mobileNavFn}>
            Cursos
          </a>
        </li>
        <li>
          <a
            href="/#business"
            onClick={mobileNavFn}>
            Business Solutions
          </a>
        </li>
        <li>
          <a
            href="/about"
            onClick={mobileNavFn}>
            Sobre nostrosos
          </a>
        </li>
        <li>
          <a
            href="/#contact"
            onClick={mobileNavFn}>
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;

import React from 'react';

const MobileNav = () => {
  return (
    <nav
      class={`absolute  left-1/2 top-[-300px] h-[300px]  w-[100%] translate-x-[-50%] bg-six `}>
      <ul class="flex h-[100%] flex-col items-center justify-around border-t-4 border-t-one text-center font-text text-[1.30rem] text-one">
        <li>Home</li>
        <li>Productos</li>
        <li>Cursos</li>
        <li>Business Solutions</li>
        <li>Sobre nostrosos</li>
        <li>Contacto</li>
      </ul>
    </nav>
  );
};

export default MobileNav;

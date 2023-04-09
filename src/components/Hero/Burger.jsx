import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import MobileNav from './MobileNav';
import { useState } from 'react';

const Burger = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const mobileNavFn = () => {
    setMobileNav(!mobileNav);
  };
  // Preven scrolling when mobile nav activated
  if (typeof window !== 'undefined') {
    mobileNav
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }
  return (
    <div
      className={`bg-six fixed bottom-0 z-20 border-t-4 border-t-one xl:hidden`}>
      {mobileNav && (
        <>
          <div
            onClick={mobileNavFn}
            className="fixed left-1/2 top-1/2 z-10  h-screen   w-screen translate-x-[-50%] translate-y-[-50%]  bg-burger/50"></div>
          <MobileNav mobileNavFn={mobileNavFn} />
        </>
      )}
      <div
        className={`  flex h-[50px] w-screen  justify-center  border-t-one bg-burger`}>
        <button
          id="burger menu"
          aria-label="burger menu"
          onClick={mobileNavFn}>
          <FontAwesomeIcon
            icon={faBars}
            className=" h-[35px]  text-one "
          />
        </button>
      </div>
    </div>
  );
};

export default Burger;

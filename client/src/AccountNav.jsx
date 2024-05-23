import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Lottie from 'lottie-react';
import iconUser from './json/icons8-user-male.json';
import iconHome from './json/icons8-home.json';

function AccountNav() {
  const { pathname } = useLocation();
  let subpage = pathname.split('/')?.[2];
  if (subpage === undefined) {
    subpage = 'profile';
  }
  function linkClasses(type = null) {
    let classes = 'inline-flex gap-1 py-2 px-6 h-10 rounded-full';
    if (type === subpage) {
      classes += ' bg-primary text-white ';
    } else {
      classes += ' bg-gray-100';
    }
    return classes;
  }

  return (
    <div>
      <nav className='max-sm:flex-col w-full flex justify-center mt-6 mb-4 gap-2'>
        <Link className={linkClasses('profile')} to={'/account'}>
          <Lottie animationData={iconUser} />
          My profile
        </Link>
        <Link className={linkClasses('bookings')} to={'/account/bookings'}>
          <svg className='w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="list">
            <g><g><circle cx="4" cy="7" r="1"></circle><circle cx="4" cy="12" r="1"></circle>
              <circle cx="4" cy="17" r="1"></circle><rect width="14" height="2" x="7" y="11" rx=".94" ry=".94"></rect>
              <rect width="14" height="2" x="7" y="16" rx=".94" ry=".94"></rect>
              <rect width="14" height="2" x="7" y="6" rx=".94" ry=".94"></rect></g></g>
          </svg>
          My bookings
        </Link>
        <Link className={linkClasses('places')} to={'/account/places'}>
          <Lottie animationData={iconHome} />
          My accommodations
        </Link>
      </nav>
    </div>
  );
}

export default AccountNav;
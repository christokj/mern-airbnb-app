import Lottie from 'lottie-react';
import React from 'react';
import iconLocation from './json/location.json';

function AddressLink({ children, className = null }) {
  if (!className) {
    className = 'my-2';
  }
  className += ' flex gap-1 font-semibold underline';
  return (
    <a className={className} target='_blank' href={'https://maps.google.com/?q=' + children}>
      <Lottie className='w-6 ' animationData={iconLocation} />
      {children}
    </a>
  );
}

export default AddressLink;
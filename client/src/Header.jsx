import React, { useContext } from 'react';
import Lottie from 'lottie-react';
import iconSearch from './json/search.json';
import iconMenu from './json/icons8-menu.json';
import iconUser from './json/icons8-user-male.json';
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';

function Header() {
    const { user } = useContext(UserContext);
    return (
        <header className='max-sm:p-4 flex justify-between border-b-2 sticky z-40 top-0 bg-gray-50 -mx-10 -mt-5 pt-1.5 h-20 px-12'>
            <div className='headerLogo'>
                <Link to={'/'} className="flex items-center pt-3" >
                    <div className='w-8'>
                        <svg className='w-8 fill-primary' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M224 373.1c-25.2-31.7-40.1-59.4-45-83.2-22.6-88 112.6-88 90.1 0-5.5 24.3-20.3 52-45 83.2zm138.2 73.2c-42.1 18.3-83.7-10.9-119.3-50.5 103.9-130.1 46.1-200-18.9-200-54.9 0-85.2 46.5-73.3 100.5 6.9 29.2 25.2 62.4 54.4 99.5-32.5 36.1-60.6 52.7-85.2 54.9-50 7.4-89.1-41.1-71.3-91.1 15.1-39.2 111.7-231.2 115.9-241.6 15.8-30.1 25.6-57.4 59.4-57.4 32.3 0 43.4 25.9 60.4 59.9 36 70.6 89.4 177.5 114.8 239.1 13.2 33.1-1.4 71.3-37 86.6zm47-136.1C280.3 35.9 273.1 32 224 32c-45.5 0-64.9 31.7-84.7 72.8C33.2 317.1 22.9 347.2 22 349.8-3.2 419.1 48.7 480 111.6 480c21.7 0 60.6-6.1 112.4-62.4 58.7 63.8 101.3 62.4 112.4 62.4 62.9 .1 114.9-60.9 89.6-130.2 0-3.9-16.8-38.9-16.8-39.6z" />
                        </svg>
                    </div>
                    <span className='font-bold text-xl mx-3'>airbnb</span>
                </Link>
            </div>
            <div className='max-sm:hidden flex mt-2 border border-gray-200 rounded-full px-4 pt-2 h-12 shadow-md shadow-gray-300'>
                <div className=''>Anywhere</div>
                <div className="border-l border-gray-300 mb-2 mx-2"></div>
                <div>Any week</div>
                <div className="border-l border-gray-300 mb-2 mx-2"></div>
                <div>Add guests</div>
                <button className='w-7 bg-primary rounded-full ms-2 mb-2'>
                    <Lottie animationData={iconSearch} />
                </button>
            </div>
            <Link to={user ? '/account' : '/login'} className='flex h-10 mt-3 border border-gray-300 rounded-full px-4'>
                <Lottie className='w-4 me-2' animationData={iconMenu} />
                <Lottie className='w-7 h-7 mt-1 rounded-full border border-gray-300 ' animationData={iconUser} />
                {!!user && (
                    <div className='mt-2 mx-2'>
                        {user.name}
                    </div>
                )}
                <button className='sm:hidden w-7 bg-primary rounded-full ms-1 my-1'>
                    <Lottie animationData={iconSearch} />
                </button>
            </Link>
        </header>
    );
}

export default Header;
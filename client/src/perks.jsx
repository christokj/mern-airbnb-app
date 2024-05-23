import React from 'react';
import Lottie from 'lottie-react';
import iconWifi from './json/icon-wifi.json';
import iconTv from './json/tv.json';

function perks({ selected, onChange }) {

    function handleCbClick(ev) {
        const { checked, name } = ev.target;
        if (checked) {
            onChange([...selected, name]);
        } else {
            onChange([...selected.filter(selectedName => selectedName !== name)]);
        }
    }

    return (
        <>
            <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer'>
                <input type="checkbox" checked={selected.includes('wifi')} name='wifi' onChange={handleCbClick} />
                <Lottie className='w-8' animationData={iconWifi} />
                <span>Wifi</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer'>
                <input type="checkbox" checked={selected.includes('parking')} name='parking' onChange={handleCbClick} />
                <img className='w-10' src="	https://cdn-icons-png.freepik.com/256/75/75905.png?ga=GA1.1.1743247060.1713276384&semt=ais_hybrid" alt="Parking icon" />
                <span>Free parking spot</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer'>
                <input type="checkbox" checked={selected.includes('tv')} name='tv' onChange={handleCbClick} />
                <Lottie className='w-10' animationData={iconTv} />
                <span>TV</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer'>
                <input type="checkbox" checked={selected.includes('pets')} name='pets' onChange={handleCbClick} />
                <svg className='w-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M320 192h17.1c22.1 38.3 63.5 64 110.9 64c11 0 21.8-1.4 32-4v4 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V339.2L280 448h56c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-53 0-96-43-96-96V192.5c0-16.1-12-29.8-28-31.8l-7.9-1c-17.5-2.2-30-18.2-27.8-35.7s18.2-30 35.7-27.8l7.9 1c48 6 84.1 46.8 84.1 95.3v85.3c34.4-51.7 93.2-85.8 160-85.8zm160 26.5v0c-10 3.5-20.8 5.5-32 5.5c-28.4 0-54-12.4-71.6-32h0c-3.7-4.1-7-8.5-9.9-13.2C357.3 164 352 146.6 352 128v0V32 12 10.7C352 4.8 356.7 .1 362.6 0h.2c3.3 0 6.4 1.6 8.4 4.2l0 .1L384 21.3l27.2 36.3L416 64h64l4.8-6.4L512 21.3 524.8 4.3l0-.1c2-2.6 5.1-4.2 8.4-4.2h.2C539.3 .1 544 4.8 544 10.7V12 32v96c0 17.3-4.6 33.6-12.6 47.6c-11.3 19.8-29.6 35.2-51.4 42.9zM432 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
                </svg>
                <span>Pets</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer'>
                <input type="checkbox" checked={selected.includes('entrance')} name='entrance' onChange={handleCbClick} />
                <svg className='w-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M320 32c0-9.9-4.5-19.2-12.3-25.2S289.8-1.4 280.2 1l-179.9 45C79 51.3 64 70.5 64 92.5V448H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H96 288h32V480 32zM256 256c0 17.7-10.7 32-24 32s-24-14.3-24-32s10.7-32 24-32s24 14.3 24 32zm96-128h96V480c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H512V128c0-35.3-28.7-64-64-64H352v64z" />
                </svg>
                <span>Private entrance</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-2 items-center'>
                <input type="checkbox" checked={selected.includes('radio')} name='radio' onChange={handleCbClick} />
                <svg className='w-10' cursor-pointer='true' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M494.8 47c12.7-3.7 20-17.1 16.3-29.8S494-2.8 481.2 1L51.7 126.9c-9.4 2.7-17.9 7.3-25.1 13.2C10.5 151.7 0 170.6 0 192v4V304 448c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H218.5L494.8 47zM368 240a80 80 0 1 1 0 160 80 80 0 1 1 0-160zM80 256c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-8.8 0-16-7.2-16-16zM64 320c0-8.8 7.2-16 16-16H208c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16zm16 64c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-8.8 0-16-7.2-16-16z" />
                </svg>
                <span>radio</span>
            </label>
        </>
    );
}

export default perks;
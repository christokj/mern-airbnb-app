import React, { useState } from 'react';
import "./PlaceGallery.css";
import Lottie from 'lottie-react';
import iconClose from './json/Close.json';
import Image from './Image';

function PlaceGallery({ place }) {
    const [showAllPhotos, setShowAllPhotos] = useState(false);
    if (showAllPhotos) {
        return (
            <div className='absolute inset-0 bg-white h-max z-50' >
                <div className='max-sm:m-1 max-md:m-2 m-8 grid gap-4'>
                    <div className='mb-4'>
                        <h2 className='text-3xl font-semibold text-center'>Photos of {place.title}</h2>
                        <button onClick={() => setShowAllPhotos(false)} className='fixed bg-opacity-30 flex rounded-full  bg-gray-100 hover:bg-gray-300 text-black font-semibold'>
                            <Lottie className='w-10' animationData={iconClose} />
                        </button>
                    </div>
                    {place?.photos?.length > 0 && place.photos.map(photo => (
                        <div className='flex justify-center all_photos' key={photo}>
                            <Image src={photo} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className='image_wrapper grid gap-2 grid-cols-[2fr_1fr] relative'>
            <div>
                {place.photos?.[0] && (
                    <div className='cursor-pointer object-cover overflow-hidden main_image_wrapper rounded-l-2xl'>
                        <Image onClick={() => setShowAllPhotos(true)} className="aspect-square cursor-pointer object-cover" src={place.photos[0]} alt="" />
                    </div>
                )}
            </div>
            <div className='grid'>
                <div className=''>

                    {place.photos?.[1] && (
                        <div className='cursor-pointer side_image object-fill overflow-hidden -mb-1 rounded-tr-2xl'>
                            <Image onClick={() => setShowAllPhotos(true)} className="aspect-square cursor-pointer object-cover" src={place.photos[1]} alt="" />
                        </div>
                    )}
                </div>
                <div className=''>
                    {place.photos?.[2] && (
                        <div className='cursor-pointer side_image object-fill overflow-hidden -mt-1 rounded-br-2xl'>
                            <Image onClick={() => setShowAllPhotos(true)} className="aspect-square cursor-pointer object-cover" src={place.photos[2]} alt="" />
                        </div>
                    )}
                </div>
            </div>
            <button onClick={() => setShowAllPhotos(true)} className='max-sm:px-0 flex absolute bottom-6 right-2 bg-opacity-40 bg-white hover:bg-white text-black font-semibold py-1 px-2 rounded-full'>
                <svg className='max-sm:w-3 w-5 mx-1 my-1 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M160 80H512c8.8 0 16 7.2 16 16V320c0 8.8-7.2 16-16 16H490.8L388.1 178.9c-4.4-6.8-12-10.9-20.1-10.9s-15.7 4.1-20.1 10.9l-52.2 79.8-12.4-16.9c-4.5-6.2-11.7-9.8-19.4-9.8s-14.8 3.6-19.4 9.8L175.6 336H160c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zM96 96V320c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120V344c0 75.1 60.9 136 136 136H456c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88V120zm208 24a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
                </svg>
                <span className='max-sm:text-xs'>Show more photos   </span>
            </button>
        </div>
    );
}

export default PlaceGallery;
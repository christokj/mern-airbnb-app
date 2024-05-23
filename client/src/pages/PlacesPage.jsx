import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import iconPlus from '../json/icons8-plus.json';
import axios from 'axios';
import AccountNav from '../AccountNav';
import PlaceImg from '../PlaceImg';

function PlacesPage() {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        axios.get('/user-places').then(({ data }) => {
            setPlaces(data);
        });
    }, []);
    return (
        <div>
            <AccountNav />
            <div className='text-center'>
                <Link className='inline-flex mb-4 gap-1 bg-primary text-white py-2 px-6 rounded-full' to={'/account/places/new'} >
                    <Lottie className='w-5' animationData={iconPlus} />
                    Add new places
                </Link>
            </div>
            <div>
                {places.length > 0 && places.map(place => (
                    <Link to={'/account/places/' + place._id} key={place._id} className='max-[500px]:flex-col flex cursor-pointer gap-4 bg-gray-100 p-4 rounded-2xl' >
                        <div>
                            {place.photos?.[0] && (
                                <div className='flex w-32 h-32 bg-gray-300 grow shrink-0 rounded-2xl'>
                                    <PlaceImg place={place} />
                                </div>
                            )}
                        </div>
                        <div className='grow-0 shrink'>
                            <h2 className='text-xl'>{place.title}</h2>
                            <p className='text-sm mt-2'>{place.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default PlacesPage;
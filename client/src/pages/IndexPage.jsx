import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PlaceImg from '../PlaceImg';

function IndexPage() {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        axios.get('/places').then(response => {
            setPlaces(response.data);
        });
    }, []);

    return (
        <div className="mt-4 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {places.length > 0 && places.map(place => (
                <Link to={'/place/' + place._id} key={place._id}>
                    <div className="rounded-2xl bg-gray-500 flex">
                        {place.photos?.[0] && (
                            <PlaceImg place={place} className='rounded-2xl object-cover aspect-square' />
                        )}
                    </div>
                    <h2 className="font-bold">{place.address}</h2>
                    <h3 className="text-sm text-gray-500">{place.title}</h3>
                    <div className='mt-2'>
                        <span className='font-bold'>${place.price}</span> per night
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default IndexPage;




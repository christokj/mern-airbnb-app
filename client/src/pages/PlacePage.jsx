import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BookingWidget from '../BookingWidget';
import PlaceGallery from '../PlaceGallery';
import AddressLink from '../AddressLink';

function PlacePage() {
    const { id } = useParams();
    const [place, setPlace] = useState(null);
    useEffect(() => {
        if (!id) {
            return;
        }
        axios.get(`/places/${id}`).then(response => {
            setPlace(response.data);
        });
    }, [id]);

    if (!place) return '';



    return (
        <div className='max-sm:px-2 bg-gray-50 -mx-8 px-32 pt-8 -mt-4'>
            <h1 className='text-3xl'>{place.title}</h1>
            <AddressLink>{place.address}</AddressLink>
            <PlaceGallery place={place} />
            <div className="gap-8 grid grid-cols-1 md:grid-cols-[2fr_1fr]">
                <div>
                    <div className='my-4'>
                        <h2 className='font-semibold text-2xl'>Description</h2>
                        {place.description}
                    </div>
                    Check in: {place.checkIn} <br />
                    Check out: {place.checkOut} <br />
                    Max number of guests: {place.maxGuests}
                </div>
                <div>
                    <BookingWidget place={place} />
                </div>
            </div>
            <div className='bg-white -mx-32 px-32 py-8 mt-4 border-t'>
                <div className='font-semibold text-2xl'>
                    <h2>Extra info</h2>
                </div>
                <div className='mb-4 mt-2 text-sm text-gray-700 leading-5 '>
                    {place.extraInfo}
                </div>
            </div>
        </div>
    );
}

export default PlacePage;
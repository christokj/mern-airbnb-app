import React, { useEffect, useState } from 'react';
import AccountNav from '../AccountNav';
import PlaceImg from '../PlaceImg';
import iconCard from '../json/credit card.json';
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import BookingDates from '../BookingDates';
import axios from 'axios';

function BookingsPage() {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        axios.get('/bookings').then(response => {
            setBookings(response.data);
        });
    }, []);
    return (
        <div>
            <AccountNav />
            <div className='items-center'>
                {bookings?.length > 0 && bookings.map(booking => (
                    <Link to={`/account/bookings/${booking._id}`} key={booking._id} className='flex gap-4 bg-gray-50 rounded-2xl overflow-hidden'>
                        <div className='w-48 max-[500px]:hidden'>
                            <PlaceImg place={booking.place} className='rounded-2xl max-[500px]:hidden' />
                        </div>
                        <div className='py-3 pr-3 grow'>
                            <h2 className='text-xl'>{booking.place.title}</h2>
                            <div className='text-xl'>
                                <BookingDates booking={booking} className='mb-2 mt-4 text-gray-500' />
                                <div className="gap-1 flex">
                                    <Lottie className='w-7 h-7' animationData={iconCard} />
                                    <span className='text-2xl'>
                                        Total price: ${booking.price}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default BookingsPage;

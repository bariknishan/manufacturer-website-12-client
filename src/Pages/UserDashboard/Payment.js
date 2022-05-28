import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../SharedPages/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L490bAu7VDKHv9Htsk8RJRscacdXy77OZgiRKkTorAHEphHr7Dr0Tjm8rdK2kavLF6qJpCHmyHHk5uFzVRDbIJR00UilsbNj2');
const Payment = () => {

    const { id } = useParams() ////// id purpose
    const url = `http://localhost:5000/booking/${id}`
    const { data: order, isLoading } = useQuery(['booking', id], () => fetch(url, {

        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        < div className='mt-4'>
            <div className="card w-50 bg-primary max-w-md   text-primary-content m-4">
                <div className="card-body">
                    <h2 className='text-white-500'>Hello! Mr {order.buyer}</h2>
                    <h2 className="card-title">pay for {order.itemPackage}</h2>
                    <p> we will delever it on <span className='text-secondary'> {order.date}</span></p>
                    <p> You should pay ${order.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-blue-200 m-4">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                   <CheckoutForm></CheckoutForm>
                    </Elements>
                </div>
            </div>
        </div>

    );
};

export default Payment;
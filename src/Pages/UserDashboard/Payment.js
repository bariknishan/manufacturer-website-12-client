import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../SharedPages/Loading';

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
        < div>
            <div class="card w-50 bg-primary max-w-md   text-primary-content">
                <div class="card-body">
                    <h2 className='text-white-500'>Hello! Mr {order.buyer}</h2>
                    <h2 class="card-title">pay for {order.itemPackage}</h2>
                    <p> we will delever it on <span className='text-secondary'> {order.date}</span></p>
                     <p> You should pay ${order.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">

                </div>
            </div>
        </div>

    );
};

export default Payment;
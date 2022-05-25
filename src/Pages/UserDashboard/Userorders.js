import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Userorders = () => {

    const [orders, setOrders] = useState([])

    const [user] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?buyer=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data));
        }

    }, [user])
    return (
        <div>
            <h2 className='text-xl m-2 text-blue-500'>My orders:{orders.length}</h2>


            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>ItemPackage</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            orders.map(order =>
                                <tr>
                                    <th>1</th>
                                    <th>{order.buyer}</th>
                                    <td>{order.itemPackage}</td>
                                    <td>{order.date}</td>
                                    <td>{order.product}</td>
                                </tr>
                            )
                        }




                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Userorders;
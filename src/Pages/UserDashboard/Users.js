import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../SharedPages/Loading';
import UserRow from './UserRow';

const Users = () => {
    const { data: users, isLoading,refetch } = useQuery('users', () => fetch('https://fierce-journey-20981.herokuapp.com/user',{
       method:'GET',
       headers:{
           authorization: `Bearer ${localStorage.getItem('accessToken')}`
       }

    }).then(res => res.json()))


    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-xl'>All Buyers/Users:{users.length}</h2>

            <div className="overflow-x-auto ">
                <table className="table w-full ">

                    <thead>
                        <tr className='text-xl'>
                            <th> serial</th>
                            <th>Name/Email</th>
                            <th> Admin State</th>
                            <th>Delet State</th>
                        </tr>
                    </thead>
                    <tbody>



                        {
                            users.map(user => <UserRow
                                key={user._id}
                                user={user}
                                refetch={refetch}
                            ></UserRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
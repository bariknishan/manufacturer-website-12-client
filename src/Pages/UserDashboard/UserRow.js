import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user,refetch}) => {
    const {email,role}= user ;
    const makeAdmin=()=>{
        fetch(`https://fierce-journey-20981.herokuapp.com/user/admin/${email}`,{

        method:'PUT',
        headers:{
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
        }
        })
        .then(res=> {
           if(res.status === 403){
               toast.error('can not make an admin ')
           } 
             
         return res.json()})

        .then(data => {
            // console.log(data);
        if(data.modifiedCount > 0){
            refetch();
            toast.success(`admin made successfully`)
        }
        })
    }

 
    return (
             
      <tr>
        <th>Postition</th>
        <td>{email}</td>
        <td>{ role!=='admin' && <button  onClick={makeAdmin} className="btn btn-info">Make Admin</button>}</td>
        <td><button className="btn btn-success">Delete User</button></td>
      </tr>
       
    );
};

export default UserRow;
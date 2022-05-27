import React from 'react';
import { toast } from 'react-toastify';

const DeleteProductModal = ({deleteProduct ,refetch  ,setDeleteProduct}) => {
    const {name ,email}= deleteProduct


    const handleDelete = () => {
        fetch(`https://fierce-journey-20981.herokuapp.com/product/${email}`,{
 
            method: 'DELETE',
 
         headers: {
            
             authorization: `Bearer ${localStorage.getItem('accessToken')}`
         }
 
        })
        .then(res=>res.json())
 
        .then(data=>{
            console.log(data)
            if(data.deletedCount){
             toast.success(`product: ${name} is deleted `)
             setDeleteProduct(null)
             refetch()
            }
        })
 
    }





    return (
        <div>
           


<input type="checkbox" id="delete-product-modal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Sure about Delete? {name}</h3>
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div className="modal-action">

    <button onClick={() => handleDelete(email)} className="btn btn-warning">Delete Product</button>
      <label htmlFor="delete-product-modal" className="btn btn-warning">close</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default DeleteProductModal;
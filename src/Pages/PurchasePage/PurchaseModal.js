import { format } from 'date-fns';
import React from 'react';

const PurchaseModal = ({ itemPackage, date,setItemPackage }) => {
    const {_id, name, products } = itemPackage;

    const handlePurchase = event =>{
      event.preventDefault();
      const product= event.target.product.value;
      console.log(product ,name, _id)

      setItemPackage(null)
    }



    return (
        <div>




            <input type="checkbox" id="purchase-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="purchase-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-center text-green-500">Booking For: {name}</h3>

                    <form  onSubmit={handlePurchase} className='grid grid-cols-1 gap-4 mt-4 justify-items-center'>


                        <input type="text" disabled value={format(date, 'PP')} className="input bg-blue-200 input-bordered w-full max-w-xs" />

                        <select  name="product" className="select-bordered w-full bg-blue-200  max-w-xs">
                       
                       {
                         products.map(product => <option value={product}>{product}</option>)
                       }


                           
                        </select>

                        <input type="text" placeholder="Enter Name" className="input bg-blue-200 input-bordered w-full max-w-xs" />
                        <input type="email" placeholder="Enter Email" className="input bg-blue-200 input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Enter phone Number" className="input bg-blue-200 input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Enter Location" className="input bg-blue-200 input-bordered w-full max-w-xs" />
                        <input type="submit" value="purchase now" placeholder="Type here" className=" btn btn-accent input-bordered w-full max-w-xs" />
                    </form>


                </div>
            </div>
        </div >
    );
};

export default PurchaseModal;
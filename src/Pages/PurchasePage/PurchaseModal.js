import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
const PurchaseModal = ({ itemPackage, date, setItemPackage }) => {
    const { _id, name, products } = itemPackage;
    const [user, loading, error] = useAuthState(auth); // require auth
    const formattedDate = format(date, 'PP');

    const handlePurchase = event => {
        event.preventDefault();

        const product = event.target.product.value;
        //   console.log(product ,name, _id ,)


        const booking = {
            itemPackageId: _id,
            itemPacageName: name,
            date: formattedDate,
            product,
            buyer: user.email,
            buyerName: user.displayName,
            phone: event.target.phone.value,
            locattion: event.target.location.value

        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setItemPackage(null)
            })


    }



    return (
        <div>




            <input type="checkbox" id="purchase-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="purchase-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-center text-green-500">Booking For: {name}</h3>

                    <form onSubmit={handlePurchase} className='grid grid-cols-1 gap-4 mt-4 justify-items-center'>


                        <input type="text" disabled value={format(date, 'PP')} className="input bg-blue-200 input-bordered w-full max-w-xs" />
                        <p><small>Product Quanity</small></p>
                        <select name="product" className="select-bordered w-full bg-blue-200  max-w-xs">

                            {
                                products.map((product, index) => <option key={index} value={product}>{product}</option>)
                            }



                        </select>

                        <input type="text" name="name" disabled value={user?.displayName || ''} className="input bg-blue-200 input-bordered w-full max-w-xs" />
                        <input type="email" name="email" disabled value={user?.email || ''} className="input bg-blue-200 input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Enter phone Number" className="input bg-blue-200 input-bordered w-full max-w-xs" />
                        <input type="text" name="location" placeholder="Enter Location" className="input bg-blue-200 input-bordered w-full max-w-xs" />
                        <input type="submit" value="purchase now" placeholder="Type here" className=" btn btn-accent input-bordered w-full max-w-xs" />
                    </form>


                </div>
            </div>
        </div >
    );
};

export default PurchaseModal;
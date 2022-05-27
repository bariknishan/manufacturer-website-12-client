import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../SharedPages/Loading';
import DeleteProductModal from './DeleteProductModal';
import ProductRow from './ProductRow';

const ManageProducts = () => {
const [deleteProduct ,setDeleteProduct]= useState(null)
    const { data: products, isLoading ,refetch } = useQuery('products', () => fetch('https://fierce-journey-20981.herokuapp.com/product', {

        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }

    })
        .then(res => res.json()))


    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h2 className='text-2xl font-bold'>Manage Products:{products.length}</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>BuyerName</th>
                            <th>State</th>
                        </tr>
                    </thead>
                    <tbody>

                       {
                           products.map((product ,index)=> <ProductRow

                           key={product._id}
                           product={product}
                           index={index}
                           refetch={refetch}
                           setDeleteProduct={setDeleteProduct}
                           ></ProductRow>)
                       }

                    </tbody>
                </table>

            </div>
{deleteProduct &&<DeleteProductModal

deleteProduct={deleteProduct}
setDeleteProduct={setDeleteProduct}
refetch={refetch}
></DeleteProductModal>}

        </div>
    );
};

export default ManageProducts;
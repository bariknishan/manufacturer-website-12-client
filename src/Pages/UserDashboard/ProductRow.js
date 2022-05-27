import React from 'react';
import { toast } from 'react-toastify';

const ProductRow = ({ product, index, refetch , setDeleteProduct}) => {

    const { name, buyer ,img, email } = product ;

  


    return (

        <tr>
            <th>{index + 1}</th>
            <th>
            <div className="avatar">
                <div className="w-20 rounded">
                <img src={img} alt='pic' />
                </div>
               </div>
            </th>

            <td>{name}</td>
            <td>{buyer}</td>
            <td>
            <label onClick={() => setDeleteProduct(product)}   htmlFor="delete-product-modal"   className="btn btn-warning">Delete</label>
              

                </td>
        </tr>

    );
};

export default ProductRow;
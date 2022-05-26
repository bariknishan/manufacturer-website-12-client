import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../SharedPages/Loading';

const AddProduct = () => {

    const { register, formState: { errors }, handleSubmit ,reset } = useForm();
    const { data: products, isLoading } = useQuery('products', () => fetch('http://localhost:5000/products').then(res => res.json()))


    const imageStorageApi = 'e2570f581eee75588f413b5b7994752c'



    const onSubmit = async data => {
        console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)

        const url = `https://api.imgbb.com/1/upload?key=${imageStorageApi}`
        fetch(url, {
            method: 'POST',
            body: formData

        })

            .then(res => res.json())
            .then(result => {

                if (result.success) {
                    const img = result.data.url;
                    const product = {
                        name: data.name,
                        buyer: data.buyer,
                        price: data.price,
                        img: img.url

                    }

                    // sending product info to databse

                    fetch('http://localhost:5000/product', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            // console.log(inserted, 'is added')
                            if(inserted.insertedId){
                                toast.success('product added successfully');
                                reset()
                            }
                            else{
                                toast.error('failed to added product try after some time')
                            }
                        })
                }

            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h2 className='text-2xl font-bold'> Add A Product: </h2>
            <form className='' onSubmit={handleSubmit(onSubmit)}>


                {/* -----------------------buyer field -------------- */}
                <div className="form-control  ">
                    <label className="label">
                        <span className="label-text"> Buyer Name</span>
                    </label>
                    <input type="text" placeholder="enter buyer name" className="input input-bordered"

                        {...register("buyer",
                            {
                                required: {
                                    value: true,
                                    message: ' buyer name is required'
                                }
                            })}

                    />

                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                    </label>

                </div>


                {/* ----------------price feild-------------------- */}

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="price" placeholder=" Enter Price" className="input input-bordered"

                        {...register("price",
                            {
                                required: {
                                    value: true,
                                    message: 'price is required'
                                }
                            })}

                    />
                </div>


                <label className="label">
                    {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}

                </label>

                {/* --------------Name  field-------------------  */}

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product Name</span>

                    </label>

                    <select {...register('name')} className="select  input-bordered  w-full max-w-xs">


                        {
                            products.map(product => <option

                                key={product._id}
                                value={product.name}
                            >{product.name}</option>)
                        }


                    </select>


                </div>



                {/* -------------------------------picture fieds------------------------------- */}


                <div className="form-control  ">
                    <label className="label">
                        <span className="label-text"> Product Image</span>
                    </label>
                    <input type="file" className="input input-bordered"

                        {...register("image",
                            {
                                required: {
                                    value: true,
                                    message: ' Image is required'
                                }
                            })}

                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>

                </div>

                {/* ------------button-------------------  */}
                <input className='btn w-full max-w-xs text-white' type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;
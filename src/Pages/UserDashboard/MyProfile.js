import React from 'react';
import { useForm } from 'react-hook-form';

const MyProfile = () => {


    const { register, formState: { errors }, handleSubmit } = useForm();


    const onSubmit = async data => {
        console.log(data);
       
    }

    return (
        <div  className='bg-accent-500'>
            <h2 className='text-xl font-bold'> Update  Profile</h2>

            <form onSubmit={handleSubmit(onSubmit)}>


{/* -----------------------name field -------------- */}
            <div className="form-control">
                    <label className="label">
                        <span className="label-text"> Give Your Name</span>
                    </label>
                    <input type="text" placeholder="enter name" className="input input-bordered"

                        {...register("name",
                            {
                                required: {
                                    value: true,
                                    message: 'name is required'
                                }
                            })}

                    />
                </div>
                <label className="label">
                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    
                </label>


                    {/* city  */}

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text"> city Name</span>
                    </label>
                    <input type="text" placeholder="enter City name" className="input input-bordered"

                        {...register("city",
                            {
                                required: {
                                    value: true,
                                    message: 'city is required'
                                }
                            })}

                    />
                </div>
                <label className="label">
                    {errors.city?.type === 'required' && <span className="label-text-alt text-red-500">{errors.city.message}</span>}
                    
                </label>


                     {/* //// education */}



                     <div className="form-control">
                    <label className="label">
                        <span className="label-text">Education</span>
                    </label>
                    <input type="text" placeholder="enter Education " className="input input-bordered"

                        {...register("eduction",
                            {
                                required: {
                                    value: true,
                                    message: 'education is required'
                                }
                            })}

                    />
                </div>
                <label className="label">
                    {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.education.message}</span>}
                    
                </label>



                             {/* linkdin  */}



 <div className="form-control">
                    <label className="label">
                        <span className="label-text">LinkedIn</span>
                    </label>
                    <input type="url" placeholder="enter Linkedin profile link " className="input input-bordered"

                        {...register("linkedin",
                            {
                                required: {
                                    value: true,
                                    message: 'linked is required is required'
                                }
                            })}

                    />
                </div>
                <label className="label">
                    {errors.linkedin?.type === 'required' && <span className="label-text-alt text-red-500">{errors.linkedin.message}</span>}
                    
                </label>



           {/* phone */}

           <div className="form-control">
                    <label className="label">
                        <span className="label-text">phone</span>
                    </label>
                    <input type="text" placeholder="enter Phone number " className="input input-bordered"

                        {...register("phone",
                            {
                                required: {
                                    value: true,
                                    message: 'phone is required'
                                }
                            })}

                    />
                </div>
                <label className="label">
                    {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                    
                </label>




                {/* ----------------email feild-------------------- */}

                <div className="form-control">
                    <label className="label">
                        <span className="label-text"> Give Your Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered"

                        {...register("email",
                            {
                                required: {
                                    value: true,
                                    message: 'email is required'
                                }
                            })}

                    />
                </div>


                <label className="label">
                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                   
                </label>








                                       {/* buttton  */}
           
                <input className='btn w-full max-w-xs text-white' type="submit" value="submit" />
            </form>


        </div>
    );
};

export default MyProfile;
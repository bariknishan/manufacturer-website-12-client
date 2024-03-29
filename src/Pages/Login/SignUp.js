import React from 'react';
import {  useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'
import { useForm } from "react-hook-form";
import Loading from '../SharedPages/Loading';
import useToken from '../../Hooks/UseToken';




const SignUp = () => {


    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    // react hook forms
    const { register, formState: { errors }, handleSubmit } = useForm();

    //emil password craete user
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      // update ptofile
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

      // from hook token issue
      const[token]=useToken(user || gUser)

       const navigate= useNavigate()


    let signInError ;

    if ( loading || gLoading || updating) {
        return <Loading></Loading>
    }

    if( error || gError || updateError){
        signInError=<p className='text-red-500'> <small>{error?.message || gError?.message || updateError?.message   }  </small></p>
    }

    // naviagate to purcahse
    if (token) {
       navigate('/purchase')
    }


    // form submit 
    const onSubmit = async data => {
        console.log(data);
      await createUserWithEmailAndPassword (data.email, data.password)
        await updateProfile({ displayName: data.name })
        console.log('update done')
        navigate('/purchase')

    }















    return (
        <div className="hero min-h-screen bg-base-200 ">

        <div className="hero-content flex-col lg:flex-row ">

            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-indigo-300 p-12">
                <h2 className='text-xl font-bold' >Please Sign Up In here</h2>
                <div className="card-body">

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
                                        },

                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Give valid email '
                                        }
                                    })}

                            />
                        </div>


                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>

                        {/* --------------password field-------------------  */}

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Give Your password</span>

                            </label>
                            <input type="password" placeholder="enter password" className="input input-bordered text-black w-full max-w-xs"
                                {...register("password", {

                                    required: {
                                        value: true,
                                        message: 'password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'provide At least 6 characters long'
                                    }
                                })}
                            />

                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                         {signInError}
                        <input className='btn w-full max-w-xs text-white' type="submit" value="LogIn" />
                    </form>


                    <p>Have Account? </p>
                    <p> <Link to="/login" className='text-green-600 font-bold' >Log in Here</Link></p>
                    <div className="divider">OR</div>

                    <div className="form-control mt-4">

                        <button onClick={() => signInWithGoogle()} className="btn btn-secondary">Continue With Google</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
    );
};

export default SignUp;
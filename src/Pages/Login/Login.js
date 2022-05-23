
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init'
import { useForm } from "react-hook-form";

const Login = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    // react hook forms
    const { register, formState: { errors }, handleSubmit } = useForm();


    if (user) {
        console.log(user)
    }







    return (
        <div className="hero min-h-screen bg-base-200 ">

            <div className="hero-content flex-col lg:flex-row ">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-accent-300 p-12">
                    <h2 className='text-xl font-bold' >Please Log In here</h2>
                    <div className="card-body">
                        <form onSubmit={handleSubmit()}>

                       
                     
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" 
                            
                            {...register("email",
                            {
                               pattern: {
                                   value:  /[A-Za-z]{3}/,
                                   message: 'error message'
                               }
                                })}
                            
                            />
                        </div>
                        

                       {/* password frild  */}

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered"
                         
                            
                            />

                        </div>

                            <input {...register("lastName", { required: true })} />
                            {errors.lastName && "Last name is required"}

                        
                        </form>

                        <div className="form-control mt-4">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>New Here? </p>
                        <p> <Link to="/signup" className='text-GREEN-400 font-bold' >Create New Account</Link></p>
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

export default Login;
// import React from 'react';
// import auth from '../firebase.init';
// import { useSignInWithGoogle } from 'react-firebase-hooks/auth';


// const SignIn = () => {
   
//     const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);   



//   // google sign in method 


//     return (
//         <div className="hero min-h-screen bg-base-200 ">

//         <div className="hero-content flex-col lg:flex-row ">
         
//           <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-accent-300 p-12">
//               <h2 className='text-xl font-bold' >Please Log In here</h2>
//             <div className="card-body">
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Email</span>
//                 </label>
//                 <input type="text" placeholder="email" className="input input-bordered" />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Password</span>
//                 </label>
//                 <input type="text" placeholder="password" className="input input-bordered" />
             
//               </div>
//               <div className="form-control mt-4">
//                 <button className="btn btn-primary">Login</button>
//               </div>

//               <div className="divider">OR</div>
//               <div className="form-control mt-4">

//                 <button 
                
//                 className="btn btn-secondary">Continue With Google</button>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>

//     );
// };

// export default SignIn;
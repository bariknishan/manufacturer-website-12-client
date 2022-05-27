import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='mt-4'>
                <h2 className='text-4xl text-blue-400 text-center font-bold'>Some Questions and Answer:</h2>

                <div className='mt-8 p-4 m-2'>
                    <h2 className='text-2xl font-bold'>Question 1:How will you improve the performance of a React Application?</h2>
                    <p>* keeping component state local where neccessary.</p>
                    <p>* Memorizing React components to prevent unneccessary re-renders.</p>
                    <p>*Code splitting in react using dynnamic import.</p>
                    <p>* Using destructuring of component.</p>
                    <p>* Using react Hooj to prevent extra code.</p>
                    <p>* Image hosting or Loading images on react .</p>
                </div>

                <div className='mt-8 p-4 m-2'>
                    <h2 className='text-2xl font-bold'>Question 2:What are the different ways to manage a state in a React application?</h2>
                    <p>* Local State management</p>
                    <p>* Global state management</p>
                    <p>* server state management</p>
                    <p>* URL State management</p>

                </div>
                <div className='mt-8 p-4 m-2'>
                    <h2 className='text-2xl font-bold'>Question 3:How does prototypical inheritance work?</h2>
                    <p> Javascript objects are dynamic bags of properties Of</p>
                    <p>javascrtipt objects have link to a prototype object. </p>
                    <p> When trying to access a property of a object, the property will not  </p>
                    <p> sought on the object  but on the prototype of the object the prototype of  </p>
                    <p>  the prototype property with a matching name is found or the </p>
                    <p>  end of the object prototype chain is reached .</p>

                </div>

                <div className='mt-8 p-4 m-2'>
                    <h2 className='text-2xl font-bold'>Question 4:Why you do not set the state directly in React</h2>
                    <p> If we set it directrly  calling  setState() afterward may just replace</p>
                    <p>the update we made that time. </p>
                    <p>  when we directrly update the state it does not change this .state immeediately,   </p>
                    <p>instead it creates  a pending state transition and accessing it after calling   </p>
                    <p> the method  will only return the present value.  </p>
                    <p>  we may lose control ot the state . </p>

                </div>

                <div className='mt-8 p-4 m-2'>
                    <h2 className='text-2xl font-bold'>Question 5: What is unit test? why should we write unit tests?</h2>
                    <p> Unit Testing ensures tha all codes meets quality standars before its deployed. </p>
                    <p> This ensures a reliable enginnering enviroment where quality is paramout </p>
                    <p>  over course ot the product developement life cycle unit testing saves time and money and    </p>
                    <p>helpes develpers write better code and more easy process user friendly etc  </p>


                </div>

            </div>
        </div>
    );
};

export default Blogs;
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='mt-4 py-12 bg-blue-300 '>


<footer className="footer p-10  text-dark-500 ">
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
  <div>
    <span className="footer-title">Contact</span> 
    <a className="link link-hover">Dhaka 1207</a> 
    <a className="link link-hover">Dhanmondi 9/A</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer> 

<p className='text-center font-bold text-xl'>COPYRIGHT &copy; RSESRVED 2022 </p>
          
        </div>
    );
};

export default Footer;
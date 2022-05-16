import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <footer className='my-5'>
            <div className="row mx-auto container">
                <div className="col-lg-5 col-md-8 col-sm-12">
                    <img src="https://demo2wpopal.b-cdn.net/ecolive/wp-content/uploads/2021/10/logo.svg" alt="footer-logo" width="100px" className='my-3 d-inline'/>
                    <p className="text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur cumque nulla nesciunt quasi nostrum. Harum.</p>
                    <p className="text-left"><i className="far fa-envelope"></i> info@Gloryshop.shop</p>
                    <p className="text-left"><i className="far fa-phone-alt"></i> +14148929343</p>
                    <p className="text-left"><i className="far fa-home-lg"></i> 61973 State 415 Rte NY, USA</p>
                    <p className="text-left">
                    <i className="fab fa-facebook-f mx-2"></i>
                    <i className="fab fa-instagram mx-2"></i>
                    <i className="fab fa-twitter mx-2"></i>
                    <i className="fab fa-linkedin-in mx-2"></i>
                    </p>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-12">
                    <h4 className="text-left py-2">About</h4>
                    <NavLink to="/" className="text-left d-block text-decoration-none text-black">About Us</NavLink>
                    <NavLink to="/" className="text-left d-block text-decoration-none text-black">Contact Us</NavLink>
                    <NavLink to="/" className="text-left d-block text-decoration-none text-black">Help Center</NavLink>
                    <NavLink to="/" className="text-left d-block text-decoration-none text-black">FAQ</NavLink>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-12">
                <h4 className="text-left py-2">Help & Guide</h4>
                    <NavLink to="/" className="text-left d-block text-decoration-none text-black">Term Of Use</NavLink>
                    <NavLink to="/" className="text-left d-block text-decoration-none text-black">Privacy Policy</NavLink>
                    <NavLink to="/" className="text-left d-block text-decoration-none text-black">Shipping & Delivery</NavLink>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <h4 className="text-left pt-2">Newsletter</h4>
                    <p className="text-left pt-2">Don't miss out <span className="fw-bold">thusands of great deals</span> & promotions.</p>
                    <input type="email" placeholder="Email Address...." className="form-control text-left" />
                    <input type="submit" value="Subscribe" className="btn btn-success mt-3" style={{display: 'inherit'}}/>
                </div>
            </div>

            <div className='footer-bottom-credit container mt-5 d-flex justify-content-between align-items-center'>
                <p className='m-0'>@2021 GloryShop. All rights reserved.</p>
                <img src="https://demo.casethemes.net/organio/wp-content/uploads/2021/07/f7-payment.png" alt="payment-method-img" />
            </div>
        </footer>
    );
};

export default Footer;
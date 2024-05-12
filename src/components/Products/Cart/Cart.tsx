import React, { useEffect, useState } from 'react'
import "./Cart.css"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import cartSlice, { removeFromCart } from '../../../state/cartSlice';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Cart = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cart)
    const totalPrice = useSelector((state) => state.cart)
    return (
        <div className='cart'>
            <div className="table">
                <p className='data' >Product</p>
                <p className='data'>Price</p>
                <p className='data'>Quantity</p>
                <p className='data'>Total</p>
                <p className='data'>Action</p>
            </div>
            {
                cartItems.map((cartItem) =>
                    <div className="table">
                        <p className='data' style={{ width: "15%" }}> <img className='img' src={cartItem.image} alt="" /> {cartItem.title}</p>
                        <p className='data' style={{ width: "15%" }}>${cartItem.price}.00</p>
                        <p className='data' style={{ width: "15%" }}>{cartItem.quantity}</p>
                        <p className='data' style={{ width: "15%" }}>${cartItem.total}.00</p>
                        <button className='btn' style={{width: "15%" }} onClick={() => dispatch(removeFromCart(cartItem.id))} style={{ color: "white" }}><FontAwesomeIcon icon={faTrash} /></button>
                    </div>)
            }
            <button style={{
                backgroundColor: "white",
                padding: "10px 30px",
                border: "1px solid gray"
            }} onClick={() => {
                navigate("/")
            }}>Return To Shop</button>
            <div className="recept">
                <div className="coupon">
                    <input className='input form-control' type="text" placeholder="Coupon Code" style={{
                        width: "70%",
                    }} />
                    <button>Apply Coupon</button>
                </div>
                <div className="total">
                    <h2 style={{ marginBottom: "30px" }}>Cart Total</h2>
                    <div className="checkout_data">
                        <h5>Subtotal: </h5>
                        <span>${totalPrice.total}.00</span>
                    </div ><hr />
                    <div className="checkout_data">
                        <h5>Shipping: </h5>
                        <span>Free</span>
                    </div><hr />
                    <div className="checkout_data">
                        <h5>Total: </h5>
                        <span>${totalPrice.total}.00</span>
                    </div>
                    <button className='button' onClick={() => {
                        navigate(`/checkout`, {
                            state: {
                                id: location.state.id,
                                image: location.state.image,
                                title: location.state.title,
                                price: location.state.price,
                                total: location.state.total,
                            }
                        })
                    }}>Process to checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
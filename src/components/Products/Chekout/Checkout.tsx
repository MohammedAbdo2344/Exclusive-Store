import React from 'react'
import "./checkout.css"
import { useSelector } from 'react-redux';
const Checkout = () => {
    const cartItems = useSelector((state) => state.cart.cart)
    const totalPrice = useSelector((state) => state.cart)
    return (
        <div className='checkout'>
            <div className='left'>
                <h1>Billing Details</h1>
                <form action='/'>
                    <div className="form-group mt-4">
                        <label >Full Name <span style={{color:"red"}}>*</span></label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder='First name'
                            required
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Company Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder='Company name'
                        />
                    </div>
                    <div className="form-group mt-4">
                        <label >Street Address <span style={{color:"red"}}>*</span></label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder='House number and street address'
                            required
                        />
                    </div>
                    <div className="form-group mt-4">
                        <label >Apartment, floor, etc. (optional)</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder='Appartment or suite'
                        />
                    </div>
                    <div className="form-group mt-4">
                        <label >Town/City <span style={{color:"red"}}>*</span></label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder='Type your town/city here'
                            required
                        />
                    </div>
                    <div className="form-group mt-4">
                        <label >Phone Number <span style={{color:"red"}}>*</span></label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder='Phone Number'
                            required
                        />
                    </div>
                    <div className="form-check mt-3">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" required />
                        <label className="form-check-label" htmlFor="exampleCheck1">
                            Save this information for faster check-out next time
                        </label>
                    </div>
                    <button className='button' type="submit">Place Order</button>
                </form>
            </div>
            <div className="right">
                <div className="items">
                    {cartItems.map((cartItem)=><div className="item">
                        <div className='img_p'>
                            <img className='img' src={cartItem.image} alt={cartItem.title} />
                            <p>{cartItem.title}(x{cartItem.quantity})</p>
                        </div>
                        <div className="price">
                            <p>${cartItem.total}</p>
                        </div>
                    </div>)}
                </div>
                <div className="total_price">
                    <div className="subtotals">
                        <div className='subtotal'>
                            <p>Subtotal :</p>
                            <span>${totalPrice.total}</span>
                        </div ><hr />
                        <div className='subtotal'>
                            <p>Shipping :</p>
                            <span>Free</span>
                        </div ><hr />
                        <div className='subtotal'>
                            <p>Total :</p>
                            <span>${totalPrice.total}</span>
                        </div >
                    </div>
                </div>
                <div className="payment_method mt-3">
                    <div className="form-check mt-3">
                        <input type="radio" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">
                            Bank
                        </label>
                    </div>
                    <div className="form-check mt-3">
                        <input type="radio" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">
                            Cash on delivery
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
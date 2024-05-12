import React, { useState } from 'react'
import "./Details.css"
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../state/cartSlice';

const Details = () => {
    const [counter,setCounter]=useState(1);
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const carItems=useSelector((state)=> state.cart.cart)
    const increment = () => {
        setCounter(c => c + 1);
    }
    const decrement = () => {
        setCounter(c => c - 1);
    }
    const location = useLocation();
    return (
        <div className='product_detail'>
            <div className="image_l">
                <img className='side_imgs' src={location.state.image[1]} alt={location.state.title} />
                <img className='side_imgs' src={location.state.image[2]} alt={location.state.title} />
            </div>
            <div className="image_r">
                <img className='side_imgs' src={location.state.image[0]} alt="" />
            </div>
            <div className="data">
                <div className="title_price">
                    <h3>{location.state.title}</h3>
                    <p style={{
                        fontSize: "18px",
                    }}><span>Price:</span>&nbsp;${location.state.price}.00</p>
                    <p>{location.state.description}</p>
                </div>
                <hr />
                <div className="buy">
                    <div className="counter">
                        <button onClick={()=>decrement()} className="minus" disabled={counter === 1 ? true : false} >
                            <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <div className="number">
                            {counter}
                        </div>
                        <button onClick={()=>increment()} className="plus">
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </div>
                    <button className='button' onClick={()=>{
                        navigate(`/cart`,{state:{
                            id:location.state.id,
                            image:location.state.image,
                            title:location.state.title,
                            price:location.state.price,
                            quantity:counter,
                            total:location.state.price*counter
                        }}),
                        dispatch(addToCart({
                            id: location.state.id, 
                            image:location.state.image,
                            title:location.state.title,
                            price:location.state.price,
                            quantity: counter,
                            total:location.state.price * counter
                        }))
                    }}>Buy Now</button>
                    <button className='button' onClick={()=>{
                        dispatch(addToCart({
                            id: location.state.id, 
                            image:location.state.image,
                            title:location.state.title,
                            price:location.state.price,
                            quantity: counter,
                            total:location.state.price * counter
                        }))
                    }}><FontAwesomeIcon icon={faCartPlus} /></button>
                    {/* <button className='icon_button'><FontAwesomeIcon icon={faHeart} /></button> */}
                    
                </div>
                {/* <p>{carItems.length}</p> */}
            </div>
        </div>
    )
}

export default Details
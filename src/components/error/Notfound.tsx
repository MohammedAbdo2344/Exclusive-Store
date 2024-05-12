import React from 'react'
import { useNavigate } from 'react-router'
import "./notfound.css"
const Notfound = () => {
    const navigate=useNavigate();
    return (
        <div className='notfound'>
            <h1> 404 Not Found </h1>
            <p>Your visited page not found. You may go home page.</p>
            <button className='button' onClick={()=>navigate("/")}>Back to Home</button>
        </div>
    )
}

export default Notfound
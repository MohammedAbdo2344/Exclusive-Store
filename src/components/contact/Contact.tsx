import React from 'react'
import "./contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact_left'>
                <div className="top">
                    <FontAwesomeIcon className='top_icon' icon={faPhone} />
                    <p style={{ margin: "5px" }}>+8801611112222</p>
                </div>
                <div className="mid">
                    <p>We are available 24/7, 7 days a week.</p>
                </div><hr />
                <div className="top">
                    <FontAwesomeIcon className='top_icon' icon={faEnvelope} />
                    <p style={{ margin: "5px" }}>support@exclusive.com</p>
                </div>
                <div className="mid">
                    <p>Fill out our form and we will contact you within 24 hours.</p>
                </div>
            </div>
            <div className="contact_right">
                <form className='form' action="" method="get" style={{
                    width:"100%",
                    padding:"30px 40px"
                }}>
                    <div className="form_top" style={{
                        display: "flex", 
                        flexDirection: "row", 
                        justifyContent: "space-between"
                    }}>
                        <input className='form-group' type="text" name="" id="" placeholder='Your Name *' required style={{ borderRadius: "5px 5px 5px 5px", border: "none", padding: "15px", backgroundColor: "whitesmoke" ,width:"30%"}} />
                        <input className='form-group' type="email" name="" id="" placeholder='Your E-mail *' required style={{ borderRadius: "5px 5px 5px 5px", border: "none", padding: "15px", backgroundColor: "whitesmoke" ,width:"30%"}} />
                        <input className='form-group' type="number" name="" id="" placeholder='Your Phone *' required style={{ borderRadius: "5px 5px 5px 5px", border: "none", padding: "15px", backgroundColor: "whitesmoke" ,width:"30%"}} />
                    </div>
                    <div className="form_down">
                        <textarea name="" id="" cols="30" rows="5" placeholder='Your Massage' style={{
                            marginTop: "25px",
                            borderRadius: "5px 5px 5px 5px", 
                            border: "none", 
                            padding: "15px", 
                            backgroundColor: "whitesmoke",
                            width:"100%"
                        }}></textarea>
                    </div>
                    <div style={{
                        display:"flex",
                        justifyContent:"flex-end",
                        marginTop:"15px"
                    }}>
                        <button type="submit" style={{
                            padding:"10px 30px",
                            backgroundColor:"#d73333",
                            color:"white",
                            border:"none",
                            borderRadius: "5px 5px  5px 5px",
                        }}>Send Massege</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Contact
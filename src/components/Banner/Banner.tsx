import React, { useEffect, useState } from 'react'
import "./banner.css"
import axios from 'axios'
const Banner = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        const getData = async () => {
            const data = await axios.get(`https://api.escuelajs.co/api/v1/categories/${Math.floor(Math.random() * 5) + 1}`);
            console.log(data.data)
            setCategories(data.data);
        }
        getData();
    }, [])
    return (
        <>
            <div className="banner" style={
                {
                    backgroundImage: `url(${categories.image})`,
                    animation: "fade 5s infinite",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    display:"flex",
                    justifyContent: "flex-end",
                }
            }>
                <div style={{
                    display:"flex",
                    alignItems:"center",
                    flexDirection:"column",
                    marginBottom:"100px"
                }}>
                    <h1 className='title'>{categories.name}</h1>
                    <button className='btn btn-light' disabled>Shop Now 👇</button>
                </div>
            </div>


        </>

    )
}

export default Banner
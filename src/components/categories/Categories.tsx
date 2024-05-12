import React, { useEffect, useState } from 'react'
import TitleOfComponent from '../title-of-component/titleOfComponent'
import "./categories.css"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons'
import axios from 'axios'
const Categories = () => {
    const [categories, setCategories] = useState([])
    const navigate=useNavigate()
    useEffect(() => {
        const getData = async () => {
            const data = await axios.get("https://api.escuelajs.co/api/v1/categories?limit=5");
            setCategories(data.data);
        }
        getData();
    }, [])
    return (
        <div>
            <TitleOfComponent header="Our Categories" subtitle="Categories" />
            <div className="categories">
                {
                    categories.map(category =>
                        <button className="category" onClick={()=>{
                            navigate(`/category/${category.id}/products`,{state:{
                                id:category.id,
                                
                            }})
                        }}>
                            <FontAwesomeIcon className='icon' icon={faProductHunt} />
                            <p className='title'>{category.name}</p>
                        </button>
                    )
                }
            </div>
        </div>
    )
}

export default Categories
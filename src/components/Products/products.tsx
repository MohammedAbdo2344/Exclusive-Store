import React, { useEffect, useState } from 'react'
import "./products.css"
import axios from 'axios'
import TitleOfComponent from '../title-of-component/titleOfComponent';
import { useNavigate } from 'react-router-dom';

const Products = (props) => {
    const [products, getProducts] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const getData = async () => {
            const data = await axios.get(`https://api.escuelajs.co/api/v1/${props.api}`);
            getProducts(data.data);
        }
        getData();
    }, [])
    return (
        <div className='page'>
            <TitleOfComponent header="Our Products" subtitle="Explore Our Products" />
            <div className='products'>
                {
                    products.map((product) =>
                        <button className="product" onClick={() => {
                            navigate(`/product/${product.id}/detail`, {
                                state: { 
                                    id: product.id,
                                    title: product.title,
                                    image: product.images,
                                    price: product.price,
                                    description:product.description
                                } })
                        }}>
                            <img className='product-img' src={product.images[0]} alt={product.title} />
                            <h6 className='product-title'>{product.title}</h6>
                            <p>{product.price}$</p>
                        </button>
                    )
                }
            </div>
        </div>
    )
}

export default Products
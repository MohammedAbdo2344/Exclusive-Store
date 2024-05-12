import React from 'react'
import Products from '../../Products/products'
import "./ProductCategory.css"
import { useLocation } from 'react-router'
const ProductCategory = () => {
    const location=useLocation()
    return (
        <div className='ProductCategory'>
            <Products api={`categories/${location.state.id}/products`}/>
        </div>
    )
}

export default ProductCategory
import React from 'react'
import "./TitleOfComponent.css"
const TitleOfComponent = (props) => {
    return (
        <div>
            <div className='title'>
                <div className='empty-div'></div>
                <h6 className='header'>{props.header}</h6>
            </div>
            <div className="subtitle">
                <h3>{props.subtitle}</h3>
            </div>
        </div>
    )
}

export default TitleOfComponent
import React from 'react'
import "./services.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'
const Services = () => {
    const datas = useSelector(state => [state.data[1]])
    return (
        <div className='sallers'>
            {
                datas[0].map((data) =>
                    <div className="saller">
                        <FontAwesomeIcon className='icon' icon={data.icon} />
                        <h4>{data.title}</h4>
                        <p>{data.sub_title}</p>
                    </div>
                )
            }
        </div>
    )
}

export default Services

import React from 'react'
import "./sallers.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useSelector } from 'react-redux'
const Sallers = () => {
    const datas = useSelector(state => [state.data[0]])
    // const dispatch = useDispatch();
    return (
        <div className='sallers'>
            {
                datas[0].map((data) =>
                    <div className="saller">
                        <FontAwesomeIcon className='icon' icon={data.icon} />
                        <h1>{data.title}</h1>
                        <p>{data.sub_title}</p>
                    </div>
                )
            }
        </div>
    )
}

export default Sallers
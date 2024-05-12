import React from 'react'
import "./about.css"
import Our_story from './Our-Story/Our-story'
import Sallers from './sallers/Sallers'
import Founders from './founders/Founders'
import Services from './services/services'
const About = () => {
    return (
        <div className='about'>
            <Our_story/>
            <hr/>
            <Sallers/>
            <hr />
            <Founders/>
            <hr />
            <Services/>
        </div>
    )
}

export default About
import React from 'react'
import storyImg from "../../../assets/Screenshot 2024-03-21 031910.png"
import "./our_story.css"
const Our_story = () => {
    return (
        <div className='our-story'>
            <div className="story">
                <h1>Our Story</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, neque corporis iste assumenda, aliquam earum dolores pariatur quis, enim aut voluptas! Voluptates nulla necessitatibus expedita rerum dolore quas ad aperiam?</p>
            </div>
            <div className="story_img">
                <img src={storyImg} alt="" />
            </div>
        </div>
    )
}

export default Our_story
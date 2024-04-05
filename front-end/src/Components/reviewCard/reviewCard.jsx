import './reviewCard.css'

import ReactStars from "react-rating-stars-component";
import React from "react";



const ReviewCard=({username,reviewText,rating})=>{

return (
    <div className='review-div flex column shadow '>
        <div className='flex between'>
            <h1>
                {username}
            </h1>
            <div className='stars flex between'>
            <p>{rating}</p>
            <i className="fa fa-star"></i>
            </div>
        </div >
        <p className='txt-gray'>{reviewText}</p>
    </div>
)

}
export default ReviewCard
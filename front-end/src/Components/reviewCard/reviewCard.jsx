import './reviewCard.css'

import ReactStars from "react-rating-stars-component";
import React from "react";



const ReviewCard=({username,reviewText,ratingChanged})=>{

return (
    <div className='review-div flex column shadow '>
        <div className='flex between'>
            <h1>
                {username}
            </h1>
            <div className='stars flex between'>
            
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#E18C0D"
                />
            </div>
        </div >
        <p className='txt-gray'>{reviewText}</p>
    </div>
)

}
export default ReviewCard
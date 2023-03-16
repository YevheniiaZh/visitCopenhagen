import { reviewsData } from "./ReviewsData";
import { useState } from "react";

function GalleryReview(){

    const [userReview, setUserReview] = useState(0);
    const {id, name, image, review, score} = reviewsData[userReview];

    const previousReview = () =>{
        setUserReview((userReview) =>{
            userReview--;
            if (userReview < 0){
                userReview = reviewsData.length -1;
            }
            return userReview;
        })
    }

const nextReview =() =>{
    setUserReview(
        (userReview =>{
            userReview++;
            if (userReview > reviewsData.length-1){
                userReview = 0;
            }
            return userReview;
        })
    )
}

    return(
        <div >
            <div className="container">
                <div className="review-card">
                <img src={image} alt="photo" width="500px" height="300px"/>
                <h3>{name}</h3>
                <p>{review}</p>
                <p> Score: {score}</p>
                </div>
            </div>
            <div className="container">
                <button className="review_btn" onClick={previousReview}>Previous review</button>
                <button className="review_btn" onClick={nextReview}>Next review</button>
            </div>
            
            
        </div>
    )
}

export default GalleryReview;
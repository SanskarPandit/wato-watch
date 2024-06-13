import React from 'react'
import { Star as StarEmpty, StarFill, StarHalf } from 'react-bootstrap-icons'

const FiveStarRating = ({ rating }) => {
    //Creating an empty array to store the stars aka ratings
    const starList = []
    //Using math.floor to make the rating round off  that is if rating is 4.9 it will be 4 
    const starFillCount = Math.floor(rating)
    // to check if there is any half ratings that is 0.6 or 0.7
    const hasHalfStar = (rating - parseInt(rating)) >= 0.5
    const emptyStarCount = 5 - starFillCount - (hasHalfStar ? 1 : 0)
    for (let i = 1; i <= starFillCount; i++) {
        starList.push(<StarFill key={'star-fill' + i} />)
    }
    if (hasHalfStar) {
        starList.push(<StarHalf key={"star-half"} />)
    }
    for (let i = 1; i <= emptyStarCount; i++) {
        starList.push(<StarEmpty key={"star-empty" + i} />)
    }
    return (
        <div>
            {starList}
        </div>
    )
}

export default FiveStarRating
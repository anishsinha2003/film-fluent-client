import '../style/Reviews.css';

const ReviewCard = ({ rating, name_date, content}) => {

  return (
    <div className="review-card">
        {rating === "None"
          ?  <p className='review-card-rating'> No Rating Given</p>
          :  <p className='review-card-rating'> {rating} / 10</p>
        }
        <p className='review-card-name-date'> {name_date}</p>
        <p className='review-card-content'> {content}</p>
    </div>
  )
}

export default ReviewCard;
import { useState } from 'react';
import '../style/Reviews.css';
import ReviewCard from './ReviewCard.js';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import notFound from "../images/not-found.png"



const Reviews = ({ updatePage, listOfReviews, titleData }) => {

  const [selectedSortBy, setSelectedSortBy] = useState("");
  const [listOfReviewsSorted, setListOfReviewsSorted] = useState(listOfReviews);

  const handleSelectChange = (event) => {
    const newValue = event.target.value;
    setSelectedSortBy(newValue);
    if (newValue === "Highest Rating") {
      const sortByContentRating = (a, b) => a.rating - b.rating;
      const sortedReviews = listOfReviews.slice().sort(sortByContentRating);
      setListOfReviewsSorted(sortedReviews.slice().reverse());

    } else if (newValue === "Lowest Rating") {
      const sortByContentRating = (a, b) => b.rating - a.rating;
      const sortedReviews = listOfReviews.slice().sort(sortByContentRating);
      setListOfReviewsSorted(sortedReviews.slice().reverse());

    } else if (newValue === "Big Content") {
      const sortByContentLength = (a, b) => a.content.length - b.content.length;
      const sortedReviews = listOfReviews.slice().sort(sortByContentLength);
      setListOfReviewsSorted(sortedReviews.slice().reverse());

    } else if (newValue === "Small Content") {
      const sortByContentLength = (a, b) => a.content.length - b.content.length;
      const sortedReviews = listOfReviews.slice().sort(sortByContentLength);
      setListOfReviewsSorted(sortedReviews);

    }
  };

  return (
    <div className='reviews-body'>
      <ArrowBackIcon sx={{width:"90px", height:"90px"}} onClick={() => updatePage("titles")} className="reviews-back" />
      {listOfReviews.length === 0
        ?
        <>
          <br/>
          <div className='text-1-results-for'>No reviews for...</div>
          <br/><br/>
          <div className='text-2-results'>"{titleData}"</div>
          <br/><br/><br/><br/><br/><br/>
          <img className="not-found-reviews" alt="not-found" src={notFound}/>
        </>
        :
        <>
          <br/>
          <div className='text-1-reviews-for'>Showing reviews for...</div>
          <br/><br/>
          <div className='text-2-review'>"{titleData}"</div>
          <br/><br/><br/><br/><br/>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box width="200px" minHeight="10px">
              <FormControl fullWidth>
              <InputLabel id="sort-by-select" sx={{color: "black"}}>Sort By</InputLabel>
                <Select
                  labelId="sort-by-select"
                  id="sort-by-select-id"
                  value={selectedSortBy}
                  label="Sort By"
                  onChange={handleSelectChange}
                  sx={{
                    color: "black",
                    border: "white",
                    backgroundColor: "#f5e2e0",
                    borderRadius:"5px",
                    boxShadow: "2px 1px 10px white",
                  }}
                >
                  <MenuItem value="Highest Rating">Rating - Highest to Lowest</MenuItem>
                  <MenuItem value="Lowest Rating">Rating - Lowest to Highest</MenuItem>
                  <MenuItem value="Big Content">Content Size - Largest to Smallest</MenuItem>
                  <MenuItem value="Small Content">Content Size - Smallest to Largest</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <br/><br/><br/>
          <div className="review-card-container">
            {listOfReviewsSorted.map((reviews, index) => (
              <>
              <ReviewCard
                rating={reviews.rating}
                name_date={reviews.name_date}
                content={reviews.content}
              />
              <br/><br/>
              </>
            ))}
          </div>
        </>
      }
    </div>
  )

}
export default Reviews;
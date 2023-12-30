import '../style/Titles.css';
import defaultMovieLogo from '../images/deafult_movie.png';

const TitleCard = ({updatePage, setListOfReviews, setTitleData, name, tags, actors, imageUrl, linkUrl}) => {
  const displayReviews = async (url) => {
    setTitleData(name);
    try {
      updatePage("loading")
      // const response = await fetch('http://127.0.0.1:5000/get/reviews', {
      const response = await fetch('https://film-fluent-5e2640934ccd.herokuapp.com//reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(url),
      });

      const responseData = await response.json();
      setListOfReviews(responseData.reviews);
      updatePage("reviews")

    } catch (error) {
      console.error('Error sending data to server:', error);
    }
  }

  return (
    <div className="title-card" onClick={() => displayReviews(linkUrl)}>
      <div className='title-card-inner'>
        <div className="title-card-front">
          {imageUrl !== "none"
            ? <img className="movie" alt="title" src={imageUrl}/>
            :  <img className="movie" alt="title" src={defaultMovieLogo}/>

          }
          <div className='title-card-text'>
            <p className='title-card-name'> {name}</p>
            <p className='title-card-tag'> {tags}</p>
            <br/>
            {actors.map((actorName, index) => (
              <p className='title-card-actor'>{actorName}</p>
            ))}
          </div>
        </div>
        <div class="title-card-back">
          <div className="title-card-back-text">Click Here to See Reviews!!!</div>
        </div>
      </div>
    </div>
  )
}

export default TitleCard;
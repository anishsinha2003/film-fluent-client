import '../style/Titles.css';
import notFound from "../images/not-found.png"
import TitleCard from './TitleCard.js';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Titles = ({ updatePage, setListOfReviews, listOfTitles, queryData, setTitleData }) => {
  return (
    <div className='titles-body'>
      <ArrowBackIcon sx={{width:"90px", height:"90px"}} onClick={() => updatePage("query")} className="titles-back" />
      <br/>
      {listOfTitles.length === 0
        ? <>
            <div className='text-1-results-for'>No results for...</div>
            <br/><br/>
            <div className='text-2-results'>"{queryData}"</div>
            <br/><br/><br/><br/><br/><br/>
            <img className="not-found-titles" alt="not-found" src={notFound}/>
          </>
        :
        <>
          <div className='text-1-results-for'>Showing results for...</div>
          <br/><br/>
          <div className='text-2-results'>"{queryData}"</div>
          <br/><br/><br/>
          <div className="title-card-container">
            {listOfTitles.map((titleObj, index) => (
              <>
              <TitleCard
                updatePage={updatePage}
                setTitleData={setTitleData}
                setListOfReviews={setListOfReviews}
                name={titleObj.title}
                tags={titleObj.tag}
                actors={titleObj.actorsList}
                imageUrl={titleObj.image}
                linkUrl={titleObj.urlForThatTitle}
              />
              </>
            ))}
          </div>
        </>
      }
    </div>
  )

}
export default Titles;
import React, { useState } from 'react';
import Titles from './components/Titles';
import Query from './components/Query';
import Reviews from './components/Reviews';
import Error from './components/Error';
import Loading from './components/Loading';

function App() {

  const [listOfTitlesFromQuery, setListOfTitlesFromQuery] = useState([]);
  const [queryDate, setQueryData] = useState("");
  const [titleData, setTitleData] = useState("");
  const [listOfReviews, setListOfReviews] = useState([]);
  const [showPage, setShowPage] = useState("query");

  return (
    <div>
      {(showPage === "query")
        ? <Query updatePage={setShowPage} setListOfTitles={setListOfTitlesFromQuery} setQueryData={setQueryData}/>
        : showPage === "titles" ?
          <Titles listOfTitles={listOfTitlesFromQuery} updatePage={setShowPage} setListOfReviews={setListOfReviews} queryData={queryDate} setTitleData={setTitleData}/>
        : showPage === "reviews" ?
          <Reviews listOfReviews={listOfReviews} updatePage={setShowPage} titleData={titleData}/>
        : showPage === "error" ?
          <Error updatePage={setShowPage}/>
        : <Loading/>
      }
    </div>
  );
}

export default App;

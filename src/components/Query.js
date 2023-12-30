import React, { useState } from 'react';
import '../style/Query.css'
import SearchIcon from '@mui/icons-material/Search';
import logo from '../images/logo.png'

const Query = ({ updatePage, setListOfTitles, setQueryData }) => {
    const [inputData, setInputData] = useState('');

    const sendDataToServer = async () => {
      try {
        updatePage("loading")
        // const response = await fetch('http://127.0.0.1:5000/get/titles', {
        const response = await fetch('https://film-fluent-5e2640934ccd.herokuapp.com//get/titles', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(inputData),
        });
        const responseData = await response.json();
        setListOfTitles(responseData.titles);
        setQueryData(inputData);
        updatePage("titles")


      } catch (error) {
        console.error('Error sending data to server:', error);
        updatePage("error")
      }
    };
    function handleSearch() {
      if (inputData !== '') {
        sendDataToServer();
      }
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        handleSearch();
      }
    };

    return (
      <div className='query-body'>
        <div class="search-box">
          <button onClick={handleSearch} onEnter class="btn-search"><SearchIcon/></button>
          <input
            id='search'
            type="text"
            class="input-search"
            placeholder="Type to Search..."
            value={inputData}
            onChange={e => setInputData(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className='middle'>
          <div className='writting-3'>Welcome to{' '}
            <span className='title'>Film Fluent</span>
          </div>
          <br/><br/><br/>
          <img className="logo" alt="logo" src={logo}/>
          <br/><br/>
          <div className='writting-1'>Read reviews of your favourite TV-shows and Movies</div>
          <br/>
          <div className='writting-2'>Hover over the search icon to find your Film</div>
        </div>
      </div>
    )

}
export default Query;

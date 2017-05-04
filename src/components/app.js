import React, { Component } from 'react';
import SearchBar from './search_bar';
import ResultsList from './results_list';

const IMAGE_URL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Wikipedia-logo-v2-simple.svg/250px-Wikipedia-logo-v2-simple.svg.png'

export default class App extends Component {
  render() {
    return(
      <div className='container'>
        <h1>Wikipedia Search Widget</h1>
        <img src={IMAGE_URL} alt='Wikipedia logo' />
        <SearchBar />
        <ResultsList />
      </div>
    )
  }
}

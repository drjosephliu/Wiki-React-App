import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from '../containers/search_bar';
import ResultsList from '../containers/results_list';

const IMAGE_URL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Wikipedia-logo-v2-simple.svg/250px-Wikipedia-logo-v2-simple.svg.png'

class App extends Component {

  render() {
    const { term } = this.props.results;
    return(
      <div className='container'>
        {!term &&
        <div><h1>Wikipedia Search Widget</h1>
        <img src={IMAGE_URL} alt='Wikipedia logo' /></div>}
        <SearchBar />
        <ResultsList />
      </div>
    )
  }
}

function mapStateToProps({ results }) {
  return { results };
}

export default connect(mapStateToProps)(App);

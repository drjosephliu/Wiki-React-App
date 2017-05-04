import React, { Component } from 'react';
import { connect } from 'react-redux';

class ResultsList extends Component {
  renderList() {
    const { results } = this.props;
    let row = [];

    for (let i=0; i<results.title.length; i++) {
      row.push(
        <li key={i} className='list-group-item'>
          <a href={results.url[i]} target='_blank'>
            <h4>{results.title[i]}</h4>
          </a>
          <p>
            {results.description[i]}
          </p>
        </li>);
    }
    return row;
  }

  render() {
    return (
      <div>
        <ul className='list-group'>
          {this.renderList()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ results }) {
  return { results };
}

export default connect(mapStateToProps)(ResultsList);

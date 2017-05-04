import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchResults } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({
      term: event.target.value
    });
    console.log(this.state.term);
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchResults(this.state.term);
    this.setState({
      term: ''
    });
  }

  render() {
    return (
      <div>
        <form
          className='input-group'
          onSubmit={this.onFormSubmit}>
          <input
            className='form-control'
            placeholder='Search Wikipedia'
            value={this.state.term}
            onChange={this.onInputChange} />
          <button
            className='btn btn-primary'
            type='submit'>
            Submit
          </button>
          <button
            className='btn btn-primary'>
            Feeling Lucky
          </button>
        </form>
      </div>
    )
  }
}

export default connect(null, { fetchResults })(SearchBar);

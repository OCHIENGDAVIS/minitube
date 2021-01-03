import React from 'react';
class SearchBar extends React.Component {
  state = {
    term: '',
  };
  handleInput = (e) => {
    const term = e.target.value;
    this.setState(() => ({ term }));
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state.term);
  };
  render() {
    return (
      <div>
        <div className='ui segment search-bar'>
          <form onSubmit={this.handleSubmit} className='ui form'>
            <div className='ui field'>
              <label>Search for a video</label>
              <input
                type='text'
                onChange={this.handleInput}
                value={this.state.term}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default SearchBar;

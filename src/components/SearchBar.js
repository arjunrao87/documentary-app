import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '' }
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onTermChange(term);
  }

  render() {
    return (
    	<div className="search">
        <input placeholder="Search documentaries..." onChange={event => this.onInputChange(event.target.value)} />
      	</div>
    );
  }
}

export default SearchBar;
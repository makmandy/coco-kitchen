import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      term: e.target.value
    });
  }

  search() {
    this.props.search(this.state.term);
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.term} onChange ={this.onChange} onSubmit={this.search}></input>
        <button onClick={this.search}>Get cocorecipes!</button>
        </div>
    )
  }
}

export default Search;
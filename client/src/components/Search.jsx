import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: 'Enter an ingredient here'
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
        <input value={this.state.term} onChange={(e) => this.onChange} onSubmit={this.search}/>
        <button onClick={this.search}>Get cocorecipes!</button>
        </div>
    )
  }
}

export default Search;
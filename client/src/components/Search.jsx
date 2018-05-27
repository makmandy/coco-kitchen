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
    console.log(this.state.term);
  }

  render() {
    return (
      <div>
        <div>
          <input type="text" value={this.state.term} placeholder="type an ingredient to begin!" onChange ={this.onChange} onSubmit={this.search}></input>
          </div>
          <div>
        <button onClick={()=> this.props.search(this.state.term)}>get cocoRecipes!</button>
        </div>
      </div>
    )
  }
}

export default Search;

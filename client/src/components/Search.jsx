import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      term: e.target.value
    });
  }

  render() {
    return (
        <div className="level-item has-text-centered">
          <div>
            <div className="field">
              <div className="control">
                <input className="input is-info" type="text" placeholder="type an ingredient!" onChange={(e)=>this.handleChange(e)}/>
              </div>
            </div>
              <a className="button is-primary" onClick={()=> this.props.search(this.state.term)}>get cocorecipes</a>
          </div>
        </div>
    )
  }
}

export default Search;

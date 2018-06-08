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
                <input className="input is-primary" type="text" placeholder="type an ingredient!" handleChange={(e) => {this.onChange(e)}} />
              </div>
            </div>
              <a className="button is-primary" onClick={()=> this.props.search(this.state.term)}>search</a>
          </div>
        </div>
    )
  }
}

export default Search;
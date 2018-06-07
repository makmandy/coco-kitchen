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
        <div className="level-item has-text-centered">
          <div>
            <div className="field">
              <div className="control">
                <input className="input is-primary" type="text" placeholder="type an ingredient!" onChange={(e) => {this.onChange(e)}} />
              </div>
            </div>
            <p>
              <a className="button is-primary" onClick={()=> this.props.search(this.state.term)}>search</a>
            </p>
          </div>
        </div>
    )
  }
}

export default Search;
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './components/Search.jsx';
import RecipeList from './components/RecipeList.jsx';
import RecipeListItem from './components/RecipeListItem.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: []
    }

    this.search = this.search.bind(this);
  }

  componentDidMount() {
    axios.get('/recipes', {
      params: {
        ingredient: 'almond'
      }
    })
    .then(({data}) => {
      console.log('data from front: ', data);
      this.setState({
        recipes: data
      })
    });
  }

  search(input) {
    axios.post('/recipes', {
        ingredient: input
      })
    .then(({data}) => {
      this.setState({
        recipes: data
      });
    })
    .catch(err => console.error(err))
  }

  render() {
    return (
      <div>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                CocoKitchen
              </h1>
              <h2 className="subtitle">
                recipe finder for coconut lovers
              </h2>
            </div>
          </div>
        </section>
        <div>
          <br></br>
          <nav className="level">
            <Search search={this.search} />
          </nav>
          <div>
            <RecipeList recipes={this.state.recipes} />
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

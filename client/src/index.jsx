import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './components/Search.jsx';
import RecipeList from './components/RecipeList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: []
    }

    this.search = this.search.bind(this);
  }

  search(input) {
    axios.get('/recipes', {
      params: {
        ingredient: input
      }
    })
    .then(({data}) => {
      this.setState({
        recipes: data
      });
    })
    .catch(err => console.error(err))
  }

  componentDidMount() {
    axios.get('/recipes', {
      params: {
        ingredient: 'almond'
      }
    })
    .then(({data}) => {
      this.setState({
        recipes: data
      })
    });
  }

  render() {
    return (
      <div>
<<<<<<< HEAD
        <section className="hero is-primary has-text-centered">
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
=======
        <br></br>
        <a href="#"><h1 id="h1">CocoKitchen</h1></a>
        <h4 id="heading">recipe finder for coconut lovers</h4>
        <Search search={this.search} />
        <RecipeList recipes={this.state.recipes} />
>>>>>>> 667cd26f8a11a09f2ccc225d1ffac2fa3bd13482
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

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
      recipe: []
    },

    this.search = this.search.bind(this);
  }

  componentDidMount() {
    axios.get('/recipes')
      .then(console.log('request sent'))
        .then(
          (recipes) => {
        this.setState({
          recipes: recipes,
        });
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
    .catch((err) => { console.error(err)});
  }

  render() {
    return (
      <div>
        <h1>CocoKitchen</h1>
        <Search search={this.search}/>
        <RecipeList recipes={this.state.recipes}/>
      </div>
    )

  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
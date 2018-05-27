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
        ingredient: ''
      }
    })
    .then(({data}) => {
      this.setState({
        recipes: data
      })
    });
  }

  search(input) {
    console.log('searching');
    axios.post('/recipes', {
        ingredient: input
      })
    .then(() => axios.get('/recipes', {
      params: {
        ingredient: input
      }
    }))
    .then(({data}) => {
      this.setState({
        recipes: data
      });
    })
    .catch(err => console.error(err))
  }

  render() {
    console.log('rendering');
    return (
      <div>
        <br></br>
        <h1 id="h1">CocoKitchen</h1>
        <h4 id="heading">recipe finder for coconut lovers</h4>
        <Search search={this.search} />
        <RecipeList recipes={this.state.recipes} />
      </div>
    )

  }
}

ReactDOM.render(<App />, document.getElementById('app'));

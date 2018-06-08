import React from 'react';


class RecipeListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: []
    }
  }

  componentDidMount() {
    this.setState({
      ingredients: this.props.recipe.ingredients.split(',')
    });
  }

  render() {
    return(
      <div className="box">
        <article className="media">
          <div className="media-content">
            <div className="content has-text-centered">
              <p>
                <strong><a href={this.props.recipe.href}>{this.props.recipe.title}</a></strong>
              </p>
              <p>
                <span className="tag is-danger">{this.state.ingredients[0]}</span>
                <span className="tag is-primary">{this.state.ingredients[1]}</span>
                <span className="tag is-warning">{this.state.ingredients[2]}</span>
                {this.state.ingredients.length > 5 ?
                <div>
                  <span className="tag is-link">{this.state.ingredients[3]}</span>
                  <span className="tag is-success">{this.state.ingredients[4]}</span>
                  <span className="tag is-danger">{this.state.ingredients[5]}</span>
                </div>:null}
              </p>
            </div>
          </div>
        </article>
        </div>
    )
  }
};

export default RecipeListItem;

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
      <div className="box is-danger">
        <article className="media">
          <div className="media-content">
            <div className="content has-text-centered">
              <div>
                <p>
                  <strong><a href={this.props.recipe.href}>{this.props.recipe.title}</a></strong>
                </p>
              </div>
              <div>
                <span className="tag is-danger">{this.state.ingredients[0]}</span>
                <span className="tag is-success">{this.state.ingredients[1]}</span>
                <span className="tag is-warning">{this.state.ingredients[2]}</span>
                {this.state.ingredients.length > 5 ?
                <div>
                  <span className="tag is-primary">{this.state.ingredients[3]}</span>
                  <span className="tag is-info">{this.state.ingredients[4]}</span>
                </div>:null}
              </div>
                <nav className="level">
              <footer className="card-footer">
                  <div className="level-left">
                  </div>
                  <div> </div>
              </footer>
                  <div className="level-right">
                  <button className="button is-danger is-small is-rounded" onClick={()=>this.toggleFave}>add to &hearts;</button>
                  </div>
                </nav>
            </div>
          </div>
        </article>
        </div>
    )
  }
};

export default RecipeListItem;

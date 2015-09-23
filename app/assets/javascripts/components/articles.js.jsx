var Articles = React.createClass({
  getInitialState: function() {
    return { articles: this.props.data };
  },

  getDefaultProps: function() {
    return { articles: [] };
  },

  propTypes: {
    title: React.PropTypes.string,
    body: React.PropTypes.string,
  },

  render: function() {
    return (
      <div>
        <h4>RENDERTEST</h4>
      </div>
      {this.state.articles.map(function(article) {
        return <Article key={article.id} article={article}
        // handleDeleteArticle={this.deleteArticle}
        // handleEditArticle={this.updateArticle}
        />
        }.bind(this))}
    );
  }
});

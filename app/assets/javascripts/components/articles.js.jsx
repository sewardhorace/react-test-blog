var Articles = React.createClass({
  getInitialState: function() {
    return { articles: this.props.data };
  },

  getDefaultProps: function() {
    return { articles: [] };
  },

  render: function() {
    return(
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
          {this.state.articles.map(function(article) {
            return <Article key={article.id} article={article}/>
           }.bind(this))}
        </tbody>
      </table>
    );
  }
});

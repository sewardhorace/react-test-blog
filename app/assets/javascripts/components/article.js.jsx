var Article = React.createClass({

  getInitialState: function() {
    return { edit: false };
  },

  articleRow: function() {
    return(
      <tr>
        <td>{this.props.article.title}</td>
        <td>{this.props.article.text}</td>
      </tr>
    );
  },

  render: function() {
    return this.articleRow();
  }
});

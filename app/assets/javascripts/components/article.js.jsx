var Article = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    body: React.PropTypes.string,
  },



  render: function() {
    return (
      <div>
        <h4>Title: {this.props.title}</h4>
        <p>Stuff: {this.props.body}</p>
      </div>
    );
  }
});

var SubmitFixButton = React.createClass({
  render: function(){
    return (
      <div className="submit_fix_button">
        <a className="ui button primary" href={"/issues/" + this.props.issue_id + "/fixes/new"}>Resolve this incident</a>
      </div>
      )
  }
})

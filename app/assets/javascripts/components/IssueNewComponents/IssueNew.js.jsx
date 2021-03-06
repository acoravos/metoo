var IssueNew = React.createClass({

  // we don't need this method due to non-ajax!
  handleIssueSubmit: function(dataObject){
    console.log(dataObject)
  },

  componentWillMount: function() {
    document.title = "MeToo | Submit an Incident";
  },

  render: function(){
    return (
      <div className="issue_new_wrapper">
        <h2 className="submit_issue_header ui horizontal divider header"> Submit an Incident</h2>
        <br/>
          < IssueImage />
          < IssueForm zip={this.props.zip} categories={this.props.categories} onIssueSubmit={this.handleIssueSubmit} />
      </div>
      )
  }
})

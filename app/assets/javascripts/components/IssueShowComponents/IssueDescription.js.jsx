var IssueDescription = React.createClass({
  render: function(){


    return (
      <div className="issue_description_wrapper">

        <h4 className="ui horizontal divider header">
           Description
        </h4>
          < MediaCard image_url={this.props.issue.image_url} description={this.props.issue.description} />

      </div>
      )
  }
})

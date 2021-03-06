 var IssueHeader = React.createClass({
  render: function(){


    return (
      <div className="issue_header">

      <h2 className="ui header">{this.props.issue.title} <span className="c-grey l-7 pos-r">[{this.props.issue.status.toUpperCase()}]</span> </h2>
      <p><em>{this.props.address}</em></p>

      <div className="ui divider"></div>

      { this.props.current_user ?
        <div>
                  < IssueVotes upvotes={this.props.upvotes} current_user_upvoted={this.props.current_user_upvoted} current_user_id={this.props.current_user_id} issue={this.props.issue} current_user = {this.props.current_user} />


                  < IssueCheckbox current_user_watching={this.props.current_user_watching} current_user_id={this.props.current_user_id} issue={this.props.issue} />

        </div>
      :
        <p> {this.props.upvotes} MeToo community members have up-voted this issue </p>
      }


      </div>
      )
  }
})

var Footer = React.createClass({
  render: function(){
    return (
      <div id="footer">
        <div className="ui grid">

          <div className="nine wide centered wide column">
            <div className="ui horizontal divider">
              <span className="footer_header"> NEW INCIDENTS </span>
            </div>
            <StreamFooter streamIssues={this.props.streamIssues} />
          </div>

        </div>
      </div>
      )
  }
})

var Dashboard = React.createClass({

  componentWillMount: function() {
    document.title = "MeToo | Stats Dashboard";
  },

  render: function(){
    return (

      <div className="ui centered grid container dashboard_main_wrapper">



        <div className="one column row">
          <h2 className="ui horizontal divider header"> Stats Dashboard </h2>
        </div>

        <div>
          <DashboardNav />
          <br/>
        </div>

        <div className="one column row">

          < DashboardMap allOpenIssues={this.props.allOpenIssues} zip={this.props.zip} environment={this.props.environment} />
        </div>

      { /* <div className="one column row">
          < Stream streamIssues={this.state.streamIssues} />
        </div> */ }

      </div>
      )
  }
})


// <h4 className="ui horizontal divider header"> MeToo Incident Map </h4>

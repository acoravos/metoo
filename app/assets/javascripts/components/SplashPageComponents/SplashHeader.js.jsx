var SplashHeader = React.createClass({

  render: function(){

    return (
      <div id="splash">
        <div id="mainSplash">

          <div className="ui huge icon header">
            <div className="ui huge icon header inverted" id="padding50">
              <span className="splash_title"> MeToo </span>
              <br/>
              <span className="splash_slogan"> keeping you safe, every day </span>
            </div>
          </div>
          <br/>

          <div className="splash_nav_button">
          <a className="ui huge inverted button" href="/users/sign_up"> Sign Up </a>
          </div>

          <div className="splash_nav_button">
          <a className="ui huge inverted button" href="/users/sign_in"> Log In</a>
          </div>

        </div>
      </div>
    )
  }
})


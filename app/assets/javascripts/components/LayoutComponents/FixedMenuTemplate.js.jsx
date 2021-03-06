var FixedMenuTemplate = React.createClass({

  render: function(){
    return (
      <div id="menu" className="ui six item inverted menu">
        <a className="item" href="/issues/new"> <i className="plus icon"></i>Submit an Incident </a>
        <a className="item" href="/discover"> <i className="search icon"></i>Find an Incident </a>
        <a className="item" href="/dashboard"> <i className="home icon"></i>Stats Dashboard </a>
        <a className="item" href="/profile"> <i className="user icon"></i> My Profile </a>
        <a className="item" href="/aboutus"> <i className="ellipsis vertical icon"></i> About Us </a>
        <a className="item" href="/users/sign_out" data-method="delete" rel="nofollow"> <i className="sign out icon"></i> Logout</a>
      </div>
      )
  }
})

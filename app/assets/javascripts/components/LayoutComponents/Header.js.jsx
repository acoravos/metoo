var Header = React.createClass({
  render: function(){
    return (

      <div id="header">

        <Sidebar />

        <div id="mainHead">

            <FixedMenuTemplate />
            <MobileMenu />

          <div className="ui huge icon header inverted" id="padding50">
            <a href="/dashboard"> </a> <span className="header_text">MeToo</span>
          </div>

          <h2 className="ui header inverted">
            <span className="header_text">MeToo</span>
          </h2>
        </div>

        <img id="mainImage" src="http://i.imgur.com/VYcXx10.jpg" />

      </div>
      )
  }
})

var SplashFooter = React.createClass({
  render: function(){
    return (
      <div id="splash_footer" >
        <div id="splash_footer_content" className="ui  centered grid">

          <a className="one wide centered column splash_footer_text" href="/team">About</a>

          <a className="one wide centered column splash_footer_text" href="mailto:andreacoravos@gmail.com">Contact</a>

          <a className="one wide centered column splash_footer_text" href="">Twitter</a>

          <a className="one wide centered column splash_footer_text" href="https://github.com/acoravos/metoo">GitHub</a>

          <a className="one wide centered column splash_footer_text" href="#"><span className="copyright">&copy;2015 MeToo</span> </a>

        </div>
      </div>
      )
  }
})

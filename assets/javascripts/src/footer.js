window.AsLabs.AppFooter = React.createClass({
  displayName: "AsLabs::AppFooter",
  render: function () {
    return <footer id="footer">
      <section className="container">
        <div className="left">
          <a href="http://actionsprout.com/labs" className="logo">
            <img src={this.props.lab_logo_src} alt="actionsprout labs"/>
          </a>
        </div>
        <div className="right">
          <a href={this.props.sign_up_href} className="ui button tiny">Sign Up</a>
          <p className="more">Try ActionSprout for Free</p>
        </div>
      </section>
    </footer>
  }
});
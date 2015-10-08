window.AsLabs = {
  Footer: React.createClass({
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
  }),
  Header: React.createClass({
    render: function () {
      return <section id="header">
        <section className="container">
          <div className="ui floated left">
            <h1>
            {this.props.app_name || "ActionSprout Labs"}
            </h1>
          </div>
          <div className="ui floated right">
            <p>Powered by</p>

            <a href={this.props.logo_link}>
              <img src={this.props.horizontal_logo_src} className='logo'/>
            </a>
          </div>
        </section>
      </section>

    }
  })
};
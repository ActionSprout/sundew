module.exports = React.createClass({
  logo: function () {
    return <img src={this.props.app_logo}/>
  },
  render: function () {
    return <section id="header">
      <section className="container">
        <div className="ui floated left">
          <h1>
            <a href="/">
                {this.props.app_logo ? this.logo() : ''}
                {this.props.app_name || "ActionSprout Labs"}
            </a>
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
});
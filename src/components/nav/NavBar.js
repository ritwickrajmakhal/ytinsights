import logo from './logo.png'

export default function Navbar(props) {
  const links = props.nav.links.map((link, index) => (
    <li key={index} className="nav-item">
      <a className="nav-link active" aria-current="page" href={link["url"]}>
        {link["name"]}
      </a>
    </li>
  ));

  return (
    <div>
      <nav
        className="navbar sticky-top navbar-expand-lg bg-danger navbar-dark"
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="logo" style={{height:'3rem'}}/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">{links}</ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

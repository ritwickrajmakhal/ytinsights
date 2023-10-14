import React from "react";
import PropTypes from 'prop-types'

export default function Footer(props) {
  return (
    <footer className="text-bg-dark">
      <div className="container-fluid border-top py-2">
        <p className="text-center fs-5 my-2">
          © {new Date().getFullYear()}{" "}
          <a className="link-opacity-100-hover text" href="/">
            {props.footer.name}
          </a>
          . All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  footer: PropTypes.object
}
const React = require("react");

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="btn btn-outline-success" href="/">
          На главную
        </a>
        <a className="btn btn-outline-warning" href="/users">
          На всех пользователей
        </a>
        <a className="btn btn-outline-info" href="/dog">
          Собакен
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
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        ></div>
      </div>
    </nav>
  );
}

module.exports = Navbar;

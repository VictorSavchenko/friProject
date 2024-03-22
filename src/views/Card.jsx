const React = require("react");

function Card({ login, id }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="/images/austro.gif" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{login}</h5>
        <button id={id} className="btn btn-danger">Удалить</button>
      </div>
    </div>
  );
}

module.exports = Card;

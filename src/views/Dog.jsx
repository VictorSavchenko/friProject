const React = require("react");
const Layout = require("./Layout");

function Dog() {
  return (
    <Layout>
      <script defer src="/js/dog.js" />
      <button className="btn btn-success dogBtn">Получить собаку</button>
      <div className="dogDiv" />
    </Layout>
  );
}

module.exports = Dog;

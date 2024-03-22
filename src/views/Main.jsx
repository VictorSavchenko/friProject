const React = require('react');
const Layout = require('./Layout');

function Main({ title }) {
  return(
    <Layout title={title}>
      <h1>Всем привет!</h1>
      <img src='/images/space.gif' alt='space'/>
    </Layout>
  )
}

module.exports = Main

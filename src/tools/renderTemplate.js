require('@babel/register');

const React = require('react');
const ReactDOMServer = require('react-dom/server');

// * Компонент - это либо ф-иях, либо класс, в котором есть вся вёрстка
// * Элемент - объект, создаваемый в виртуальном доме реакта
function renderTemplate(component, props, res) {
  const reactElement = React.createElement(component, props);
  const html = ReactDOMServer.renderToStaticMarkup(reactElement);
  // res.write(`<!DOCTYPE html>`);
  // res.write(html);
  res.send(`<!DOCTYPE html>${html}`);
  res.end();
}

module.exports = renderTemplate;

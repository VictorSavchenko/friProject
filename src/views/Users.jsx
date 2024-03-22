const React = require("react");
const Layout = require('./Layout');
const Card = require("./Card");

function Users({ data, title }) {
  return (
    <Layout title={title}>
      <script defer src="/js/users.js" />
      <form className="userForm" name='userForm' method="POST" action="/users" style={{ display: 'flex', width: '600px' }}>
        <input className="form-control" name="login" placeholder="Введите логин" />
        <input className="form-control" name="password" type="password" placeholder="Введите пароль"/>
        <button className="btn btn-primary">Создать пользователя</button>
      </form>
      <div className="users">
        {data.map((el) => <Card key={el.id} login={el.login} id={el.id}/>)}
      </div>
    </Layout>
  )
}

module.exports = Users;

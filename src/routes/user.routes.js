const express = require('express');

const { User } = require('../../db/models');
const renderTemplate = require('../tools/renderTemplate');
const Users = require('../views/Users');

const route = express.Router();

route.get('/', async (req, res) => {
  try {
    const data = await User.findAll({ raw: true });
    const { title } = res.app.locals;
    renderTemplate(Users, { data, title }, res);
  } catch (error) {
    res.send(`ОШИБКА ВСЕХ ПОЛЬЗОВАТЕЛЕЙ, ${error}`);
  }
});

route.post('/', async (req, res) => {
  console.log('Попали в ручку', req.body);
  try {
    const { login, password } = req.body;
    const newUser = await User.create({ login, password });
    console.log('newUser:', newUser);
    // res.redirect('/users')
    res.json({
      login: newUser.login,
      id: newUser.id,
      status: 'success',
    });
  } catch (error) {
    res.send(`ОШИБКА СОЗДАНИЯ ЮЗЕРА ${error}`);
  }
});

route.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log("id:", id)
    await User.destroy({ where: { id } });
    // res.redirect('/users');
    res.json({ status: 'success' });
  } catch (error) {
    res.send(`ОШИБКА УДАЛЕНИЯ ЮЗЕРА ${error}`);
  }
});

module.exports = route;

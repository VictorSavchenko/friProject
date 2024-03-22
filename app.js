require('dotenv').config();

const express = require('express');
const logger = require('morgan');

const path = require('path');

const { checkTime, localsTitle } = require('./src/middlewares/common');
const renderTemplate = require('./src/tools/renderTemplate');

const Main = require('./src/views/Main');
const Dog = require('./src/views/Dog');

const userRouter = require('./src/routes/user.routes');

const { PORT } = process.env;

const app = express();

app.use(logger('dev'));
app.use(express.json());
// ! если не напишешь - тело не получишь из POST
// ! { extended: true } - увеличиваем объём передаваемых данных в body
app.use(express.urlencoded({ extended: true }));

// * Подключаем статику (Статика - только клиентские файлы, не связаны с сервом)
// ! НО подключаем тут
app.use(express.static(path.join(process.cwd(), 'public')))

app.use(checkTime);
app.use(localsTitle);

app.get('/', (req, res) => {
  renderTemplate(Main, {}, res);
});

app.get('/dog', (req, res) => {
  renderTemplate(Dog, {}, res);
});

app.use('/users', userRouter);

app.listen(PORT, () => {
  console.log('Server started!', PORT);
});

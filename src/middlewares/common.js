const checkTime = (req, res, next) => {
  console.log(new Date());
  next();
};

const localsTitle = (req, res, next) => {
  res.app.locals.title = 'Eagles2023';
  next();
}

module.exports = { checkTime, localsTitle };

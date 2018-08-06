const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const connectMongo = require('connect-mongo');
const history = require('connect-history-api-fallback');
const chalk = require('chalk');

const config = require('./config/index');
const db = require('./mongodb/db');
const router = require('./routes/index');
const app = express();

app.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", req.headers.Origin || req.headers.origin);
  res.header("Access-Control-Allow-Headers", "Content-Type,Authorization,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials", true); // 可以带cookies
  res.header("X-Powered-By", '3.2.1');

  if (req.method == 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// app.use(Statistic.apiRecord)
const MongoStore = connectMongo(session);
app.use(cookieParser());
app.use(session({
  name: config.session.name,
  secret: config.session.secret,
  resave: true,
  saveUninitialized: false,
  cookie: config.session.cookie,
  store: new MongoStore({
    url: config.url
  })
}));

router(app);

app.use(history());
app.use(express.static('./public'));
app.listen(config.port, () => {
  console.log(
    chalk.green(`成功监听端口：${config.port}`)
  );
});

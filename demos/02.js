const Koa = require('koa');
const app = new Koa();

const main = ctx => {
  ctx.response.body = '徐航 SB';
};

app.use(main);
app.listen(3000);

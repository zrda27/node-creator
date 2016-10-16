/**
 * Created by zengruda on 10/14/16.
 */
import koa from 'koa';
import router from './router/router';
import koaStatic from 'koa-static';
import path from 'path';

let app = new koa();

app.use(koaStatic(path.join(__dirname, '../public')));

app.use(router);

app.listen(3000);

process.title = "koa-app";

console.log('listen on 3000...');

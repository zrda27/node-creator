/**
 * Created by zengruda on 10/15/16.
 */
import koaRouter from 'koa-router';

let userRouter = koaRouter();

userRouter.all('/', function *(next){
    "use strict";
    this.body = 'access /index';
});

userRouter.get('/he', function *(next) {
    this.body = 'access /index/he';
});

export default userRouter.routes();

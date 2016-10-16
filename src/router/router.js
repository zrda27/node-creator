/**
 * Created by zengruda on 10/15/16.
 */
import koaRouter from 'koa-router';
import userRouter from './userRouter';

let router = koaRouter();

router.get('/', function *(next){
    "use strict";
   this.body = 'access /';
});



router.use('/index', userRouter);

export default router.routes();

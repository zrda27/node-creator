/**
 * Created by zengruda on 10/15/16.
 */
import mongoose from 'mongoose';
// Use native promises
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://192.168.18.1/demo');//；连接数据库
export default mongoose;

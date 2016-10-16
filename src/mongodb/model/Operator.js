/**
 * Created by zengruda on 10/15/16.
 */
import mongoose from '../mongoose';
var schema = new mongoose.Schema({
    name: {
        type: String,
        index: true,
        title: '名称'
    },
    password: {
        type: String,
        title: '密码'
    }
});

export default {
    Model: mongoose.model('operator', schema), //  与operator集合关联
    schema: schema
};

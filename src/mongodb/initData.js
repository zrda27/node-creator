/**
 * Created by zengruda on 10/15/16.
 */
import Operator from './model/Operator';

class ObjA{
    constructor(a){
        this.a = a;
    }

    static sa(){

    }
}

class ObjB extends ObjA{
    constructor(a, b){
        super(a);
        this.b = b;
        this._b = b;
    };
}
console.log(new ObjB(123, 321).sa);
console.log(ObjA.sa);

var operators = [
    {
        name: 'zrd',
        password: '123'
    },
    {
        name: 'zrd1',
        password: '123'
    }
];

operators.forEach((operator) => {
   new Operator.Model(operator).save().then(() => console.log('success')).catch((err) => cosole.log(err));
});

/*function *save(){
    "use strict";
    let i = 0;
    try {
        for (let operator of operators) {
            yield operator;
        }
    }catch(e){
        console.log(e);
    }
}

var g = save();
g.next();
while(!g.next().done){
    console.log(1);
}*/



/*var promise = null;
let i=0;
for(let operator of operators){
    var tmp = new Operator(operator).save().then(() => {
        if(++i == 10){
            throw new Error('hh');
        }
        console.log('success');
    });
    if(!promise){
        promise = tmp;
    }else{
        promise = promise.then(() => {return tmp;});
    }
}
promise.catch(err => {
    "use strict";
    console.log(err);
}).then(() => {
    "use strict";
    process.exit(0);
});

process.on('uncaughtWarning', function(err){
    "use strict";
    console.log(err);
});*/

/*var tmp = new Operator(operators[0]).save().then(() => {
    throw new Error('hh');
    console.log('success');
});

setTimeout(() => {
    "use strict";
    tmp.catch(err => {
        "use strict";
        console.log(err);
    });
}, 1000);*/

/*operators.reduce(function(cur, next) {

    return cur.then(next);

}, Promise.resolve()).then(function() {

    console.log('job finished');

});*/

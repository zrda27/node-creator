# run
```
node xxx.js
node -e 'console.log("hello")'
```

# strict
```
node --use_strict
```

# uncaughtException
```
process.on('uncaughtException', function(err) {
  logger(err);
  process.exit(1);
});
```
# unhandledRejection
```
process.on('unhandledRejection', function(err) {
  logger(err);
  process.exit(1);
});
```

# run directly
foo.js文件的第一行，如果加入了解释器的位置，就可以将其作为命令行工具直接调用。
```
#!/usr/bin/env node
```

# global
```
global.v1=123;
```

# AMD and CommonJS
```
define(function (require, exports, module){
  var someModule = require("someModule");
  var anotherModule = require("anotherModule");

  someModule.doTehAwesome();
  anotherModule.doMoarAwesome();

  exports.asplode = function (){
    someModule.doTehAwesome();
    anotherModule.doMoarAwesome();
  };
});
```

# require
if require('bar.js') will find as follow:
> /usr/local/lib/node/bar.js

> /home/user/projects/node_modules/bar.js

> /home/user/node_modules/bar.js

> /home/node_modules/bar.js

> /node_modules/bar.js

# load cycle
A load B, B load A, then B will load A partly

# run directly or be called
```
require.main === module
```

# package.json scripts
```
"scripts": {
    "preinstall": "echo here it comes!",
    "postinstall": "echo there it goes!",
    "start": "node index.js",
    "test": "tap test/*.js",
    "test": "karma start --log-leve=error karma.config.js --single-run=true",
    "pretest": "npm run lint",
    "posttest": "echo 'Finished running tests'"
}
```

# package.json dependencies version

> 指定版本：比如1.2.2，遵循“大版本.次要版本.小版本”的格式规定，安装时只安装指定版本。

> 波浪号（tilde）+指定版本：比如~1.2.2，表示安装1.2.x的最新版本（不低于1.2.2），但是不安装1.3.x，也就是说安装时不改变大版本号和次要版本号。

> 插入号（caret）+指定版本：比如ˆ1.2.2，表示安装1.x.x的最新版本（不低于1.2.2），但是不安装2.x.x，也就是说安装时不改变大版本号。需要注意的是，如果大版本号为0，则插入号的行为与波浪号相同，这是因为此时处于开发阶段，即使是次要版本号变动，也可能带来程序的不兼容。

> latest：安装最新版本。

# package.json browser
```
"browser": {
  "tipso": "./node_modules/tipso/src/tipso.js"
},
```

# npm

## update to last
```
npm install npm@latest -g
```

## set default init
```
$ npm set init-author-name 'Your name'
$ npm set init-author-email 'Your email'
$ npm set init-author-url 'http://yourdomain.com'
$ npm set init-license 'MIT'
```

## npm info
view module detail info

## npm search

## npm install
```
npm install glo-module -g
npm install sax -S
npm install dev-module -D
npm install --production
```

## npm run
run scripts字段的脚本命令，有一些最佳实践，可以方便开发。首先，安装npm-run-all模块。
```
$ npm install npm-run-all --save-dev
```

这个模块用于运行多个scripts脚本命令。

```
//继发执行
$ npm-run-all build:html build:js
//等同于
$ npm run build:html && npm run build:js

//并行执行
$ npm-run-all --parallel watch:html watch:js
//等同于
$ npm run watch:html & npm run watch:js

//混合执行
$ npm-run-all clean lint --parallel watch:html watch:js
//等同于
$ npm-run-all clean lint
$ npm-run-all --parallel watch:html watch:js

//通配符
$ npm-run-all --parallel watch:*
```

## link

> src/myModule$ npm link

> src/myProject$ npm link myModule

## adduser login publish
register a user on npmjs.com
```
$ npm adduser
Username: YOUR_USER_NAME
Password: YOUR_PASSWORD
Email: YOUR_EMAIL@domain.com
$ npm login
$ npm publish
```

## es6 to es5
> $ npm install --save-dev babel-cli@6 babel-preset-es2015@6

在package.json里面写入build脚本。
```
"scripts": {
  "build": "babel source --presets babel-preset-es2015 --out-dir distribution",
  "prepublish": "npm run build"
}
```

## babel
```
# 转码结果输出到标准输出
$ babel example.js

# 转码结果写入一个文件
# --out-file 或 -o 参数指定输出文件
$ babel example.js --out-file compiled.js
# 或者
$ babel example.js -o compiled.js

# 整个目录转码
# --out-dir 或 -d 参数指定输出目录
$ babel src --out-dir lib
# 或者
$ babel src -d lib

# -s 参数生成source map文件
$ babel src -d lib -s
```

### 转码规则
```
# ES2015转码规则
$ npm install --save-dev babel-preset-es2015

# react转码规则
$ npm install --save-dev babel-preset-react

# ES7不同阶段语法提案的转码规则（共有4个阶段），选装一个
$ npm install --save-dev babel-preset-stage-0
$ npm install --save-dev babel-preset-stage-1
$ npm install --save-dev babel-preset-stage-2
$ npm install --save-dev babel-preset-stage-3
```

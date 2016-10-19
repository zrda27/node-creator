# 记录创建项目的过程

## prepare environment

### nvm
- git clone https://github.com/creationix/nvm.git ~/.nvm
- vim ~/.profile and ~/.nvm/nvm.sh to PATH
- source ~/.profile
- nvm ls
- nvm ls-remote
- nvm install 6.8.0
- nvm use 6.8.0

### 更改npm源
- npm config set registry https://registry.npm.taobao.org

### koa
- npm i -S koa
- npm i -S koa-router
- npm i -S koa-static

## mongodb

### 启动
    mongod.exe --dbpath F:\web-server\mongo-data\demo
   
### 以服务启动mongodb
- 安装服务 
    mongod.exe --logpath "F:\web-server\mongo-data\mongodb.log" --logappend --dbpath "F:\web-server\mongo-data\demo" --serviceName "mongodb-demo" --serviceDisplayName "mongodb-demo" --install
- 启动服务
    net start mongodb-demo
    
### plugin
- npm i -S mongoose

## babel
- npm i -D babel-preset-stage-3
- npm i -D babel-preset-react
- npm i -D babel-preset-es2015
- npm i -D babel-preset-latest
- npm i -D babel-plugin-transform-runtime
- npm i -D babel-plugin-transform-regenerator
- npm i -D babel-cli
- npm i -D babel-core
- npm i -D babel-plugin-transform-export-extensions

## less
- npm i -D less

## webpack
- npm i -g webpack webpack-dev-server
- npm install webpack --save-dev
- less
```
    # npm install less --save-dev
	安装less-loader： 
	# npm install less-loader --save-dev
	参考格式：
	{
		test: /\.less/,
		loaders: ['style', 'css', 'autoprefixer', 'less'],
	}
```
- autoprefix浏览器兼容
```
    # npm install autoprefixer-loader --save-dev
	参考格式：
	{
		test: /\.css$/,
		loaders: ['style', 'css', 'autoprefixer']
	}, {
		test: /\.less/,
		loaders: ['style', 'css', 'autoprefixer', 'less'],
	}
```
- 编译文件
```
    安装file-loader： 
    # npm install file-loader --save-dev
    参考格式：
    {
        test: /\.(eot|woff|svg|ttf|woff2|gif)(\?|$)/,
        loader: 'file-loader?name=[hash].[ext]'
    }
```
- 编译图片
```
  # npm install url-loader --save-dev
  参考格式：
  {
  test: /\.(png|jpg)$/,
  loader: 'url?limit=1200&name=[hash].[ext]'
  }
```
- 编译JSX
```
  # npm install jsx-loader --save-dev
  # npm install babel-preset-react --save-dev
  参考格式：
  {
  test: /\.jsx$/,
  loaders: ['jsx', 'babel?presets[]=es2015,presets[]=stage-0,presets[]=react']
  }
```
- npm i -S css-loader 
- npm i -S url-loader
- npm i -S file-loader

## react
- npm i -S redux react react-router react react-dom

/**
 * Created by zengruda on 10/15/16.
 */
import React from 'react';
import ReactDom from 'react-dom';
import hrefUtil from './hrefUtil'
import Provider from './Component/Provider';
import Welcome from './Component/Welcome';
import User from './Component/User';
require('../../less/style.less');
let view = {};
let router = {
    index: {
        name: "首页",
        render: () => {
            return <span>首页</span>
        }
    },
    userManage: {
        name: "用户管理",
        render: () => {
            return <span>用户管理</span>
        }
    },
    logout: {
        name: "退出登录",
        render: () => {
            return <span>已退出</span>
        }
    }
};

class IndexContent extends React.Component{
    constructor(){
        super();
        let hash = window.location.hash.substring(1);
        let current = router[hash] ? hash : "index";
        this.state = {
            current : current
        }
    }
    render(){
        let showItem = router[this.state.current];
        return (
            <div className="main">
                <h1>{showItem.name}</h1>
                <div className="content">{showItem.render()}</div>
            </div>
        )
    }
}

class Index extends React.Component{
    constructor(){
        super();
        this.state = {
            navItems: ["index", "userManage", "logout"]
        };
    };
    route(path){
        hrefUtil.changeHash(path);
        this.refs.content.setState({
            current : path
        });
    };
    componentDidMount(){
        "use strict";
        view = this;
    };
    render(){
        let _this = this;
        return (
            <div>
                <div className="container">
                    <ul className="nav">
                        {
                            this.state.navItems.map(item => {
                                return (
                                    <li key={item}>
                                        <a href="javascript:;" onClick={_this.route.bind(_this, item)}>
                                            {router[item].name}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <IndexContent ref="content" />
                </div>
            </div>
        );
    };
}
ReactDom.render(
    <Index />,
    document.querySelector('#app')
);
export default view;

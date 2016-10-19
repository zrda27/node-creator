/**
 * Created by zengruda on 10/15/16.
 */
import React from 'react';
import ReactDom from 'react-dom';
import Nav from './Component/Nav';
import Provider from './Component/Provider';
import Welcome from './Component/Welcome';
import User from './Component/User';
//require('../../less/a.less');
let view = null;

class Index extends React.Component{
    constructor(){
        super();
        this.state = {
            navItems: [
                {
                    id: "index",
                    title: "首页"
                },
                {
                    id: "welcome",
                    title: "欢迎"
                }
            ]
        };
    };
    clickh(){
        this.setState({
            navItems: [
                {
                    id: "index",
                    title: "首页"
                },
                {
                    id: "welcome",
                    title: "欢迎"
                },
                {
                    id: "welcome2",
                    title: "欢迎2"
                }
            ]
        });
    };
    componentDidMount(){
        "use strict";
        view = this;
    };
    render(){
        return (
            <div>
                <Nav ref="Nav" reactId="Nav" navItems={this.state.navItems} />
                <input type="button" value="点击" onClick={this.clickh.bind(this)}/>
            </div>
        );
    };
}

ReactDom.render(
    <Index/>,
    document.querySelector('#content')
);
export default view;

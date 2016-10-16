/**
 * Created by zengruda on 10/15/16.
 */
import React from '../enhance/enReact';
import ReactDom from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';
import Nav from './Component/Nav';
import Welcome from './Component/Welcome';
import User from './Component/User';
//require('../../less/a.less');

let items = [
    {
        id: "a",
        title: "A"
    },
    {
        id: "b",
        title: "B"
    }
];

let Index = React.createClass({
    clickh: function(){
        document.$.Nav.setState({
            items: [
                {
                    id: "/WelCome",
                    title: "欢迎"
                },
                {
                    id: "/User",
                    title: "用户"
                }
            ]
        });
    },
    render: function(){
        window.Index = this;
        return (
            <div>
                <Nav ref="Nav" reactId="Nav"/>
                <input type="button" value="点击" onClick={this.clickh}/>
            </div>
        );
    }
});

ReactDom.render(
    <Index />,
    document.querySelector('#content')
);

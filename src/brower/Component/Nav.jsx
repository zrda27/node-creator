/**
 * Created by zengruda on 10/16/16.
 */
import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

class Nav extends React.Component{
    constructor(){
        super();
        this.state = {
            items: []
        };
    };
    render(){
        return(
            <ul>
                {
                    this.state.items.map(function(item, i){
                        return <li data-id={item.id}>{item.title}</li>
                    })
                }
            </ul>
        )
    }
}

export default Nav;

/**
 * Created by zengruda on 10/16/16.
 */
import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

class Nav extends React.Component{
    render(){
        return(
            <ul>
                {
                    this.props.navItems.map(function(item, i){
                        return <li key={i} data-id={item.id}>{item.title}</li>
                    })
                }
            </ul>
        )
    }
}

export default Nav;

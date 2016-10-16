/**
 * Created by zengruda on 10/16/16.
 */
import React from 'react';
let reacts = {};
React.Component.prototype.componentDidMount = function() {
    "use strict";
    alert(this.props.reactId);
    if(this.props.reactId){
        alert(this);
        reacts[this.props.reactId] = this;
    }
};

React.Component.prototype.componentWillUnmount = function() {
    "use strict";
    if(this.props.reactId && document.reacts[this.props.reactId]){
        delete reacts[this.props.reactId];
    }
};
var pre = React.createClass;
React.createClass = function(spec){
    "use strict";
    spec.componentDidMount = function() {
        "use strict";
        if(this.props.reactId){
            reacts[this.props.reactId] = this;
        }
    };
    spec.componentWillUnmount = function() {
        "use strict";
        if(this.props.reactId){
            reacts[this.props.reactId] = this;
        }
    };
    return pre(spec);
}
document.$ = reacts;
export default React;

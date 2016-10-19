/**
 * Created by zengruda on 10/17/16.
 */
import React from 'react';

class Provider extends React.Component {
    getChildContext() {
        return {
            store: this.props.store
        };
    }
    render() {
        return this.props.children;
    }
}

Provider.childContextTypes = {
    store: React.PropTypes.object
}

export default  Provider;

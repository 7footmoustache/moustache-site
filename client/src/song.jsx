/** @jsx React.DOM */
'use strict';

var React = require('react');

var Song = React.createClass({
    render: function() {
        return (<div class="song">
            <h3>{this.props.title}</h3>
        </div>);
    }
});

module.exports = Song;

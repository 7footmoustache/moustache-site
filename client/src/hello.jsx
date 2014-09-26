/** @jsx React.DOM */
'use strict';

var React = require('react');
var Song = require('./song.jsx');

var Hello = React.createClass({
    render: function() {
        return (<p>This is a <Song title="Don't stop believing" /></p>);
    }
});

module.exports = Hello;

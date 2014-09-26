var React = require('react'),
    $ = require('jquery'),
    Hello = require('./hello.jsx');

$(document).ready(function() {
    React.renderComponent(Hello({}),
                          document.getElementById('content'));
});
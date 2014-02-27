/** @jsx React.DOM */

var React = require('react');

var RepoSearch = React.createClass({

    getInitialState: function() {
        return {
            'user': undefined,
            'repo': undefined
        };
    },

    render: function() {
    	return (
    		<form onSubmit={this.handleSubmit}>
        		<input type="text" onChange={this.onChange} 
        			placeholder="user/repo"
        			value={
        				(typeof this.state.user !== 'undefined'? this.state.user : '') + 
        				(typeof this.state.repo !== 'undefined'? '/' + this.state.repo : '') 
        			} ref="userrepo" />
      		</form>
    	);
    },

    onChange : function(e) {
    	var str = e.target.value.split('/');
    	var u = str[0];
    	var r = str[1];
    	this.setState( {'user' : u, 'repo' : r} );
    },

    handleSubmit : function(e) {
    	e.preventDefault();
    	if(this.state.user && this.state.repo) {
    		this.props.onSubmit( this.state.user, this.state.repo );
    	}
    	return false;
    }

});

module.exports = RepoSearch;
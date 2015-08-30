var React = require('react');
var mixin = require('baobab-react/mixins').branch;
var ViewBtn = require('./HomepageViewBtn.react.js');
var HpColorAnim = require('../../../animations/hpColorAnim.js');
var HPActions = require('../../../actions/hpActions.js');



var HpWorkItem = React.createClass({
	mixins: [mixin],
	cursors: {
		scrollPos: ['scrolling', 'scrollPosition'],
		workBGColor: ['homepage', 'workBGColor']
	},
	componentDidMount: function() {
		window.addEventListener('scroll', this.handleScroll);
	},
	componentDidUnmount: function() {
		window.removeEventListener('scroll', this.handleScroll);
	},
	handleScroll: function(event) {
 		var colorData = HpColorAnim.workInfoBg(this.state.scrollPos);

 		HPActions.updateBGColor(colorData);
	},
	render: function() {	
		return (
			<section className="hp-work-item" style={{'background-image': 'url(' + this.props.project.images.header + ')' }}>
			  <div className="work-info" style={{ 'background-color': this.state.workBGColor }} ref="workInfo">
				  <div className="work-text js-fade-text">
					  <div className="worktext-appear-wrap">
						<ViewBtn />
				  	    <h1>{this.props.project.text.title}</h1>
                        <h3>Client</h3>
                        <h2>{this.props.project.text.client}</h2>
                        <h3>Fields</h3>
                        <h2>{this.props.project.text.fields}</h2>
					  </div>
				  </div>
			  </div>
			</section>
		)
	}
});

module.exports = HpWorkItem
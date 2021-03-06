var StateTree = require('../data/stateTree.js');
var ScrollCursor = StateTree.select('scrolling');


var scrollingActions = {
	scrollPosUpdate: function(livePosition) {
		ScrollCursor.set('scrollPosition', livePosition)
		StateTree.commit();
	},
	isScrolling: function(bool) {
		ScrollCursor.set('isScrolling', bool);
		StateTree.commit();
	},
	textTranslateAmount: function(amount) {
		ScrollCursor.set('textTranslateAmount', amount);
		StateTree.commit();
	}
}


module.exports = scrollingActions;
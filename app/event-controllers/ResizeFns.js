var ResizeActions = require('../actions/ResizeActions.js');
var StateTree = require('../data/stateTree.js');
var debounce = require('lodash.debounce');

var $window = $(window);

var resizeFn = debounce(function() {
	var windowW = $window.width();
	var windowH = $window.height();

	ResizeActions.updateWidth(windowW);
	ResizeActions.updateHeight(windowH);

	if (windowW > 1024) {
		ResizeActions.isDesktop(true);
		ResizeActions.isTablet(false);
		ResizeActions.isMobile(false);
	} else if (windowW <= 1024 && windowW > 768) {
		ResizeActions.isDesktop(false);
		ResizeActions.isTablet(true);
		ResizeActions.isMobile(false);
	} else if (windowW <= 768) {
		ResizeActions.isDesktop(false);
		ResizeActions.isTablet(false);
		ResizeActions.isMobile(true);
	}

}, 50);


var init = function() {
	resizeFn();
	$window.on('resize', resizeFn);
}


module.exports = {
	init: init
};
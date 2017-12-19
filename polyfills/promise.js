import Promise from 'core-js/es6/promise'

// To add to window
if (!window.Promise) {
	window.Promise = Promise
}

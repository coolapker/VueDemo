let Vue = require('Vue');
var vm = new Vue({
	data: {
		a: 1
	},
created: function () {
	// `this` 指向 vm 实例
	console.log('a is:', this.a)
}
})
module.exports = vm;
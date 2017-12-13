var assert = require('assert')
var sorting = require('../sorting')

function randomArray(length, max) {
	return Array.from({length: length}, () => Math.floor(Math.random() * max));
}

describe('sorting', function() {
	describe('#exchange()', function() {
		it('should exchange values at given indexes', function() {
			var values = [3,2,1]
			var sorted = [1,2,3]
			sorting.exahnge(values, 0, 2)
			for (var i = values.length - 1; i >= 0; i--) {
				assert.equal(values[i], sorted[i])
			}
		})
	})
	describe('#selectionSort()', function() {
		it('should sort given array', function() {
			var values = randomArray(10, 10)
			sorting.selectionSort(values)
			console.log(values)
			for (var i = values.length - 1; i >= 1; i--) {
				assert(values[i] >= values[i-1], true)
			}
		})
	})
	describe('#insertionSort()', function() {
		it('should sort given array', function() {
			var values = randomArray(10, 10)
			sorting.insertionSort(values)
			console.log(values)
			for (var i = values.length - 1; i >= 1; i--) {
				assert(values[i] >= values[i-1], true)
			}
		})
	})
	describe('#insertionSortImprove()', function() {
		it('should sort given array', function() {
			var values = randomArray(10, 10)
			sorting.insertionSortImprove(values)
			console.log(values)
			for (var i = values.length - 1; i >= 1; i--) {
				assert(values[i] >= values[i-1], true)
			}
		})
	})
})
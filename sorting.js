/**
排序成本模型：在研究排序算法时，我们需要计算比较和交换的数量。对于不交换元素的算法，我们会计算访问数组的次数
**/

function sort(values, compare) {
	values.sort(values, compare)
}

function selectionSort(values) {
	for (var i = 0; i < values.length; i++) {
		var min = values[i]
		var minIndex = i
		for(var j = i; j < values.length; j++) {
			if (values[j] < min) {
				min = values[j]
				minIndex = j
			}
		}
		exchange(values, i, minIndex)
	}
}

function insertionSort(values) {
	for (var i = 1; i <= values.length - 1; i++) {
		for (var j = i; j>0; j--) {
			if (values[j] < values[j-1]) {
				exchange(values, j-1, j)
			}
		}
	}
}

function insertionSortImprove(values) {
	for (var i = 1; i <= values.length - 1; i++) {
		var next = values[i]
		for (var j = i - 1; j>=0; j--) {
			if (next < values[j]) {
				values[j + 1] = values[j]
			} else {
				break;
			}
		}
		values[j+1] = next
	}
}

function exchange(values, index1, index2) {
	var tmp = values[index2]
	values[index2] = values[index1]
	values[index1] = tmp
}

exports.exahnge = exchange
exports.selectionSort = selectionSort
exports.insertionSort = insertionSort
exports.insertionSortImprove = insertionSortImprove

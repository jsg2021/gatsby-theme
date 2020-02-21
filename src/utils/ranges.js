/**
 *
 * @generator
 * @param {number} start
 * @param {number} end
 * @yeilds {number} The next number in the range
 */
export function* range(start, end) {
	let x = start;
	while (x++ < end) {
		yield x;
	}
}

/**
 * This callback returns anything for the given item. Use it to render or map one to another.
 * @callback generateItems~render
 * @param {*} item - the current iterated item.
 * @returns {*}
 */

/**
 * Generate things
 * @generator
 * @param {number|Iterator} iter Some iterable
 * @param {generateItems~render} render
 * @yeilds {*} The next value in the iteration.
 */
export function* generateItems(iter, render) {
	if (typeof iter === 'number') {
		iter = range(0, iter);
	}

	for (const x of iter) {
		yield render(x);
	}
}

/**
 * Given a currentIndex compute the range around it given some bounds.
 *
 * @generator
 * @param {number} windowSize
 * @param {number} currentIndex
 * @param {number} total
 * @yeilds {number} The next number in the windowed range
 */
export function computeRangeWindow(windowSize, currentIndex, total) {
	const start = Math.max(0, currentIndex - Math.ceil(windowSize / 2));
	const end = Math.min(start + windowSize, total);
	const size = start - end;
	return range(
		size < windowSize
			? end - windowSize // backfill
			: start,
		end,
	);
}

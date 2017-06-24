import {getWidthOfPercentAsTotalWidth} from './percentUtils';

describe('getWidthOfPercentAsTotalWidth', () => {
	test('should return 250 with total width of 500 and percent of 50', () =>{
		const width = getWidthOfPercentAsTotalWidth(50, 500)
		expect(width).toEqual(250)
	})
})
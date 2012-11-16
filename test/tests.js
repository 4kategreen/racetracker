// Test ideas:
// graph takes pre-defined arguments settings.graphId and data
// test data malformed
// test all/each jqPlot and javascript missing
// test jqPlot worked?
module('graph method');
test('data is valid',function() {
	equals($('#racetracker').racetracker(data,[],'not an array')
});

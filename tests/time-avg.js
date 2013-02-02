

var tavg = require('../lib/time-avg.js');

exports.avg = function(t) {
    var av = tavg(4), res = [];
    for (var k = 1; k <= 10; ++k) {
        res.push(av(k,k));
    }
    var expected = [1,1.5,2,2.5,3.5,4.5,5.5,6.5,7.5,8.5];
    for (var k = 0; k < 10; ++k) {
        t.ok(res[k] == expected[k], 'value ' + k + 'should be ' + expected[k] + ', is ' + res[k]);
    }
    t.done();
};



var ARecordVU = require('./lib/arecord-vu'),
    TimeAvg = require('./lib/time-avg');


var vu = ARecordVU();

function db(n) { return 10 * Math.log(n) / Math.log(10); }

var short = TimeAvg(3000),
    long = TimeAvg(300000); // 5 minutes

vu.on('volume', function(vol) {
    var now = Date.now(),
        avg3s = short(vol, now),
        avg5m = long(vol, now),
        decibels = db(avg3s / avg5m);

    if (decibels > 4) 
        console.log("WARNING! TOO LOUD!");

});


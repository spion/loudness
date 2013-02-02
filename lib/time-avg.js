module.exports = function(dt) {
    var samples = [],
        avg = 0;
    return function(v, t) {
        var now = t || Date.now();
        avg += v;
        samples.push({val: v, time: t });
        while (samples.length > 1 && now - samples[0].time >= dt) 
            avg -= samples.shift().val;
        return avg / samples.length;
    };
};

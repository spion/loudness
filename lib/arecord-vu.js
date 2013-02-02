var http = require('http'),
    cp = require('child_process'),
    EE = require('events').EventEmitter;

module.exports = function() {
    var self = new EE();
    var audio = cp.spawn('arecord', ['-t', 'raw', '-f', 'U8', '-q']);
    audio.stderr.pipe(process.stdout);
    audio.stdout.on('data', function(d) {
        var a = 0;
        for (var k = 0; k < d.length; ++k) {
            var sample = d.readUInt8(k) - 128;
            a += sample * sample;
        }
        self.emit('volume', Math.sqrt(a / d.length));
    });
    return self;
}

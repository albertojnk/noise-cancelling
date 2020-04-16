


var handler = function(stream) {

    var context = new AudioContext;
    var recorder = context.createScriptProcessor(1024, 1, 1);
    recorder.connect(context.destination);

    var source = context.createMediaStreamSource(stream);
    // var gain = context.createGain();

    // source.connect(gain);
    source.connect(recorder);
    source.connect(context.destination);

    recorder.onaudioprocess = function(e) {
        console.log(e.inputBuffer.getChannelData(0).buffer);
        // console.log(context.sam);
        
    }
    
}

navigator.mediaDevices.getUserMedia({audio: true, video: false}).then(handler)
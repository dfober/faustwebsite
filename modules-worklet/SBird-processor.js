
/*
Code generated with Faust version 2.5.17
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSBird() {
	return "{\"name\":\"bird\",\"version\":\"2.5.17\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"279172\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"author\":\"Pierre Cochard\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"bird\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"hgroup\",\"label\":\"Bird\",\"items\":[{\"type\":\"hslider\",\"label\":\"Speed (Granulator)\",\"address\":\"/Bird/Speed_(Granulator)\",\"index\":\"262192\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"240\",\"min\":\"120\",\"max\":\"480\",\"step\":\"0.1\"},{\"type\":\"hslider\",\"label\":\"Probability (Granulator)\",\"address\":\"/Bird/Probability_(Granulator)\",\"index\":\"262220\",\"meta\":[{\"2\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"%\"}],\"init\":\"50\",\"min\":\"25\",\"max\":\"100\",\"step\":\"1\"}]}]}";
}
function getBase64CodeSBird() { return "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In0seyJub2lzZXMubGliL25hbWUiOiJGYXVzdCBOb2lzZSBHZW5lcmF0b3IgTGlicmFyeSJ9LHsibm9pc2VzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJvc2NpbGxhdG9ycy5saWIvbmFtZSI6IkZhdXN0IE9zY2lsbGF0b3IgTGlicmFyeSJ9LHsib3NjaWxsYXRvcnMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn1dLCJ1aSI6W3sidHlwZSI6Imhncm91cCIsImxhYmVsIjoiQmlyZCIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiU3BlZWQgKEdyYW51bGF0b3IpIiwiYWRkcmVzcyI6Ii9CaXJkL1NwZWVkXyhHcmFudWxhdG9yKSIsImluZGV4IjoiMjYyMTkyIiwibWV0YSI6W3siMSI6IiJ9LHsiYWNjIjoiMCAxIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIyNDAiLCJtaW4iOiIxMjAiLCJtYXgiOiI0ODAiLCJzdGVwIjoiMC4xIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUHJvYmFiaWxpdHkgKEdyYW51bGF0b3IpIiwiYWRkcmVzcyI6Ii9CaXJkL1Byb2JhYmlsaXR5XyhHcmFudWxhdG9yKSIsImluZGV4IjoiMjYyMjIwIiwibWV0YSI6W3siMiI6IiJ9LHsiYWNjIjoiMCAxIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifSx7InVuaXQiOiIlIn1dLCJpbml0IjoiNTAiLCJtaW4iOiIyNSIsIm1heCI6IjEwMCIsInN0ZXAiOiIxIn1dfV19MA=="; }

/*
 faust2wasm
 Additional code: GRAME 2017
*/
 
'use strict';

// Monophonic Faust DSP
class SBirdProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            SBirdProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            SBirdProcessor.parse_items(group.items, obj, callback);
        }
    }
    
    static parse_items(items, obj, callback)
    {
        for (var i = 0; i < items.length; i++) {
            callback(items[i], obj, callback);
        }
    }
    
    static parse_item1(item, obj, callback)
    {
        if (item.type === "vgroup"
            || item.type === "hgroup"
            || item.type === "tgroup") {
            SBirdProcessor.parse_items(item.items, obj, callback);
        } else if (item.type === "hbargraph"
                   || item.type === "vbargraph") {
            // Nothing
        } else if (item.type === "vslider"
                   || item.type === "hslider"
                   || item.type === "button"
                   || item.type === "checkbox"
                   || item.type === "nentry") {
            obj.push({ name: item.address,
                     defaultValue: item.init,
                     minValue: item.min,
                     maxValue: item.max });
        }
    }
    
    static parse_item2(item, obj, callback)
    {
        if (item.type === "vgroup"
            || item.type === "hgroup"
            || item.type === "tgroup") {
            SBirdProcessor.parse_items(item.items, obj, callback);
        } else if (item.type === "hbargraph"
                   || item.type === "vbargraph") {
            // Keep bargraph adresses
            obj.outputs_items.push(item.address);
            obj.pathTable[item.address] = parseInt(item.index);
        } else if (item.type === "vslider"
                   || item.type === "hslider"
                   || item.type === "button"
                   || item.type === "checkbox"
                   || item.type === "nentry") {
            // Keep inputs adresses
            obj.inputs_items.push(item.address);
            obj.pathTable[item.address] = parseInt(item.index);
            if (item.meta !== undefined) {
                for (var i = 0; i < item.meta.length; i++) {
                    if (item.meta[i].midi !== undefined) {
                        if (item.meta[i].midi.trim() === "pitchwheel") {
                            obj.fPitchwheelLabel.push(item.address);
                        } else if (item.meta[i].midi.trim().split(" ")[0] === "ctrl") {
                            obj.fCtrlLabel[parseInt(item.meta[i].midi.trim().split(" ")[1])]
                                .push({ path:item.address,
                                      min:parseFloat(item.min),
                                      max:parseFloat(item.max) });
                        }
                    }
                }
            }
        }
    }
    
    static b64ToUint6(nChr)
    {
        return nChr > 64 && nChr < 91 ?
        nChr - 65
        : nChr > 96 && nChr < 123 ?
        nChr - 71
        : nChr > 47 && nChr < 58 ?
        nChr + 4
        : nChr === 43 ?
        62
        : nChr === 47 ?
        63
        :
        0;
    }
    
    static atob(sBase64, nBlocksSize)
    {
        if (typeof atob === 'function') {
            return atob(sBase64);
        } else {
            
            var sB64Enc = sBase64.replace(/[^A-Za-z0-9\+\/]/g, "");
            var nInLen = sB64Enc.length;
            var nOutLen = nBlocksSize ? Math.ceil((nInLen * 3 + 1 >> 2) / nBlocksSize) * nBlocksSize : nInLen * 3 + 1 >> 2;
            var taBytes = new Uint8Array(nOutLen);
            
            for (var nMod3, nMod4, nUint24 = 0, nOutIdx = 0, nInIdx = 0; nInIdx < nInLen; nInIdx++) {
                nMod4 = nInIdx & 3;
                nUint24 |= SBirdProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
                if (nMod4 === 3 || nInLen - nInIdx === 1) {
                    for (nMod3 = 0; nMod3 < 3 && nOutIdx < nOutLen; nMod3++, nOutIdx++) {
                        taBytes[nOutIdx] = nUint24 >>> (16 >>> nMod3 & 24) & 255;
                    }
                    nUint24 = 0;
                }
            }
            return taBytes.buffer;
        }
    }
    
    static remap(v, mn0, mx0, mn1, mx1)
    {
        return (1.0 * (v - mn0) / (mx0 - mn0)) * (mx1 - mn1) + mn1;
    }
   
    static get parameterDescriptors () 
    {
        // Analyse JSON to generate AudioParam parameters
        var params = [];
        SBirdProcessor.parse_ui(JSON.parse(getJSONSBird()).ui, params, SBirdProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONSBird());

        this.output_handler = function(path, value) { this.port.postMessage({ path: path, value: value }); };
        
        this.ins = null;
        this.outs = null;

        this.dspInChannnels = [];
        this.dspOutChannnels = [];

        this.fPitchwheelLabel = [];
        this.fCtrlLabel = new Array(128);
        for (var i = 0; i < this.fCtrlLabel.length; i++) { this.fCtrlLabel[i] = []; }

        this.numIn = parseInt(this.json_object.inputs);
        this.numOut = parseInt(this.json_object.outputs);

        // Memory allocator
        this.ptr_size = 4;
        this.sample_size = 4;
        
        this.factory = SBirdProcessor.SBird_instance.exports;
        this.HEAP = SBirdProcessor.SBird_instance.exports.memory.buffer;
        this.HEAP32 = new Int32Array(this.HEAP);
        this.HEAPF32 = new Float32Array(this.HEAP);

        console.log(this.HEAP);
        console.log(this.HEAP32);
        console.log(this.HEAPF32);

        // bargraph
        this.outputs_timer = 5;
        this.outputs_items = [];

        // input items
        this.inputs_items = [];

        // Start of HEAP index

        // DSP is placed first with index 0. Audio buffer start at the end of DSP.
        this.audio_heap_ptr = parseInt(this.json_object.size);

        // Setup pointers offset
        this.audio_heap_ptr_inputs = this.audio_heap_ptr;
        this.audio_heap_ptr_outputs = this.audio_heap_ptr_inputs + (this.numIn * this.ptr_size);

        // Setup buffer offset
        this.audio_heap_inputs = this.audio_heap_ptr_outputs + (this.numOut * this.ptr_size);
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * SBirdProcessor.buffer_size * this.sample_size);

        // Start of DSP memory : DSP is placed first with index 0
        this.dsp = 0;

        this.pathTable = [];

        // Send output values to the AudioNode
        this.update_outputs = function ()
        {
            if (this.outputs_items.length > 0 && this.output_handler && this.outputs_timer-- === 0) {
                this.outputs_timer = 5;
                for (var i = 0; i < this.outputs_items.length; i++) {
                    this.output_handler(this.outputs_items[i], this.HEAPF32[this.pathTable[this.outputs_items[i]] >> 2]);
                }
            }
        }
        
        this.initAux = function ()
        {
            var i;
            
            if (this.numIn > 0) {
                this.ins = this.audio_heap_ptr_inputs;
                for (i = 0; i < this.numIn; i++) {
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((SBirdProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + SBirdProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((SBirdProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + SBirdProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            SBirdProcessor.parse_ui(this.json_object.ui, this, SBirdProcessor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.ctrlChange = function (channel, ctrl, value)
        {
            if (this.fCtrlLabel[ctrl] !== []) {
                for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                    var path = this.fCtrlLabel[ctrl][i].path;
                    this.setParamValue(path, SBirdProcessor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
                    if (this.output_handler) {
                   		this.output_handler(path, this.getParamValue(path));
                   	}
                }
            }
        }

        this.pitchWheel = function (channel, wheel)
        {
            for (var i = 0; i < this.fPitchwheelLabel.length; i++) {
                var path = this.fPitchwheelLabel[i];
                this.setParamValue(path, Math.pow(2.0, wheel/12.0));
                if (this.output_handler) {
                   	this.output_handler(path, this.getParamValue(path));
                }
            }
        }

        this.setParamValue = function (path, val)
        {
            this.HEAPF32[this.pathTable[path]] = val;
        }

        this.getParamValue = function (path)
        {
            return this.HEAPF32[this.pathTable[path]];
        }

        // Init resulting DSP
        this.initAux();

        // Set message handler
        this.port.onmessage = this.handleMessage.bind(this);
    }
    
    handleMessage(event) 
    {
        var msg = event.data;
        switch (msg.type) {
            // Generic MIDI message
            case "midi": this.midiMessage(msg.data); break;
            // Typed MIDI message
            case "keyOn": this.keyOn(msg.data[0], msg.data[1], msg.data[2]); break;
            case "keyOff": this.keyOff(msg.data[0], msg.data[1], msg.data[2]); break;
            case "ctrlChange": this.ctrlChange(msg.data[0], msg.data[1], msg.data[2]); break;
            case "pitchWheel": this.pitchWheel(msg.data[0], msg.data[1]); break;
            // Generic data message
            case "param": this.setParamValue(msg.key, msg.value); break;
            //case "patch": this.onpatch(msg.data); break;
        }
    }
    
    midiMessage(data)
    {
        var cmd = data[0] >> 4;
        var channel = data[0] & 0xf;
        var data1 = data[1];
        var data2 = data[2];
        
        if (channel === 9) {
            return;
        } else if (cmd === 8 || ((cmd === 9) && (data2 === 0))) {
            //this.keyOff(channel, data1, data2);
        } else if (cmd === 9) {
            //this.keyOn(channel, data1, data2);
        } else if (cmd === 11) {
            //this.ctrlChange(channel, data1, data2);
        } else if (cmd === 14) {
            //this.pitchWheel(channel, ((data2 * 128.0 + data1)-8192)/8192.0);
        }
    }
    
    process(inputs, outputs, parameters) 
    {
        var input = inputs[0];
        var output = outputs[0];
        
        // Copy inputs
        if (input !== undefined) {
            for (var chan = 0; chan < Math.min(this.numIn, input.length) ; ++chan) {
                var dspInput = this.dspInChannnels[chan];
                dspInput.set(input[chan]);
            }
        }
        
        // Update controls (possibly needed for sample accurate control)
        var params = Object.entries(parameters);
        for (var i = 0; i < params.length; i++) {
            this.HEAPF32[this.pathTable[params[i][0]] >> 2] = params[i][1][0];
        }
        
        // Compute
        this.factory.compute(this.dsp, SBirdProcessor.buffer_size, this.ins, this.outs);
        
        // Update bargraph
        this.update_outputs();
        
        // Copy outputs
        if (output !== undefined) {
            //console.log("output.length " + output.length);
            for (var chan = 0; chan < Math.min(this.numOut, output.length); ++chan) {
                var dspOutput = this.dspOutChannnels[chan];
                output[chan].set(dspOutput);
            }
        }
        
        return true;
    }
}

// Globals

SBirdProcessor.buffer_size = 128;

SBirdProcessor.importObject = {
    env: {
        memoryBase: 0,
        tableBase: 0,
            
        // Integer version
        _abs: Math.abs,
        
        // Float version
        _acosf: Math.acos,
        _asinf: Math.asin,
        _atanf: Math.atan,
        _atan2f: Math.atan2,
        _ceilf: Math.ceil,
        _cosf: Math.cos,
        _expf: Math.exp,
        _floorf: Math.floor,
        _fmodf: function(x, y) { return x % y; },
        _logf: Math.log,
        _log10f: Math.log10,
        _max_f: Math.max,
        _min_f: Math.min,
        _remainderf: function(x, y) { return x - Math.round(x/y) * y; },
        _powf: Math.pow,
        _roundf: Math.fround,
        _sinf: Math.sin,
        _sqrtf: Math.sqrt,
        _tanf: Math.tan,
           
        // Double version
        _acos: Math.acos,
        _asin: Math.asin,
        _atan: Math.atan,
        _atan2: Math.atan2,
        _ceil: Math.ceil,
        _cos: Math.cos,
        _exp: Math.exp,
        _floor: Math.floor,
        _fmod: function(x, y) { return x % y; },
        _log: Math.log,
        _log10: Math.log10,
        _max_: Math.max,
        _min_: Math.min,
        _remainder:function(x, y) { return x - Math.round(x/y) * y; },
        _pow: Math.pow,
        _round: Math.fround,
        _sin: Math.sin,
        _sqrt: Math.sqrt,
        _tan: Math.tan,
        
        table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
    }
};

// Synchronously compile and instantiate the WASM module
try {
    let wasm_module = new WebAssembly.Module(SBirdProcessor.atob(getBase64CodeSBird()));
    SBirdProcessor.SBird_instance = new WebAssembly.Instance(wasm_module, SBirdProcessor.importObject);
    registerProcessor('SBird', SBirdProcessor);
} catch (e) {
    console.log(e); console.log("Faust SBird cannot be loaded or compiled");
}


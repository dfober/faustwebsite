
/*
Code generated with Faust version 2.5.24
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSPulsaxophone() {
	return "{\"name\":\"Solo Pulsaxophone\",\"filename\":\"SPulsaxophone\",\"version\":\"2.5.24\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"17232\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"ER\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filename\":\"SPulsaxophone\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Solo Pulsaxophone\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"PULSAXO\",\"items\":[{\"type\":\"hgroup\",\"label\":\"Instrument\",\"items\":[{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/PULSAXO/Instrument/Frequency\",\"index\":\"708\",\"meta\":[{\"acc\":\"1 1 -12 0 10\"},{\"unit\":\"Hz\"}],\"init\":\"110\",\"min\":\"80\",\"max\":\"880\",\"step\":\"1\"}]},{\"type\":\"hgroup\",\"label\":\"Parameters\",\"items\":[{\"type\":\"hslider\",\"label\":\"Vibrato Frequency\",\"address\":\"/PULSAXO/Parameters/Vibrato_Frequency\",\"index\":\"672\",\"meta\":[{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"6\",\"min\":\"1\",\"max\":\"15\",\"step\":\"0.1\"}]},{\"type\":\"hgroup\",\"label\":\"Pulse\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Speed (Granulator)\",\"address\":\"/PULSAXO/Pulse/Speed_(Granulator)\",\"index\":\"60\",\"meta\":[{\"1\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"4\",\"min\":\"0.001\",\"max\":\"7\",\"step\":\"0.0001\"},{\"type\":\"hslider\",\"label\":\"Probability (Granulator)\",\"address\":\"/PULSAXO/Pulse/Probability_(Granulator)\",\"index\":\"32\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 0 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"%\"}],\"init\":\"88\",\"min\":\"75\",\"max\":\"100\",\"step\":\"1\"}]}]}]}";
}
function getBase64CodeSPulsaxophone() { return "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ZXMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJlbnZlbG9wZXMubGliL25hbWUiOiJGYXVzdCBFbnZlbG9wZSBMaWJyYXJ5In0seyJlbnZlbG9wZXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImZpbGVuYW1lIjoiU1B1bHNheG9waG9uZSJ9LHsiZmlsdGVycy5saWIvbmFtZSI6IkZhdXN0IEZpbHRlcnMgTGlicmFyeSJ9LHsiZmlsdGVycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiaW5zdHJ1bWVudHMubGliL2F1dGhvciI6IlJvbWFpbiBNaWNob24gKHJtaWNob25AY2NybWEuc3RhbmZvcmQuZWR1KSJ9LHsiaW5zdHJ1bWVudHMubGliL2NvcHlyaWdodCI6IlJvbWFpbiBNaWNob24ifSx7Imluc3RydW1lbnRzLmxpYi9saWNlbmNlIjoiU1RLLTQuMyJ9LHsiaW5zdHJ1bWVudHMubGliL25hbWUiOiJGYXVzdC1TVEsgVG9vbHMgTGlicmFyeSJ9LHsiaW5zdHJ1bWVudHMubGliL3ZlcnNpb24iOiIxLjAifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6IlNvbG8gUHVsc2F4b3Bob25lIn0seyJub2lzZXMubGliL25hbWUiOiJGYXVzdCBOb2lzZSBHZW5lcmF0b3IgTGlicmFyeSJ9LHsibm9pc2VzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJvc2NpbGxhdG9ycy5saWIvbmFtZSI6IkZhdXN0IE9zY2lsbGF0b3IgTGlicmFyeSJ9LHsib3NjaWxsYXRvcnMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiUFVMU0FYTyIsIml0ZW1zIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJJbnN0cnVtZW50IiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJGcmVxdWVuY3kiLCJhZGRyZXNzIjoiL1BVTFNBWE8vSW5zdHJ1bWVudC9GcmVxdWVuY3kiLCJpbmRleCI6IjcwOCIsIm1ldGEiOlt7ImFjYyI6IjEgMSAtMTIgMCAxMCJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiMTEwIiwibWluIjoiODAiLCJtYXgiOiI4ODAiLCJzdGVwIjoiMSJ9XX0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJQYXJhbWV0ZXJzIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJWaWJyYXRvIEZyZXF1ZW5jeSIsImFkZHJlc3MiOiIvUFVMU0FYTy9QYXJhbWV0ZXJzL1ZpYnJhdG9fRnJlcXVlbmN5IiwiaW5kZXgiOiI2NzIiLCJtZXRhIjpbeyJhY2MiOiIwIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiNiIsIm1pbiI6IjEiLCJtYXgiOiIxNSIsInN0ZXAiOiIwLjEifV19LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiUHVsc2UiLCJtZXRhIjpbeyIyIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlNwZWVkIChHcmFudWxhdG9yKSIsImFkZHJlc3MiOiIvUFVMU0FYTy9QdWxzZS9TcGVlZF8oR3JhbnVsYXRvcikiLCJpbmRleCI6IjYwIiwibWV0YSI6W3siMSI6IiJ9LHsiYWNjIjoiMCAxIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjQiLCJtaW4iOiIwLjAwMSIsIm1heCI6IjciLCJzdGVwIjoiMC4wMDAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUHJvYmFiaWxpdHkgKEdyYW51bGF0b3IpIiwiYWRkcmVzcyI6Ii9QVUxTQVhPL1B1bHNlL1Byb2JhYmlsaXR5XyhHcmFudWxhdG9yKSIsImluZGV4IjoiMzIiLCJtZXRhIjpbeyIyIjoiIn0seyJhY2MiOiIxIDAgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9LHsidW5pdCI6IiUifV0sImluaXQiOiI4OCIsIm1pbiI6Ijc1IiwibWF4IjoiMTAwIiwic3RlcCI6IjEifV19XX1dfTA="; }

/*
 faust2wasm
 Additional code: GRAME 2017
*/
 
'use strict';

// Monophonic Faust DSP
class SPulsaxophoneProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            SPulsaxophoneProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            SPulsaxophoneProcessor.parse_items(group.items, obj, callback);
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
            SPulsaxophoneProcessor.parse_items(item.items, obj, callback);
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
            SPulsaxophoneProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= SPulsaxophoneProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        SPulsaxophoneProcessor.parse_ui(JSON.parse(getJSONSPulsaxophone()).ui, params, SPulsaxophoneProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONSPulsaxophone());

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
        
        this.factory = SPulsaxophoneProcessor.SPulsaxophone_instance.exports;
        this.HEAP = SPulsaxophoneProcessor.SPulsaxophone_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * SPulsaxophoneProcessor.buffer_size * this.sample_size);

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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((SPulsaxophoneProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + SPulsaxophoneProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((SPulsaxophoneProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + SPulsaxophoneProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            SPulsaxophoneProcessor.parse_ui(this.json_object.ui, this, SPulsaxophoneProcessor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.ctrlChange = function (channel, ctrl, value)
        {
            if (this.fCtrlLabel[ctrl] !== []) {
                for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                    var path = this.fCtrlLabel[ctrl][i].path;
                    this.setParamValue(path, SPulsaxophoneProcessor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
        this.factory.compute(this.dsp, SPulsaxophoneProcessor.buffer_size, this.ins, this.outs);
        
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

SPulsaxophoneProcessor.buffer_size = 128;

SPulsaxophoneProcessor.importObject = {
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
    let wasm_module = new WebAssembly.Module(SPulsaxophoneProcessor.atob(getBase64CodeSPulsaxophone()));
    SPulsaxophoneProcessor.SPulsaxophone_instance = new WebAssembly.Instance(wasm_module, SPulsaxophoneProcessor.importObject);
    registerProcessor('SPulsaxophone', SPulsaxophoneProcessor);
} catch (e) {
    console.log(e); console.log("Faust SPulsaxophone cannot be loaded or compiled");
}


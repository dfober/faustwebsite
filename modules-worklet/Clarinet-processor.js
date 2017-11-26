
/*
Code generated with Faust version 2.5.7
Compilation options: -scal -ftz 2
*/

function getJSONClarinet() {
	return "{\"name\":\"Clarinet\",\"version\":\"2.5.7\",\"options\":\"-scal -ftz 2\",\"size\":\"877268\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"author\":\"Romain Michon\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Nonlinear WaveGuide Clarinet\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Clarinet\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"reference\":\"https://ccrma.stanford.edu/~jos/pasp/Woodwinds.html\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"CLARINET\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF (ASR Envelope)\",\"address\":\"/CLARINET/ON/OFF_(ASR_Envelope)\",\"index\":\"131192\",\"meta\":[{\"1\":\"\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hgroup\",\"label\":\"Instrument\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/CLARINET/Instrument/Frequency\",\"index\":\"131284\",\"meta\":[{\"acc\":\"1 1 -14 0 12\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"110\",\"max\":\"1300\",\"step\":\"0.01\"}]},{\"type\":\"hgroup\",\"label\":\"Parameters\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Pressure\",\"address\":\"/CLARINET/Parameters/Pressure\",\"index\":\"131156\",\"meta\":[{\"acc\":\"1 0 -5 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.8\",\"min\":\"0.65\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Breath Noise\",\"address\":\"/CLARINET/Parameters/Breath_Noise\",\"index\":\"131268\",\"meta\":[{\"acc\":\"0 1 -12 0 12\"},{\"style\":\"knob\"}],\"init\":\"0.02\",\"min\":\"0\",\"max\":\"0.12\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Instrument Stiffness\",\"address\":\"/CLARINET/Parameters/Instrument_Stiffness\",\"index\":\"131304\",\"meta\":[{\"acc\":\"0 1 -12 0 12\"},{\"style\":\"knob\"}],\"init\":\"0.25\",\"min\":\"0.01\",\"max\":\"1\",\"step\":\"0.01\"}]},{\"type\":\"hgroup\",\"label\":\"Reverb\",\"meta\":[{\"4\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Reverberation Volume (InstrReverb)\",\"address\":\"/CLARINET/Reverb/Reverberation_Volume_(InstrReverb)\",\"index\":\"164076\",\"meta\":[{\"acc\":\"1 1 -15 0 15\"},{\"style\":\"knob\"}],\"init\":\"0.137\",\"min\":\"0.05\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Reverberation Room Size (InstrReverb)\",\"address\":\"/CLARINET/Reverb/Reverberation_Room_Size_(InstrReverb)\",\"index\":\"32\",\"meta\":[{\"acc\":\"1 1 -15 0 15\"},{\"style\":\"knob\"}],\"init\":\"0.45\",\"min\":\"0.05\",\"max\":\"2\",\"step\":\"0.01\"}]}]}]}";
}
function getBase64CodeClarinet() { return "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biI6Ik5vbmxpbmVhciBXYXZlR3VpZGUgQ2xhcmluZXQifSx7ImVudmVsb3Blcy5saWIvYXV0aG9yIjoiR1JBTUUifSx7ImVudmVsb3Blcy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7ImVudmVsb3Blcy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7ImVudmVsb3Blcy5saWIvbmFtZSI6IkZhdXN0IEVudmVsb3BlIExpYnJhcnkifSx7ImVudmVsb3Blcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZmlsdGVycy5saWIvbmFtZSI6IkZhdXN0IEZpbHRlcnMgTGlicmFyeSJ9LHsiZmlsdGVycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiaW5zdHJ1bWVudHMubGliL2F1dGhvciI6IlJvbWFpbiBNaWNob24gKHJtaWNob25AY2NybWEuc3RhbmZvcmQuZWR1KSJ9LHsiaW5zdHJ1bWVudHMubGliL2NvcHlyaWdodCI6IlJvbWFpbiBNaWNob24ifSx7Imluc3RydW1lbnRzLmxpYi9saWNlbmNlIjoiU1RLLTQuMyJ9LHsiaW5zdHJ1bWVudHMubGliL25hbWUiOiJGYXVzdC1TVEsgVG9vbHMgTGlicmFyeSJ9LHsiaW5zdHJ1bWVudHMubGliL3ZlcnNpb24iOiIxLjAifSx7ImxpY2VuY2UiOiJTVEstNC4zIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJDbGFyaW5ldCJ9LHsibm9pc2VzLmxpYi9uYW1lIjoiRmF1c3QgTm9pc2UgR2VuZXJhdG9yIExpYnJhcnkifSx7Im5vaXNlcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsib3NjaWxsYXRvcnMubGliL25hbWUiOiJGYXVzdCBPc2NpbGxhdG9yIExpYnJhcnkifSx7Im9zY2lsbGF0b3JzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJyZWZlcmVuY2UiOiJodHRwczovL2Njcm1hLnN0YW5mb3JkLmVkdS9+am9zL3Bhc3AvV29vZHdpbmRzLmh0bWwifSx7InJldmVyYnMubGliL25hbWUiOiJGYXVzdCBSZXZlcmIgTGlicmFyeSJ9LHsicmV2ZXJicy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsicm91dGVzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsicm91dGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsidmVyc2lvbiI6IjEuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6IkNMQVJJTkVUIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJPTi9PRkYgKEFTUiBFbnZlbG9wZSkiLCJhZGRyZXNzIjoiL0NMQVJJTkVUL09OL09GRl8oQVNSX0VudmVsb3BlKSIsImluZGV4IjoiMTMxMTkyIiwibWV0YSI6W3siMSI6IiJ9XSwiaW5pdCI6IjAiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJJbnN0cnVtZW50IiwibWV0YSI6W3siMiI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJGcmVxdWVuY3kiLCJhZGRyZXNzIjoiL0NMQVJJTkVUL0luc3RydW1lbnQvRnJlcXVlbmN5IiwiaW5kZXgiOiIxMzEyODQiLCJtZXRhIjpbeyJhY2MiOiIxIDEgLTE0IDAgMTIifSx7InRvb2x0aXAiOiJUb25lIGZyZXF1ZW5jeSJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiNDQwIiwibWluIjoiMTEwIiwibWF4IjoiMTMwMCIsInN0ZXAiOiIwLjAxIn1dfSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IlBhcmFtZXRlcnMiLCJtZXRhIjpbeyIzIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlByZXNzdXJlIiwiYWRkcmVzcyI6Ii9DTEFSSU5FVC9QYXJhbWV0ZXJzL1ByZXNzdXJlIiwiaW5kZXgiOiIxMzExNTYiLCJtZXRhIjpbeyJhY2MiOiIxIDAgLTUgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC44IiwibWluIjoiMC42NSIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkJyZWF0aCBOb2lzZSIsImFkZHJlc3MiOiIvQ0xBUklORVQvUGFyYW1ldGVycy9CcmVhdGhfTm9pc2UiLCJpbmRleCI6IjEzMTI2OCIsIm1ldGEiOlt7ImFjYyI6IjAgMSAtMTIgMCAxMiJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC4wMiIsIm1pbiI6IjAiLCJtYXgiOiIwLjEyIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJJbnN0cnVtZW50IFN0aWZmbmVzcyIsImFkZHJlc3MiOiIvQ0xBUklORVQvUGFyYW1ldGVycy9JbnN0cnVtZW50X1N0aWZmbmVzcyIsImluZGV4IjoiMTMxMzA0IiwibWV0YSI6W3siYWNjIjoiMCAxIC0xMiAwIDEyIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjI1IiwibWluIjoiMC4wMSIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9XX0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJSZXZlcmIiLCJtZXRhIjpbeyI0IjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJldmVyYmVyYXRpb24gVm9sdW1lIChJbnN0clJldmVyYikiLCJhZGRyZXNzIjoiL0NMQVJJTkVUL1JldmVyYi9SZXZlcmJlcmF0aW9uX1ZvbHVtZV8oSW5zdHJSZXZlcmIpIiwiaW5kZXgiOiIxNjQwNzYiLCJtZXRhIjpbeyJhY2MiOiIxIDEgLTE1IDAgMTUifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuMTM3IiwibWluIjoiMC4wNSIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlJldmVyYmVyYXRpb24gUm9vbSBTaXplIChJbnN0clJldmVyYikiLCJhZGRyZXNzIjoiL0NMQVJJTkVUL1JldmVyYi9SZXZlcmJlcmF0aW9uX1Jvb21fU2l6ZV8oSW5zdHJSZXZlcmIpIiwiaW5kZXgiOiIzMiIsIm1ldGEiOlt7ImFjYyI6IjEgMSAtMTUgMCAxNSJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC40NSIsIm1pbiI6IjAuMDUiLCJtYXgiOiIyIiwic3RlcCI6IjAuMDEifV19XX1dfTA="; }

/*
 faust2wasm
 Additional code: GRAME 2017
*/
 
'use strict';

var faust = faust || {};

faust.error_msg = null;
faust.getErrorMessage = function() { return faust.error_msg; };

// Audio buffer size
faust.buffer_size = 128;

faust.importObject = {
    env: {
        memoryBase: 0,
        tableBase: 0,
            
        absf: Math.abs,
        acosf: Math.acos,
        asinf: Math.asin,
        atanf: Math.atan,
        atan2f: Math.atan2,
        ceilf: Math.ceil,
        cosf: Math.cos,
        expf: Math.exp,
        floorf: Math.floor,
        fmodf: function(x, y) { return x % y; },
        logf: Math.log,
        log10f: Math.log10,
        max_f: Math.max,
        min_f: Math.min,
        remainderf: function(x, y) { return x - Math.round(x/y) * y; },
        powf: Math.pow,
        roundf: Math.fround,
        sinf: Math.sin,
        sqrtf: Math.sqrt,
        tanf: Math.tan,
            
        abs: Math.abs,
        acos: Math.acos,
        asin: Math.asin,
        atan: Math.atan,
        atan2: Math.atan2,
        ceil: Math.ceil,
        cos: Math.cos,
        exp: Math.exp,
        floor: Math.floor,
        fmod: function(x, y) { return x % y; },
        log: Math.log,
        log10: Math.log10,
        max_: Math.max,
        min_: Math.min,
        remainder:function(x, y) { return x - Math.round(x/y) * y; },
        pow: Math.pow,
        round: Math.fround,
        sin: Math.sin,
        sqrt: Math.sqrt,
        tan: Math.tan,
            
        table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
    }
};

faust.b64ToUint6 = function (nChr)
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

faust.atob = function (sBase64, nBlocksSize)
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
            nUint24 |= faust.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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

// WebAssembly instance
faust.Clarinet_instance = null;

// Monophonic Faust DSP
class ClarinetProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            ClarinetProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            ClarinetProcessor.parse_items(group.items, obj, callback);
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
            ClarinetProcessor.parse_items(item.items, obj, callback);
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
            ClarinetProcessor.parse_items(item.items, obj, callback);
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
        }
    }
    
    static get parameterDescriptors () {
        
        // Analyse JSON to generate AudioParam parameters
        var params = [];
        ClarinetProcessor.parse_ui(JSON.parse(getJSONClarinet()).ui, params, ClarinetProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
        
        this.json_object = JSON.parse(getJSONClarinet());
        
        this.output_handler = null;
        this.ins = null;
        this.outs = null;
        
        this.dspInChannnels = [];
        this.dspOutChannnels = [];
        
        this.numIn = parseInt(this.json_object.inputs);
        this.numOut = parseInt(this.json_object.outputs);
        
        // Memory allocator
        this.ptr_size = 4;
        this.sample_size = 4;
        
        this.factory = faust.Clarinet_instance.exports;
        this.HEAP = faust.Clarinet_instance.exports.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * faust.buffer_size * this.sample_size);
        
        // Start of DSP memory : DSP is placed first with index 0
        this.dsp = 0;
        
        this.pathTable = [];
        
        // TODO: send output values to the AudioNode
        this.update_outputs = function ()
        {
            if (this.outputs_items.length > 0 && this.output_handler && this.outputs_timer-- === 0) {
                this.outputs_timer = 5;
                for (var i = 0; i < this.outputs_items.length; i++) {
                    this.output_handler(this.outputs_items[i], this.factory.getParamValue(this.dsp, this.pathTable[this.outputs_items[i]]));
                }
            }
        }
        
        this.initAux = function ()
        {
            var i;
            
            if (this.numIn > 0) {
                this.ins = this.audio_heap_ptr_inputs;
                for (i = 0; i < this.numIn; i++) {
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((faust.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + faust.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((faust.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + faust.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            ClarinetProcessor.parse_ui(this.json_object.ui, this, ClarinetProcessor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }
       
        // Init resulting DSP
        this.initAux();
    }
    
    process(inputs, outputs, parameters) {
        
        var input = inputs[0];
        var output = outputs[0];
        
        // Copy inputs
        if (input !== undefined) {
            for (var channel = 0; channel < input.length; ++channel) {
                var dspInput = this.dspInChannnels[channel];
                dspInput.set(input[channel]);
            }
        }
        
        // Update controls
        var params = Object.entries(parameters);
        for (var i = 0; i < params.length; i++) {
            this.HEAPF32[this.pathTable[params[i][0]] >> 2] = params[i][1][0];
        }
        
        // Compute
        this.factory.compute(this.dsp, 128, this.ins, this.outs);
        
        // Copy outputs
        if (output !== undefined) {
            for (var channel = 0; channel < output.length; ++channel) {
                var dspOutput = this.dspOutChannnels[channel];
                output[channel].set(dspOutput);
            }
        }
        
        return true;
    }
}

// Compile wasm binary module
WebAssembly.instantiate(faust.atob(getBase64CodeClarinet()), faust.importObject)
            .then(dsp_module => {
                  faust.Clarinet_instance = dsp_module.instance;
                  registerProcessor('Clarinet', ClarinetProcessor);
            })
            .catch(function(error) { console.log(error); console.log("Faust Clarinet cannot be loaded or compiled"); });

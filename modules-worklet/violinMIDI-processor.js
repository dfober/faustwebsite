
/*
Code generated with Faust version 2.5.24
Compilation options: wasm-eb, -scal -ftz 2
*/

function getJSONviolinMIDI() {
	return "{\"name\":\"ViolinMidi\",\"filename\":\"violinMIDI\",\"version\":\"2.5.24\",\"options\":\"wasm-eb, -scal -ftz 2\",\"size\":\"33028\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"(c)Romain Michon, CCRMA (Stanford University), GRAME\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Simple MIDI-controllable violin physical model.\"},{\"filename\":\"violinMIDI\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"license\":\"MIT\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"ViolinMidi\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"violin\",\"items\":[{\"type\":\"hgroup\",\"label\":\"midi\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"freq\",\"address\":\"/violin/midi/freq\",\"index\":\"60\",\"meta\":[{\"0\":\"\"},{\"style\":\"knob\"}],\"init\":\"440\",\"min\":\"50\",\"max\":\"1000\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"bend\",\"address\":\"/violin/midi/bend\",\"index\":\"64\",\"meta\":[{\"1\":\"\"},{\"hidden\":\"1\"},{\"midi\":\"pitchwheel\"},{\"style\":\"knob\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"10\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"gain\",\"address\":\"/violin/midi/gain\",\"index\":\"136\",\"meta\":[{\"2\":\"\"},{\"style\":\"knob\"}],\"init\":\"0.6\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"envAttack\",\"address\":\"/violin/midi/envAttack\",\"index\":\"132\",\"meta\":[{\"3\":\"\"},{\"style\":\"knob\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"30\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"sustain\",\"address\":\"/violin/midi/sustain\",\"index\":\"72\",\"meta\":[{\"4\":\"\"},{\"hidden\":\"1\"},{\"midi\":\"ctrl 64\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]},{\"type\":\"hgroup\",\"label\":\"bow\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"pressure\",\"address\":\"/violin/bow/pressure\",\"index\":\"8376\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 1\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"position\",\"address\":\"/violin/bow/position\",\"index\":\"48\",\"meta\":[{\"1\":\"\"},{\"style\":\"knob\"}],\"init\":\"0.7\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"}]},{\"type\":\"hgroup\",\"label\":\"otherParams\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"vibratoFrequency\",\"address\":\"/violin/otherParams/vibratoFrequency\",\"index\":\"100\",\"meta\":[{\"0\":\"\"},{\"style\":\"knob\"}],\"init\":\"6\",\"min\":\"1\",\"max\":\"10\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"vibratoGain\",\"address\":\"/violin/otherParams/vibratoGain\",\"index\":\"92\",\"meta\":[{\"1\":\"\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"outGain\",\"address\":\"/violin/otherParams/outGain\",\"index\":\"0\",\"meta\":[{\"2\":\"\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"}]},{\"type\":\"button\",\"label\":\"gate\",\"address\":\"/violin/gate\",\"index\":\"68\",\"meta\":[{\"3\":\"\"}]}]}]}";
}
function getBase64CodeviolinMIDI() { return "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dCBCYXNpYyBFbGVtZW50IExpYnJhcnkifSx7ImJhc2ljcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiY29weXJpZ2h0IjoiKGMpUm9tYWluIE1pY2hvbiwgQ0NSTUEgKFN0YW5mb3JkIFVuaXZlcnNpdHkpLCBHUkFNRSJ9LHsiZGVsYXlzLmxpYi9uYW1lIjoiRmF1c3QgRGVsYXkgTGlicmFyeSJ9LHsiZGVsYXlzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJkZXNjcmlwdGlvbiI6IlNpbXBsZSBNSURJLWNvbnRyb2xsYWJsZSB2aW9saW4gcGh5c2ljYWwgbW9kZWwuIn0seyJmaWxlbmFtZSI6InZpb2xpbk1JREkifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7ImxpY2Vuc2UiOiJNSVQifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6IlZpb2xpbk1pZGkifSx7Im9zY2lsbGF0b3JzLmxpYi9uYW1lIjoiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5In0seyJvc2NpbGxhdG9ycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsicm91dGVzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsicm91dGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6InZpb2xpbiIsIml0ZW1zIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJtaWRpIiwibWV0YSI6W3siMCI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJmcmVxIiwiYWRkcmVzcyI6Ii92aW9saW4vbWlkaS9mcmVxIiwiaW5kZXgiOiI2MCIsIm1ldGEiOlt7IjAiOiIifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjQ0MCIsIm1pbiI6IjUwIiwibWF4IjoiMTAwMCIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiYmVuZCIsImFkZHJlc3MiOiIvdmlvbGluL21pZGkvYmVuZCIsImluZGV4IjoiNjQiLCJtZXRhIjpbeyIxIjoiIn0seyJoaWRkZW4iOiIxIn0seyJtaWRpIjoicGl0Y2h3aGVlbCJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMSIsIm1pbiI6IjAiLCJtYXgiOiIxMCIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiZ2FpbiIsImFkZHJlc3MiOiIvdmlvbGluL21pZGkvZ2FpbiIsImluZGV4IjoiMTM2IiwibWV0YSI6W3siMiI6IiJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC42IiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6ImVudkF0dGFjayIsImFkZHJlc3MiOiIvdmlvbGluL21pZGkvZW52QXR0YWNrIiwiaW5kZXgiOiIxMzIiLCJtZXRhIjpbeyIzIjoiIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIxIiwibWluIjoiMCIsIm1heCI6IjMwIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJzdXN0YWluIiwiYWRkcmVzcyI6Ii92aW9saW4vbWlkaS9zdXN0YWluIiwiaW5kZXgiOiI3MiIsIm1ldGEiOlt7IjQiOiIifSx7ImhpZGRlbiI6IjEifSx7Im1pZGkiOiJjdHJsIDY0In0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9XX0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJib3ciLCJtZXRhIjpbeyIxIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6InByZXNzdXJlIiwiYWRkcmVzcyI6Ii92aW9saW4vYm93L3ByZXNzdXJlIiwiaW5kZXgiOiI4Mzc2IiwibWV0YSI6W3siMCI6IiJ9LHsibWlkaSI6ImN0cmwgMSJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6InBvc2l0aW9uIiwiYWRkcmVzcyI6Ii92aW9saW4vYm93L3Bvc2l0aW9uIiwiaW5kZXgiOiI0OCIsIm1ldGEiOlt7IjEiOiIifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuNyIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDEifV19LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoib3RoZXJQYXJhbXMiLCJtZXRhIjpbeyIyIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6InZpYnJhdG9GcmVxdWVuY3kiLCJhZGRyZXNzIjoiL3Zpb2xpbi9vdGhlclBhcmFtcy92aWJyYXRvRnJlcXVlbmN5IiwiaW5kZXgiOiIxMDAiLCJtZXRhIjpbeyIwIjoiIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiI2IiwibWluIjoiMSIsIm1heCI6IjEwIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJ2aWJyYXRvR2FpbiIsImFkZHJlc3MiOiIvdmlvbGluL290aGVyUGFyYW1zL3ZpYnJhdG9HYWluIiwiaW5kZXgiOiI5MiIsIm1ldGEiOlt7IjEiOiIifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJvdXRHYWluIiwiYWRkcmVzcyI6Ii92aW9saW4vb3RoZXJQYXJhbXMvb3V0R2FpbiIsImluZGV4IjoiMCIsIm1ldGEiOlt7IjIiOiIifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDEifV19LHsidHlwZSI6ImJ1dHRvbiIsImxhYmVsIjoiZ2F0ZSIsImFkZHJlc3MiOiIvdmlvbGluL2dhdGUiLCJpbmRleCI6IjY4IiwibWV0YSI6W3siMyI6IiJ9XX1dfV19MA=="; }

/*
 faust2wasm
 
 Additional code: GRAME 2017
*/
 
'use strict';

function getBase64Mixer() { return "AGFzbQEAAAABj4CAgAACYAN/f38AYAR/f39/AX0CkoCAgAABBm1lbW9yeQZtZW1vcnkCAAIDg4CAgAACAAEHmoCAgAACC2NsZWFyT3V0cHV0AAAIbWl4Vm9pY2UAAQqKgoCAAALigICAAAEDfwJAQQAhBQNAAkAgAiAFQQJ0aigCACEDQQAhBANAAkAgAyAEQQJ0akMAAAAAOAIAIARBAWohBCAEIABIBEAMAgUMAQsACwsgBUEBaiEFIAUgAUgEQAwCBQwBCwALCwsLnYGAgAACBH8DfQJ9QQAhB0MAAAAAIQgDQAJAQQAhBiACIAdBAnRqKAIAIQQgAyAHQQJ0aigCACEFA0ACQCAEIAZBAnRqKgIAIQkgCCAJi5chCCAFIAZBAnRqKgIAIQogBSAGQQJ0aiAKIAmSOAIAIAZBAWohBiAGIABIBEAMAgUMAQsACwsgB0EBaiEHIAcgAUgEQAwCBQwBCwALCyAIDwsL"; }

// Polyphonic Faust DSP
class violinMIDI_polyProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
           	violinMIDI_polyProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            violinMIDI_polyProcessor.parse_items(group.items, obj, callback);
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
            violinMIDI_polyProcessor.parse_items(item.items, obj, callback);
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
            violinMIDI_polyProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= violinMIDI_polyProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        
        // Add instrument parameters
        violinMIDI_polyProcessor.parse_ui(JSON.parse(getJSONviolinMIDI()).ui, params, violinMIDI_polyProcessor.parse_item1);
        
        // Possibly add effect parameters
        if (typeof (getJSONeffect) !== "undefined") {
             violinMIDI_polyProcessor.parse_ui(JSON.parse(getJSONeffect()).ui, params, violinMIDI_polyProcessor.parse_item1);
        }
        return params;
    }
    
    static createMemory(buffer_size, polyphony) 
    {
        // Memory allocator
        var ptr_size = 4;
        var sample_size = 4;
        
        function pow2limit(x)
        {
            var n = 65536; // Minimum = 64 kB
            while (n < x) { n = 2 * n; }
            return n;
        }
        
        var json_object = null;
        try {
            json_object = JSON.parse(getJSONviolinMIDI());
        } catch (e) {
            return null;
        }
        
        var effect_json_object_size = 0;
        if (typeof (getJSONeffect) !== "undefined") {
            var effect_json_object = null;
            try {
                effect_json_object = JSON.parse(getJSONeffect());
                effect_json_object_size = parseInt(effect_json_object.size);
            } catch (e) {
                faust.error_msg = "Error in JSON.parse: " + e;
                return null;
            }
        }
        
        var memory_size = pow2limit(effect_json_object_size + parseInt(json_object.size) * polyphony + ((parseInt(json_object.inputs) + parseInt(json_object.outputs) * 2) * (ptr_size + (buffer_size * sample_size)))) / 65536;
        memory_size = Math.max(2, memory_size); // As least 2
        return new WebAssembly.Memory({ initial: memory_size, maximum: memory_size });
    }
    
    constructor (options)
    {
        super(options);
        
        this.json_object = JSON.parse(getJSONviolinMIDI());
        if (typeof (getJSONeffect) !== "undefined") {
            this.effect_json_object = JSON.parse(getJSONeffect());
        }
        
        this.output_handler = function(path, value) { this.port.postMessage({ path: path, value: value }); };
        
        this.debug = false;
        
        this.ins = null;
        this.outs = null;
        this.mixing = null;
        this.compute_handler = null;
        
        this.dspInChannnels = [];
        this.dspOutChannnels = [];
        
        this.fFreqLabel = "";
        this.fGateLabel = "";
        this.fGainLabel = "";
        this.fDate = 0;
        
        this.fPitchwheelLabel = [];
        this.fCtrlLabel = new Array(128);
        for (var i = 0; i < this.fCtrlLabel.length; i++) { this.fCtrlLabel[i] = []; }
   
        this.numIn = parseInt(this.json_object.inputs);
        this.numOut = parseInt(this.json_object.outputs);
        
        // Memory allocator
        this.ptr_size = 4;
        this.sample_size = 4;
        
        this.factory = violinMIDI_polyProcessor.violinMIDI_instance.exports;
        this.HEAP = violinMIDI_polyProcessor.memory.buffer;
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
        // this.audio_heap_ptr = 0; Fails when 0...
        this.audio_heap_ptr = 65536;
        
        // Setup pointers offset
        this.audio_heap_ptr_inputs = this.audio_heap_ptr;
        this.audio_heap_ptr_outputs = this.audio_heap_ptr_inputs + (this.numIn * this.ptr_size);
        this.audio_heap_ptr_mixing = this.audio_heap_ptr_outputs + (this.numOut * this.ptr_size);
        
        // Setup buffer offset
        this.audio_heap_inputs = this.audio_heap_ptr_mixing + (this.numOut * this.ptr_size);
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * violinMIDI_polyProcessor.buffer_size * this.sample_size);
        this.audio_heap_mixing = this.audio_heap_outputs + (this.numOut * violinMIDI_polyProcessor.buffer_size * this.sample_size);
        
        // Setup DSP voices offset
        this.dsp_start = this.audio_heap_mixing + (this.numOut * violinMIDI_polyProcessor.buffer_size * this.sample_size);
        
        // wasm mixer
        this.mixer = violinMIDI_polyProcessor.mixer_instance.exports;
        
        // wasm effect
        this.effect = (violinMIDI_polyProcessor.effect_instance) ? violinMIDI_polyProcessor.effect_instance.exports : null;
        
        console.log(this.mixer);
        console.log(this.factory);
        console.log(this.effect);
        
        // Start of DSP memory ('polyphony' DSP voices)
        this.polyphony = violinMIDI_polyProcessor.polyphony;
        this.dsp_voices = [];
        this.dsp_voices_state = [];
        this.dsp_voices_level = [];
        this.dsp_voices_date = [];
        this.dsp_voices_trigger = [];
        
        this.kActiveVoice = 0;
        this.kFreeVoice = -1;
        this.kReleaseVoice = -2;
        this.kNoVoice = -3;
     
        this.pathTable = [];
        
        // Allocate table for 'setParamValue'
        this.value_table = [];
        
        for (var i = 0; i <  this.polyphony; i++) {
            this.dsp_voices[i] = this.dsp_start + i * parseInt(this.json_object.size);
            this.dsp_voices_state[i] = this.kFreeVoice;
            this.dsp_voices_level[i] = 0;
            this.dsp_voices_date[i] = 0;
            this.dsp_voices_trigger[i] = false;
        }
        
        // Effect memory starts after last voice
        this.effect_start = this.dsp_voices[this.polyphony - 1] + parseInt(this.json_object.size);
    
        this.getPlayingVoice = function(pitch)
        {
            var voice_playing = this.kNoVoice;
            var oldest_date_playing = Number.MAX_VALUE;
            
            for (var i = 0; i <  this.polyphony; i++) {
                if (this.dsp_voices_state[i] === pitch) {
                    // Keeps oldest playing voice
                    if (this.dsp_voices_date[i] < oldest_date_playing) {
                        oldest_date_playing = this.dsp_voices_date[i];
                        voice_playing = i;
                    }
                }
            }
            
            return voice_playing;
        }
        
        // Always returns a voice
        this.allocVoice = function(voice)
        {
            this.dsp_voices_date[voice] = this.fDate++;
            this.dsp_voices_trigger[voice] = true;    //so that envelop is always re-initialized
            this.dsp_voices_state[voice] = this.kActiveVoice;
            return voice;
        }
        
        this.getFreeVoice = function()
        {
            for (var i = 0; i <  this.polyphony; i++) {
                if (this.dsp_voices_state[i] === this.kFreeVoice) {
                    return this.allocVoice(i);
                }
            }
            
            var voice_release = this.kNoVoice;
            var voice_playing = this.kNoVoice;
            var oldest_date_release = Number.MAX_VALUE;
            var oldest_date_playing = Number.MAX_VALUE;
            
            // Scan all voices
            for (var i = 0; i <  this.polyphony; i++) {
                // Try to steal a voice in kReleaseVoice mode...
                if (this.dsp_voices_state[i] === this.kReleaseVoice) {
                    // Keeps oldest release voice
                    if (this.dsp_voices_date[i] < oldest_date_release) {
                        oldest_date_release = this.dsp_voices_date[i];
                        voice_release = i;
                    }
                } else {
                    if (this.dsp_voices_date[i] < oldest_date_playing) {
                        oldest_date_playing = this.dsp_voices_date[i];
                        voice_playing = i;
                    }
                }
            }
            
            // Then decide which one to steal
            if (oldest_date_release != Number.MAX_VALUE) {
                if (this.debug)
                    console.log("Steal release voice : voice_date = %d cur_date = %d voice = %d", this.dsp_voices_date[voice_release], this.fDate, voice_release);
                return this.allocVoice(voice_release);
            } else if (oldest_date_playing != Number.MAX_VALUE) {
                if (this.debug)
                    console.log("Steal playing voice : voice_date = %d cur_date = %d voice = %d", this.dsp_voices_date[voice_playing], this.fDate, voice_playing);
                return this.allocVoice(voice_playing);
            } else {
                return this.kNoVoice;
            }
        }
        
        this.update_outputs = function ()
        {
            if (this.outputs_items.length > 0 && this.output_handler && this.outputs_timer-- === 0) {
                this.outputs_timer = 5;
                for (var i = 0; i < this.outputs_items.length; i++) {
                    this.output_handler(this.outputs_items[i], this.factory.getParamValue(this.dsp, this.pathTable[this.outputs_items[i]]));
                }
            }
        }
        
        this.midiToFreq = function (note)
        {
            return 440.0 * Math.pow(2.0, (note - 69.0) / 12.0);
        }
        
        this.initAux = function ()
        {
            var i;
            
            if (this.numIn > 0) {
                this.ins = this.audio_heap_ptr_inputs;
                for (i = 0; i < this.numIn; i++) {
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((violinMIDI_polyProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + violinMIDI_polyProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                // allocate memory for output and mixing arrays
                this.outs = this.audio_heap_ptr_outputs;
                this.mixing = this.audio_heap_ptr_mixing;
                
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((violinMIDI_polyProcessor.buffer_size * this.sample_size) * i);
                    this.HEAP32[(this.mixing >> 2) + i] = this.audio_heap_mixing + ((violinMIDI_polyProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + violinMIDI_polyProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI part
            violinMIDI_polyProcessor.parse_ui(this.json_object.ui, this, violinMIDI_polyProcessor.parse_item2);
            
            if (this.effect) {
                violinMIDI_polyProcessor.parse_ui(this.effect_json_object.ui, this, violinMIDI_polyProcessor.parse_item2);
            }
     
            // keep 'keyOn/keyOff' labels
            for (i = 0; i < this.inputs_items.length; i++) {
                if (this.inputs_items[i].endsWith("/gate")) {
                    this.fGateLabel = this.pathTable[this.inputs_items[i]];
                    console.log(this.fGateLabel);
                } else if (this.inputs_items[i].endsWith("/freq")) {
                    this.fFreqLabel = this.pathTable[this.inputs_items[i]];
                    console.log(this.fFreqLabel);
                } else if (this.inputs_items[i].endsWith("/gain")) {
                    this.fGainLabel = this.pathTable[this.inputs_items[i]];
                    console.log(this.fGainLabel);
                }
            }
            
            // Init DSP voices
            for (i = 0; i <  this.polyphony; i++) {
                this.factory.init(this.dsp_voices[i], sampleRate);  // 'sampleRate' is defined in AudioWorkletGlobalScope
            }
            
            // Init effect
            if (this.effect) {
                this.effect.init(this.effect_start, sampleRate);
            }
        }
        
        this.keyOn = function (channel, pitch, velocity)
        {
            var voice = this.getFreeVoice();
            if (this.debug)
                console.log("keyOn voice %d", voice);
            this.factory.setParamValue(this.dsp_voices[voice], this.fFreqLabel, this.midiToFreq(pitch));
            this.factory.setParamValue(this.dsp_voices[voice], this.fGainLabel, velocity/127.);
            this.dsp_voices_state[voice] = pitch;
        }
        
        this.keyOff = function (channel, pitch, velocity)
        {
            var voice = this.getPlayingVoice(pitch);
            if (voice !== this.kNoVoice) {
                if (this.debug)
                    console.log("keyOff voice %d", voice);
                // No use of velocity for now...
                this.factory.setParamValue(this.dsp_voices[voice], this.fGateLabel, 0.0);
                // Release voice
                this.dsp_voices_state[voice] = this.kReleaseVoice;
            } else {
                if (this.debug)
                    console.log("Playing voice not found...");
            }
        }
        
        this.allNotesOff = function ()
        {
            for (var i = 0; i <  this.polyphony; i++) {
                this.factory.setParamValue(this.dsp_voices[i], this.fGateLabel, 0.0);
                this.dsp_voices_state[i] = this.kReleaseVoice;
            }
        }
        
        this.ctrlChange = function (channel, ctrl, value)
        {
            if (ctrl === 123 || ctrl === 120) {
                this.allNotesOff();
            }
            
            if (this.fCtrlLabel[ctrl] !== []) {
                for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                    var path = this.fCtrlLabel[ctrl][i].path;
                    this.setParamValue(path, violinMIDI_polyProcessor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
            if (this.effect && getJSONeffect().includes(path)) {
                this.effect.setParamValue(this.effect_start, this.pathTable[path], val);
            } else {
                for (var i = 0; i < this.polyphony; i++) {
                    this.factory.setParamValue(this.dsp_voices[i], this.pathTable[path], val);
                }
            }
        }

        this.getParamValue = function (path)
        {
            if (this.effect && getJSONeffect().includes(path)) {
                return this.effect.getParamValue(this.effect_start, this.pathTable[path]);
            } else {
                return this.factory.getParamValue(this.dsp_voices[0], this.pathTable[path]);
            }
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
            this.keyOff(channel, data1, data2);
        } else if (cmd === 9) {
            this.keyOn(channel, data1, data2);
        } else if (cmd === 11) {
            this.ctrlChange(channel, data1, data2);
        } else if (cmd === 14) {
            this.pitchWheel(channel, ((data2 * 128.0 + data1)-8192)/8192.0);
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
         
        // Possibly call an externally given callback (for instance to synchronize playing a MIDIFile...)
        if (this.compute_handler) {
            this.compute_handler(violinMIDI_polyProcessor.buffer_size);
        }
         
        // First clear the outputs
        this.mixer.clearOutput(violinMIDI_polyProcessor.buffer_size, this.numOut, this.outs);
        
        // Compute all running voices
        for (var i = 0; i < this.polyphony; i++) {
            if (this.dsp_voices_state[i] != this.kFreeVoice) {
                if (this.dsp_voices_trigger[i]) {
                    // FIXME : properly cut the buffer in 2 slices...
                    this.factory.setParamValue(this.dsp_voices[i], this.fGateLabel, 0.0);
                    this.factory.compute(this.dsp_voices[i], 1, this.ins, this.mixing);
                    this.factory.setParamValue(this.dsp_voices[i], this.fGateLabel, 1.0);
                    this.factory.compute(this.dsp_voices[i], violinMIDI_polyProcessor.buffer_size, this.ins, this.mixing);
                    this.dsp_voices_trigger[i] = false;
                } else {
                    // Compute regular voice
                    this.factory.compute(this.dsp_voices[i], violinMIDI_polyProcessor.buffer_size, this.ins, this.mixing);
                }
                // Mix it in result
                this.dsp_voices_level[i] = this.mixer.mixVoice(violinMIDI_polyProcessor.buffer_size, this.numOut, this.mixing, this.outs);
                // Check the level to possibly set the voice in kFreeVoice again
                if ((this.dsp_voices_level[i] < 0.001) && (this.dsp_voices_state[i] === this.kReleaseVoice)) {
                    this.dsp_voices_state[i] = this.kFreeVoice;
                }
            }
        }
        
        // Apply effect
        if (this.effect) {
            this.effect.compute(this.effect_start, violinMIDI_polyProcessor.buffer_size, this.outs, this.outs);
        }
        
        // Update bargraph
        this.update_outputs();
        
        // Copy outputs
        if (output !== undefined) {
            for (var chan = 0; chan < Math.min(this.numOut, output.length); ++chan) {
                var dspOutput = this.dspOutChannnels[chan];
                output[chan].set(dspOutput);
            }
        }
        
        return true;
    }
}

// Globals

// Create memory block
violinMIDI_polyProcessor.buffer_size = 128;
violinMIDI_polyProcessor.polyphony = 16;

violinMIDI_polyProcessor.memory = violinMIDI_polyProcessor.createMemory(violinMIDI_polyProcessor.buffer_size, violinMIDI_polyProcessor.polyphony);

// Create Mixer
violinMIDI_polyProcessor.mixObject = { imports: { print: arg => console.log(arg) } }
violinMIDI_polyProcessor.mixObject["memory"] = { "memory": violinMIDI_polyProcessor.memory };

violinMIDI_polyProcessor.importObject = {
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
        
        memory: violinMIDI_polyProcessor.memory,
        
        table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
    }
};

// Synchronously compile and instantiate the WASM modules
try {
    let wasm_mixer_module = new WebAssembly.Module(violinMIDI_polyProcessor.atob(getBase64Mixer()));
    violinMIDI_polyProcessor.mixer_instance = new WebAssembly.Instance(wasm_mixer_module, violinMIDI_polyProcessor.mixObject);
    let wasm_module = new WebAssembly.Module(violinMIDI_polyProcessor.atob(getBase64CodeviolinMIDI()));
    violinMIDI_polyProcessor.violinMIDI_instance = new WebAssembly.Instance(wasm_module, violinMIDI_polyProcessor.importObject);
    // Possibly compile effect
    if (typeof (getBase64Codeeffect) !== "undefined") {
        let wasm_effect_module = new WebAssembly.Module(violinMIDI_polyProcessor.atob(getBase64Codeeffect()));
        violinMIDI_polyProcessor.effect_instance = new WebAssembly.Instance(wasm_effect_module, violinMIDI_polyProcessor.importObject);
    }
    registerProcessor('violinMIDI_poly', violinMIDI_polyProcessor);
} catch (e) {
    console.log(e); console.log("Faust violinMIDI_poly cannot be loaded or compiled");
}



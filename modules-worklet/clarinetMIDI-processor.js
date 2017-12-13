
/*
Code generated with Faust version 2.5.12
Compilation options: wasm-eb, -scal -ftz 2
*/

function getJSONclarinetMIDI() {
	return "{\"name\":\"ClarinetMIDI\",\"version\":\"2.5.12\",\"options\":\"wasm-eb, -scal -ftz 2\",\"size\":\"16604\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"(c)Romain Michon, CCRMA (Stanford University), GRAME\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Simple MIDI-controllable clarinet physical model with physical parameters.\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"license\":\"MIT\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"ClarinetMIDI\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"clarinet\",\"items\":[{\"type\":\"hgroup\",\"label\":\"midi\",\"meta\":[{\"0\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"freq\",\"address\":\"/clarinet/midi/freq\",\"index\":\"8372\",\"meta\":[{\"0\":\"\"},{\"style\":\"knob\"}],\"init\":\"440\",\"min\":\"50\",\"max\":\"1000\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"bend\",\"address\":\"/clarinet/midi/bend\",\"index\":\"8376\",\"meta\":[{\"1\":\"\"},{\"hidden\":\"1\"},{\"midi\":\"pitchwheel\"},{\"style\":\"knob\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"10\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"gain\",\"address\":\"/clarinet/midi/gain\",\"index\":\"88\",\"meta\":[{\"2\":\"\"},{\"style\":\"knob\"}],\"init\":\"0.6\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"envAttack\",\"address\":\"/clarinet/midi/envAttack\",\"index\":\"96\",\"meta\":[{\"3\":\"\"},{\"style\":\"knob\"}],\"init\":\"1\",\"min\":\"0\",\"max\":\"30\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"sustain\",\"address\":\"/clarinet/midi/sustain\",\"index\":\"76\",\"meta\":[{\"4\":\"\"},{\"hidden\":\"1\"},{\"midi\":\"ctrl 64\"},{\"style\":\"knob\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"}]},{\"type\":\"hgroup\",\"label\":\"otherParams\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"reedStiffness\",\"address\":\"/clarinet/otherParams/reedStiffness\",\"index\":\"164\",\"meta\":[{\"0\":\"\"},{\"midi\":\"ctrl 1\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"bellOpening\",\"address\":\"/clarinet/otherParams/bellOpening\",\"index\":\"16\",\"meta\":[{\"1\":\"\"},{\"midi\":\"ctrl 3\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"vibratoFreq\",\"address\":\"/clarinet/otherParams/vibratoFreq\",\"index\":\"52\",\"meta\":[{\"2\":\"\"},{\"style\":\"knob\"}],\"init\":\"5\",\"min\":\"1\",\"max\":\"10\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"vibratoGain\",\"address\":\"/clarinet/otherParams/vibratoGain\",\"index\":\"36\",\"meta\":[{\"3\":\"\"},{\"style\":\"knob\"}],\"init\":\"0.25\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"outGain\",\"address\":\"/clarinet/otherParams/outGain\",\"index\":\"0\",\"meta\":[{\"4\":\"\"},{\"style\":\"knob\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"}]},{\"type\":\"button\",\"label\":\"gate\",\"address\":\"/clarinet/gate\",\"index\":\"72\",\"meta\":[{\"2\":\"\"}]}]}]}";
}
function getBase64CodeclarinetMIDI() { return "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bnRyb2xsYWJsZSBjbGFyaW5ldCBwaHlzaWNhbCBtb2RlbCB3aXRoIHBoeXNpY2FsIHBhcmFtZXRlcnMuIn0seyJmaWx0ZXJzLmxpYi9uYW1lIjoiRmF1c3QgRmlsdGVycyBMaWJyYXJ5In0seyJmaWx0ZXJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJsaWNlbnNlIjoiTUlUIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJDbGFyaW5ldE1JREkifSx7Im5vaXNlcy5saWIvbmFtZSI6IkZhdXN0IE5vaXNlIEdlbmVyYXRvciBMaWJyYXJ5In0seyJub2lzZXMubGliL3ZlcnNpb24iOiIwLjAifSx7Im9zY2lsbGF0b3JzLmxpYi9uYW1lIjoiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5In0seyJvc2NpbGxhdG9ycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsicm91dGVzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsicm91dGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJzaWduYWxzLmxpYi9uYW1lIjoiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSJ9LHsic2lnbmFscy5saWIvdmVyc2lvbiI6IjAuMCJ9XSwidWkiOlt7InR5cGUiOiJ2Z3JvdXAiLCJsYWJlbCI6ImNsYXJpbmV0IiwiaXRlbXMiOlt7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6Im1pZGkiLCJtZXRhIjpbeyIwIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6ImZyZXEiLCJhZGRyZXNzIjoiL2NsYXJpbmV0L21pZGkvZnJlcSIsImluZGV4IjoiODM3MiIsIm1ldGEiOlt7IjAiOiIifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjQ0MCIsIm1pbiI6IjUwIiwibWF4IjoiMTAwMCIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiYmVuZCIsImFkZHJlc3MiOiIvY2xhcmluZXQvbWlkaS9iZW5kIiwiaW5kZXgiOiI4Mzc2IiwibWV0YSI6W3siMSI6IiJ9LHsiaGlkZGVuIjoiMSJ9LHsibWlkaSI6InBpdGNod2hlZWwifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjEiLCJtaW4iOiIwIiwibWF4IjoiMTAiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6ImdhaW4iLCJhZGRyZXNzIjoiL2NsYXJpbmV0L21pZGkvZ2FpbiIsImluZGV4IjoiODgiLCJtZXRhIjpbeyIyIjoiIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjYiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiZW52QXR0YWNrIiwiYWRkcmVzcyI6Ii9jbGFyaW5ldC9taWRpL2VudkF0dGFjayIsImluZGV4IjoiOTYiLCJtZXRhIjpbeyIzIjoiIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIxIiwibWluIjoiMCIsIm1heCI6IjMwIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJzdXN0YWluIiwiYWRkcmVzcyI6Ii9jbGFyaW5ldC9taWRpL3N1c3RhaW4iLCJpbmRleCI6Ijc2IiwibWV0YSI6W3siNCI6IiJ9LHsiaGlkZGVuIjoiMSJ9LHsibWlkaSI6ImN0cmwgNjQifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn1dfSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6Im90aGVyUGFyYW1zIiwibWV0YSI6W3siMSI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJyZWVkU3RpZmZuZXNzIiwiYWRkcmVzcyI6Ii9jbGFyaW5ldC9vdGhlclBhcmFtcy9yZWVkU3RpZmZuZXNzIiwiaW5kZXgiOiIxNjQiLCJtZXRhIjpbeyIwIjoiIn0seyJtaWRpIjoiY3RybCAxIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiYmVsbE9wZW5pbmciLCJhZGRyZXNzIjoiL2NsYXJpbmV0L290aGVyUGFyYW1zL2JlbGxPcGVuaW5nIiwiaW5kZXgiOiIxNiIsIm1ldGEiOlt7IjEiOiIifSx7Im1pZGkiOiJjdHJsIDMifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJ2aWJyYXRvRnJlcSIsImFkZHJlc3MiOiIvY2xhcmluZXQvb3RoZXJQYXJhbXMvdmlicmF0b0ZyZXEiLCJpbmRleCI6IjUyIiwibWV0YSI6W3siMiI6IiJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiNSIsIm1pbiI6IjEiLCJtYXgiOiIxMCIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoidmlicmF0b0dhaW4iLCJhZGRyZXNzIjoiL2NsYXJpbmV0L290aGVyUGFyYW1zL3ZpYnJhdG9HYWluIiwiaW5kZXgiOiIzNiIsIm1ldGEiOlt7IjMiOiIifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuMjUiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoib3V0R2FpbiIsImFkZHJlc3MiOiIvY2xhcmluZXQvb3RoZXJQYXJhbXMvb3V0R2FpbiIsImluZGV4IjoiMCIsIm1ldGEiOlt7IjQiOiIifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuNSIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjAuMDEifV19LHsidHlwZSI6ImJ1dHRvbiIsImxhYmVsIjoiZ2F0ZSIsImFkZHJlc3MiOiIvY2xhcmluZXQvZ2F0ZSIsImluZGV4IjoiNzIiLCJtZXRhIjpbeyIyIjoiIn1dfV19XX0w"; }

/*
 faust2wasm
 
 Additional code: GRAME 2017
*/
 
'use strict';

function getBase64Mixer() { return "AGFzbQEAAAABj4CAgAACYAN/f38AYAR/f39/AX0CkoCAgAABBm1lbW9yeQZtZW1vcnkCAAIDg4CAgAACAAEHmoCAgAACC2NsZWFyT3V0cHV0AAAIbWl4Vm9pY2UAAQqKgoCAAALigICAAAEDfwJAQQAhBQNAAkAgAiAFQQJ0aigCACEDQQAhBANAAkAgAyAEQQJ0akMAAAAAOAIAIARBAWohBCAEIABIBEAMAgUMAQsACwsgBUEBaiEFIAUgAUgEQAwCBQwBCwALCwsLnYGAgAACBH8DfQJ9QQAhB0MAAAAAIQgDQAJAQQAhBiACIAdBAnRqKAIAIQQgAyAHQQJ0aigCACEFA0ACQCAEIAZBAnRqKgIAIQkgCCAJi5chCCAFIAZBAnRqKgIAIQogBSAGQQJ0aiAKIAmSOAIAIAZBAWohBiAGIABIBEAMAgUMAQsACwsgB0EBaiEHIAcgAUgEQAwCBQwBCwALCyAIDwsL"; }

// Polyphonic Faust DSP
class clarinetMIDI_polyProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
           	clarinetMIDI_polyProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            clarinetMIDI_polyProcessor.parse_items(group.items, obj, callback);
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
            clarinetMIDI_polyProcessor.parse_items(item.items, obj, callback);
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
            clarinetMIDI_polyProcessor.parse_items(item.items, obj, callback);
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
                nUint24 |= clarinetMIDI_polyProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
        clarinetMIDI_polyProcessor.parse_ui(JSON.parse(getJSONclarinetMIDI()).ui, params, clarinetMIDI_polyProcessor.parse_item1);
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
        
        // Keep JSON parsed object
        var json_object = null;
        try {
            json_object = JSON.parse(getJSONclarinetMIDI());
        } catch (e) {
            return null;
        }
        
        var memory_size = pow2limit(parseInt(json_object.size) * polyphony + ((parseInt(json_object.inputs) + parseInt(json_object.outputs) * 2) * (ptr_size + (buffer_size * sample_size)))) / 65536;
        memory_size = Math.max(2, memory_size); // As least 2
        return new WebAssembly.Memory({ initial: memory_size, maximum: memory_size });
    }
    
    constructor (options)
    {
        super(options);
        
        this.json_object = JSON.parse(getJSONclarinetMIDI());
        
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
        
        this.factory = clarinetMIDI_polyProcessor.clarinetMIDI_instance.exports;
        this.HEAP = clarinetMIDI_polyProcessor.memory.buffer;
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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * clarinetMIDI_polyProcessor.buffer_size * this.sample_size);
        this.audio_heap_mixing = this.audio_heap_outputs + (this.numOut * clarinetMIDI_polyProcessor.buffer_size * this.sample_size);
        
        // Setup DSP voices offset
        this.dsp_start = this.audio_heap_mixing + (this.numOut * clarinetMIDI_polyProcessor.buffer_size * this.sample_size);
        
        // wasm mixer
        this.mixer = clarinetMIDI_polyProcessor.mixer_instance.exports;
        
        console.log(this.mixer);
        console.log(this.factory);
        
        // Start of DSP memory ('polyphony' DSP voices)
        this.polyphony = clarinetMIDI_polyProcessor.polyphony;
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
                    console.log("Steal release voice : voice_date = %d cur_date = %d voice = %d\n", this.dsp_voices_date[voice_release], this.fDate, voice_release);
                return this.allocVoice(voice_release);
            } else if (oldest_date_playing != Number.MAX_VALUE) {
                if (this.debug)
                    console.log("Steal playing voice : voice_date = %d cur_date = %d voice = %d\n", this.dsp_voices_date[voice_playing], this.fDate, voice_playing);
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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((clarinetMIDI_polyProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + clarinetMIDI_polyProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                // allocate memory for output and mixing arrays
                this.outs = this.audio_heap_ptr_outputs;
                this.mixing = this.audio_heap_ptr_mixing;
                
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((clarinetMIDI_polyProcessor.buffer_size * this.sample_size) * i);
                    this.HEAP32[(this.mixing >> 2) + i] = this.audio_heap_mixing + ((clarinetMIDI_polyProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + clarinetMIDI_polyProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
             // Parse UI
            clarinetMIDI_polyProcessor.parse_ui(this.json_object.ui, this, clarinetMIDI_polyProcessor.parse_item2);
            
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
                    console.log("Playing voice not found...\n");
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
                    this.setParamValue(path, clarinetMIDI_polyProcessor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
            for (var i = 0; i < this.polyphony; i++) {
                this.factory.setParamValue(this.dsp_voices[i], this.pathTable[path], val);
            }
        }

        this.getParamValue = function (path)
        {
            return this.factory.getParamValue(this.dsp_voices[0], this.pathTable[path]);
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
            this.compute_handler(clarinetMIDI_polyProcessor.buffer_size);
        }
         
        // First clear the outputs
        this.mixer.clearOutput(clarinetMIDI_polyProcessor.buffer_size, this.numOut, this.outs);
        
        // Compute all running voices
        for (var i = 0; i < this.polyphony; i++) {
            if (this.dsp_voices_state[i] != this.kFreeVoice) {
                if (this.dsp_voices_trigger[i]) {
                    // FIXME : properly cut the buffer in 2 slices...
                    this.factory.setParamValue(this.dsp_voices[i], this.fGateLabel, 0.0);
                    this.factory.compute(this.dsp_voices[i], 1, this.ins, this.mixing);
                    this.factory.setParamValue(this.dsp_voices[i], this.fGateLabel, 1.0);
                    this.factory.compute(this.dsp_voices[i], clarinetMIDI_polyProcessor.buffer_size, this.ins, this.mixing);
                    this.dsp_voices_trigger[i] = false;
                } else {
                    // Compute regular voice
                    this.factory.compute(this.dsp_voices[i], clarinetMIDI_polyProcessor.buffer_size, this.ins, this.mixing);
                }
                // Mix it in result
                this.dsp_voices_level[i] = this.mixer.mixVoice(clarinetMIDI_polyProcessor.buffer_size, this.numOut, this.mixing, this.outs);
                // Check the level to possibly set the voice in kFreeVoice again
                if ((this.dsp_voices_level[i] < 0.001) && (this.dsp_voices_state[i] === this.kReleaseVoice)) {
                    this.dsp_voices_state[i] = this.kFreeVoice;
                }
            }
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
clarinetMIDI_polyProcessor.buffer_size = 128;
clarinetMIDI_polyProcessor.polyphony = 16;

clarinetMIDI_polyProcessor.memory = clarinetMIDI_polyProcessor.createMemory(clarinetMIDI_polyProcessor.buffer_size, clarinetMIDI_polyProcessor.polyphony);

// Create Mixer
clarinetMIDI_polyProcessor.mixObject = { imports: { print: arg => console.log(arg) } }
clarinetMIDI_polyProcessor.mixObject["memory"] = { "memory": clarinetMIDI_polyProcessor.memory };

clarinetMIDI_polyProcessor.importObject = {
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
        
        memory: clarinetMIDI_polyProcessor.memory,
        
        table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
    }
};

// Synchronously compile and instantiate the WASM modules
try {
    let wasm_mixer_module = new WebAssembly.Module(clarinetMIDI_polyProcessor.atob(getBase64Mixer()));
    clarinetMIDI_polyProcessor.mixer_instance = new WebAssembly.Instance(wasm_mixer_module, clarinetMIDI_polyProcessor.mixObject);
    let wasm_module = new WebAssembly.Module(clarinetMIDI_polyProcessor.atob(getBase64CodeclarinetMIDI()));
    clarinetMIDI_polyProcessor.clarinetMIDI_instance = new WebAssembly.Instance(wasm_module, clarinetMIDI_polyProcessor.importObject);
    registerProcessor('clarinetMIDI_poly', clarinetMIDI_polyProcessor);
} catch (e) {
    console.log(e); console.log("Faust clarinetMIDI_poly cannot be loaded or compiled");
}



---
layout: post
title:  "Faust and the Web Audio API (3)"
date:   2016-04-07 15:10:00
categories: news
---

The Faust compiler can now directly be used in a Web page. Thanks to the [Emscripten](http://kripken.github.io/emscripten-site/) compiler, the Faust compiler itself can be compiled to asm.js JavaScript. This has been done by compiling the libfaust C++ library to the libfaust.js JavaScript library, that exports a unique entry point. 

### Compiling DSP to JavaScript (asm.js) ###

The libfaust.js exported function **createAsmCDSPFactoryFromString(...)** allows to create a DSP factory from a given DSP program as a source string and a set of compilations parameters, uses the Faust compiler asm.js backend, and produces the complete asm.js module and additional pure JavaScript methods as a string.

Then calling JavaScript 'eval' function on this string compiles it in the browser. The dynamically created asm.js module and additional pure JavaScript methods can then be used.

This internal code in then wrapped with additional JavaScript code. A DSP “factory” will be created from the DSP source code with the following 'synchronous' code (if using the 'libfaust.js' library):

    var factory = faust.createDSPFactory(code, arguments);

or possibly (if using the 'libfaustworker.js' library in the 'asynchronous' model):
    
    faust.createDSPFactory(code, arguments, callback);

where 'code' is the DSP source as a string, and 'arguments' is an array of parameters to be given to the Faust compiler (like '-vec', '-vs 512'...), and 'callback' is a function taking the created 'factory' as argument.

When no more used, you'll have to explicitly use the following code the deallocate the factory: 

    faust.deleteDSPFactory(factory);

Your application may want to save the already compiled factory as asm.js/JavaScript code to speed-up possible restore at later time:

    var machine_code = faust.writeDSPFactoryToMachine(factory);

And restore the factory with the following code:

    var factory = faust.readDSPFactoryFromMachine(machine_code);

#### Using DSP instances ####

A fully working DSP “instance” as a Web Audio node is then created with the code:

    var dsp = faust.createDSPInstance(factory, audio_context, buffer_size);

When no more used, you'll have to explicitly use the following code to deallocate the instance: 

    faust.deleteDSPInstance(dsp);

This instance can be used like the statically compiled one, as previously described in [this page](/news/2014/02/14/faust-and-webaudio-api.html).

#### Polyphonic instruments ####
 
Polyphonic instruments can be produced. For a given 'factory' the following code will create a 16 voices polyphonic instance:

    var dsp = faust.createPolyDSPInstance(factory, audio_context, buffer_size, 16);

This instance can be used like the statically compiled one, as previously described in [this page](/news/2014/02/14/faust-and-webaudio-api.html).


#### Using Faust JavaScript library  ####

The Emscripten compiled Faust library can be used in two ways. Either using the 'libfaust.js' library:
    
    <script src="libfaust.js"></script>
    <script src="webaudio-asm-wrapper.js"></script>

or if using worker mode with the following code which loads the 'libfaustworker.js' library:

    <script src="webaudio/webaudio-asm-worker-wrapper.js"></script>



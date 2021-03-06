---
layout: post
title:  "Using a custom memory allocator"
date:   2017-06-16 12:00:00
categories: news
---

From a DSP source file, the Faust compiler typically generates a C++ class. When a **rdtable** item is used on the source code, the C++ class will contain a table shared by all instances of the class. By default, this table is generated as a static class array, and so allocated in the application global static memory. 

In some specific case (usually in more constrained deployment cases), managing where this data is allocated is crucial. By extension this post explains how a custom memory allocator can be used to precisely control the DSP memory allocation.

### Faust -mem option to control memory related code generation ###

A new **-mem** compiler parameter has been added in the Faust compiler, starting from the 0.9.103 version (or 2.1.4 in Faust2 branch). This parameter will change the way static shared tables are generated. The table is allocated as a class static pointer allocated using a **custom memory allocator**, which has the following propotype: 

{% highlight c++ %}
struct dsp_memory_manager {

    virtual ~dsp_memory_manager() {}

    virtual void* allocate(size_t size) = 0;
    virtual void destroy(void* ptr) = 0;
};
{% endhighlight %}

Taking the following Faust DSP example:

{% highlight c++ %}
process = (waveform {10,20,30,40,50,60,70}, %(7)~+(3) : rdtable), 
          (waveform {1.1,2.2,3.3,4.4,5.5,6.6,7.7}, %(7)~+(3) : rdtable);
{% endhighlight %}

Here is the generated code in default mode:

{% highlight c++ %}
...
int mydsp::itbl0[7];
float mydsp::ftbl0[7];

static void classInit(int samplingFreq) {
    SIG0 sig0;
    sig0.init(samplingFreq);
    sig0.fill(7,itbl0);
    SIG1 sig1;
    sig1.init(samplingFreq);
    sig1.fill(7,ftbl0);
}

virtual void init(int samplingFreq) {
    classInit(samplingFreq);
    instanceInit(samplingFreq);
}

virtual void instanceInit(int samplingFreq) {
    instanceConstants(samplingFreq);
    instanceResetUserInterface();
    instanceClear();
}
...
{% endhighlight %}

The two **itbl0** and **ftbl0** tables are static class arrays. They are filled in the **classInit** method. The architecture code will typically call the **init** method (which calls **classInit**) on a given DSP, to allocate class related arrays and the DSP itself. If several DSP are going to be allocated, calling **classInit** only once then the **instanceInit** method on each allocated DSP is the way to go.

In the new **-mem** mode, the generated C++ code is now:

{% highlight c++ %}
...
int* mydsp::itbl0 = 0;
float* mydsp::ftbl0 = 0;
dsp_memory_manager* mydsp::fManager = 0;

static void classInit(int samplingFreq) {
    SIG0 sig0;
    itbl0 = static_cast<int*>(fManager->allocate(sizeof(int) * 7));
    sig0.init(samplingFreq);
    sig0.fill(7,itbl0);
    SIG1 sig1;
    ftbl0 = static_cast<float*>(fManager->allocate(sizeof(float) * 7));
    sig1.init(samplingFreq);
    sig1.fill(7,ftbl0);
}

static void classDestroy() {
    fManager->destroy(itbl0);
    fManager->destroy(ftbl0);
}

virtual void init(int samplingFreq) {}

virtual void instanceInit(int samplingFreq) {
    instanceConstants(samplingFreq);
    instanceResetUserInterface();
    instanceClear();
}
...
{% endhighlight %}

The two **itbl0** and **ftbl0** tables are generated a class static pointers. The **classInit** method takes the additional **dsp_memory_manager** object used to allocate tables. A new **classDestroy** method is available to deallocate the tables. Finally the **init** method is now empty, since the architecure file is supposed to use the **classInit/classDestroy** method once to allocate and deallocate static tables, and the **instanceInit** method on each allocated DSP.

### Control of the DSP memory allocation ###

An architecture file can now define its custom memory manager by subclassing the **dsp_memory_manager**  abstract base class, and implement the two required **allocate** and **destroy** methods. Here is an example of a simple heap allocating manager:

{% highlight c++ %}

struct malloc_memory_manager : public dsp_memory_manager {

    virtual void* allocate(size_t size)
    {
        void* res = malloc(size);
        cout << "malloc_manager: " << size << endl;
        return res;
    }

    virtual void destroy(void* ptr)
    {
        cout << "free_manager" << endl;
        free(ptr);
    }

};

{% endhighlight %}

#### Controlling the table memory allocation ####

To control table memory allocation, the architecture file will have to do:

{% highlight c++ %}
// Allocate a custom memory allocator
malloc_memory_manager manager; 

// Setup manager for the class
mydsp::fManager = &manager;

// Allocate the dsp instance using regular C++ new
mydsp* dsp = new mydsp();

// Allocate static tables (using the custom memory allocator)
mydsp::classInit(48000);

// Initialise the given instance
dsp->instanceInit(48000);

...
...

// Deallocate the dsp instance using regular C++ delete
delete dsp;

// Deallocate static tables (using the custom memory allocator)
mydsp::classDestroy();

{% endhighlight %}

#### Controlling the complete DSP memory allocation ####


Full control the DSP memory allocation can be done using [C++ placement new](https://en.wikipedia.org/wiki/Placement_syntax):

{% highlight c++ %}

#include <new>

// Allocate a custom memory allocator
malloc_memory_manager manager; 

// Setup manager for the class
mydsp::fManager = &manager;

// Placement new using the custom allocator
mydsp* dsp = new(manager.allocate(sizeof(mydsp))) mydsp();

// Allocate static tables (using the custom memory allocator)
mydsp::classInit(48000);

// Initialise the given instance
dsp->instanceInit(48000);

...
...

// Calling the destructor
dsp->~mydsp();

// Deallocate the pointer itself using the custom memory allocator
manager.destroy(dsp);

// Deallocate static tables (using the custom memory allocator)
mydsp::classDestroy();

{% endhighlight %}

More complex custom memory allocators can be developed by refining this **malloc_memory_manager** example, possibly defining real-time memory allocators...etc... The OWL architecture file already uses this new custom memory allocator model.

This is a work in progress: 

 - in the Faust2 branch, this model is still not supported yet beside the C++ backend 
 - custom memory allocator is not yet supported is additional DSP classes (like the **mydsp_poly** defined in the achitecture/faust/dsp/poly-dsp.h header).



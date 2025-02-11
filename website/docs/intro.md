---
sidebar_position: 1
hide_table_of_contents: true
---

# DeviceScript

DeviceScript is a programming language for scripting [Jacdac](https://aka.ms/jacdac) services.

It has JavaScript-like syntax and is compiled to a custom VM bytecode, which can run in very constrained
environments (VM itself compiles to 10kB of code, with the floating point library and Jacdac SDK adding further 30kB).

## Design goals for DeviceScript VM

* secure - can predictably execute untrusted code (random bytes)
* easy to analyze - should be possible to statically determine the set of APIs used
* small memory (RAM) footprint
* small code (flash) footprint
* leave space for extensions in future

## Try DeviceScript

You do not need hardware or install any tools to try out DeviceScript.

```ts
ds.every(1, () => {
    console.log(`hello`)
})
```

You can edit it directly and press `Run` to load it in the DeviceScript simulator in the documentation.
You can also click on `Fork` and open the sample in CodeSandbox.

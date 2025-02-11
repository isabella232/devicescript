---
hide_table_of_contents: true
---

# Getting Started

In this guide, you'll use a Raspberry Pi Pico and a pressure sensor to create a mouth-blowing activated mouse button.

At a high level, we want the script to generate a mouse click whenever we detect a peak in air pressure.
Tag along this part of the guide even if you do not have hardware available, DeviceScript provides web-based simulators and editors.

## Try DeviceScript

You do not need hardware or install any tools to try out DeviceScript. Try running this snippet!

```ts
ds.every(1, () => {
    console.log(`hello`)
})
```

You can edit it directly and press `Run` to load it in the DeviceScript simulator in the documentation.
You can also click on `Fork` and open the sample in CodeSandbox.

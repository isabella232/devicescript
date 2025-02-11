import * as ds from "@devicescript/core"

const btnA = new ds.Button()
const color = new ds.Color()
const led = new ds.LightBulb()
const display = new ds.CharacterScreen()
let r, g, b, tint

btnA.down.subscribe(() => {
  led.brightness.write(1)
  ds.wait(0.1);
  [r, g, b] = color.color.read()
  r = r + led.brightness.read()
  tint = (r + g + 2.3 * b) / (r + 2 * g + b)
  ds.cloud.upload("color", r, g, b, tint)
  // display.message.write(format("t={0} {1}", tint, r))
  led.brightness.write(0)
})
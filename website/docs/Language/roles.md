---
sidebar_position: 2
hide_table_of_contents: true
---
# Roles

Roles are defined by referencing a service name (in `roles` namespace).
The same role can be referenced multiple times, and runtime makes sure not to assign
multiple roles to the same service instance.

```ts
const btnA = new ds.Button()
const btnB = new ds.Button()
const pot = new ds.Potentiometer()
const lamp = new ds.LightBulb()
```

You can check if role is currently assigned, and react to it being assigned or unassigned:

```ts
const heater = new ds.Relay()
if (heater.isConnected())
    heater.active.write(true)
heater.onConnected(() => {
    // ...
})
heater.onDisconnected(() => {
    // ...
})
```

## Events

Events are referenced as `myRole.eventName`. They currently have two member functions, `.wait()` and `.subscribe()`.

```ts
const btnA = new ds.Button()
btnA.down.subscribe(() => {
    console.log("button down!")
})

// ...
btnA.up.wait()
// ...
```
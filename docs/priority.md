<img src="/assets/icons/feature-priority.svg" height="256" width="256"/>

# Priority
Is one of the most important properties of this addon.

It defines which `PCam` a scene's `Camera` should be corresponding with and be attached to. This is decided by the `PCam` with the highest `Priority`.

Changing `Priority` will send an event to the scene's `PCamHost`, which will then determine whether if the `Priority` value is greater than or equal to the currently highest `pcam`'s in the scene. The `PCam` with the highest value will then reattach the `Camera` accordingly.

When a new `PCam` has the highest priority, it will trigger an interpolation to the `PCam`. See the [Tween](/resource-types/tween) page for more information.

## Properties 
<Property propertyName="priority_override" propertyType="bool" propertyDefault="false">
<template v-slot:propertyDescription>

To quickly preview a `PCam` without adjusting its `Priority`, this property allows the selected `PCam` to ignore the `Priority` system altogether and forcefully become the active one.
It's partly designed to work within the [Viewfinder](./viewfinder), and will be disabled when running a build export of the game.

</template>

</Property>




<Property propertyName="priority" propertyType="int" propertyDefault="0">
<template v-slot:propertyDescription>

Determines which `PCam` is currently active. The one with the highest priority will be what decides what `PCam` a scene's `Camera` is attached to.

Modifying this is also what triggers a tween between different `PCams`. See th [Tween page](/resource-types/tween) for more details.

</template>
<template v-slot:setMethod>

`void` set_priority (`int` priority)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_priority(10)
```
:::

</template>
<template v-slot:getMethod>

`int` get_priority()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_priority()
```
:::

</template>
</Property>


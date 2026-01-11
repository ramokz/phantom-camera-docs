<img src="/assets/icons/phantom-camera-host.svg" height="256" width="256"/>

# PhantomCameraHost
> Inherits: Node

Shortened to `PCamHost` (text) and `pcam_host` (code) manages a scene's `PCam` nodes and is what ultimately supplies the logic to the `Camera`. It decides which `PCam` the `Camera` should be attached to and, consequently, its logic.

### Multiple `PhantomCameraHosts`
Each scene can contain an unlimited amount of `PCamHosts` and `Camera2D/3D` nodes, where multiple `PCamHosts` can belong to the same `PCam` at the same time; leading to each camera having the same [`Follow`](/follow-modes/overview) or [`Look At`](/look-at-modes/overview) behavior.

::: tip Tip

In the vast majority of cases, having multiple `PCamHosts` is **not** necessary.
Using more than one is mainly for use-cases where multiple cameras need to render different things at the same time, such as for splitscreen co-op.

:::

Once more than one `PCamHosts` is in a given scene, the [Viewfinder](/viewfinder) will display a collapsible list of all the `PCamHosts` instances in the current scene.<br>
See the [Viewfinder page](/viewfinder) for more details.


## Properties

<Property propertyName="host_layers" propertyType="int" propertyDefault="1">
<template v-slot:propertyDescription>

Determines which `PCam2D` / `PCam3D` nodes this `PCamHost` should recognize.

At least _one_ corresponding layer needs to be set on the `PCam` node for the `PCamHost` to recognize it.

**Note:** The layer value uses a bitmask.

::: tip Tip
A helper function also exists called `set_host_layers_value()`, where you can supply a specific layer number and then enable / disable it (see setter example below). Use this if you prefer not having to supply bitmask values.
:::

</template>

<template v-slot:setMethod>

`void` set_host_layers(`int` value)

`void` set_host_layers_value(`int` layer, `bool` enabled)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
## Bitmask assignment
pcam_host.set_host_layers(10) # Enables the 2nd and 4th layer using a bitmask value

## Specific layer change
pcam_host.set_host_layers_value(4, true) # Enables the 4th layer
```
:::

</template>
<template v-slot:getMethod>

`int` get_host_layers()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam_host.get_host_layers() # Returns the layer value as a bitmask
```
:::

</template>
</Property>




<Property propertyName="interpolation_mode" propertyType="int" propertyDefault="0">
<template v-slot:propertyDescription>

Determines whether the `PhantomCamera2D` / `PhantomCamera3D` nodes this `PhantomCameraHost` controls should use physics interpolation or not.

| InterpolationMode | Value | Description                                                                            |
|-------------------|-------|----------------------------------------------------------------------------------------|
| AUTO              | 0     | Automatically detects the physics interpolation based on the active `PCam`             |
| IDLE              | 1     | Forces the camera to only update in the `idle` / `process` ticks                       |
| PHYSICS           | 2     | Forces the camera to only update in the `physics` / `physics process` ticks            |
| MANUAL            | 3     | Only updates when the [process](#process) function is called from the `PCamHost` node. |

</template>

<template v-slot:setMethod>

`void` set_interpolation_mode(`int` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam_host.set_interpolation_mode(InterpolationMode.IDLE)
```
:::

</template>
<template v-slot:getMethod>

`int` get_interpolation_mode()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam_host.get_interpolation_mode() # Returns the current interpolation mode
```
:::

</template>
</Property>




## Methods

<Property propertyName="get_active_pcam" propertyType="Node" propertyDefault="" isMethod="true">
<template v-slot:propertyDescription>

Returns the currently active [`PCam2D`](/core-nodes/phantom-camera-2d) / [`PCam3D`](/core-nodes/phantom-camera-3d) for this `PCamHost` node.

::: details Example
```gdscript
pcam_host.get_active_pcam()
```
:::

</template>
</Property>




<Property propertyName="process" propertyType="void" propertyDefault="(<code>float</code> delta)" isMethod="true">
<template v-slot:propertyDescription>

Manually updates the process for this `PCamHost`.

::: warning Important
This function should only be needed if [InterpolationMode](#interpolation_mode) is set to `InterpolationMode.MANUAL`.
:::

::: details Example
```gdscript
pcam_host.process(delta)
```
:::

</template>
</Property>




## Signals

<Signal signalRef="pcam_became_active" arguments="pcam: <code>Node</code>">
<template v-slot:signalName>
pcam_became_active
</template>
<template v-slot:signalDescription>

Emitted when a new `PCam` becomes active and assigned to this `PCamHost`.

The argument is the `PCam` that became active.

</template>
</Signal>

<Signal signalRef="pcam_became_inactive" arguments="pcam: <code>Node</code>">
<template v-slot:signalName>
pcam_became_inactive
</template>
<template v-slot:signalDescription>

Emitted when the currently active `PCam` goes from being active to inactive.

The argument is the `PCam` that became inactive.

</template>
</Signal>

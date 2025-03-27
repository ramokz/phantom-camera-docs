<Property propertyName="active" propertyType="bool" propertyDefault="false">
<template v-slot:propertyDescription>

Returns `true` if this `PCam` is the one controlling the scene's `Camera`.

</template>

<template v-slot:getMethod>

`bool` is_active()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.is_active()
```
:::

</template>
</Property>




<Property propertyName="tween_on_load" propertyType="bool" propertyDefault="true">
<template v-slot:propertyDescription>

By default, the moment a `PCam` is instantiated into a scene, and has the highest priority, it will perform its tween transition.

This is most obvious if a `PCam` has a long duration and is attached to a playable character that can be moved the moment a scene is loaded.

Disabling the Tween on Load property will disable this behaviour and skip the tweening entirely when instantiated.

</template>
<template v-slot:setMethod>

`void` set_tween_on_load(`bool` enable)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_tween_on_load(false)
```
:::

</template>
<template v-slot:getMethod>

`bool` get_tween_on_load()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_tween_on_load()
```
:::

</template>
</Property>




<Property propertyName="inactive_update_mode" propertyType="int" propertyDefault="0">
<template v-slot:propertyDescription>

Determines how often an inactive `PCam` should update its positional and rotational values.
This is meant to reduce the amount of calculations inactive `PCams` are doing when idling to improve performance. The value is based on the enum type `InactiveUpdateMode`.

| Inactive Update Mode | Value |
|----------------------|-------|
| ALWAYS               | 0     |
| NEVER                | 1     |

</template>
<template v-slot:setMethod>

`void` set_inactive_update_mode(`int` update_mode)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_inactive_update_mode(InactiveUpdateMode.NEVER)
```
:::

</template>
<template v-slot:getMethod>

`int` get_inactive_update_mode()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_inactive_update_mode()
```
:::

</template>
</Property>




<Property propertyName="host_layers" propertyType="int" propertyDefault="1">
<template v-slot:propertyDescription>

Determines which `PCamHost` this `PCam` should recognize.

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
pcam.set_host_layers(10) # Enables the 2nd and 4th layer using a bitmask value

## Specific layer change
pcam.set_host_layers_value(4, true) # Enables the 4th layer
```
:::

</template>
<template v-slot:getMethod>

`int` get_host_layers()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_host_layers() # Returns the layer value as a bitmask
```
:::

</template>
</Property>




<Property propertyName="tween_resource" propertyType="PhantomCameraTween" propertyDefault="null">
<template v-slot:propertyDescription>

The resource that defines how this `PCam` should be transitioned to.

Can be shared across multiple `PCams`.

See the [Tween](/resource-types/tween) page for more details.

</template>
<template v-slot:setMethod>

`void` set_tween_resource(`PhantomCameraTween` tween_resource)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_tween_resource(tween_resource)
```
:::

</template>
<template v-slot:getMethod>

`PhantomCameraTween` get_tween_resource()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_tween_resource()
```
:::

</template>
</Property>




<Property propertyName="tween_duration" propertyType="float" propertyDefault="1">
<template v-slot:propertyDescription>

Property reference to [tween_duration of the `PhantomCameraTween`](/resource-types/tween#duration).

</template>
<template v-slot:setMethod>

`void` set_tween_duration(`float` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_tween_duration(value)
```
:::

</template>
<template v-slot:getMethod>

`float` get_tween_duration()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_tween_duration()
```
:::

</template>
</Property>




<Property propertyName="tween_transition" propertyType="int" propertyDefault="0">
<template v-slot:propertyDescription>

Property reference to [tween_transition of the `PhantomCameraTween`](/resource-types/tween#transition).

</template>
<template v-slot:setMethod>

`void` set_tween_ease(`int` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_tween_transition(value)
```
:::

</template>
<template v-slot:getMethod>

`float` get_tween_transition()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_tween_transition()
```
:::

</template>
</Property>




<Property propertyName="tween_ease" propertyType="int" propertyDefault="2">
<template v-slot:propertyDescription>

Property reference to [tween_ease of the `PhantomCameraTween`](/resource-types/tween#ease).

</template>
<template v-slot:setMethod>

`void` set_tween_ease(`int` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_tween_ease(value)
```
:::

</template>
<template v-slot:getMethod>

`float` get_tween_ease()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_tween_ease()
```
:::

</template>
</Property>

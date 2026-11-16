<img src="/assets/icons/feature-look-at.svg" height="256" width="256"/>

# Look At Overview (3D)
Determines the rotational logic for a given `PCam3D`.

The different modes has different functionalities and purposes, so choosing the correct mode depends on what each `PCam` is meant to do.

## Core Modes

<div class="property-core-group">
<PropertyCore propertyName="Mimic" propertyPageLink="./mimic" propertyIcon="./../../assets/icons/look-at-mimic.svg">
<template v-slot:propertyDescription>

The simplest of the available options. Effectively copies the rotational value of the targeted `Node3D`.

</template>
</PropertyCore>
<PropertyCore propertyName="Simple" propertyPageLink="./simple" propertyIcon="./../../assets/icons/look-at-simple.svg">
<template v-slot:propertyDescription>

Keeps a persistent forward direction towards a target.

</template>
</PropertyCore>
<PropertyCore propertyName="Group" propertyPageLink="./group" propertyIcon="./../../assets/icons/look-at-group.svg">
<template v-slot:propertyDescription>

Allows for multiple targets to be looked at. The camera will look at the centre of the assigned targets' `Vector3` coordinate.

</template>
</PropertyCore>
</div>

## Properties

<Property propertyName="look_at_mode" propertyType="LookAtEnum" propertyDefault="None">
<template v-slot:propertyDescription>

Value is based on `LookAtMode` enum.

| Look At Mode | Value |
|--------------|-------|
| NONE         | 0     |
| MIMIC        | 1     |
| SIMPLE       | 2     |
| GROUP        | 3     |

::: warning Important
This property should _**not**_ be changed during runtime, as such the setter for this has purposely been excluded.<br><br>
To use another `look_at_mode` at runtime, switch to a separate `PCam` with the specific `look_at_mode` applied.<br>
:::

</template>
<template v-slot:getMethod>

`int` get_look_at_mode()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_look_at_mode()
```
:::

</template>
</Property>




<Property propertyName="up" propertyType="Vector3" propertyDefault="Vector3(0, 1, 0)">
<template v-slot:propertyDescription>

Defines the upward direction of the `PhantomCamera3D` when [look_at_mode](#look_at_mode) is set.

This value will be overriden if [up_target](#up_target) is defined.

</template>
<template v-slot:setMethod>

`void` set_up(`Vector3` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_up(Vector3(1, 1, 0))
```
:::

</template>
<template v-slot:getMethod>

`Vector3` get_up()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_up()
```
:::

</template>
</Property>




<Property propertyName="up_target" propertyType="Node3D" propertyDefault="null">
<template v-slot:propertyDescription>

Applies and continuously updates the `up` direction of the `PhantomCamera3D` based on this target when [look_at_mode](#look_at_mode) is set.

Setting a value here will override the [up](#up) value.

</template>
<template v-slot:setMethod>

`void` set_up_target(`Node3D` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_up_target(node_target)
```
:::

</template>
<template v-slot:getMethod>

`Node3D` get_up_target()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_up_target()
```
:::

</template>
</Property>




<Property propertyName="look_at_lookahead" propertyType="bool" propertyDefault="false">
<template v-slot:propertyDescription>

Enables velocity-based look-ahead. As the look at target moves the camera will move further ahead based on its velocity. The faster the `look at target` moves, the further ahead the camera will look.


</template>
<template v-slot:setMethod>

`void` set_look_at_lookahead(`bool` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_look_at_lookahead(true)
```
:::

</template>
<template v-slot:getMethod>

`bool` get_look_at_lookahead()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_look_at_lookahead()
```
:::

</template>
</Property>




<Property propertyName="look_at_lookahead_time" propertyType="float" propertyDefault="0.1">
<template v-slot:propertyDescription>

The amount of seconds to look ahead of the follow target's position per axis based on the follow target's velocity.

</template>
<template v-slot:setMethod>

`void` set_look_at_lookahead_time(`float` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_look_at_lookahead_time(0.5)
```
:::

</template>
<template v-slot:getMethod>

`float` get_look_at_lookahead_time()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_look_at_lookahead_time()
```
:::

</template>
</Property>




<Property propertyName="look_at_lookahead_acceleration" propertyType="float" propertyDefault="0.1">
<template v-slot:propertyDescription>

Determines the damping speed of how fast the camera should reach the [look_at_lookahead_time](#look_at_lookahead_time)
target once the `look_at target` has positional velocity.

**Lower value** = faster<br>
**Higher value** = slower

</template>
<template v-slot:setMethod>

`void` set_look_at_lookahead_acceleration(`float` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_look_at_lookahead_acceleration(0.5)
```
:::

</template>
<template v-slot:getMethod>

`float` get_look_at_lookahead_acceleration()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_look_at_lookahead_acceleration()
```
:::

</template>
</Property>




<Property propertyName="look_at_lookahead_deacceleration" propertyType="float" propertyDefault="0.1">
<template v-slot:propertyDescription>

Determines the damping speed of how fast the camera should decelerate back to the `follow target`'s position
once it has no positional velocity.

**Lower value** = faster<br>
**Higher value** = slower

</template>
<template v-slot:setMethod>

`void` set_look_at_lookahead_deacceleration(`float` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_look_at_lookahead_deacceleration(0.5)
```
:::

</template>
<template v-slot:getMethod>

`float` get_look_at_lookahead_deacceleration()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_look_at_lookahead_deacceleration()
```
:::

</template>
</Property>




<Property propertyName="look_at_lookahead_max" propertyType="bool" propertyDefault="false">
<template v-slot:propertyDescription>

Enables a maximum velocity limit in `meters per second` for [look_at_lookahead](#look_at_lookahead).

If `true`, the `look at target`'s velocity will be clamped to the [`look_at_lookahead_max_value`](#look_at_lookahead_max_value).

In other words, no matter how fast the target's actual velocity is, the lookahead will only follow up to the speed defined here.

</template>
<template v-slot:setMethod>

`void` set_look_at_lookahead_max(`bool` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_look_at_lookahead_max(true)
```
:::

</template>
<template v-slot:getMethod>

`bool` get_look_at_lookahead_max()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_look_at_lookahead_max()
```
:::

</template>
</Property>




<Property propertyName="look_at_lookahead_max_value" propertyType="float" propertyDefault="5">
<template v-slot:propertyDescription>

The maximum [`look_at_lookahead`](#look_at_lookahead) velocity in `meters per second` that will be tracked.

</template>
<template v-slot:setMethod>

`void` set_look_at_lookahead_max_value(`float` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_look_at_lookahead_max_value(10)
```
:::

</template>
<template v-slot:getMethod>

`float` get_look_at_lookahead_max_value()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_look_at_lookahead_max()
```
:::

</template>
</Property>






## Methods

<Property propertyName="is_looking" propertyType="bool" isMethod="true">
<template v-slot:propertyDescription>

Returns `true` if [look_at_mode](#look_at_mode) is **not** set to `NONE` and has a valid `look_at_target`.

::: details Example
```gdscript
pcam.is_looking()
```
:::

</template>
</Property>

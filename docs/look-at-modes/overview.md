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

::: info Note
The Setter for `Look_at_mode` has purposely not been added.<br>
A separate `PCam3D` should be used instead.
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

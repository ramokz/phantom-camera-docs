<img src="/assets/icons/phantom-camera-3D.svg" height="256" width="256"/>

# PhantomCamera3D

> Inherits: Node3D

`PhantomCamera3D`, shortened to `PCam3D` (text) and `pcam_3d` (code), is used in 3D scenes.

## Core Properties
<div class="property-core-group">

<PropertyCore propertyName="Priority" propertyPageLink="../priority" propertyIcon="feature-priority.svg">
<template v-slot:propertyDescription>

Determines which `PCam3D` should be controlling the `Camera3D`.

</template>
</PropertyCore>

<PropertyCore propertyName="Follow Mode" propertyPageLink="../follow-modes/overview" propertyIcon="feature-follow.svg">
<template v-slot:propertyDescription>

Enables the `PCam3D` to follow specific target(s) using various logics.

</template>
</PropertyCore>

<PropertyCore propertyName="Look At" propertyPageLink="../look-at-modes/overview" propertyIcon="feature-look-at.svg">
<template v-slot:propertyDescription>


Enables the `PCam3D` to look at specific node(s), effectively adjusting its rotational value.

</template>
</PropertyCore>

<PropertyCore propertyName="Tween" propertyPageLink="../tween" propertyIcon="feature-tween.svg">
<template v-slot:propertyDescription>

Determines how the `Camera3D` should tween to this `PhantomCamera3D` upon becoming active.

</template>
</PropertyCore>
</div>

## Secondary Properties
<!--@include: ./parts/phantom-camera-properties.md-->

<Property propertyName="Camera3D Resource" propertyType="Camera3DResource" propertyDefault="null">
<template v-slot:propertyDescription>

A resource type that allows for overriding the `Camera3D` node's properties.

</template>
<template v-slot:setMethod>

`void` set_camera_3D_resource(`Camera3DResource` resource)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_camera_3D_resource(resource)
```
:::

</template>
<template v-slot:getMethod>

`Camera3DResource` get_camera_3D_resource()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_camera_3D_resource()
```
:::

</template>
</Property>

<Property propertyName="Camera Cull Mask" propertyType="int" propertyDefault="1048575">
<template v-slot:propertyDescription>

Overrides the Camera Cull Mask property of the `Camera3D` once becoming active.

A simplified helper setter method can be found in the example code below.

</template>
<template v-slot:setMethod>

`void` set_camera_cull_mask(`int` cull_mask)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_camera_cull_mask(cull_mask)

# Use this helper method to enable or disable a specific layer.
pcam.set_cull_mask_value(int layer_number, bool value)
```
:::

</template>
<template v-slot:getMethod>

`int` get_camera_cull_mask()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_camera_cull_mask()
```
:::

</template>
</Property>

<Property propertyName="H Offset" propertyType="float" propertyDefault="0">
<template v-slot:propertyDescription>

Overrides the H Offset property of the `Camera3D` once becoming active.

</template>
<template v-slot:setMethod>

`void` set_camera_h_offset(`float` h_offset)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_camera_h_offset(4.2)
```
:::

</template>
<template v-slot:getMethod>

`int` get_camera_h_offset()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_camera_h_offset()
```
:::

</template>
</Property>

<Property propertyName="V Offset" propertyType="float" propertyDefault="0">
<template v-slot:propertyDescription>

Overrides the V Offset property of the `Camera3D` once becoming active.

</template>
<template v-slot:setMethod>

`void` set_camera_v_offset(`float` v_offset)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_camera_v_offset(4.2)
```
:::

</template>
<template v-slot:getMethod>

`int` get_camera_v_offset()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_camera_v_offset()
```
:::

</template>
</Property>

<Property propertyName="FOV" propertyType="float" propertyDefault="75">
<template v-slot:propertyDescription>

Overrides the FOV (Field of View) property of the `Camera3D` once becoming active.

</template>
<template v-slot:setMethod>

`void` set_camera_fov(`float` fov)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_camera_fov(4.2)
```
:::

</template>
<template v-slot:getMethod>

`int` get_camera_fov()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_camera_fov()
```
:::

</template>
</Property>


## Signals

<Signal signalName="Became Active">
<template v-slot:signalCode>

became_active

</template>

<template v-slot:signalDescription>

Emitted when the `PCam` becomes active.

</template>
</Signal>


<Signal signalName="Became Inactive">
<template v-slot:signalCode>

became_inactive

</template>

<template v-slot:signalDescription>

Emitted when the `PCam` becomes inactive.

</template>
</Signal>

<Signal signalName="Follow Target Changed">
<template v-slot:signalCode>

follow_target_changed

</template>

<template v-slot:signalDescription>

Emitted when the `follow target` changes.

</template>
</Signal>


<Signal signalName="Look At Target Changed">
<template v-slot:signalCode>

look_at_target_changed

</template>

<template v-slot:signalDescription>

Emitted when [`look_at_target`](/look-at-modes/overview) changes.

</template>
</Signal>


<Signal signalName="Dead Zone Changed">
<template v-slot:signalCode>

dead_zone_changed

</template>

<template v-slot:signalDescription>

Emitted when the dead zone changes. Note: This is only applicable in [Framed Follow](/follow-modes/framed) mode.

</template>
</Signal>


<Signal signalName="Tween Started">
<template v-slot:signalCode>

tween_started

</template>

<template v-slot:signalDescription>

Emitted when the `Camera` starts to tween to the `PCam`.

</template>
</Signal>


<Signal signalName="Is Tweening">
<template v-slot:signalCode>

is_tweening

</template>

<template v-slot:signalDescription>

Emitted when the `Camera` is being tweened.

</template>
</Signal>


<Signal signalName="Tween Interrupted">
<template v-slot:signalCode>

tween_interrupted (`PhantomCamera` pcam)

</template>

<template v-slot:signalDescription>

Emitted when the tween is interrupted due to another `PCam` becoming active.

The argument is the `PCam` that interrupted the tween.

</template>
</Signal>


<Signal signalName="Tween Completed">
<template v-slot:signalCode>

tween_completed

</template>

<template v-slot:signalDescription>

Emitted when the `Camera` completes its tween to the `PCam`.

</template>
</Signal>
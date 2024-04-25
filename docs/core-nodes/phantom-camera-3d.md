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

<Property propertyName="camera_3d_resource" propertyType="Camera3DResource" propertyDefault="null">
<template v-slot:propertyDescription>

A resource type that allows for overriding the `Camera3D` node's properties.

See the [Camera3DResource](/resource-types/camera-3d-resource) page for more details.

</template>
<template v-slot:setMethod>

`void` set_camera_3d_resource(`Camera3DResource` resource)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_camera_3d_resource(resource)
```
:::

</template>
<template v-slot:getMethod>

`Camera3DResource` get_camera_3d_resource()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_camera_3d_resource()
```
:::

</template>
</Property>


## Signals

<Signal signalRef="became_active">
<template v-slot:signalName>
became_active
</template>
<template v-slot:signalDescription>

Emitted when the `PCam` becomes active.

</template>
</Signal>




<Signal signalRef="became_inactive">
<template v-slot:signalName>
became_inactive
</template>
<template v-slot:signalDescription>

Emitted when the `PCam` becomes inactive.

</template>
</Signal>




<Signal signalRef="dead_zone_changed">
<template v-slot:signalName>
dead_zone_changed
</template>
<template v-slot:signalDescription>

Emitted when the dead zone changes. Note: This is only applicable in [Framed Follow](/follow-modes/framed) mode.

</template>
</Signal>




<Signal signalRef="follow_target_changed">
<template v-slot:signalName>
follow_target_changed
</template>
<template v-slot:signalDescription>

Emitted when the `follow target` changes.

</template>
</Signal>




<Signal signalRef="is_tweening">
<template v-slot:signalName>
is_tweening
</template>
<template v-slot:signalDescription>

Emitted when the `Camera` is being tweened.

</template>
</Signal>




<Signal signalRef="look_at_target_changed">
<template v-slot:signalName>
look_at_target_changed
</template>
<template v-slot:signalDescription>

Emitted when [`look_at_target`](/look-at-modes/overview) changes.

</template>
</Signal>




<Signal signalRef="tween_started">
<template v-slot:signalName>
tween_started
</template>
<template v-slot:signalDescription>

Emitted when the `Camera` starts to tween to the `PCam`.

</template>
</Signal>




<Signal signalRef="tween_interrupted">
<template v-slot:signalName>
tween_interrupted
</template>
<template v-slot:signalDescription>

Emitted when the tween is interrupted due to another `PCam` becoming active.

The argument is the `PCam` that interrupted the tween.

</template>
</Signal>




<Signal signalRef="tween_completed">
<template v-slot:signalName>
tween_completed
</template>
<template v-slot:signalDescription>

Emitted when the `Camera` completes its tween to the `PCam`.

</template>
</Signal>
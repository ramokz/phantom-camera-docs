<img src="/assets/icons/phantom-camera-3D.svg" height="256" width="256"/>

# PhantomCamera3D

> Inherits: Node3D

`PhantomCamera3D`, shortened to `PCam3D` (text) and `pcam_3d` (code), is used in 3D scenes.

`PCam3Ds` can manually be enabled / disabled by toggling its visibility in the `Scene` hierarchy panel.

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

<PropertyCore propertyName="Look At Mode" propertyPageLink="../look-at-modes/overview" propertyIcon="feature-look-at.svg">
<template v-slot:propertyDescription>


Enables the `PCam3D` to look at specific node(s), effectively adjusting its rotational value.

</template>
</PropertyCore>

<PropertyCore propertyName="Tween" propertyPageLink="../resource-types/phantom-camera-tween" propertyIcon="feature-tween.svg">
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




<Property propertyName="keep_aspect" propertyType="int" propertyDefault="1">
<template v-slot:propertyDescription>

Property reference to [keep_aspect property of the `Camera3DResource`](/resource-types/camera-3d-resource#keep_aspect).

</template>
<template v-slot:setMethod>

`void` set_keep_aspect(`int` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
# Applies KEEP_WIDTH values
pcam.set_keep_aspect(0)

# Alternatively, use the enum value
pcam.set_keep_aspect(Camera3DResource.KeepAspect.KEEP_WIDTH)
```
:::

</template>
<template v-slot:getMethod>

`int` get_keep_aspect()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_keep_aspect()
```
:::

</template>
</Property>



<Property propertyName="cull_mask" propertyType="int" propertyDefault="1048575">
<template v-slot:propertyDescription>

Property reference to [cull_mask property of the `Camera3DResource`](/resource-types/camera-3d-resource#cull_mask).

</template>
<template v-slot:setMethod>

`void` set_cull_mask(`int` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_cull_mask(value)
```
:::

</template>
<template v-slot:getMethod>

`int` get_cull_mask()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_cull_mask()
```
:::

</template>
</Property>




<Property propertyName="h_offset" propertyType="float" propertyDefault="0">
<template v-slot:propertyDescription>

Property reference to [h_offset property of the `Camera3DResource`](/resource-types/camera-3d-resource#h_offset).

</template>
<template v-slot:setMethod>

`void` set_h_offset(`float` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_h_offset(4.2)
```
:::

</template>
<template v-slot:getMethod>

`float` get_h_offset()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_h_offset()
```
:::

</template>
</Property>




<Property propertyName="v_offset" propertyType="float" propertyDefault="0">
<template v-slot:propertyDescription>

Property reference to [v_offset property of the `Camera3DResource`](/resource-types/camera-3d-resource#v_offset).

</template>
<template v-slot:setMethod>

`void` set_v_offset(`float` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_v_offset(4.2)
```
:::

</template>
<template v-slot:getMethod>

`float` get_v_offset()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_v_offset()
```
:::

</template>
</Property>




<Property propertyName="projection" propertyType="int" propertyDefault="0">
<template v-slot:propertyDescription>

Property reference to [projection property of the `Camera3DResource`](/resource-types/camera-3d-resource#projection).

</template>
<template v-slot:setMethod>

`void` set_projection(`int` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_projection(2)
```
:::

</template>
<template v-slot:getMethod>

`int` get_projection()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_projection()
```
:::

</template>
</Property>




<Property propertyName="fov" propertyType="float" propertyDefault="75">
<template v-slot:propertyDescription>

Property reference to [fov property of the `Camera3DResource`](/resource-types/camera-3d-resource#projection).

</template>
<template v-slot:setMethod>

`void` set_fov(`float` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_fov(4.2)
```
:::

</template>
<template v-slot:getMethod>

`float` get_fov()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_fov()
```
:::

</template>
</Property>




<Property propertyName="size" propertyType="float" propertyDefault="1">
<template v-slot:propertyDescription>

Property reference to [size property of the `Camera3DResource`](/resource-types/camera-3d-resource#size).

</template>
<template v-slot:setMethod>

`void` set_size(`float` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_size(4.2)
```
:::

</template>
<template v-slot:getMethod>

`float` get_size()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_size()
```
:::

</template>
</Property>




<Property propertyName="frustum_offset" propertyType="Vector2" propertyDefault="Vector2(0, 0, 0)">
<template v-slot:propertyDescription>

Property reference to [frustum_offset property of the `Camera3DResource`](/resource-types/camera-3d-resource#frustum_offset).

</template>
<template v-slot:setMethod>

`void` set_frustum_offset(`Vector2` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_frustum_offset(Vector2(4, 2))
```
:::

</template>
<template v-slot:getMethod>

`float` get_frustum_offset()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_frustum_offset()
```
:::

</template>
</Property>




<Property propertyName="near" propertyType="float" propertyDefault="0.05">
<template v-slot:propertyDescription>

Property reference to [near property of the `Camera3DResource`](/resource-types/camera-3d-resource#near).

</template>
<template v-slot:setMethod>

`void` set_near(`float` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_near(value)
```
:::

</template>
<template v-slot:getMethod>

`float` get_near()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_near()
```
:::

</template>
</Property>



<Property propertyName="far" propertyType="float" propertyDefault="4000">
<template v-slot:propertyDescription>

Property reference to [far property of the `Camera3DResource`](/resource-types/camera-3d-resource#far).

</template>
<template v-slot:setMethod>

`void` set_far(`float` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_far(value)
```
:::

</template>
<template v-slot:getMethod>

`float` get_far()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_far()
```
:::

</template>
</Property>




<Property propertyName="attributes" propertyType="CameraAttributes" propertyDefault="null">
<template v-slot:propertyDescription>

Allows for setting and dynamically tweening between [`CameraAttribute`](https://docs.godotengine.org/en/latest/classes/class_cameraattributes.html#class-cameraattributes) resources for each `PCam3D`. Used to enable and transition between things like depth-of-field, i.e. camera blur, and camera light exposure.

::: warning Important
If a [`CameraAttribute`](https://docs.godotengine.org/en/latest/classes/class_cameraattributes.html#class-cameraattributes) resource is already applied to a `Camera3D` node, then adding one to a `PCam3D` will automatically override it once that `PCam3D` becomes active.

Again, using an `Attribute` resource on the `PCam3D` should be intended as a means of dynamically switching between different resources for tweens. In other words, if a project, or scene, only needs one [`CameraAttribute`](https://docs.godotengine.org/en/latest/classes/class_cameraattributes.html#class-cameraattributes) resource, then consider using a [`WorldEnvironemnt`](https://docs.godotengine.org/en/latest/classes/class_worldenvironment.html#class-worldenvironment) node or apply it directly to `Camera3D` node instead.
:::

::: warning Important
Aside from a few exposure properties, any tweening between different [`CameraAttribute`](https://docs.godotengine.org/en/latest/classes/class_cameraattributes.html#class-cameraattributes) resources will only occur if the types are the same. So for best results, stick to using just [`CameraAttributePractical`](https://docs.godotengine.org/en/latest/classes/class_cameraattributespractical.html#class-cameraattributespractical) or [`CameraAttributePhysical`](https://docs.godotengine.org/en/latest/classes/class_cameraattributesphysical.html#class-cameraattributesphysical).
:::


::: warning Important

If applying a CameraAttribute resource to a `PCam3D`, then the `Camera3D` will retain the most recently applied one if the consequent active `PCam3Ds` have no [`CameraAttribute`](https://docs.godotengine.org/en/latest/classes/class_cameraattributes.html#class-cameraattributes) applied.
So if you want to move away from a current [`CameraAttribute`](https://docs.godotengine.org/en/latest/classes/class_cameraattributes.html#class-cameraattributes) setting, or reset it to default values, you would need to have another, active, `PCam3D` with another [`CameraAttribute`](https://docs.godotengine.org/en/latest/classes/class_cameraattributes.html#class-cameraattributes) resource with the desired changes / defaults.

:::

</template>
<template v-slot:setMethod>

`void` set_attributes(`CameraAttributes` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_attributes(value)
```
:::

</template>
<template v-slot:getMethod>

`CameraAttributes` get_attributes()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_attributes()
```
:::

</template>
</Property>




<Property propertyName="environment" propertyType="Environment" propertyDefault="null">
<template v-slot:propertyDescription>

Allows for setting a [`Environment`](https://docs.godotengine.org/en/latest/classes/class_environment.html#class-environment) resources for individual `PCam3Ds`. The properties of this resource will **_not_** be tweened between each `PCam3D` that has resource.

::: warning Important
Only consider using this if there is a desire to change the environment variable per PCam3D instance. Otherwise, consider using a [`WorldEnvironemnt`](https://docs.godotengine.org/en/latest/classes/class_worldenvironment.html#class-worldenvironment) node or apply it directly to `Camera3D` node instead.
:::

</template>
<template v-slot:setMethod>

`void` set_environment(`Environment` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_environment(value)
```
:::

</template>
<template v-slot:getMethod>

`Environment` get_environment()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_environment()
```
:::

</template>
</Property>




<Property propertyName="noise" propertyType="PhantomCameraNoise3D" propertyDefault="null">
<template v-slot:propertyDescription>

Applies a noise, or shake, to a `Camera3D` using the [PhantomCameraNoise2D](/resource-types/phantom-camera-noise-3d) resource.
Once set, the noise will run continuously after the tween to the `PhantomCamera3D` is complete.

</template>

<template v-slot:setMethod>

`void` set_noise(`PhantomCameraNoise3D` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_noise(noise_resource)
```
:::

</template>
<template v-slot:getMethod>

`PhantomCameraNoise3D` get_noise()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_noise()
```
:::

</template>
</Property>




<Property propertyName="preview_noise" propertyType="bool" propertyDefault="true">
<template v-slot:propertyDescription>

If **true**, will trigger the noise while in the editor.

Useful in cases where you want to temporarily disabled the noise in the editor without removing
the resource.

This property has no effect on runtime behaviour.

</template>
</Property>




<Property propertyName="noise_emitter_layer" propertyType="int" propertyDefault="0">
<template v-slot:propertyDescription>

Enable a corresponding layer for a [PhantomCameraNoiseEmitter3D noise_emitter_layer](/noise/phantom-camera-noise-emitter-3d#noise_emitter_layer) to make this `PhantomCamera3D` be affected by it.

Enabling multiple corresponding layers on the same `PhantomCamera3D` causes no additional effect.

**Note:** The layer value uses a bitmask.

::: tip Tip
A helper function also exists called `set_noise_emitter_layer_value()`, where you can supply a specific layer number and then enable / disable it (see setter example below). Use this if you prefer not having to supply bitmask values.
:::

</template>

<template v-slot:setMethod>

`void` set_noise_emitter_layer(`int` value)

`void` set_noise_emitter_layer_value(`int` layer, `bool` enabled)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
## Bitmask assignment
pcam.set_noise_emitter_layer(10) # Enables the 2nd and 4th layer using a bitmask value

## Specific layer change
pcam.set_noise_emitter_layer_value(4, true) # Enables the 4th layer
```
:::

</template>
<template v-slot:getMethod>

`int` get_noise_emitter_layer()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_noise_emitter_layer() # Returns the layer value as a bitmask
```
:::

</template>
</Property>




## Methods
<Property propertyName="emit_noise" propertyType="void" propertyDefault="(<code>Transform3D</code> transform)" isMethod="true">
<template v-slot:propertyDescription>

Emits a noise based on a custom `Transform3D` value.

Use this function if you wish to make use of external noise patterns from, for example, other addons.

::: details Example
```gdscript
pcam.emit_noise(transform_value)
```
:::

</template>
</Property>




<Property propertyName="teleport_position" propertyType="void" isMethod="true">
<template v-slot:propertyDescription>

Teleports the `PhantomCamera3D` and `Camera3D` to their designated position, bypassing the damping process.

::: details Example
```gdscript
pcam.teleport_position()
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

Emitted when the dead zone changes when in [Framed Follow](/follow-modes/framed) mode.

</template>
</Signal>




<Signal signalRef="dead_zone_reached">
<template v-slot:signalName>
dead_zone_reached
</template>
<template v-slot:signalDescription>

Emitted when a target touches the edge of the dead zone in [Framed Follow](/follow-modes/framed) mode.

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




<Signal signalRef="tween_interrupted" arguments="<code>Node</code> pcam">
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




# Editor-only
## Align with View
![align-with-wiew.avif](/assets/editor/align-with-wiew.avif)

Positions and rotates the `PCam3D` to match the 3D viewport's camera transform.

They are visible depending on if the `PCam3D` is following or looking at a target(s); e.g. if a `PCam3D` is **following** a target, then only `Align Rotation with View` will be available as the position will instantly be overridden.

The buttons can be found in `Align with View` submenu nested within the `Editor` property inspector group of the `PCam3D` node.

<Property propertyName="viewport_index" propertyType="int" propertyDefault="0">
<template v-slot:propertyDescription>

Changes which viewport the alignment buttons should be based on - ranging from 0 to 3.  If you are only using 1 editor viewport, keep the default value to `0`.

</template>
</Property>




## Target Gizmo Line
![target-gizmo-line.avif](/assets/editor/target-gizmo-line.avif)

Draws a gizmo line between a `PCam3D` and its `Follow` / `Look At` target. If no target has been set, no line(s) will appear.

This can be toggled on / off (default) from the `Gizmo Line` submenu inside the `Editor` property inspector group of the `PCam3D` node.<br>

Line color definition:<br>
**Red** = Following <br>
**Blue** = Looking At

::: tip Note
A [Follow Mode](#follow-mode) or [Look At Mode](#look-at-mode) needs to be set for the corresponding toggles to appear in the inspector.
:::

::: tip Important
The lines will **not** be visible at runtime.
:::


<Property propertyName="draw_follow_line" propertyType="bool" propertyDefault="false">
<template v-slot:propertyDescription>

Draws a line between the `PCam3D` and the target position it is following. 

</template>
</Property>

<Property propertyName="draw_look_at_line" propertyType="bool" propertyDefault="false">
<template v-slot:propertyDescription>

Draws a line between the `PCam3D` and the target position it is looking at. 

</template>
</Property>

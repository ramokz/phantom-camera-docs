<img src="/assets/icons/phantom-camera-2D.svg" height="256" width="256"/>

# PhantomCamera2D
> Inherits: Node2D

`PhantomCamera2D`, shortened to `PCam2D` (text) and `pcam_2d` (code), is used in 2D scenes.

`PCam2Ds` can manually be enabled / disabled by toggling its visibility in the `Scene` hierarchy panel.

## Core Properties
<div class="property-core-group">
<PropertyCore propertyName="Priority" propertyPageLink="../priority" propertyIcon="feature-priority.svg">
<template v-slot:propertyDescription>

Determines which `PCam2D` should be controlling the `Camera2D`.

</template>
</PropertyCore>

<PropertyCore propertyName="Follow Mode" propertyPageLink="../follow-modes/overview" propertyIcon="feature-follow.svg">
<template v-slot:propertyDescription>

Enables the `PCam2D` to follow specific target(s) using various logics.

</template>
</PropertyCore>

<PropertyCore propertyName="Tween" propertyPageLink="../phantom-camera-tween" propertyIcon="feature-tween.svg">
<template v-slot:propertyDescription>

Determines how the `Camera2D` should tween to this `PCam2D` upon becoming active.

</template>
</PropertyCore>
</div>

## Secondary Properties
<!-- @include: ./parts/phantom-camera-properties.md -->

<Property propertyName="zoom" propertyType="Vector2" propertyDefault="Vector2(1,1)">
<template v-slot:propertyDescription>

Applies a zoom amount to the `PCam2D`, which will override the `Zoom` property of the `Camera2D` node.

</template>
<template v-slot:setMethod>

`void` set_zoom(`Vector2` zoom)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_zoom(Vector2(1.5, 1.5))
```
:::

</template>
<template v-slot:getMethod>

`Vector2` get_zoom()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_zoom()
```
:::

</template>
</Property>




<Property propertyName="frame_preview" propertyType="bool" propertyDefault="true">
<template v-slot:propertyDescription>

Enables a preview of what the `PCam2D` will see in the scene. It works identically to how a `Camera2D` shows which area will be visible during runtime. Likewise, this too will be affected by the `Zoom` property and the `Viewport Width` and `Viewport Height` defined in the `Project Settings`.

</template>
</Property>




<Property propertyName="snap_to_pixel" propertyType="bool" propertyDefault="false">
<template v-slot:propertyDescription>

If enabled, will make the `Camera2D` always snap to whole pixels.

This should be particularly useful in pixel art projects, where assets should always be aligned to the monitor's pixels to avoid unintended stretching.

::: info Note
This is not an intended solution for making a camera pixel perfect. That is a more complex issue to solve.
:::

</template>
<template v-slot:setMethod>

`void` set_snap_to_pixel(`bool` enable)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_snap_to_pixel(true)
```
:::

</template>
<template v-slot:getMethod>

`bool` get_snap_to_pixel()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_snap_to_pixel()
```
:::

</template>
</Property>




<Property propertyName="draw_limits" propertyType="bool" propertyDefault="false">
<template v-slot:propertyDescription>

Shows the `Camera2D`'s built-in limit border. The `Camera2D` can move around anywhere within it.

</template>
</Property>




<Property propertyName="limit_left" propertyType="int" propertyDefault="-10000000">
<template v-slot:propertyDescription>

Defines the left side of the `Camera2D` limit. The camera will not be able to move past this point.

</template>

<template v-slot:setMethod>

`void` set_limit_left(`int` value)

`void` set_limit(`int` side, `int` value)

</template>

<template v-slot:setExample>

::: details Example
```gdscript
# Shorthand
pcam.set_limit_left(200)

# General Side setter
pcam.set_limit(SIDE_LEFT, 200)
```
:::

</template>

<template v-slot:getMethod>

`int` get_limit_left()

`int` get_limit(`int` side)

</template>

<template v-slot:getExample>

::: details Example
```gdscript
# Shorthand
pcam.get_limit_left()

# General Side getter
pcam.get_limit(SIDE_LEFT)
```
:::

</template>
</Property>




<Property propertyName="limit_top" propertyType="int" propertyDefault="-10000000">
<template v-slot:propertyDescription>

Defines the top side of the `Camera2D` limit. The camera will not be able to move past this point.

</template>

<template v-slot:setMethod>

`void` set_limit_top(`int` value)

`void` set_limit(`int` side, `int` value)

</template>

<template v-slot:setExample>

::: details Example
```gdscript
# Shorthand
pcam.set_limit_top(200)

# General Side setter
pcam.set_limit(SIDE_TOP, 200)
```
:::

</template>

<template v-slot:getMethod>

`int` get_limit_top()

`int` get_limit(`int` side)

</template>

<template v-slot:getExample>

::: details Example
```gdscript
# Shorthand
pcam.get_limit_top()

# General Side getter
pcam.get_limit(SIDE_TOP)
```
:::

</template>
</Property>




<Property propertyName="limit_right" propertyType="int" propertyDefault="10000000">
<template v-slot:propertyDescription>

Defines the right side of the `Camera2D` limit. The camera will not be able to move past this point.

</template>

<template v-slot:setMethod>

`void` set_limit_right(`int` value)

`void` set_limit(`int` side, `int` value)

</template>

<template v-slot:setExample>

::: details Example
```gdscript
## Shorthand
pcam.set_limit_right(200)

## General Side setter
pcam.set_limit(SIDE_RIGHT, 200)
```
:::

</template>

<template v-slot:getMethod>

`int` get_limit_right()

`int` get_limit(`int` side)

</template>

<template v-slot:getExample>

::: details Example
```gdscript
# Shorthand
pcam.get_limit_right()

# General Side getter
pcam.get_limit(SIDE_RIGHT)
```
:::

</template>
</Property>




<Property propertyName="limit_bottom" propertyType="int" propertyDefault="10000000">
<template v-slot:propertyDescription>

Defines the bottom side of the `Camera2D` limit. The camera will not be able to move past this point.

</template>

<template v-slot:setMethod>

`void` set_limit_bottom(`int` value)

`void` set_limit(`int` side, `int` value)

</template>

<template v-slot:setExample>

::: details Example
```gdscript
# Shorthand
pcam.set_limit_bottom(200)

# General Side setter
pcam.set_limit(SIDE_BOTTOM, 200)
```
:::

</template>

<template v-slot:getMethod>

`int` get_limit_bottom()

`int` get_limit(`int` side)

</template>

<template v-slot:getExample>

::: details Example
```gdscript
# Shorthand
pcam.get_limit_bottom()

# General Side getter
pcam.get_limit(SIDE_BOTTOM)
```
:::

</template>
</Property>




<Property propertyName="limit_target" propertyType="NodePath" propertyDefault="null">
<template v-slot:propertyDescription>

Allows for setting either a `TileMap` / `TileMapLayer` or `CollisionShape2D` node to automatically apply a limit size instead of manually adjusting the `Left`, `Top`, `Right` and `Left` properties.

**TileMap / TileMapLayer**

The `Limit` will update after the `TileSet` of the `TileMap` / `TileMapLayer`  has changed.

_Note:_ The limit size will only update after closing the `TileMap` / `TileMapLayer` editor bottom panel.

**CollisionShape2D**

The limit will update in realtime as the `Shape2D` changes its size whilst in the editor.

_Note:_ For performance reasons, resizing the `Shape2D` while running the game will _not_ change the `Limit` sides.

</template>

<template v-slot:setMethod>

`void` set_limit_target(`NodePath` target)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
# TileMap / TileMapLayer node
pcam.set_limit_target(tile_map_node)

# CollisionShape2D node
pcam.set_limit_target(collision_shape_2d_node)
```
:::

</template>
<template v-slot:getMethod>

`NodePath` get_limit_target()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_limit_target()
```
:::

</template>
</Property>


<Property propertyName="limit_margin" propertyType="Vector4i" propertyDefault="Vector4i(0,0,0,0)">
<template v-slot:propertyDescription>

Applies an offset to the `TileMap / TileMapLayer Limit` or `Shape2D Limit`.

The values go from `Left`, `Top`, `Right` and `Bottom`.

The values can be either positive or negative, which will decrease and increase the limit size respectively.

</template>

<template v-slot:setMethod>

`void` set_limit_margin(`Vector4i` margin)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_limit_margin(Vector4i(200, -200, 200, -200))
```
:::

</template>
<template v-slot:getMethod>

`TileMap / TileMapLayer` get_limit_margin()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_limit_margin()
```
:::

</template>
</Property>




<Property propertyName="noise" propertyType="PhantomCameraNoise2D" propertyDefault="null">
<template v-slot:propertyDescription>

Applies a noise, or shake, to a `Camera2D` using the [PhantomCameraNoise2D](/resource-types/phantom-camera-noise-2d) resource.
Once set, the noise will run continuously after the tween to the `PhantomCamera2D` is complete.

</template>

<template v-slot:setMethod>

`void` set_noise(`PhantomCameraNoise2D` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_noise(noise_resource)
```
:::

</template>
<template v-slot:getMethod>

`int` get_noise()

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

Enable a corresponding layer for a [PhantomCameraNoiseEmitter2D noise_emitter_layer](/noise/phantom-camera-noise-emitter-2d#noise_emitter_layer) to make this `PhantomCamera2D` be affected by it.

Enabling multiple corresponding layers on the same `PhantomCamera2D` causes no additional effect.

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

<Property propertyName="emit_noise" propertyType="void" propertyDefault="(<code>Transform2D</code> transform)" isMethod="true">
<template v-slot:propertyDescription>

Emits a noise based on a custom `Transform2D` value.

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

Teleports the `PhantomCamera2D` to their designated position, bypassing the damping process.

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

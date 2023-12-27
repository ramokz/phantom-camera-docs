<img src="/assets/icons/phantom-camera-2D.svg" height="256" width="256"/>

# PhantomCamera2D
> Inherits: Node2D

`PhantomCamera2D`, shortened to `PCam2D` (text) and `pcam_2d` (code), is used in 2D scenes.

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

<PropertyCore propertyName="Tween" propertyPageLink="../tween" propertyIcon="feature-tween.svg">
<template v-slot:propertyDescription>

Determines how the `Camera2D` should tween to this `PCam2D` upon becoming active.

</template>
</PropertyCore>
</div>

## Secondary Properties
<!-- @include: ./parts/phantom-camera-properties.md -->




<Property propertyName="Zoom" propertyType="Vector2" propertyDefault="Vector2(1,1)">
<template v-slot:propertyDescription>

Applies a zoom level to the `PCam2D`, which effectively overrides the `Zoom` property of the `Camera2D` node.

</template>
<template v-slot:setMethod>

`void` set_zoom(`Vector2` value)

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




<Property propertyName="Frame Preview" propertyType="bool" propertyDefault="true">
<template v-slot:propertyDescription>

Enables a preview of what the `PCam2D` will see in the scene. It works identically to how a `Camera2D` shows which area will be visible during runtime. Likewise, this too will be affected by the `Zoom` property and the `Viewport Width` and `Viewport Height` defined in the `Project Settings`.

</template>
</Property>




<Property propertyName="Pixel Perfect" propertyType="bool" propertyDefault="false">
<template v-slot:propertyDescription>

To support pixel perfect camera movement, this can be toggled to snap Camera2D to always snap to whole pixels.

This should be particularly useful in pixel art projects, where assets should always be aligned to the monitor's pixels to avoid unintended stretching.

</template>
<template v-slot:setMethod>

`void` set_pixel_perfect(`bool` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_pixel_perfect(true)
```
:::

</template>
<template v-slot:getMethod>

`bool` get_pixel_perfect()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_pixel_perfect()
```
:::

</template>
</Property>




<Property propertyName="Draw Limit" propertyType="bool" propertyDefault="false">
<template v-slot:propertyDescription>

Shows the `Camera2D`'s built-in limit border. The `Camera2D` can move around anywhere within it.

</template>
</Property>




<Property propertyName="Limit - Left" propertyType="int" propertyDefault="-10000000">
<template v-slot:propertyDescription>

Defines the left side of the `Camera2D` limit. The camera will not be able to move past this point.

</template>

<template v-slot:setMethod>

`void` set_limit(`int` side, `int` value)

</template>

<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_limit(SIDE_LEFT, 200)
```
:::

</template>

<template v-slot:getMethod>

`int` get_limit(`int` side)

</template>

<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_limit(SIDE_LEFT)
```
:::

</template>
</Property>




<Property propertyName="Limit - Top" propertyType="int" propertyDefault="-10000000">
<template v-slot:propertyDescription>

Defines the top side of the `Camera2D` limit. The camera will not be able to move past this point.

</template>

<template v-slot:setMethod>

`void` set_limit(`int` side, `int` value)

</template>

<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_limit(SIDE_TOP, 200)
```
:::

</template>

<template v-slot:getMethod>

`int` get_limit(`int` side)

</template>

<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_limit(SIDE_TOP)
```
:::

</template>

</Property>




<Property propertyName="Limit - Right" propertyType="int" propertyDefault="10000000">
<template v-slot:propertyDescription>

Defines the right side of the `Camera2D` limit. The camera will not be able to move past this point.

</template>

<template v-slot:setMethod>

`void` set_limit(`int` side, `int` value)

</template>

<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_limit(SIDE_RIGHT, 200)
```
:::

</template>

<template v-slot:getMethod>

`int` get_limit(`int` side)

</template>

<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_limit(SIDE_RIGHT)
```
:::

</template>
</Property>




<Property propertyName="Limit - Bottom" propertyType="int" propertyDefault="10000000">
<template v-slot:propertyDescription>

Defines the bottom side of the `Camera2D` limit. The camera will not be able to move past this point.

</template>

<template v-slot:setMethod>

`void` set_limit(`int` side, `int` value)

</template>

<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_limit(SIDE_BOTTOM, 200)
```
:::

</template>

<template v-slot:getMethod>

`int` get_limit(`int` side)

</template>

<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_limit(SIDE_BOTTOM)
```
:::

</template>

</Property>




<Property propertyName="TileMap Limit Target" propertyType="TileMap" propertyDefault="null">
<template v-slot:propertyDescription>

Allows for setting a `TileMap` as the limit sizer instead of the `Left`, `Top`, `Right` and `Left` properties.

The `Limit` will update after the `TileSet` of the `TileMap` has changed. <br>
Note: Will need to leave the `TileMap` editor panel before the changes go into effect.

</template>

<template v-slot:setMethod>

`void` set_limit_tile_map_node(`TileMap` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_limit_tile_map_node(tile_map_node)
```
:::

</template>
<template v-slot:getMethod>

`TileMap` get_limit_tile_map_node()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_limit_tile_map_node()
```
:::

</template>
</Property>




<Property propertyName="Shape2D Limit Target" propertyType="CollisionShape2D" propertyDefault="null">
<template v-slot:propertyDescription>

Allows for setting a `Shape2D` within a `CollisionShape2D` as the limit sizer instead of the `Left`, `Top`, `Right` and `Left` properties.

The Limit will update in realtime as the `Shape2D` changes its size.

</template>

<template v-slot:setMethod>

`void` set_limit_collision_shape_2d_node(`CollisionShape2D` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_limit_collision_shape_2d_node(collision_shape_2d_node)
```
:::

</template>
<template v-slot:getMethod>

`CollisionShape2D` get_limit_collision_shape_2d_node()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_limit_collision_shape_2d_node()
```
:::

</template>
</Property>




<Property propertyName="Limit Margin" propertyType="Vector4i" propertyDefault="Vector4i(0,0,0,0)">
<template v-slot:propertyDescription>

Applies an offset to the `TileMap Limit` or `Shape2D Limit`.

The values goes from `Left`, `Top`, `Right` and `Bottom`.

</template>

<template v-slot:setMethod>

`void` set_limit_margin(`Vector4i` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_limit_margin(Vector4i(200, 200, 200, 200))
```
:::

</template>
<template v-slot:getMethod>

`TileMap` get_limit_margin()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_limit_margin()
```
:::

</template>
</Property>


<Property propertyName="Limit Smoothed" propertyType="bool" propertyDefault="false">
<template v-slot:propertyDescription>

Dampens the `Camera2D` when it reaches the limit. The smoothness amount is based on the value of `Damping` property of the `Follow Mode`. 

</template>

<template v-slot:setMethod>

`void` set_limit_smoothing_enabled(`bool` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_limit_smoothing_enabled(true)
```
:::

</template>
<template v-slot:getMethod>

`bool` get_limit_smoothing_enabled()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_limit_smoothing_enabled()
```
:::

</template>
</Property>


## Signals
<!-- @include: ./parts/phantom-camera-signals.md -->
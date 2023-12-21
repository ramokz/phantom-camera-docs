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

`Vector2` set_zoom()

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


<Property propertyName="Draw Limit" propertyType="bool" propertyDefault="false">
<template v-slot:propertyDescription>

Shows the `Camera2D`'s built-in limit border. The `Camera2D` can move around anywhere within it.

</template>
</Property>


<Property propertyName="Limit - Left" propertyType="int" propertyDefault="-10000000">
<template v-slot:propertyDescription>

Defines the left side of the `Camera2D` limit. The camera will not be able to move past this point.

</template>
</Property>


<Property propertyName="Limit - Top" propertyType="int" propertyDefault="-10000000">
<template v-slot:propertyDescription>

Defines the top side of the `Camera2D` limit. The camera will not be able to move past this point.

</template>
</Property>


<Property propertyName="Limit - Right" propertyType="int" propertyDefault="10000000">
<template v-slot:propertyDescription>

Defines the right side of the `Camera2D` limit. The camera will not be able to move past this point.

</template>
</Property>


<Property propertyName="Limit - Bottom" propertyType="int" propertyDefault="10000000">
<template v-slot:propertyDescription>

Defines the bottom side of the `Camera2D` limit. The camera will not be able to move past this point.

</template>
</Property>


<Property propertyName="Smoothed" propertyType="bool" propertyDefault="false">
<template v-slot:propertyDescription>

Dampens the `Camera2D` when it reaches the limit. The smoothness amount is based on the value of `Damping` property of the `Follow Mode`. 

</template>
</Property>


<Property propertyName="TileMap Limit Target" propertyType="TileMap" propertyDefault="null">
<template v-slot:propertyDescription>

Allows for setting a `TileMap` as the limit sizer instead of the `Left`, `Top`, `Right` and `Left` properties.

</template>
</Property>


<Property propertyName="TileMap Limit Margin" propertyType="Vector4" propertyDefault="Vector4(0,0,0,0)">
<template v-slot:propertyDescription>

Applies an offset to the TileMap Limit.

The values goes from `Left`, `Top`, `Right` and `Bottom`.

</template>
</Property>
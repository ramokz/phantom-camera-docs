<img alt="Follow Framed Icon" class="page-header-icon" src="/assets/icons/follow-framed.svg" height="256" width="256" />

# Framed Follow

Enables dynamic framing of a given target using horizontal and vertical dead zones. The dead zones enable the `PCam` to remain still until the target moves beyond them where the `PCam` will then resume following.

Previewing the Dead Zone can be done from the [Viewfinder panel](../viewfinder), which can be found at the bottom of the editor.

Alternatively, enable the [show_viewfinder_in_play](#show_viewfinder_in_play) property in the inspector to show the dead zone while running the game from the editor.

## Video Examples

<VideoTabs propertyName="follow-framed-videos" video2d="../assets/videos/follow-framed-2d.mp4" video3d="../assets/videos/follow-framed-3d.mp4"/>

## Properties

<!--@include: ./parts/follow-target.md-->

<!--@include: ./parts/follow-offset.md-->

<!--@include: ./parts/damping.md-->

<!--@include: ./parts/damping-value.md-->

<!--@include: ./parts/follow-distance.md-->

<Property propertyName="dead_zone_width" propertyType="Vector2" propertyDefault="Vector2(0, 0)">
<template v-slot:propertyDescription>

Defines the left and right dead zone areas. While the target is within it, the PCam will not move in the horizontal axis.

If the `follow target` leaves the horizontal bounds, the PCam will follow the target horizontally to keep it within bounds.

**X** = Left Dead Zone

**Y** = Right Dead Zone

</template>

<template v-slot:setMethod>

`void` set_dead_zone_width(`Vector2` value)

</template>

<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_dead_zone_width(Vector2(0.3, 0.6))
```
:::

</template>

<template v-slot:getMethod>

`bool` get_dead_zone_width()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_dead_zone_width()
```
:::

</template>
</Property>


<Property propertyName="dead_zone_height" propertyType="Vector2" propertyDefault="Vector2(0, 0)">
<template v-slot:propertyDescription>

Defines the top and right dead zone areas. While the target is within it, the PCam will not move in the vertical axis.

If the `follow target` leaves the vertical bounds, the PCam will follow the target horizontally to keep it within bounds.

**X** = Left Dead Zone

**Y** = Right Dead Zone

</template>

<template v-slot:setMethod>

`void` set_dead_zone_height(`Vector2` value)

</template>

<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_dead_zone_height(Vector2(0.1, 0.8))
```
:::

</template>

<template v-slot:getMethod>

`bool` get_dead_zone_height()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_dead_zone_height()
```
:::

</template>
</Property>




<Property propertyName="dead_zone_depth" propertyType="Vector2" propertyDefault="Vector2(0, 0)">
<template v-slot:propertyDescription>

Defines the depth, or the local z-axis distance, dead zone area. 

By default, the camera will keep a persistent distance between itself and the [`follow_target`](#follow_target) in the forward axis defined in the [`follow_distance`](#follow_distance).

Setting a value will add a dead zone where the camera will remain still if the [`follow_target`](#follow_target) gets further or closer to it.

**X** = represents the maximum z dead space, i.e. the space behind the `follow_target and target itself.

**Y** = represents the minimum z dead space, i.e. between the camera and the [`follow_target`](#follow_target).

<Property2D3DOnly :is2D="false"/>

</template>

<template v-slot:setMethod>

`void` set_dead_zone_depth(`Vector2` value)

</template>

<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_dead_zone_depth(Vector2(5, 5))
```
:::

</template>

<template v-slot:getMethod>

`Vector2` get_dead_zone_depth()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_dead_zone_depth()
```
:::

</template>
</Property>




<Property propertyName="center_on_active" propertyType="bool" propertyDefault="true">
<template v-slot:propertyDescription>

If `true`, will reset the target at the center of the viewport when the `PCam` becomes active and begins tweening towards it.

</template>

<template v-slot:setMethod>

`void` set_center_on_active(`Vector2` value)

</template>

<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_center_on_active(true)
```
:::

</template>

<template v-slot:getMethod>

`bool` get_center_on_active()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_center_on_active()
```
:::

</template>
</Property>




<Property propertyName="show_viewfinder_in_play" propertyType="bool" propertyDefault="false">
<template v-slot:propertyDescription>

Enables the dead zones to be visible when running the game from the editor.

_Dead zones will always be disabled in build exports._

</template>
</Property>




<Property propertyName="interactive_dead_zone" propertyType="int" propertyDefault="0">
<template v-slot:propertyDescription>

Defines where the [`dead_zone_width`](#dead_zone_width) and [`dead_zone_height`](dead_zone_height) edges should be editable by dragging the edges of the dead zone lines.

By default, it is editable from both the editor viewfinder and at runtime.

| Interactive Dead Zone | Value |
|-----------------------|-------|
| ALL                   | 0     |
| VIEWFINDER            | 1     |
| RUNTIME               | 2     |
| NONE                  | 3     |

</template>
</Property>


<!--@include: ./parts/rotate-with-target.md-->

<img alt="Follow Group Icon" class="page-header-icon" src="/assets/icons/follow-group.svg" height="256" width="256" />

# Group Follow

Allows for multiple nodes to be followed and affect the `PCam`'s positional behaviour. It works by setting a `Rect2` (2D) or `AABB` (3D) bounding box around the targets where the `PCam` will track the centre of it.

An [Auto Zoom (2D)](#auto-zoom-(2d)) and [Auto Distance (3D)](#auto-distance-(3d)) parameter can be applied to dynamically make the `PCam` readjust itself to keep multiple targets within view if they start to spread out.

This mode can be useful for single stage experiences that relies on having multiple targets in view at all times.

## Video Examples

<VideoTabs propertyName="follow-group-videos" video2d="../assets/videos/follow-group-2d.mp4" video3d="../assets/videos/follow-group-3d.mp4"/>

## Properties

<Property2D3D propertyName="follow_targets" propertyType2D="Array[Node2D]" propertyDefault2D="null" propertyType3D="Array[Node3D]" propertyDefault3D="null">

<template v-slot:propertyDescription>

Defines the nodes that the `PCam` should be following.

</template>
<template v-slot:setMethod2D>

`void` set_follow_targets(`Array[Node2D]` target_nodes)

`void` append_follow_group_node(`Node2D` target_node)

`void` append_follow_group_node_array(`Array[Node2D]` target_nodes)

`void` erase_follow_group_node(`Node2D` target_node)

</template>
<template v-slot:setMethod3D>

`void` set_follow_targets(`Array[Node3D]` target_nodes)

`void` append_follow_group_node(`Node3D` target_node)

`void` append_follow_group_node_array(`Array[Node3D]` target_nodes)

`void` erase_follow_group_node(`Node3D` target_node)

</template>

<template v-slot:setExample2D>

::: details Example
```gdscript
# Assigns a new array of nodes to the Follow Group
pcam.set_follow_targets(node_collection)
# Appends one node to the Follow Group
pcam.append_follow_targets(player_node)
# Appends an array of nodes to the Follow Group
pcam.append_follow_targets_array(node_array)
# Removes a node from the Follow Group
pcam.erase_follow_targets(another_node)
```
:::

</template>
<template v-slot:setExample3D>

::: details Example
```gdscript
# Assigns a new array of nodes to the Follow Group
pcam.set_follow_targets(node_collection)
# Appends one node to the Follow Group
pcam.append_follow_targets(player_node)
# Appends an array of nodes to the Follow Group
pcam.append_follow_targets_array(node_array)
# Removes a node from the Follow Group
pcam.erase_follow_targets(another_node)
```
:::

</template>

<template v-slot:getMethod2D>

`Array[Node2D]` get_follow_group_nodes()

</template>
<template v-slot:getMethod3D>

`Array[Node3D]` get_follow_group_nodes()

</template>

<template v-slot:getExample2D>

::: details Example
```gdscript
pcam.get_follow_group_nodes()
```
:::

</template>
<template v-slot:getExample3D>

::: details Example
```gdscript
pcam.get_follow_group_nodes()
```
:::

</template>

</Property2D3D>

<!--@include: ./parts/damping.md-->

<!--@include: ./parts/damping-value.md-->

<Property propertyName="auto_zoom" propertyType="bool" propertyDefault="false">
<template v-slot:propertyDescription>

Enables the `PCam2D` to dynamically zoom in and out based on the targets' distances between each other.

Once enabled, the `PCam` will stay as zoomed in as possible, limited by the `Maximum Zoom` and start zooming out as the targets move further apart, limited by the `Minimum Zoom`.

Note: Enabling this property hides and disables the `Zoom` property as this effectively overrides that value.

<Property2D3DOnly :is2D="true" altProp="auto_follow_distance" altPropLink="./group#auto_follow_distance"/>

</template>
<template v-slot:setMethod>

`void` set_auto_zoom (`bool` enable)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_auto_zoom(true)
```
:::

</template>

<template v-slot:getMethod>

`bool` get_auto_zoom()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_auto_zoom()
```
:::

</template>
</Property>




<Property propertyName="auto_zoom_min" propertyType="float" propertyDefault="1">
<template v-slot:propertyDescription>

Sets the minimum zoom amount, in other words how far away the `Camera2D` can be from scene.

This only works when `auto_zoom` is enabled.

<Property2D3DOnly :is2D="true" altProp="auto_follow_distance_min" altPropLink="./group#auto_follow_distance_min"/>

</template>
<template v-slot:setMethod>

`void` set_auto_zoom_min (`float` min_zoom)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_auto_zoom_min(0.42)
```
:::

</template>

<template v-slot:getMethod>

`float` get_auto_zoom_min()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_auto_zoom_min()
```
:::

</template>
</Property>




<Property propertyName="auto_zoom_max" propertyType="float" propertyDefault="5">
<template v-slot:propertyDescription>

Sets the maximum zoom amount, in other words how close the `Camera2D` can move towards the scene.

This only works when `auto_zoom` is enabled.

<Property2D3DOnly :is2D="true" altProp="auto_follow_distance_max" altPropLink="./group#auto_follow_distance_max"/>

</template>
<template v-slot:setMethod>

`void` set_auto_zoom_max (`float` max_zoom)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_auto_zoom_max(4)
```
:::

</template>

<template v-slot:getMethod>

`float` get_auto_zoom_max()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_auto_zoom_max()
```
:::

</template>
</Property>




<Property propertyName="auto_zoom_margin" propertyType="Vector4" propertyDefault="Vector4(0,0,0,0)">
<template v-slot:propertyDescription>

Determines how close to the edges the targets are allowed to be. <br>
This is useful to avoid targets being cut off at the edges of the screen.

The `Vector4` parameter order goes: Left - Top - Right - Bottom.

<Property2D3DOnly :is2D="true"/>

</template>
<template v-slot:setMethod>

`void` set_auto_zoom_margin (`Vector4` zoom_margin)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_auto_zoom_margin(Vector4(10, 30, 10, 40))
```
:::

</template>

<template v-slot:getMethod>

`Vector4` get_auto_zoom_margin()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_auto_zoom_margin()
```
:::

</template>
</Property>




<!--@include: ./parts/follow-distance.md-->




<Property propertyName="auto_follow_distance" propertyType="bool" propertyDefault="false">
<template v-slot:propertyDescription>

Enables the `PCam` to automatically distance itself based on the targets' distances between each other.

It looks at the longest axis between the different targets and interpolates the distance length between the `Minimum Distance` and `Maximum Distance` properties below.

**Note:** Enabling this property hides and disables the `Distance` property as this effectively overrides that value.

<Property2D3DOnly :is2D="false" altProp="auto_zoom" altPropLink="./group#auto_zoom"/>


</template>
<template v-slot:setMethod>

`void` set_auto_follow_distance(`bool` enable)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_auto_follow_distance(true)
```
:::

</template>
<template v-slot:getMethod>

`bool` get_auto_follow_distance()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_auto_follow_distance()
```
:::

</template>
</Property>




<Property propertyName="auto_follow_distance_min" propertyType="float" propertyDefault="1">
<template v-slot:propertyDescription>

Sets the minimum distance between the `Camera` and centre of `AABB`.

**Note:** This distance will only ever be reached when all the targets are in the exact same `Vector3` coordinate, which will very unlikely happen, so adjust the value here accordingly.

<Property2D3DOnly :is2D="false" altProp="auto_zoom_max" altPropLink="./group#auto_zoom_max"/>

</template>
<template v-slot:setMethod>

`void` set_auto_follow_distance_min(`float` min_distance)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_auto_follow_distance_min(4.2)
```
:::

</template>
<template v-slot:getMethod>

`float` get_auto_follow_distance_min()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_auto_follow_distance_min()
```
:::

</template>
</Property>




<Property propertyName="auto_follow_distance_max" propertyType="float" propertyDefault="5">
<template v-slot:propertyDescription>

Sets the maximum distance between the `Camera` and centre of `AABB`.

<Property2D3DOnly :is2D="false" altProp="auto_zoom_min" altPropLink="./group#auto_zoom_min"/>

</template>
<template v-slot:setMethod>

`void` set_auto_follow_distance_max(`float` max_distance)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_auto_follow_distance_max(4.2)
```
:::

</template>
<template v-slot:getMethod>

`float` get_auto_follow_distance_max()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_auto_follow_distance_max()
```
:::

</template>
</Property>




<Property propertyName="auto_follow_distance_divisor" propertyType="float" propertyDefault="10">
<template v-slot:propertyDescription>

Determines how fast the `auto_follow_distance` moves between the maximum and minimum distance. The higher the value, the sooner the maximum distance is reached.

This value should be based on the sizes of the `auto_follow_distance_min` and `auto_follow_distance_max`. <br>
E.g. if the value between the `auto_follow_distance_min` and `auto_follow_distance_max` is small, consider keeping the number low and vice versa.

<Property2D3DOnly :is2D="false"/>

</template>
<template v-slot:setMethod>

`void` set_auto_follow_distance_divisor(`float` division)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_auto_follow_distance_divisor(4.2)
```
:::

</template>
<template v-slot:getMethod>

`float` get_auto_follow_distance_divisor()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_auto_follow_distance_divisor()
```
:::

</template>
</Property>
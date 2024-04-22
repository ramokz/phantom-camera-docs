<img src="/assets/icons/look-at-group.svg" height="256" width="256"/>


# Group Look At (3D)

Allows for multiple targets to be looked at. The `Pcam3D` will create a `AABB` that surrounds the targets and will look at the centre of it.

## Video Example
<video controls>
<source src="/assets/videos/look-at-group.mp4">
</video>

## Properties

<Property propertyName="look_at_targets" propertyType="Array[Node3D]" propertyDefault="null">
<template v-slot:propertyDescription>

Defines the group of targets that the camera should be looking at. It will be looking at the centre of all the assigned targets.

</template>
<template v-slot:setMethod>

`void` set_look_at_targets(`Array[Node3D]` targets)

`void` append_look_at_group_node(`Node3D` target)

`void` append_look_at_group_node_array(`Array[Node3D]` targets)

`void` erase_look_at_group_node(`Node3D` target)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
# Assigns a new array of nodes to the Look At Group
pcam.set_look_at_targets(targets)

# Appends one node to the Look At Group
pcam.append_look_at_group_node(target)

# Appends an array of nodes to the Look At Group
pcam.append_look_at_group_node_array(targets)

# Removes a node from the Look At Group
pcam.erase_look_at_group_node(target)
```
:::

</template>
<template v-slot:getMethod>

`Array[Node3D]` get_look_at_targets()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_look_at_targets()
```
:::

</template>
</Property>

<!--@include: ./parts/look-at-offset.md-->
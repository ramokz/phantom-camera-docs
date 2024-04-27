<img alt="Third Person Icon" class="page-header-icon" src="/assets/icons/follow-third-person.svg" height="256" width="256"/>

# Third Person Follow (3D)
As the name implies, this mode is meant to be used for third person camera experiences. It works by applying a `SpringArm3D` where the properties, such as `Collison Mask`, `Spring Length` and `Margin`, can be controlled from the `PCam3D`.

To adjust the orbit rotation around the target, use one of the following setter methods:
- [set_third_person_quaternion](#rotation-(quaternion)) (quaternion)
- [set_third_person_rotation()](#rotation-(radians)) (radians)
- [set_third_person_rotation_degrees()](#rotation-(degrees)) (degrees).

## Video Example

<video controls>
<source src="/assets/videos/follow-third-person-3d.mp4">
</video>

## Properties

<Property propertyName="follow_target" propertyType="Node3D" propertyDefault="null">
<template v-slot:propertyDescription>

Determines which Node should be followed. The `PCam3D` will follow the position of the Follow Target based on the Follow Mode and its parameters.

</template>
<template v-slot:setMethod>

`void` set_follow_target(`Node3D` target_node)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_follow_target(player_node)
```
:::

</template>
<template v-slot:getMethod>

`Node3D` get_follow_target()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_follow_target()
```
:::

</template>
</Property>




<Property propertyName="follow_offset" propertyType="Vector3" propertyDefault="Vector3(0,0,0)">
<template v-slot:propertyDescription>

Offsets the follow target's position.

</template>

<template v-slot:setMethod>

`void` set_follow_offset(`Vector3` offset)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_follow_offset(Vector3(1, 1, 1))
```
:::

</template>
<template v-slot:getMethod>

`Vector3` get_follow_offset()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_follow_offset()
```
:::

</template>

</Property>




<!--@include: ./parts/damping.md-->

<!--@include: ./parts/damping-value.md-->




<Property propertyName="spring_length" propertyType="float" propertyDefault="1.0">
<template v-slot:propertyDescription>

Defines the `SpringArm3D` node's spring length. This is the equivalent of defining the `distance` property in other `FollowModes`.

</template>
<template v-slot:setMethod>

`void` set_spring_length(`float` length)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_spring_length(4.2)
```
:::

</template>
<template v-slot:getMethod>

`float` get_spring_length()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_spring_length()
```
:::

</template>
</Property>




<Property propertyName="collision_mask" propertyType="int" propertyDefault="1">
<template v-slot:propertyDescription>

Defines the `SpringArm3D` node's `Collision Mask`.

A simplified helper setter method can be found in the example code below.

</template>
<template v-slot:setMethod>

`void` set_collision_mask(`int` mask_int)

`void` set_collision_mask_value(`int` mask_layer, `bool` enable)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
# Use this to assign a specific layer value.
# Fairly complex to use, so the function below this is recommended.
pcam.set_collision_mask(4)

# Use this helper method to enable or disable a specific layer.
pcam.set_collision_mask_value(2, true)
```
:::

</template>
<template v-slot:getMethod>

`float` get_collision_mask()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_collision_mask()
```
:::

</template>
</Property>




<Property propertyName="shape" propertyType="Shape3D" propertyDefault="null">
<template v-slot:propertyDescription>

Defines the `SpringArm3D` node's `Shape3D`.

</template>
<template v-slot:setMethod>

`void` set_shape(`Shape3D` shape)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_shape(shape)
```
:::

</template>
<template v-slot:getMethod>

`float` get_shape()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_shape()
```
:::

</template>
</Property>




<Property propertyName="margin" propertyType="float" propertyDefault="0.01">
<template v-slot:propertyDescription>

Defines the `SpringArm3D` node's `Margin`.

</template>
<template v-slot:setMethod>

`void` set_margin(`float` margin)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_margin(0.42)
```
:::

</template>
<template v-slot:getMethod>

`float` get_margin()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_margin()
```
:::

</template>
</Property>

## Methods


<Property propertyName="Rotation (Quaternion)" propertyType="Quaternion" propertyDefault="n/a">
<template v-slot:propertyDescription>

Defines the quaternion value of the Third Person `SpringArm3D` node.

</template>
<template v-slot:setMethod>

`void` set_third_person_quaternion(`Quaternion` spring_arm_rotation_deg)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_third_person_quaternion(quaternion)
```
:::

</template>
<template v-slot:getMethod>

`Quaternion` get_third_person_quaternion()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_third_person_quaternion()
```
:::

</template>
</Property>



<Property propertyName="Rotation (Radians)" propertyType="Vector3" propertyDefault="Vector3(0,0,0)">
<template v-slot:propertyDescription>

Defines the rotation (in radians) value of the Third Person `SpringArm3D` node.

</template>
<template v-slot:setMethod>

`void` set_third_person_rotation(`Vector3` spring_arm_rotation)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_third_person_rotation(Vector3(-30, 0, 0))
```
:::

</template>
<template v-slot:getMethod>

`Vector3` get_third_person_rotation()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_third_person_rotation()
```
:::

</template>
</Property>




<Property propertyName="Rotation (Degrees)" propertyType="Vector3" propertyDefault="Vector3(0,0,0)">
<template v-slot:propertyDescription>

Defines the rotation (in degrees) value of the Third Person `SpringArm3D` node.

</template>
<template v-slot:setMethod>

`void` set_third_person_rotation_degrees(`Vector3` spring_arm_rotation_deg)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_third_person_rotation_degrees(Vector3(-30, 0, 0))
```
:::

</template>
<template v-slot:getMethod>

`Vector3` get_third_person_rotation_degrees()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_third_person_rotation_degrees()
```
:::

</template>
</Property>




## Example Setup
```gdscript
var mouse_sensitivity: float = 0.05

var min_yaw: float = 0
var max_yaw: float = 360

var min_pitch: float = -89.9
var max_pitch: float = 50

func _unhandled_input(event) -> void:
  # Trigger whenever the mouse moves.
  if event is InputEventMouseMotion:
    var pcam_rotation_degrees: Vector3

    # Assigns the current 3D rotation of the SpringArm3D node - to start off where it is in the editor.
    pcam_rotation_degrees = pcam.get_third_person_rotation_degrees()

    # Change the X rotation.
    pcam_rotation_degrees.x -= event.relative.y * mouse_sensitivity
		
    # Clamp the rotation in the X axis so it can go over or under the target.
    pcam_rotation_degrees.x = clampf(pcam_rotation_degrees.x, min_pitch, max_pitch)

    # Change the Y rotation value.
    pcam_rotation_degrees.y -= event.relative.x * mouse_sensitivity
		
    # Sets the rotation to fully loop around its target, but without going below or exceeding 0 and 360 degrees respectively.
    pcam_rotation_degrees.y = wrapf(pcam_rotation_degrees.y, min_yaw, max_yaw)
		
    # Change the SpringArm3D node's rotation and rotate around its target.
    pcam.set_third_person_rotation_degrees(pcam_rotation_degrees)
```

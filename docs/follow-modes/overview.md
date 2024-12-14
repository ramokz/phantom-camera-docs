<img src="/assets/icons/feature-follow.svg" height="256" width="256"/>

# Follow Overview

Determines the positional logic for a given `PCam`.

The different modes have different functionalities and purposes, so choosing the correct one depends on what each `PCam` is meant to do. 

## Core Modes

<div class="property-core-group">
<PropertyCore propertyName="Glued" propertyPageLink="./glued" propertyIcon="./../../assets/icons/follow-glued.svg">
<template v-slot:propertyDescription>

Sticks to its target.

</template>
</PropertyCore>
<PropertyCore propertyName="Simple" propertyPageLink="./simple" propertyIcon="./../../assets/icons/follow-simple.svg">
<template v-slot:propertyDescription>

Follows its target with an optional offset.

</template>
</PropertyCore>
<PropertyCore propertyName="Group" propertyPageLink="./group" propertyIcon="./../../assets/icons/follow-group.svg">
<template v-slot:propertyDescription>

Follows multiple targets with the option to dynamically reframe itself as targets move further apart.

</template>
</PropertyCore>
<PropertyCore propertyName="Path" propertyPageLink="./path" propertyIcon="./../../assets/icons/follow-path.svg">
<template v-slot:propertyDescription>

Follows a target while being positionally confined to a `Path` node.

</template>
</PropertyCore>
<PropertyCore propertyName="Framed" propertyPageLink="/follow-modes/framed" propertyIcon="./../../assets/icons/follow-framed.svg">
<template v-slot:propertyDescription>

Applies a dead zone to the frame and only follows its target when it tries to leave it.

</template>
</PropertyCore>
<PropertyCore propertyName="Third Person" propertyPageLink="/follow-modes/third-person" propertyIcon="./../../assets/icons/follow-third-person.svg">
<template v-slot:propertyDescription>

Applies a `SpringArm3D` node to its target and allows for rotating around it.

</template>
</PropertyCore>
</div>

## Properties
<!--@include: ./parts/follow-mode.md-->

<Property propertyName="follow_axis_lock" propertyType="int" propertyDefault="0">
<template v-slot:propertyDescription>

Prevents camera movement in one or multiple world axes.

#### 2D
| FollowLockAxis | Value |
|----------------|-------|
| NONE           | 0     |
| X              | 1     |
| Y              | 2     |
| XY             | 3     |

#### 3D
| FollowLockAxis | Value |
|----------------|-------|
| NONE           | 0     |
| X              | 1     |
| Y              | 2     |
| Z              | 3     |
| XY             | 4     |
| XZ             | 5     |
| YZ             | 6     |
| XYZ            | 7     |

</template>

<template v-slot:setMethod>

`void` set_follow_lock_axis(`int` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_follow_axis_lock(2)
```
:::

</template>

<template v-slot:getMethod>

`int` get_follow_lock_axis()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_follow_axis_lock()
```
:::

</template>
</Property>

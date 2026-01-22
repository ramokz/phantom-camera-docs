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

Locking a `PCam` does not change its position nor take its `Follow Target`'s transform values into account.

::: info Note
This only applies once the `PCam` has a valid `Follow Target`.
:::

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



<Property propertyName="lookahead" propertyType="bool" propertyDefault="false">
<template v-slot:propertyDescription>

Enables velocity-based lookahead.<br>
As the `follow target` moves the camera will move further ahead based on its velocity. The faster the `follow target` moves, the further ahead the camera will move.

<Property2D3DOnly :is2D="true" />

</template>

<template v-slot:setMethod>

`void` set_lookahead(`bool` enable)

</template>

<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_lookahead(true)
```
:::

</template>

<template v-slot:getMethod>

`bool` get_lookahead()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_lookahead()
```
:::

</template>
</Property>

<Property2D3D propertyName="lookahead" propertyName2D="lookahead" propertyName3D="follow_lookahead" propertyType2D="bool" propertyDefault2D="false" propertyType3D="bool" propertyDefault3D="false">


<template v-slot:propertyDescription>


Enables velocity-based lookahead. As the `follow target` moves the camera will move further ahead based on its velocity. The faster the `follow target` moves, the further ahead the camera will move.


</template>



<template v-slot:setMethod2D>


`void` set_lookahead(`bool` value)


</template>



<template v-slot:setMethod3D>


`void` set_follow_lookahead(`bool` value)


</template>



<template v-slot:setExample2D>


::: details Example


```gdscript


pcam.set_lookahead(value)


```


:::


</template>



<template v-slot:setExample3D>


::: details Example


```gdscript


pcam.set_follow_lookahead(value)


```

:::



</template>



<template v-slot:getMethod2D>


`bool` get_lookahead()


</template>



<template v-slot:getMethod3D>


`bool` get_follow_lookahead()


</template>



<template v-slot:getExample2D>


::: details Example


```gdscript


pcam.get_lookahead()


```


:::


</template>



<template v-slot:getExample3D>


::: details Example


```gdscript


pcam.get_follow_lookahead()


```


:::


</template>


</Property2D3D>




<Property propertyName="lookahead_time" propertyType="Vector2" propertyDefault="Vector2(0.5, 0.5)">
<template v-slot:propertyDescription>

The amount of `seconds` to look ahead of the [param follow target]'s position per axis based on the [param follow target]'s velocity.<br><br>
Each axis has its own prediction time in `seconds`.
A value of `0` can be set either to disable lookahead for the corresponding axis.

<Property2D3DOnly :is2D="true" />

</template>

<template v-slot:setMethod>

`void` set_lookahead_time(`Vector2` value)

</template>

<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_lookahead_time(Vector2(0.4, 0.2))
```
:::

</template>

<template v-slot:getMethod>

`Vector2` get_lookahead_time()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_lookahead_time()
```
:::

</template>
</Property>

[//]: # (<Property2D3D propertyName="lookahead_time" propertyName2D="lookahead_time" propertyName3D="follow_lookahead_time" propertyType2D="Vector2" propertyDefault2D="Vector2&#40;0.5, 0.5&#41;" propertyType3D="Vector3" propertyDefault3D="Vector3&#40;0.1, 0.1, 0.1&#41;">)

[//]: # ()
[//]: # (<template v-slot:propertyDescription>)

[//]: # ()
[//]: # (The amount of `seconds` to look ahead of the `follow target`'s position per axis based on the `follow target`'s velocity.<br>)

[//]: # (Each axis has its own prediction time in `seconds`.<br><br>)

[//]: # (A value of `0` can be set either to disable lookahead for the corresponding axis.)

[//]: # ()
[//]: # (</template>)

[//]: # ()
[//]: # ()
[//]: # (<template v-slot:setMethod2D>)

[//]: # ()
[//]: # (`void` set_lookahead_time&#40;`Vector2` value&#41;)

[//]: # ()
[//]: # (</template>)

[//]: # ()
[//]: # ()
[//]: # (<template v-slot:setMethod3D>)

[//]: # ()
[//]: # (`void` set_follow_lookahead_time&#40;`Vector3` value&#41;)

[//]: # ()
[//]: # (</template>)

[//]: # ()
[//]: # ()
[//]: # (<template v-slot:setExample2D>)

[//]: # ()
[//]: # (::: details Example)

[//]: # ()
[//]: # (```gdscript)

[//]: # ()
[//]: # (pcam.set_lookahead_time&#40;Vector2&#40;0.3, 0.3&#41;&#41;)

[//]: # ()
[//]: # (```)

[//]: # ()
[//]: # (:::)

[//]: # ()
[//]: # (</template>)

[//]: # ()
[//]: # ()
[//]: # (<template v-slot:setExample3D>)

[//]: # ()
[//]: # (::: details Example)

[//]: # ()
[//]: # (```gdscript)

[//]: # ()
[//]: # (pcam.set_follow_lookahead_time&#40;Vector3&#40;1, 1, 1&#41;&#41;)

[//]: # ()
[//]: # (```)

[//]: # (:::)

[//]: # ()
[//]: # ()
[//]: # (</template>)

[//]: # ()
[//]: # ()
[//]: # (<template v-slot:getMethod2D>)

[//]: # ()
[//]: # (`bool` get_lookahead_time&#40;&#41;)

[//]: # ()
[//]: # (</template>)

[//]: # ()
[//]: # ()
[//]: # (<template v-slot:getMethod3D>)

[//]: # ()
[//]: # (`bool` get_follow_lookahead_time&#40;&#41;)

[//]: # ()
[//]: # (</template>)

[//]: # ()
[//]: # ()
[//]: # (<template v-slot:getExample2D>)

[//]: # ()
[//]: # (::: details Example)

[//]: # ()
[//]: # (```gdscript)

[//]: # ()
[//]: # (pcam.get_lookahead_time&#40;&#41;)

[//]: # ()
[//]: # (```)

[//]: # ()
[//]: # (:::)

[//]: # ()
[//]: # (</template>)

[//]: # ()
[//]: # ()
[//]: # (<template v-slot:getExample3D>)

[//]: # ()
[//]: # (::: details Example)

[//]: # ()
[//]: # (```gdscript)

[//]: # ()
[//]: # (pcam.get_follow_lookahead_time&#40;&#41;)

[//]: # ()
[//]: # (```)

[//]: # ()
[//]: # (:::)

[//]: # ()
[//]: # (</template>)

[//]: # ()
[//]: # (</Property2D3D>)



<Property propertyName="lookahead_acceleration" propertyType="float" propertyDefault="0.2">
<template v-slot:propertyDescription>

Determines the damping speed of how fast the camera should reach the `lookahead_time` target once the `follow target` has a positional velocity.<br>
**Lower value** = faster.<br>
**Higher value** = slower.

<Property2D3DOnly :is2D="true" />

</template>

<template v-slot:setMethod>

`void` set_lookahead_acceleration(`float` value)

</template>

<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_lookahead_acceleration(0.6)
```
:::

</template>

<template v-slot:getMethod>

`float` get_lookahead_acceleration()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_lookahead_acceleration()
```
:::

</template>
</Property>


[//]: # (<Property2D3D propertyName="lookahead_acceleration" propertyName2D="lookahead_acceleration" propertyName3D="follow_lookahead_acceleration" propertyType2D="float" propertyDefault2D="0.2" propertyType3D="float" propertyDefault3D="0.1">)

[//]: # ()
[//]: # (<template v-slot:propertyDescription>)

[//]: # ()
[//]: # (Determines the damping speed of how fast the camera should reach the `lookahead_time` target once the `follow target` has a positional velocity.<br>)

[//]: # (**Lower value** = faster.<br>)

[//]: # (**Higher value** = slower.)

[//]: # ()
[//]: # (</template>)

[//]: # ()
[//]: # ()
[//]: # (<template v-slot:setMethod2D>)

[//]: # ()
[//]: # (`void` set_lookahead_acceleration&#40;`float` value&#41;)

[//]: # ()
[//]: # (</template>)

[//]: # ()
[//]: # ()
[//]: # (<template v-slot:setMethod3D>)

[//]: # ()
[//]: # (`void` set_follow_lookahead_acceleration&#40;`float` value&#41;)

[//]: # ()
[//]: # (</template>)

[//]: # ()
[//]: # ()
[//]: # (<template v-slot:setExample2D>)

[//]: # ()
[//]: # (::: details Example)

[//]: # ()
[//]: # (```gdscript)

[//]: # ()
[//]: # (pcam.set_lookahead_acceleration&#40;0.8&#41;)

[//]: # ()
[//]: # (```)

[//]: # ()
[//]: # (:::)

[//]: # ()
[//]: # (</template>)

[//]: # ()
[//]: # ()
[//]: # (<template v-slot:setExample3D>)

[//]: # ()
[//]: # (::: details Example)

[//]: # ()
[//]: # (```gdscript)

[//]: # ()
[//]: # (pcam.set_follow_lookahead_acceleration&#40;0.6&#41;)

[//]: # ()
[//]: # (```)

[//]: # (:::)

[//]: # ()
[//]: # ()
[//]: # (</template>)

[//]: # ()
[//]: # ()
[//]: # (<template v-slot:getMethod2D>)

[//]: # ()
[//]: # (`bool` get_lookahead_acceleration&#40;&#41;)

[//]: # ()
[//]: # (</template>)

[//]: # ()
[//]: # ()
[//]: # (<template v-slot:getMethod3D>)

[//]: # ()
[//]: # (`bool` get_follow_lookahead_acceleration&#40;&#41;)

[//]: # ()
[//]: # (</template>)

[//]: # ()
[//]: # ()
[//]: # (<template v-slot:getExample2D>)

[//]: # ()
[//]: # (::: details Example)

[//]: # ()
[//]: # (```gdscript)

[//]: # ()
[//]: # (pcam.get_lookahead_acceleration&#40;&#41;)

[//]: # ()
[//]: # (```)

[//]: # (:::)

[//]: # ()
[//]: # (</template>)

[//]: # ()
[//]: # ()
[//]: # (<template v-slot:getExample3D>)

[//]: # ()
[//]: # (::: details Example)

[//]: # ()
[//]: # (```gdscript)

[//]: # ()
[//]: # (pcam.get_follow_lookahead_acceleration&#40;&#41;)

[//]: # ()
[//]: # (```)

[//]: # (:::)

[//]: # ()
[//]: # (</template>)

[//]: # ()
[//]: # (</Property2D3D>)



<Property propertyName="lookahead_deceleration" propertyType="float" propertyDefault="0.15">
<template v-slot:propertyDescription>

Determines the damping speed of how fast the camera should decelerate back to the `follow target`'s position once it has no positional velocity.<br>
**Lower value** = faster.<br>
**Higher value** = slower.

<Property2D3DOnly :is2D="true" />

</template>

<template v-slot:setMethod>

`void` set_lookahead_deceleration(`float` value)

</template>

<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_lookahead_deceleration(0.6)
```
:::

</template>

<template v-slot:getMethod>

`float` get_lookahead_deceleration()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_lookahead_deceleration()
```
:::

</template>
</Property>

[//]: # (<Property2D3D propertyName="lookahead_deceleration" propertyName2D="lookahead_deceleration" propertyName3D="follow_lookahead_deceleration" propertyType2D="float" propertyDefault2D="0.2" propertyType3D="float" propertyDefault3D="0.1">)

[//]: # ()
[//]: # (<template v-slot:propertyDescription>)

[//]: # ()
[//]: # (Determines the damping speed of how fast the camera should decelerate back to the `follow target`'s position once it has no positional velocity.<br>)

[//]: # (**Lower value** = faster.<br>)

[//]: # (**Higher value** = slower.)

[//]: # ()
[//]: # (</template>)

[//]: # ()
[//]: # ()
[//]: # (<template v-slot:setMethod2D>)

[//]: # ()
[//]: # (`void` set_lookahead_deceleration&#40;`float` value&#41;)

[//]: # ()
[//]: # (</template>)

[//]: # ()
[//]: # ()
[//]: # (<template v-slot:setMethod3D>)

[//]: # ()
[//]: # (`void` set_follow_lookahead_deceleration&#40;`float` value&#41;)

[//]: # ()
[//]: # (</template>)

[//]: # ()
[//]: # ()
[//]: # (<template v-slot:setExample2D>)

[//]: # ()
[//]: # (::: details Example)

[//]: # ()
[//]: # (```gdscript)

[//]: # ()
[//]: # (pcam.set_lookahead_deceleration&#40;0.4&#41;)

[//]: # ()
[//]: # (```)

[//]: # ()
[//]: # (:::)

[//]: # ()
[//]: # (</template>)

[//]: # ()
[//]: # ()
[//]: # (<template v-slot:setExample3D>)

[//]: # ()
[//]: # (::: details Example)

[//]: # ()
[//]: # (```gdscript)

[//]: # ()
[//]: # (pcam.set_follow_lookahead_deceleration&#40;0.6&#41;)

[//]: # ()
[//]: # (```)

[//]: # (:::)

[//]: # ()
[//]: # ()
[//]: # (</template>)

[//]: # ()
[//]: # ()
[//]: # (<template v-slot:getMethod2D>)

[//]: # ()
[//]: # (`bool` get_lookahead_deceleration&#40;&#41;)

[//]: # ()
[//]: # (</template>)

[//]: # ()
[//]: # ()
[//]: # (<template v-slot:getMethod3D>)

[//]: # ()
[//]: # (`bool` get_follow_lookahead_deceleration&#40;&#41;)

[//]: # ()
[//]: # (</template>)

[//]: # ()
[//]: # ()
[//]: # (<template v-slot:getExample2D>)

[//]: # ()
[//]: # (::: details Example)

[//]: # ()
[//]: # (```gdscript)

[//]: # ()
[//]: # (pcam.get_lookahead_deceleration&#40;&#41;)

[//]: # ()
[//]: # (```)

[//]: # (:::)

[//]: # ()
[//]: # (</template>)

[//]: # ()
[//]: # ()
[//]: # (<template v-slot:getExample3D>)

[//]: # ()
[//]: # (::: details Example)

[//]: # ()
[//]: # (```gdscript)

[//]: # ()
[//]: # (pcam.get_follow_lookahead_deceleration&#40;&#41;)

[//]: # ()
[//]: # (```)

[//]: # (:::)

[//]: # ()
[//]: # (</template>)

[//]: # (</Property2D3D>)


<Property propertyName="lookahead_max" propertyType="bool" propertyDefault="false">
<template v-slot:propertyDescription>

Enables a maximum velocity limit in `pixels per second` for the `follow_lookahead` effect.<br><br>
If `true`, the `follow target`'s velocity will be clamped to the `follow_lookahead_max_value` before calculating lookahead.<br>
In other words, no matter how fast the target's actual velocity is, the lookahead will only follow up to the speed defined here.

<Property2D3DOnly :is2D="true" />

</template>

<template v-slot:setMethod>

`void` set_lookahead_max(`float` value)

</template>

<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_lookahead_max(Vector2(500, 500))
```
:::

</template>

<template v-slot:getMethod>

`float` get_lookahead_deceleration()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_lookahead_deceleration()
```
:::

</template>
</Property>

[//]: # (<Property2D3D propertyName="lookahead_max" propertyName2D="lookahead_max" propertyName3D="follow_lookahead_max" propertyType2D="bool" propertyDefault2D="false" propertyType3D="bool" propertyDefault3D="false">)

[//]: # ()
[//]: # (<template v-slot:propertyDescription2D>)

[//]: # ()
[//]: # (Enables a maximum velocity limit in `pixels per second` for the `follow_lookahead` effect.<br><br>)

[//]: # (If `true`, the `follow target`'s velocity will be clamped to the `follow_lookahead_max_value` before calculating lookahead.<br>)

[//]: # (In other words, no matter how fast the target's actual velocity is, the lookahead will only follow up to the speed defined here.)

[//]: # (</template>)

[//]: # ()
[//]: # (<template v-slot:propertyDescription3D>)

[//]: # ()
[//]: # (Enables a maximum velocity limit in `meters per second` for the `follow_lookahead` effect.<br><br>)

[//]: # (If `true`, the `follow target`'s velocity will be clamped to the `follow_lookahead_max_value` before calculating lookahead.<br>)

[//]: # (In other words, no matter how fast the target's actual velocity is, the lookahead will only follow up to the speed defined here.)

[//]: # ()
[//]: # (</template>)

[//]: # ()
[//]: # ()
[//]: # (<template v-slot:setMethod2D>)

[//]: # ()
[//]: # (`void` set_lookahead_max&#40;`bool` value&#41;)

[//]: # ()
[//]: # (</template>)

[//]: # ()
[//]: # ()
[//]: # (<template v-slot:setMethod3D>)

[//]: # ()
[//]: # (`void` set_follow_lookahead_max&#40;`bool` value&#41;)

[//]: # ()
[//]: # (</template>)

[//]: # ()
[//]: # ()
[//]: # (<template v-slot:setExample2D>)

[//]: # ()
[//]: # (::: details Example)

[//]: # (```gdscript)

[//]: # (pcam.set_lookahead_max&#40;true&#41;)

[//]: # ()
[//]: # (```)

[//]: # (:::)

[//]: # ()
[//]: # (</template>)

[//]: # ()
[//]: # ()
[//]: # (<template v-slot:setExample3D>)

[//]: # ()
[//]: # (::: details Example)

[//]: # (```gdscript)

[//]: # (pcam.set_follow_lookahead_max&#40;true&#41;)

[//]: # (```)

[//]: # (:::)

[//]: # ()
[//]: # (</template>)

[//]: # ()
[//]: # ()
[//]: # (<template v-slot:getMethod2D>)

[//]: # ()
[//]: # (`bool` get_lookahead_max&#40;&#41;)

[//]: # ()
[//]: # (</template>)

[//]: # ()
[//]: # ()
[//]: # (<template v-slot:getMethod3D>)

[//]: # ()
[//]: # (`bool` get_follow_lookahead_max&#40;&#41;)

[//]: # ()
[//]: # (</template>)

[//]: # ()
[//]: # ()
[//]: # (<template v-slot:getExample2D>)

[//]: # ()
[//]: # (::: details Example)

[//]: # ()
[//]: # (```gdscript)

[//]: # (pcam.get_lookahead_max&#40;&#41;)

[//]: # ()
[//]: # (```)

[//]: # (:::)

[//]: # ()
[//]: # (</template>)

[//]: # ()
[//]: # ()
[//]: # (<template v-slot:getExample3D>)

[//]: # ()
[//]: # (::: details Example)

[//]: # (```gdscript)

[//]: # (pcam.get_follow_lookahead_max&#40;&#41;)

[//]: # (```)

[//]: # (:::)

[//]: # (</template>)

[//]: # (</Property2D3D>)



<Property propertyName="lookahead_max_value" propertyType="Vector2" propertyDefault="Vector2(200, 200)">
<template v-slot:propertyDescription>

The maximum `lookahead` velocity in `pixels per second`.
The follow target's velocity will be clamped within these bounds on each axis before applying lookahead time.

<Property2D3DOnly :is2D="true" />

</template>

<template v-slot:setMethod>

`void` set_lookahead_max(`float` value)

</template>

<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_lookahead_max(Vector2(500, 500))
```
:::

</template>

<template v-slot:getMethod>

`float` get_lookahead_deceleration()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_lookahead_deceleration()
```
:::

</template>
</Property>

[//]: # (<Property2D3D propertyName="lookahead_max_value" propertyName2D="lookahead_max_value" propertyName3D="follow_lookahead_max_value" propertyType2D="Vector2" propertyDefault2D="Vector2&#40;200, 200&#41;" propertyType3D="Vector3" propertyDefault3D="Vector3&#40;5, 5, 5&#41;">)

[//]: # ()
[//]: # ()
[//]: # (<template v-slot:propertyDescription2D>)

[//]: # ()
[//]: # (The maximum `lookahead` velocity in `pixels per second`.)

[//]: # ()
[//]: # (The `follow target`'s velocity will be clamped within these bounds on each axis before applying lookahead time.)

[//]: # ()
[//]: # (</template>)

[//]: # ()
[//]: # ()
[//]: # (<template v-slot:propertyDescription3D>)

[//]: # ()
[//]: # (The maximum `follow_lookahead` velocity in `meters per second`.)

[//]: # ()
[//]: # (The `follow target`'s velocity will be clamped within these bounds on each axis before applying lookahead time.)

[//]: # ()
[//]: # (</template>)

[//]: # ()
[//]: # ()
[//]: # ()
[//]: # (<template v-slot:setMethod2D>)

[//]: # ()
[//]: # (`void` set_lookahead_max_value&#40;`Vector2` value&#41;)

[//]: # ()
[//]: # (</template>)

[//]: # ()
[//]: # ()
[//]: # ()
[//]: # (<template v-slot:setMethod3D>)

[//]: # ()
[//]: # (`void` set_follow_lookahead_max_value&#40;`Vector3` value&#41;)

[//]: # ()
[//]: # (</template>)

[//]: # ()
[//]: # ()
[//]: # ()
[//]: # (<template v-slot:setExample2D>)

[//]: # ()
[//]: # (::: details Example)

[//]: # ()
[//]: # (```gdscript)

[//]: # (pcam.set_lookahead_max_value&#40;Vector2&#40;600, 600&#41;&#41;)

[//]: # ()
[//]: # (```)

[//]: # ()
[//]: # (:::)

[//]: # ()
[//]: # ()
[//]: # (</template>)

[//]: # ()
[//]: # ()
[//]: # ()
[//]: # (<template v-slot:setExample3D>)

[//]: # ()
[//]: # (::: details Example)

[//]: # ()
[//]: # (```gdscript)

[//]: # ()
[//]: # (pcam.set_lookahead_max_value&#40;Vector3&#40;10, 10, 10&#41;&#41;)

[//]: # ()
[//]: # (```)

[//]: # ()
[//]: # (:::)

[//]: # ()
[//]: # (</template>)

[//]: # ()
[//]: # ()
[//]: # (<template v-slot:getMethod2D>)

[//]: # ()
[//]: # (`bool` get_lookahead_max_value&#40;&#41;)

[//]: # ()
[//]: # (</template>)

[//]: # ()
[//]: # ()
[//]: # (<template v-slot:getMethod3D>)

[//]: # ()
[//]: # (`bool` get_follow_lookahead_max_value&#40;&#41;)

[//]: # ()
[//]: # (</template>)

[//]: # ()
[//]: # ()
[//]: # (<template v-slot:getExample2D>)

[//]: # ()
[//]: # (::: details Example)

[//]: # ()
[//]: # (```gdscript)

[//]: # ()
[//]: # (pcam.get_lookahead_max_value&#40;&#41;)

[//]: # ()
[//]: # (```)

[//]: # (:::)

[//]: # ()
[//]: # (</template>)

[//]: # ()
[//]: # (<template v-slot:getExample3D>)

[//]: # ()
[//]: # (::: details Example)

[//]: # (```gdscript)

[//]: # (pcam.get_follow_lookahead_max_value&#40;&#41;)

[//]: # (```)

[//]: # (:::)

[//]: # ()
[//]: # (</template>)

[//]: # ()
[//]: # (</Property2D3D>)


## Methods

<Property propertyName="is_following" propertyType="bool" :isMethod="true">
<template v-slot:propertyDescription>

Returns `true` if the `PCam` [follow_mode](#follow_mode) is **not** set to `NONE` and has a valid `follow_target`.

::: details Example
```gdscript
pcam.is_following()
```
:::

</template>
</Property>

<Property2D3D propertyName="damping_value" propertyType2D="Vector2" propertyDefault2D="Vector2(0.1, 0.1)" propertyType3D="Vector3" propertyDefault3D="Vector3(0.1, 0.1, 0.1)">

<template v-slot:propertyDescription>

Defines the damping amount. The ideal range should be somewhere between 0-1, likely somewhere around 0.1-0.25.

The damping amount is specified in the individual axis. X and Y for 2D and X, Y and Z for 3D scenes. To have the damping be consistent in all directions, simply supply the same value in all slots.

**Lower value** = faster / sharper camera movement.<br>
**Higher value** = slower / heavier camera movement.

</template>
<template v-slot:setMethod2D>

`void` set_follow_damping_value(`Vector2` damping_value)

</template>
<template v-slot:setMethod3D>

`void` set_follow_damping_value(`Vector3` damping_value)

</template>

<template v-slot:setExample2D>

::: details Example
```gdscript
pcam.set_follow_damping_value(Vector2(0.2, 0.2))
```
:::

</template>
<template v-slot:setExample3D>

::: details Example
```gdscript
pcam.set_follow_damping_value(Vector3(0.2, 0.2, 0.2))
```
:::

</template>

<template v-slot:getMethod2D>

`Vector2` get_follow_damping_value()

</template>
<template v-slot:getMethod3D>

`Vector3` get_follow_damping_value()

</template>

<template v-slot:getExample2D>

::: details Example
```gdscript
pcam.get_follow_damping_value()
```
:::

</template>
<template v-slot:getExample3D>

::: details Example
```gdscript
pcam.get_follow_damping_value()
```
:::

</template>

</Property2D3D>
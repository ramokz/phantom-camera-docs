<Property propertyName="look_at_damping" propertyType="bool" propertyDefault="false">
<template v-slot:propertyDescription>

Applies a damping effect on the `Camera3D`'s rotation. Leading to heavier / slower camera turning as the targeted node moves around.

This is useful to avoid sharp and rapid camera rotational movement.

</template>
<template v-slot:setMethod>

`void` set_look_at_damping(`bool` enable)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_look_at_damping(true)
```
:::

</template>
<template v-slot:getMethod>

`Vector3` get_look_at_damping()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_look_at_damping()
```
:::

</template>
</Property>


<Property propertyName="look_at_damping_value" propertyType="float" propertyDefault="false">
<template v-slot:propertyDescription>

Defines the damping amount. The ideal range should be somewhere between 0-1, likely somewhere around 0.1-0.25.

Lower value = faster / sharper camera movement.
Higher value = slower / heavier camera movement.

</template>
<template v-slot:setMethod>

`void` set_look_at_damping_value(`float` damping_value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_look_at_damping_value(true)
```
:::

</template>
<template v-slot:getMethod>

`float` get_look_at_damping_value()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_look_at_damping_value()
```
:::

</template>
</Property>
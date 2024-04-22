<Property propertyName="follow_damping" propertyType="bool" propertyDefault="false">
<template v-slot:propertyDescription>

Applies a damping effect on the `Camera`'s movement. Leading to heavier / slower camera movement as the targeted node moves around.

This is useful to avoid sharp and rapid camera movement.

</template>

<template v-slot:setMethod>

`void` set_follow_damping(`bool` enable)

</template>

<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_follow_damping(true)
```
:::

</template>

<template v-slot:getMethod>

`bool` get_follow_damping()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_follow_damping()
```
:::

</template>
</Property>
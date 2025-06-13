<Property propertyName="rotate_with_target" propertyType="bool" propertyDefault="false">
<template v-slot:propertyDescription>

Makes the `PhantomCamera2D` copy the rotation of its `follow_target`
This behavior is only available when `follow_mode` is set and only has one `follow_target`.

::: warning Important
Be sure to **disable** `Camera2D.ignore_rotation` to enable this mechanic.
:::

<Property2D3DOnly :is2D="true" />

</template>
<template v-slot:setMethod>

`void` set_rotate_with_target(`bool` enable)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_rotate_with_target(true)
```
:::

</template>
<template v-slot:getMethod>

`float` get_rotate_with_target()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_rotate_with_target()
```
:::

</template>
</Property>




<Property propertyName="rotation_offset" propertyType="float" propertyDefault="0">
<template v-slot:propertyDescription>

Offsets the rotation when `rotate_with_target` is enabled.

<Property2D3DOnly :is2D="true" />

</template>
<template v-slot:setMethod>

`void` set_rotation_offset(`float` rotation_offset)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_rotation_offset(42)
```
:::

</template>
<template v-slot:getMethod>

`float` get_rotation_offset()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_rotation_offset()
```
:::

</template>
</Property>




<Property propertyName="rotation_damping" propertyType="bool" propertyDefault="false">
<template v-slot:propertyDescription>

Enables rotational damping when `rotate_with_target` is enabled.

<Property2D3DOnly :is2D="true" />

</template>
<template v-slot:setMethod>

`void` set_rotation_damping(`bool` enable)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_rotation_damping(true)
```
:::

</template>
<template v-slot:getMethod>

`bool` get_rotation_damping()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_rotation_damping()
```
:::

</template>
</Property>




<Property propertyName="rotation_damping_value" propertyType="float" propertyDefault="0.1">
<template v-slot:propertyDescription>

Defines the damping amount for the `rotate_with_target`.

<Property2D3DOnly :is2D="true" />

</template>
<template v-slot:setMethod>

`void` set_rotation_damping_value(`float` damping_value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_rotation_damping_value(0.42)
```
:::

</template>
<template v-slot:getMethod>

`float` get_rotation_damping_value()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_rotation_damping_value()
```
:::

</template>
</Property>

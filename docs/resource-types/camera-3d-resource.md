<img src="/assets/icons/feature-camera-3d-resource.svg" height="256" width="256"/>

# Camera3D Resource

A resource type that overrides the various properties of the `Camera3D` that the `PCam3D` will control once becoming active.

Once a resource has been applied to a `Camera3D` it will retain those property values until overriden by another `Pcam3D` and its resource.

<Property propertyName="cull_mask" propertyType="int" propertyDefault="1048575">
<template v-slot:propertyDescription>

Overrides the Camera Cull Mask property of the `Camera3D` once becoming active.

A simplified helper setter method can be found in the example code below.

</template>
<template v-slot:setMethod>

`void` set_cull_mask(`int` cull_mask_layer)

`void` set_cull_mask_value(`int` layer_number, `bool` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
# Use this to assign a specific layer value.
# Fairly complex to use, so the function below this is recommended.
pcam.set_cull_mask(1048575)

# Use this helper method to enable or disable a specific layer.
pcam.set_cull_mask_value(2, false)
```
:::

</template>
<template v-slot:getMethod>

`int` get_cull_mask()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_cull_mask()
```
:::

</template>
</Property>

<Property propertyName="h_offset" propertyType="float" propertyDefault="0">
<template v-slot:propertyDescription>

Overrides the H Offset property of the `Camera3D` once becoming active.

</template>
<template v-slot:setMethod>

`void` set_h_offset(`float` offset)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_h_offset(4.2)
```
:::

</template>
<template v-slot:getMethod>

`float` get_h_offset()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_h_offset()
```
:::

</template>
</Property>

<Property propertyName="v_offset" propertyType="float" propertyDefault="0">
<template v-slot:propertyDescription>

Overrides the V Offset property of the `Camera3D` once becoming active.

</template>
<template v-slot:setMethod>

`void` v_offset(`float` offset)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_v_offset(4.2)
```
:::

</template>
<template v-slot:getMethod>

`float` get_v_offset()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_camera_v_offset()
```
:::

</template>
</Property>

<Property propertyName="fov" propertyType="float" propertyDefault="75">
<template v-slot:propertyDescription>

Overrides the FOV (Field of View) property of the `Camera3D` once becoming active.

</template>
<template v-slot:setMethod>

`void` set_fov(`float` fov)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_fov(4.2)
```
:::

</template>
<template v-slot:getMethod>

`float` get_fov()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_fov()
```
:::

</template>
</Property>
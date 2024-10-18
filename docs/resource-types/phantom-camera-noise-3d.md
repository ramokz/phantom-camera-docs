<div style="padding: 10px 0">
    <img alt="PhantomCameraNoiseEmitter3D" src="/assets/icons/phantom-camera-noise-3d.svg" height="256" width="256"/>
</div>

# PhantomCameraNoise3D
> Inherits: Resource

Is a resource type that defines, calculates and outputs the noise values to a `Camera3D` through active `PCam3Ds`.

It can be applied to either [PhantomCameraNoiseEmitter3D](/noise/phantom-camera-noise-emitter-3d) or a [PhantomCamera3D noise property](/core-nodes/phantom-camera-3d#noise) directly

## Properties
<Property propertyName="amplitude" propertyType="float" propertyDefault="10">
<template v-slot:propertyDescription>

Defines the size of the noise pattern.

Higher values will increase the range the noise can reach.

</template>
<template v-slot:setMethod>

`void` set_amplitude (`float` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.noise.set_amplitude(4.2)
```
:::

</template>
<template v-slot:getMethod>

`float` get_amplitude()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.noise.get_amplitude()
```
:::

</template>
</Property>




<Property propertyName="frequency" propertyType="float" propertyDefault="0.5">
<template v-slot:propertyDescription>

Sets the density of the noise pattern.

Higher values will result in more erratic noise.

</template>
<template v-slot:setMethod>

`void` set_frequency (`float` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.noise.set_frequency(4.2)
```
:::

</template>
<template v-slot:getMethod>

`float` get_frequency()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.noise.get_frequency()
```
:::

</template>
</Property>




<Property propertyName="randomize_noise_seed" propertyType="bool" propertyDefault="true">
<template v-slot:propertyDescription>

If true, randomizes the noise pattern every time the noise is run.

If disabled, [noise_seed](#noise_seed) can be used to define a fixed noise pattern.

</template>
<template v-slot:setMethod>

`void` set_randomize_noise_seed (`bool` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.noise.set_randomize_noise_seed(false)
```
:::

</template>
<template v-slot:getMethod>

`bool` get_randomize_noise_seed()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.noise.get_randomize_noise_seed()
```
:::

</template>
</Property>




<Property propertyName="noise_seed" propertyType="int" propertyDefault="0">
<template v-slot:propertyDescription>

Sets a predetermined seed noise value.

Useful if wanting to achieve a persistent noise pattern every time the noise is emitted.

</template>
<template v-slot:setMethod>

`void` set_noise_seed (`int` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.noise.set_noise_seed(false)
```
:::

</template>
<template v-slot:getMethod>

`int` get_noise_seed()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.noise.get_noise_seed()
```
:::

</template>
</Property>




<Property propertyName="positional_noise" propertyType="bool" propertyDefault="true">
<template v-slot:propertyDescription>

Enables noise changes to the `Camera3D`'s position.

</template>
<template v-slot:setMethod>

`void` set_positional_noise (`bool` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.noise.set_positional_noise(false)
```
:::

</template>
<template v-slot:getMethod>

`bool` get_positional_noise()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.noise.get_positional_noise()
```
:::

</template>
</Property>




<Property propertyName="rotational_noise" propertyType="bool" propertyDefault="true">
<template v-slot:propertyDescription>

Enables noise changes to the `Camera3D`'s rotation.

</template>
<template v-slot:setMethod>

`void` set_rotational_noise (`bool` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.noise.set_rotational_noise(false)
```
:::

</template>
<template v-slot:getMethod>

`bool` get_rotational_noise()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.noise.get_rotational_noise()
```
:::

</template>
</Property>




<Property propertyName="rotational_multiplier_x" propertyType="float" propertyDefault="1">
<template v-slot:propertyDescription>

Multiplies rotational noise amount in the X-axis.

Set the value to 0 to disable noise in the axis.

</template>
<template v-slot:setMethod>

`void` set_rotational_multiplier_x (`float` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.noise.set_rotational_multiplier_x(0.42)
```
:::

</template>
<template v-slot:getMethod>

`float` get_rotational_multiplier_x()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.noise.get_rotational_multiplier_x()
```
:::

</template>
</Property>




<Property propertyName="rotational_multiplier_y" propertyType="float" propertyDefault="1">
<template v-slot:propertyDescription>

Multiplies rotational noise amount in the Y-axis.

Set the value to 0 to disable noise in the axis.

</template>
<template v-slot:setMethod>

`void` set_rotational_multiplier_y (`float` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.noise.set_rotational_multiplier_y(0.42)
```
:::

</template>
<template v-slot:getMethod>

`float` get_rotational_multiplier_y()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.noise.get_rotational_multiplier_y()
```
:::

</template>
</Property>




<Property propertyName="rotational_multiplier_z" propertyType="float" propertyDefault="1">
<template v-slot:propertyDescription>

Multiplies rotational noise amount in the Z-axis.

Set the value to 0 to disable noise in the axis.

</template>
<template v-slot:setMethod>

`void` set_rotational_multiplier_z (`float` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.noise.set_rotational_multiplier_z(0.42)
```
:::

</template>
<template v-slot:getMethod>

`float` get_rotational_multiplier_z()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.noise.get_rotational_multiplier_z()
```
:::

</template>
</Property>




<Property propertyName="positional_multiplier_x" propertyType="float" propertyDefault="1">
<template v-slot:propertyDescription>

Multiplies positional noise amount in the X-axis.

Set the value to 0 to disable noise in the axis.

**Note:** Rotational noise is recommended to avoid potential issues with the camera clipping with the environment.

</template>
<template v-slot:setMethod>

`void` set_positional_multiplier_x (`float` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.noise.set_positional_multiplier_x(0.42)
```
:::

</template>
<template v-slot:getMethod>

`float` get_positional_multiplier_x()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.noise.get_positional_multiplier_x()
```
:::

</template>
</Property>




<Property propertyName="positional_multiplier_y" propertyType="float" propertyDefault="1">
<template v-slot:propertyDescription>

Multiplies positional noise amount in the Y-axis.

Set the value to 0 to disable noise in the axis.

**Note:** Rotational noise is recommended to avoid potential issues with the camera clipping with the environment.

</template>
<template v-slot:setMethod>

`void` set_positional_multiplier_y (`float` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.noise.set_positional_multiplier_y(0.42)
```
:::

</template>
<template v-slot:getMethod>

`float` get_positional_multiplier_y()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.noise.get_positional_multiplier_y()
```
:::

</template>
</Property>




<Property propertyName="positional_multiplier_z" propertyType="float" propertyDefault="1">
<template v-slot:propertyDescription>

Multiplies positional noise amount in the Z-axis.

Set the value to 0 to disable noise in the axis.

**Note:** Rotational noise is recommended to avoid potential issues with the camera clipping with the environment.

</template>
<template v-slot:setMethod>

`void` set_positional_multiplier_z (`float` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.noise.set_positional_multiplier_z(0.42)
```
:::

</template>
<template v-slot:getMethod>

`float` get_positional_multiplier_z()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.noise.get_positional_multiplier_z()
```
:::

</template>
</Property>
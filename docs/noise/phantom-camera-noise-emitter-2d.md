<img alt="PhantomCameraNoiseEmitter2D" src="/assets/icons/phantom-camera-noise-emitter-2d.svg" height="256" width="256"/>

# PhantomCameraNoiseEmitter2D
> Inherits: Node2D

Is a node meant to apply positional and rotational noise, also referred to as shake, to the `Camera2D`. It is designed for use cases such as when hitting or when being hit, earthquakes or to add a bit of slight movement to the camera to make it feel less static.

The emitter can affect multiple `PCams` in a given scene based on which [noise_emitter_layer](#noise_emitter_layer) are enabled.

To trigger the emitter, simply call its [emit](#emit) function.

## Properties
<Property propertyName="noise" propertyType="PhantomCameraNoise2D" propertyDefault="null">
<template v-slot:propertyDescription>

The [PhantomCameraNoise2D](/resource-types/phantom-camera-noise-2d) resource that defines the noise pattern for this emitter.
</template>
<template v-slot:setMethod>

`void` set_noise (`PhantomCameraNoise2D` noise_resource)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam_emitter.set_noise(noise_resource)
```
:::

</template>
<template v-slot:getMethod>

`PhantomCameraNoise2D` get_noise()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam_emitter.get_noise()
```
:::

</template>
</Property>




<Property propertyName="preview" propertyType="bool" propertyDefault="false">
<template v-slot:propertyDescription>

If true, previews the noise in the editor - can be seen in the viewfinder.

</template>
</Property>




<Property propertyName="continous" propertyType="bool" propertyDefault="false">
<template v-slot:propertyDescription>

If true, repeats the noise indefinitely once started. Otherwise, it will only be triggered once.
</template>
<template v-slot:setMethod>

`void` set_continuous (`bool` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam_emitter.set_continuous(true)
```
:::

</template>
<template v-slot:getMethod>

`bool` get_continuous()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam_emitter.get_continuous()
```
:::

</template>
</Property>




<Property propertyName="growth_time" propertyType="float" propertyDefault="0">
<template v-slot:propertyDescription>

Determines how long the noise should take to reach full intensity once started.

The value is set in **seconds**.

</template>
<template v-slot:setMethod>

`void` set_growth_time (`float` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam_emitter.set_growth_time(0.1)
```
:::

</template>
<template v-slot:getMethod>

`float` get_growth_time()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam_emitter.get_growth_time()
```
:::

</template>
</Property>




<Property propertyName="duration" propertyType="float" propertyDefault="1">
<template v-slot:propertyDescription>

Sets the duration for the camera noise if [continuous](#continous) is set to **false**.

The value is set in **seconds**.

</template>
<template v-slot:setMethod>

`void` set_duration (`float` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam.set_duration(0.42)
```
:::

</template>
<template v-slot:getMethod>

`float` get_duration()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam_emitter.get_duration()
```
:::

</template>
</Property>




<Property propertyName="decay_time" propertyType="float" propertyDefault="0">
<template v-slot:propertyDescription>

Determines how long the noise should take to come to a full stop.

The value is set in **seconds**.

</template>
<template v-slot:setMethod>

`void` set_decay_time (`float` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam_emitter.set_decay_time(0.1)
```
:::

</template>
<template v-slot:getMethod>

`float` get_decay_time()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam_emitter.get_decay_time()
```
:::

</template>
</Property>




<Property propertyName="noise_emitter_layer" propertyType="int" propertyDefault="1">
<template v-slot:propertyDescription>

Enabled layers will affect [PhantomCamera2D](/core-nodes/phantom-camera-2d#noise_emitter_layer) nodes with at least one corresponding layer enabled.

Enabling multiple corresponding layers on the same `PhantomCamera2D` causes no additional effect.

**Note:** The layer value uses a bitmask.

::: tip Tip
A helper function also exists called `set_noise_emitter_layer_value()`, where you can supply a specific layer number and then enable / disable it (see setter example below). Use this if you prefer not supply bitmask values.
:::


</template>
<template v-slot:setMethod>

`void` set_noise_emitter_layer (`int` value)

`void` set_noise_emitter_layer_value (`int` layer, `bool` enabled)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
# Bitmask assignment
pcam_emitter.set_noise_emitter_layer(8) # Enables the 4th layer using bitmask value

## Specific layer change
pcam_emitter.set_noise_emitter_layer_value(4, true) # Enables the 4th layer
```
:::

</template>
<template v-slot:getMethod>

`int` get_noise_emitter_layer()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam_emitter.get_noise_emitter_layer() # Returns the layer value as a bitmask
```
:::

</template>
</Property>


## Methods

<Property propertyName="emit" propertyType="n/a" propertyDefault="n/a">
<template v-slot:propertyDescription>

Emits the noise from the emitter based on the applied [PhantomCameraNoise2D](/resource-types/phantom-camera-noise-2d) resource and various properties assigned.<br>
It will affect all active `PCam3Ds` with at least one matching [noise_emitter_layer](#noise_emitter_layer).

</template>

<template v-slot:setMethod>

`void` emit()

</template>
<template v-slot:setExample>

::: details Example
```gdscript
noise_emitter.emit()
```
:::

</template>
</Property>




<Property propertyName="is_emitting" propertyType="n/a" propertyDefault="n/a">
<template v-slot:propertyDescription>

Returns the state for the emitter. If true, the emitter is currently emitting.

</template>

<template v-slot:getMethod>

`bool` is_emitting()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
noise_emitter.is_emitting()
```
:::

</template>
</Property>




<Property propertyName="stop" propertyType="n/a" propertyDefault="n/a">
<template v-slot:propertyDescription>

Stops the emitter from emitting noise.

</template>

<template v-slot:setMethod>

`void` stop()

</template>
<template v-slot:setExample>

::: details Example
```gdscript
noise_emitter.stop()
```
:::

</template>
</Property>




<Property propertyName="toggle" propertyType="n/a" propertyDefault="n/a">
<template v-slot:propertyDescription>

Toggles the emitter on and off.

</template>

<template v-slot:setMethod>

`void` toggle()

</template>
<template v-slot:setExample>

::: details Example
```gdscript
noise_emitter.toggle()
```
:::

</template>
</Property>

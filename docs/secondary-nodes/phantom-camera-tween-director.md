<img src="/assets/icons/phantom-camera-tween-director.svg" height="256" width="256"/>

# PhantomCameraTweenDirector
> Inherits: Node

Using the [TweenDirectorResource](/resource-types/tween-director-resource), this node allows for custom tweens between specific `PhantomCameras` in a scene.

Whenever a tween between two `PCams` occurs, this node can override the [PhantomCameraTween](/resource-types/phantom-camera-tween) applied to the newly active `PCam` if an entry on both the `From` and `To` lists match the previously and newly active `PCam` respectively defined within the [TweenDirectorResource](/resource-types/tween-director-resource).

::: tip 
Multiple `PhantomCameraTweenDirector` instances can be in a given scene with different [TweenDirectorResource](/resource-types/tween-director-resource) lists. This can be useful for better scene management.
:::

<Property propertyName="tween_director" propertyType="Array[TweenDirectorResource]" propertyDefault="[]">

<template v-slot:propertyDescription>

Overrides the [PhantomCameraTween](/resource-types/phantom-camera-tween) between targeted `PhantomCameras` based on the [TweenDirectorResources](/resource-types/tween-director-resource).

</template>

<template v-slot:setMethod>

`void` set_tween_director(`Array[TweenDirectorResource]` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam_host.set_tween_director(tween_director_resources)
```
:::

</template>
<template v-slot:getMethod>

`Array[TweenDirectorResource]` get_tween_director()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam_host.get_tween_director() # Returns the list of TweenDirectorResources applied
```
:::

</template>
</Property>

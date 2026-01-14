<img src="/assets/icons/phantom-camera-tween-director.svg" height="256" width="256"/>

# PhantomCameraTweenDirector
> Inherits: Node

Using the [TweenDirectorResource](/resource-types/tween-director-resource), this node allows for custom tweens between specific `PCams` in a scene.

Whenever a tween between two `PCams` occurs, this node can override the [PhantomCameraTween](/resource-types/phantom-camera-tween) applied to the newly active `PCam` if an instance on both the `From` and `To` lists match the previously and newly active `PCam` respectively.

::: details Example use case
Let's say you have 4 `Phantom Cameras`, `PCamA`, `PCamB`, `PCamC` and `PCamD`, and you want a unique tween `duration` and `ease` when the camera tweens from `PCamA` to `PCamC`, but want the tween to `PCamC` otherwise be the same in all other instances.<br>

The `TweenDirectorResource` allows for setting a custom `tween_resource` along with `PCams` in a `From` and `To` list. If `PCamA` is added to the `From` list, and `PCamC` is added to the `To` list, then whenever the priority shifts from `PCamA` to `PCamC` that custom `tween_resource` will be used instead of what has been declared in `PCamC`.

If you then later want to use the same custom `tween_resource` when `PCamA` tweens to `PCamD`, then it's just a case of adding `PCamD` to the same `To` list as `PCamC`.
:::

::: tip 
Multiple `PhantomCameraTweenDirector` instances can be in a given scene with different [TweenDirectorResource](/resource-types/tween-director-resource) lists. This can be useful for better scene management.
:::

## Video Example

<video controls>
<source src="/assets/videos/tween-director.mp4">
</video>

## Properties

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

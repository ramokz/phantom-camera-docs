<img src="/assets/icons/tween-director-resource.svg" height="256" width="256"/>

# TweenDirectorResource
> Inherits: Resource

Applied to [PhantomCameraTweenDirector](/secondary-nodes/phantom-camera-tween-director), `TweenDirectorResource` allows for overriding the [PhantomCameraTween](/resource-types/phantom-camera-tween) applied to `PCams`
based on a list of **To** and **From** targets.

The targets are defined by either individually selected `PCams` in the current scene,
or by the [PhantomCameraTween](/resource-types/phantom-camera-tween) resource applied to them.

::: details Example use case
Let's say you have 4 `Phantom Cameras`, `PCamA`, `PCamB`, `PCamC` and `PCamD`, and you want a unique tween `duration` and `ease` when the camera tweens from `PCamA` to `PCamC`, but want the tween to `PCamC` otherwise be the same in all other instances.<br>

The `TweenDirectorResource` allows for setting a custom `tween_resource` along with `PCams` in a `From` and `To` list. If `PCamA` is added to the `From` list, and `PCamC` is added to the `To` list, then whenever the priority shifts from `PCamA` to `PCamC` that custom `tween_resource` will be used instead of what has been declared in `PCamC`.

If you then later want to use the same custom `tween_resource` when `PCamA` tweens to `PCamD`, then it's just a case of adding `PCamD` to the same `To` list as `PCamC`.
:::

## Properties

<Property propertyName="tween_resource" propertyType="PhantomCameraTween" propertyDefault="null">
<template v-slot:propertyDescription>

The [PhantomCameraTween](/resource-types/phantom-camera-tween) that should be used if a `PCam` member of the [from_type](#from_type) and [to_type](#to_type) lists match when a tween occurs.

</template>
<template v-slot:setMethod>

`void` set_tween_resource(`PhantomCameraTween` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam_tween_director.set_tween_resource(tween_resource)
```
:::

</template>
<template v-slot:getMethod>

`int` get_tween_resource()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam_tween_director.get_tween_resource()
```
:::

</template>
</Property>




<Property propertyName="from_type" propertyType="int" propertyDefault="0">
<template v-slot:propertyDescription>

The type identifier for the **From**, or currently active, `PCam` that should make the [tween_resource](#tween_resource) override the tween defined in the **To** section.

| TYPE           | Value | Description                                                                                                                                                                   |
|----------------|-------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| PHANTOM_CAMERA | 0     | Target individual `PCams` from the current current scene.                                                                                                                     |
| TWEEN_RESOURCE | 1     | Target `PCams` based on the `PhantomCameraTween` resource applied to them. The resources **must** be saved on the filesystem and applied to `PCams` in order to be referenced. |
| ANY            | 2     | Target all `PCams` in the scene.<br> Be mindful when using this.                                                                                                              |


</template>
<template v-slot:setMethod>

`void` set_from_type(`int` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
# Apply using enum
pcam_tween_director.set_from_type(TweenDirectorResource.TYPE.TWEEN_RESOURCE)

# Apply using int
pcam_tween_director.set_from_type(1)
```
:::

</template>
<template v-slot:getMethod>

`int` get_from_type()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam_tween_director.get_from_type()
```
:::

</template>
</Property>




<Property propertyName="from_phantom_cameras" propertyType="Array[NodePath]" propertyDefault="[]">
<template v-slot:propertyDescription>

The list of `PCams` that should trigger the [tween_resource](#tween_resource) override when tweened **From**.

</template>
<template v-slot:setMethod>

`void` set_from_phantom_cameras(`Array[NodePath]` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam_tween_director.set_from_phantom_cameras()
```
:::

</template>
<template v-slot:getMethod>

`Array[NodePath]` get_from_phantom_cameras()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam_tween_director.get_from_phantom_cameras()
```
:::

</template>
</Property>




<Property propertyName="from_tween_resources" propertyType="Array[PhantomCameraTween]" propertyDefault="[]">
<template v-slot:propertyDescription>

The list of `PCams` with the [PhantomCameraTween] resources applied to them that should trigger the
[tween_resource](#tween-resource) override when tweened **From**.

::: warning Important

The tween resources on the list <b>must</b> be saved on the filestyle.

:::

</template>
<template v-slot:setMethod>

`void` set_from_tween_resources(`Array[PhantomCameraTween]` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam_tween_director.set_from_tween_resources(phantom_camera_tween_resources)
```
:::

</template>
<template v-slot:getMethod>

`Array[PhantomCameraTween]` get_from_tween_resources()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam_tween_director.get_from_tween_resources()
```
:::

</template>
</Property>




<Property propertyName="to_type" propertyType="int" propertyDefault="0">
<template v-slot:propertyDescription>

The type identifier for the **To**, or about-to-become-active, `PhantomCamera` that should make the [tween-resource](#tween-resource) override
the tween defined in the **To** section.

| TYPE           | Value | Description                                                                                                                                                                        |
|----------------|-------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| PHANTOM_CAMERA | 0     | Target individual `PCams` from the current current scene.                                                                                                                    |
| TWEEN_RESOURCE | 1     | Target `PCams` based on the `PhantomCameraTween` resource applied to them. The resources **must** be saved on the filesystem and applied to `PCams` in order to be referenced. |
| ANY            | 2     | Target all `PCams` in the scene.<br> Be mindful when using this.                                                                                                             |



</template>
<template v-slot:setMethod>

`void` set_to_type(`int` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
# Apply using enum
pcam_tween_director.set_to_type(TweenDirectorResource.TYPE.TWEEN_RESOURCE)

# Apply using int
pcam_tween_director.set_to_type(1)
```
:::

</template>
<template v-slot:getMethod>

`int` get_to_type()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam_tween_director.get_to_type()
```
:::

</template>
</Property>




<Property propertyName="to_phantom_cameras" propertyType="Array[NodePath]" propertyDefault="[]">
<template v-slot:propertyDescription>

The list of `PCams` that should trigger the [tween_resource](#tween_resource) override when tweened **To**.

</template>
<template v-slot:setMethod>

`void` set_to_phantom_cameras(`Array[NodePath]` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam_tween_director.set_to_phantom_cameras()
```
:::

</template>
<template v-slot:getMethod>

`Array[NodePath]` get_to_phantom_cameras()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam_tween_director.get_to_phantom_cameras()
```
:::

</template>
</Property>




<Property propertyName="to_tween_resources" propertyType="Array[PhantomCameraTween]" propertyDefault="[]">
<template v-slot:propertyDescription>

The list of `PCams` with the [PhantomCameraTween](/resource-types/phantom-camera-tween) resources applied to them that should trigger the
[tween_resource](#tween-resource) override when tweened **To**.

::: warning Important

The tween resources on the list <b>must</b> be saved on the filestyle.

:::

</template>
<template v-slot:setMethod>

`void` set_to_tween_resources(`Array[PhantomCameraTween]` value)

</template>
<template v-slot:setExample>

::: details Example
```gdscript
pcam_tween_director.set_to_tween_resources(phantom_camera_tween_resources)
```
:::

</template>
<template v-slot:getMethod>

`Array[PhantomCameraTween]` get_to_tween_resources()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam_tween_director.get_to_tween_resources()
```
:::

</template>
</Property>

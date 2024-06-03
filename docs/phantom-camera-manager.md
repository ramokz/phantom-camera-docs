<img src="/assets/icons/phantom-camera-manager.svg" height="256" width="256"/>

# Phantom Camera Manager
Is a singleton that runs in the background and manages the addon's nodes. It allows for referencing all instances of `PCams` and `PCamHosts` within a scene and can be accessed directly from any script using the `PhantomCameraManager` class name.


## Methods

<Property propertyName="phantom_camera_2ds" propertyType="Array[PhantomCamera2D]" propertyDefault="null">
<template v-slot:propertyDescription>

Contains all the `PCam2Ds` in the current scene.

</template>

<template v-slot:getMethod>

`Array[PhantomCamera2D]` get_phantom_camera_2ds()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
PhantomCameraManager.get_phantom_camera_2ds()
```
:::

</template>

</Property>



<Property propertyName="phantom_camera_3ds" propertyType="Array" propertyDefault="null">
<template v-slot:propertyDescription>

Contains all the `PCam3Ds` in the current scene.

::: info Note
This has purposely not been strongly typed in order to support `_disable_3d` export templates.
:::

</template>

<template v-slot:getMethod>

`Array` get_phantom_camera_3ds()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
PhantomCameraManager.get_phantom_camera_3ds()
```
:::

</template>

</Property>



<Property propertyName="phantom_camera_hosts" propertyType="Array[PhantomCameraHosts]" propertyDefault="null">
<template v-slot:propertyDescription>

Contains all the `PCamHosts` in the current scene.

</template>

<template v-slot:getMethod>

`Array[PhantomCameraHosts]` get_phantom_camera_hosts()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
PhantomCameraManager.get_phantom_camera_hosts()
```
:::

</template>

</Property>
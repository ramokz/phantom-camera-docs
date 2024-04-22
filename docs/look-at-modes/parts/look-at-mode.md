<Property propertyName="look_at_mode" propertyType="LookAtEnum" propertyDefault="None">
<template v-slot:propertyDescription>

Value is based on `LookAtMode` enum.

| Look At Mode | Value |
|--------------|-------|
| NONE         | 0     |
| MIMIC        | 1     |
| SIMPLE       | 2     |
| GROUP        | 3     |

**_Note:_** The Setter for `Look_at_mode` has purposely not been added.<br>
A separate `PCam3D` should be used instead.


</template>
<template v-slot:getMethod>

`int` get_look_at_mode()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_look_at_mode()
```
:::

</template>
</Property>
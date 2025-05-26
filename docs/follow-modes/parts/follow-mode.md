<Property propertyName="follow_mode" propertyType="int" propertyDefault="0">
<template v-slot:propertyDescription>

Defines the current `Follow Mode` of the `PCam` based on `FOLLOW_MODE` enum.

| Follow Mode  | Value |
|--------------|-------|
| NONE         | 0     |
| GLUED        | 1     |
| SIMPLE       | 2     |
| GROUP        | 3     |
| PATH         | 4     |
| FRAMED       | 5     |
| THIRD_PERSON | 6     |

Only [Third Person Follow](third-person) is exclusive to 3D scenes.

::: warning Important
This property should _**not**_ be changed during runtime, as such the setter for this has purposely been excluded.<br><br>
To use another `follow_mode` at runtime, switch to a separate `PCam` with the specific `follow_mode` applied.<br>
:::

</template>
<template v-slot:getMethod>

`int` get_follow_mode()

</template>
<template v-slot:getExample>

::: details Example
```gdscript
pcam.get_follow_mode()
```
:::

</template>
</Property>

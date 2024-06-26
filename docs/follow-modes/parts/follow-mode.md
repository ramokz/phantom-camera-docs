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
| THIRD PERSON | 6     |

Only [Third Person Follow](third-person) is exclusive to 3D scenes.

::: info Note
The Setter for `Follow Mode` has purposely not been added.<br>
A separate `PCam` should be used instead.
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
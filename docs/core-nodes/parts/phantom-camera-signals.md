<Signal signalName="Became Active">
<template v-slot:signalCode>

became_active

</template>

<template v-slot:signalDescription>

Emitted when the `PCam` becomes active.

</template>
</Signal>


<Signal signalName="Became Inactive">
<template v-slot:signalCode>

became_inactive

</template>

<template v-slot:signalDescription>

Emitted when the `PCam` becomes inactive.

</template>
</Signal>


<Signal signalName="Tween Started">
<template v-slot:signalCode>

tween_started

</template>

<template v-slot:signalDescription>

Emitted when the `Camera` starts to tween to the `PCam`.

</template>
</Signal>


<Signal signalName="Tween Interrupted">
<template v-slot:signalCode>

tween_interrupted (`PhantomCamera` pcam)

</template>

<template v-slot:signalDescription>

Emitted when the tween is interrupted due to another `PCam` becoming active.

The argument is the `PCam` that interrupted the tween.

</template>
</Signal>


<Signal signalName="Tween Completed">
<template v-slot:signalCode>

tween_completed

</template>

<template v-slot:signalDescription>

Emitted when the `Camera` completes its tween to the `PCam`.

</template>
</Signal>
<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  signalRef: {
    type: String,
    required: true,
  },
  disableOutlineEntry: {
    type: String,
    required: false
  }
})

// const id = computed<String>(() =>{
//   if (props.disableOutlineEntry) { return null }
//
//   return props.signalRef.replace(/ /g, '-').toLowerCase()
// })

</script>

<template>
  <div class="property-method-signal-container">
    <h3 :id="signalRef" tabindex="-1">
      <slot name="signalName">
        Missing name
      </slot>
      <a class="header-anchor" :href="`#${id}`" :aria-label="`Permalink to ${signalName}`">&#8203;</a>
    </h3>

    <slot name="signalDescription">
      <p class="missing-text">
        Missing propertyDescription
      </p>
    </slot>

  </div>
</template>
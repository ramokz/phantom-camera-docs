<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  signalName: {
    type: String,
    required: true,
  },
  disableOutlineEntry: {
    type: String,
    required: false
  }
})

const id = computed<String>(() =>{
  if (props.disableOutlineEntry) { return null }

  return props.signalName.replace(/ /g, '-').toLowerCase()
})

</script>

<template>
  <div class="property-method-signal-container">
    <h3 :id="id" tabindex="-1">
      {{ signalName }}
      <a class="header-anchor" :href="`#${id}`" :aria-label="`Permalink to ${signalName}`">&#8203;</a>
    </h3>

    <div class="container-code-block">
      <h4>Signal</h4>
      <slot name="signalCode">
        <p class="missing-text"> MISSING SIGNAL </p>
      </slot>
    </div>

    <slot name="signalDescription">
      <p class="missing-text">
        Missing propertyDescription
      </p>
    </slot>

  </div>
</template>
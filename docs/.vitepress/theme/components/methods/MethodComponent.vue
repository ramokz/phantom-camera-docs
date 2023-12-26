<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  methodType: {
    type: String,
    required: true,
  },
  methodName: {
    type: String,
    required: true,
  },
  disableOutlineEntry: {
    bool: Boolean,
    required: false
  }
})

const id = computed<string>(() => {
  if (props.disableOutlineEntry) return null
  if (props.methodName) {
    return props.methodName.replace(/ /g, '-').toLowerCase() + "-" + props.methodType.replace(/ /g, '-').toLowerCase()
  }
})
</script>


<template>
  <div>
    <h4 :id="id" tabindex="-1">{{ methodType }}
      <a class="header-anchor" :href="`#${id}`" :aria-label="`Permalink to ${id}`">&#8203;</a>
    </h4>
    
    <div class="container-code-block">
      <slot name="method">
        <p class="missing-text">MISSING METHOD</p>
      </slot>
    </div>
    
    <div>
      <slot name="example"/>
    </div>
  </div>
</template>
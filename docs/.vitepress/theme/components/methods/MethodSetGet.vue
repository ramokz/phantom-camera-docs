<script setup lang="ts">
  import { computed, useSlots } from 'vue'
  
  const props = defineProps({
    methodName: {
      type: String,
      required: true,
    }
  })
  
  // Returns a unique ID to apply to the anchor tag
  const id = computed(() =>{
    return props.methodName.replace(/ /g, '-').toLowerCase()
  })
  
  
  // Setter names
  const setMethod: string = "setMethod"
  const setExample: string = "setExample"
  
  // Getter names
  const getMethod: string = "getMethod"
  const getExample: string = "getExample"
  
  
  const slots = useSlots()
  const slotContent: Array<string> = Object.keys(slots)
  
  const hasType = (typeArray: Array<string>) => {
    return slotContent.some(value => typeArray.includes(value))
  }
  
  const hasSetterContent = computed(() => {
    return hasType([setMethod, setExample])
  })
  const hasGetterContent = computed(() => {
    return hasType([getMethod, getExample])
  })
  
  const hasSetGet = computed(() => {
    return !!(hasSetterContent.value && hasGetterContent.value);
  })
</script>

<template>
  <div class="property-method-container">
    <h3 :id="id" tabindex="-1">{{ methodName }}
      <a class="header-anchor" :href="`#${id}`" :aria-label="`Permalink to ${methodName}`">&#8203;</a>
    </h3>
    
    <MethodComponent method-type="setter" :methodName="methodName" v-if="hasSetterContent">
      <template #method>
        <slot :name="setMethod"/>
      </template>
      <template #codeExample>
        <slot :name="setExample"/>
      </template>
    </MethodComponent>
    
    <MethodComponent class="method-container" method-type="getter" :methodName="methodName" v-if="hasGetterContent">
      <template #method>
        <slot :name="getMethod"/>
      </template>
      <template #codeExample>
        <slot :name="getExample"/>
      </template>
    </MethodComponent>
  </div>
</template>
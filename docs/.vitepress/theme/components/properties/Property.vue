<script setup lang="ts">
import {computed, useSlots} from "vue";

const props = defineProps({
  propertyName: {
    type: String,
    required: true,
  },
  propertyType: {
    type: String,
    required: true,
  },
  propertyDefault: {
    type: String,
    required: false,
  },
  isMethod: {
    type: Boolean,
    required: false,
    default: false
  },
  disableOutlineEntry: {
    type: String,
    required: false
  },
  editorOnly: {
    type: Boolean,
    required: false,
    default: false
  }
})

const id = computed<String>(() =>{
  if (props.disableOutlineEntry) { return null }

  return props.propertyName.replace(/ /g, '-').toLowerCase()
})

// Setter names
const setMethod: string = "setMethod"
const setExample: string = "setExample"

// Getter names
const getMethod: string = "getMethod"
const getExample: string = "getExample"

// Caller names
const callerMethod: string = "callerMethod"
const callerExample: string = "callerExample"

const slots = useSlots()
const slotContent: Array<string> = Object.keys(slots)

const hasPropertyType = (typeArray: Array<string>) => {
  return slotContent.some(value => typeArray.includes(value))
}

const hasSetterContent = computed(() => {
  return hasPropertyType([setMethod, setExample])
})
const hasGetterContent = computed(() => {
  return hasPropertyType([getMethod, getExample])
})

</script>

<template>
  <div class="property-method-signal-container">
    <h3 :id="id" tabindex="-1">
      <code v-if="isMethod">{{ propertyType }}</code>
      {{ propertyName }}
      <span v-if="isMethod && propertyDefault" v-html="propertyDefault"></span>
      <a class="header-anchor" :href="`#${id}`" :aria-label="`Permalink to ${propertyName}`">&#8203;</a>
    </h3>
    <div class="property-overview" v-if="!isMethod">
      <h4 v-if="!isMethod">
        Type: <code>{{ propertyType }}</code>
      </h4>
      <h4 v-if="propertyDefault && !isMethod">
        Default: {{ propertyDefault }}
      </h4>
    </div>
    <slot name="propertyDescription">
      <p class="missing-text">
        Missing propertyDescription
      </p>
    </slot>

    <hr v-if="hasGetterContent || hasSetterContent || hasCallerContent" />

    <MethodComponent class="method-container" method-type="Setter" :methodName="propertyName" v-if="hasSetterContent">
      <template #method>
        <slot :name="setMethod">
          <p class="missing-text">Missing setMethod</p>
        </slot>
      </template>
      <template #example>
        <slot :name="setExample">
          <p class="missing-text">Missing setExample</p>
        </slot>
      </template>
    </MethodComponent>

    <MethodComponent class="method-container" method-type="Getter" :methodName="propertyName" v-if="hasGetterContent">
      <template #method>
        <slot :name="getMethod">
          <p class="missing-text">Missing getMethod</p>
        </slot>
      </template>
      <template #example>
        <slot :name="getExample">
          <p class="missing-text">Missing getExample</p>
        </slot>
      </template>
    </MethodComponent>

    <MethodComponent class="method-container" method-type="Caller" :methodName="propertyName" v-if="hasCallerContent">
      <template #method>
        <slot :name="callerMethod">
          <p class="missing-text">Missing callerMethod</p>
        </slot>
      </template>
      <template #example>
        <slot :name="callerExample">
          <p class="missing-text">Missing callerExample</p>
        </slot>
      </template>
    </MethodComponent>

    <div v-if="!hasGetterContent && !hasSetterContent && !isMethod">
      <p class="property-usage-note"><b><i>Note:</i></b> This property is only <i>accessible</i> within the node's inspector panel in the editor. </p>
    </div>
    <div v-if="editorOnly">
      <p class="property-usage-note"><b><i>Note:</i></b> This property is only <i>modifiable</i> within the node's inspector panel in the editor. </p>
    </div>

  </div>
</template>

<style scoped>
  .property-overview {
    @media(min-width: 600px) {
      display: flex;
      flex-wrap: wrap;
      margin-top: 20px;
    }
    & > h4 {
      & >code {
        color: var(--vp-code-color);
      }
      &:nth-child(2) {
        margin: 10px 0 0 0;
        @media(min-width: 600px) {
          margin: 0 0 0 20px;
        }
      }
    }
  }

  h3 {
    code {
      font-size: 1.1rem;
      color: var(--vp-c-brand-1);
    }
  }

  .property-usage-note {
    font-size: 16px;
    opacity: 0.8;
    margin-top: 0;
  }

  .method-container {
    margin-top: 30px;
  }
</style>

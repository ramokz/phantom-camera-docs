<script setup lang="ts">
import { ref, useSlots, computed } from 'vue'
import { store } from "../../../../store.ts";

import Tabs2D3D from "../Tabs2D3D.vue";
import Property from "./Property.vue";

  const props = defineProps({
    propertyName: {
      type: String,
      required: true
    },
    propertyName2D: {
      type: String,
      required: false,
    },
    propertyName3D: {
      required: false,
    },
    propertyType2D: {
      type: String,
      required: true
    },
    propertyType3D: {
      type: String,
      required: true
    },
    propertyDefault2D: {
      type: String,
      required: true
    },
    propertyDefault3D: {
      type: String,
      required: true
    },
  })

  const borderRadius: Ref<String> = ref()
  const setCornerRadius = (value?: boolean) => {
    if (store.is2D || value) {
      borderRadius.value = "0 24px 24px 24px"
    } else{
      borderRadius.value = "24px"
    }
  }

  const propertyObj = computed<Object>( () => {
    if (store.is2D) {
      setCornerRadius()
      return {
        type: props.propertyType2D,
        default: props.propertyDefault2D
      }
    } else {
      setCornerRadius()
      return {
        type: props.propertyType3D,
        default: props.propertyDefault3D
      }
    }
  })

  const slots = useSlots()
  const slotContent: Array<string> = Object.keys(slots)
  const hasPropertyType = (typeArray: Array<string>) => {
    return slotContent.some(value => typeArray.includes(value))
  }
</script>

<template>
  <Tabs2D3D :property-name="propertyName" @tab-hover="setCornerRadius"/>
  <Property :style="{borderRadius}" :propertyName="propertyName" :propertyName2D="propertyName2D" :propertyName3D="propertyName3D" :propertyType="propertyObj.type" :propertyDefault="propertyObj.default">
    <template #propertyName>
        <slot name="propertyName"/>
    </template>

    <template #propertyDescription>
      <slot name="propertyDescription" v-if="!slots.propertyDescription2D || !slots.propertyDescription3D">
        Missing propertyDescription
      </slot>
      <slot name="propertyDescription2D" v-if="slots.propertyDescription2D && store.is2D">
        <p class="missing-text">
          Missing propertyDescription
        </p>
      </slot>
      <slot name="propertyDescription3D" v-if="slots.propertyDescription3D && !store.is2D">
        <p class="missing-text">
          Missing propertyDescription
        </p>
      </slot>
    </template>

    <template #setMethod>
      <div v-show="store.is2D">
        <slot name="setMethod2D">
          <p class="missing-text">Missing setMethod2D</p>
        </slot>
      </div>

      <div v-if="!store.is2D">
        <slot name="setMethod3D">
          <p class="missing-text">Missing setMethod3D</p>
        </slot>
      </div>
    </template>
    <template #setExample >
      <div v-show="store.is2D">
        <slot name="setExample2D">
          <p class="missing-text">Missing setExample2D</p>
        </slot>
      </div>
      <div v-show="!store.is2D">
        <slot name="setExample3D">
          <p class="missing-text">Missing setExample3D</p>
        </slot>
      </div>
    </template>
    <template #getMethod>
      <div v-show="store.is2D">
        <slot name="getMethod2D">
          <p class="missing-text">Missing getMethod2D</p>
        </slot>
      </div>
      <div v-show="!store.is2D">
        <slot name="getMethod3D">
          <p class="missing-text">Missing getMethod3D</p>
        </slot>
      </div>
    </template>
    <template #getExample>
      <div v-show="store.is2D">
        <slot name="getExample2D">
          <p class="missing-text">Missing getExample2D</p>
        </slot>
      </div>
      <div v-show="!store.is2D">
        <slot name="getExample3D">
          <p class="missing-text">Missing getExample3D</p>
        </slot>
      </div>
    </template>
  </Property>
</template>

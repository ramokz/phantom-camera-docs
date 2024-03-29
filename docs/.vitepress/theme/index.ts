// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme-without-fonts'
import './style.css'
import './custom.css'

// import MethodComponent from "../../components/methods/MethodComponent.vue";
import MethodComponent from "./components/methods/MethodComponent.vue";

import PropertyCore from "./components/properties/PropertyCore.vue";
import Property from "./components/properties/Property.vue";
import Property2D3D from "./components/properties/Property2D3D.vue";
import Property2D3DOnly from "./components/properties/Property2D3DOnly.vue";

import Signal from "./components/signals/Signal.vue";

import VideoTabs from "./components/VideoTabs.vue";


export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  async enhanceApp({ app }) {
    app.component('MethodComponent', MethodComponent)
    app.component('PropertyCore', PropertyCore)
    app.component('Property', Property)
    app.component('Property2D3D', Property2D3D)
    app.component('Property2D3DOnly', Property2D3DOnly)
    app.component('VideoTabs', VideoTabs)
    app.component('Signal', Signal)
  },
  markdown: {
      lazyLoading: true
  }
} satisfies Theme

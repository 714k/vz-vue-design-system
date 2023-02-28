<template>
  <svg 
    :class="classes"
    width="36" 
    height="auto" 
    viewBox="0 0 15.875 15.875" 
    xmlns="http://www.w3.org/2000/svg">
    <title id="logo-title">Victor Zamudio | UX/UI Developer</title>
    <desc id="logo-description">Logotype of Victor Zamudio makes allegory to square code bracket and terminal prompt.</desc>
    <path 
      :style="`fill:${setSecondaryColor(color)};stroke-width:.264583`" 
      d="M74.083 37.042v5.291l5.292 2.646 5.292 2.646v-5.292z" 
      transform="translate(-74.083 -37.042)"/>
    <path 
      :style="`fill:${color};stroke-width:.264583`" 
      d="M74.083 52.917v-5.292l10.584-5.292v5.292z" 
      transform="translate(-74.083 -37.042)"/>
    <path 
      :style="`fill:${setSecondaryColor(color)};stroke-width:.264583`" 
      d="M84.667 47.625h5.291v5.292h-5.291z" 
      transform="translate(-74.083 -37.042)"/>
  </svg>
</template>

<script>
import './Logo.css';
import { setSecondaryColor } from './Logo.utils.js';
import { reactive, computed } from 'vue';

export default {
  name: 'vz-logo',

  props: {
    size: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  },

  setup(props) {
    props = reactive(props);

    return {
      classes: computed(() => ({
        [`vz-logo--${props.size || 'mobile'}`]: true,
      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
      setSecondaryColor(color) {
        return setSecondaryColor(color);
      }
    }
  },
};
</script>
<template>
  <div>
    <em>
      I am inner component with ESLint error!
    </em>
  </div>
  <div>
    <img src="./assets/vue-logo.svg" alt="Vue logo" width="200" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InnerComponentWithError',
  setup() {
    console.warn('ESLint rule violation');
    return {};
  },
});
</script>

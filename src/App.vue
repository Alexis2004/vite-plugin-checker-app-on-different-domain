<template>
  <div>
    <strong>
      I am app from another domain!
      <InnerComponentWithError />
    </strong>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InnerComponentWithError from './InnerComponentWithError.vue';

export default defineComponent({
  name: 'App',
  components: {
    InnerComponentWithError,
  },
  setup() {
    return {};
  },
});
</script>

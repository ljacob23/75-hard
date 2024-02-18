<!-- Day.vue -->
<template>
<div class="IndividualDay">{{ IndividualDay }}</div>
</template>

<script>
export default {
  props: ['IndividualDay']
};
</script>

<style scoped>
.IndividualDay {
  padding: 0.5rem;
  text-align: center;
  border-top: 1px solid darkgrey;
  vertical-align: top;
  line-height: 5em;
}
</style>

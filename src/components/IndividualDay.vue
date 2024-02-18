<!-- Day.vue -->
<template>
  <!-- <tr v-for="(week, index) in calendar" :key="index"> -->
    <td v-for="day in week" :key="day.date">
      {{ day.date }}
    </td>
  <!-- </tr> -->
</template>

<script>
defineProps({

})
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

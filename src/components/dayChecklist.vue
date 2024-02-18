<template>
  <div class="checklist">
    <h2>Checklist</h2>
    <ul>
      <li v-for="(item, index) in checklistItems" :key="index">
        <label>
          <input type="checkbox" v-model="checkedItems[index]">
          {{ item }}
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    checklistItems: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      checkedItems: []
    };
  }
};
</script>

<style scoped>
.checklist {
  margin-top: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 5px;
}

input[type="checkbox"] {
  margin-right: 5px;
}
</style>

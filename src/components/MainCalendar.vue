<template>
  <div class="calendar">
    <header>
      <button className = "arrows" @click="previousMonth">&lt;</button>
      <span className= "monthName">{{ formattedMonth }}</span>
      <button className = "arrows" @click="nextMonth">&gt;</button>
    </header>

    <table>
      <tbody>
        <tr v-for="(week, index) in calendar" :key="index">
                  
          <td v-for="day in week" :key="day.date">
            {{ day.date }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import IndividualDay from './IndividualDay.vue'; 
export default {
  // components: {
  //   IndividualDay
  // },
  data() {
    return {
      currentMonth: new Date(),
      daysOfWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    };
  },
  computed: {
    formattedMonth() {
      const options = { month: 'long', year: 'numeric' };
      return this.currentMonth.toLocaleString('default', options);
    },
    calendar() {
      const year = this.currentMonth.getFullYear();
      const month = this.currentMonth.getMonth();
      const firstDayOfMonth = new Date(year, month, 1);
      const firstDayOfWeek = firstDayOfMonth.getDay(); // 0: Sunday, 1: Monday, ..., 6: Saturday
      const offset = (firstDayOfWeek === 0) ? 6 : firstDayOfWeek - 1; // Ensure Sunday is at index 0
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      const calendar = [];

      let currentWeek = [];
      for (let i = 0; i < offset; i++) {
        currentWeek.push({ date: '' });
      }

      for (let i = 1; i <= daysInMonth; i++) {
        currentWeek.push({ date: i });
        if (currentWeek.length === 7) {
          calendar.push(currentWeek);
          currentWeek = [];
        }
      }

      if (currentWeek.length > 0) {
        calendar.push(currentWeek);
      }

      return calendar;
    }
  },
  methods: {
    previousMonth() {
      const prevMonth = new Date(this.currentMonth);
      prevMonth.setMonth(prevMonth.getMonth() - 1);
      this.currentMonth = prevMonth;
    },
    nextMonth() {
      const nextMonth = new Date(this.currentMonth);
      nextMonth.setMonth(nextMonth.getMonth() + 1);
      this.currentMonth = nextMonth;
    }
  }
};
</script>

<style scoped>
.calendar {
  font-family: "San Francisco", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  height: 90vh;
  display: flex;
  margin: 20px;
  border: black;
  flex-direction: column;

}

header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2rem;
}

.monthName {
  font-size: 2.3em;
}

table {
  width: 100%;
  height: 90vh;
  border-collapse: collapse;
  font-size: 1.5em;
  table-layout: fixed;
  border-spacing: 0 10px;
}

.arrows{
  background-color: white;
  border-radius: 5px;
  color: gray;
  border: white 10px;
}


tr {
  border-top: 1px solid darkgrey;
  padding: 0.5rem;
  text-align: center;
  vertical-align: top;
  line-height: 5em;

}


</style>

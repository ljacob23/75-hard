import { defineStore } from "pinia";

export const useCalendarStore = defineStore("calendar", {
  state: () => {
    return { calendar: {} };
  },
  actions: {
    saveGoal(date, goal, value) {
        state.calendar[date][goal] = value;
    }
  },
  getters: {
    getCalData: (state) =>{
        return state.calendar;
    }
  },
});
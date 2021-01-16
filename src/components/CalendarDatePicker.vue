<template>
  <fieldset>
    <div class="calendar">
      <div
        class="calendar__date--title"
        v-for="(dayString, index) in dayStrings"
        :key="index"
      >
        {{ dayString }}
      </div>
      <div class="calendar__date" v-for="day in month" :key="day">
        {{ day.getDate() }}
      </div>
    </div>
    <select name="month" id="" v-model="selectedMonth">
      <option v-for="(month, index) in months" :key="month" :value="index">
        {{ month }}
      </option>
    </select>
    <select name="year" id="" v-model="selectedYear">
      <option
        v-for="i in numberOfYears"
        :key="i"
        :value="startingYear + (i - 1)"
      >
        {{ startingYear + (i - 1) }}
      </option>
    </select>
  </fieldset>
</template>

<script>
export default {
  data() {
    return {
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      dayStrings: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'],
      startingYear: 2010,
      numberOfYears: 20,
      selectedDay: 1,
      selectedMonth: 3,
      selectedYear: 2021,
    };
  },
  methods: {},
  computed: {
    month() {
      let days = [];
      let startDate = new Date(this.selectedYear, this.selectedMonth, 1); // Get the first day of the selected month
      let offsetArray = [6, 0, 1, 2, 3, 4, 5]; // Array with offset values for every day (Mo -> So)
      let dateOffset = startDate.getDate() - offsetArray[startDate.getDay()]; // calculate offset to last monday
      startDate.setDate(dateOffset); // add offset to startDate
      let startDateString = startDate.valueOf(); // Make startDate immutable by converting it into a string

      for (let i = 0; i < 35; i++) { // Calendar has 35 fields
        let newStartDate = new Date(startDateString);
        let date = new Date(newStartDate.setDate(newStartDate.getDate() + i));

        days[i] = date;
      }

      return days;
    },
  },
};
</script>

<style lang="scss">
.calendar {
  display: grid;
  grid-template: repeat(6, 1fr) / repeat(7, 1fr);
  width: 100%;
  max-width: 250px;
  height: 250px / 7 * 6;
  justify-items: center;
  align-items: center;

  &__date {
    //width: 14.285714286%;
  }
}
</style>

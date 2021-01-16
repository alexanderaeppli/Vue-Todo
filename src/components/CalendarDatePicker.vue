<template>
  <div class="datepicker">
    <div class="datepicker__header">
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
    </div>
    <div class="calendar">
      <div class="calendar__inner">
        <div
          class="calendar__date--title"
          v-for="(dayString, index) in dayStrings"
          :key="index"
        >
          <span>{{ dayString }}</span>
        </div>
        <div
          class="calendar__date"
          :class="{
            'calendar__date--today': today.valueOf() === day.valueOf(),
          }"
          v-for="day in month"
          :key="day.valueOf()"
        >
          <span>{{ day.getDate() }}</span>
        </div>
      </div>
    </div>
    <div class="datepicker__footer">
      <button class="datepicker__button--primary">Done</button>
    </div>
  </div>
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
      selectedMonth: 1,
      selectedYear: 2021,
    };
  },
  methods: {
    markToday() {},
    clearTime(date) {
      date.setHours(0);
      date.setMinutes(0);
      date.setSeconds(0);
      date.setMilliseconds(0);
    },
  },
  computed: {
    month() {
      let days = [];
      let startDate = new Date(this.selectedYear, this.selectedMonth, 1); // Get the first day of the selected month
      let offsetArray = [6, 0, 1, 2, 3, 4, 5]; // Array with offset values for every day (Mo -> So)
      let dateOffset = startDate.getDate() - offsetArray[startDate.getDay()]; // calculate offset to last monday
      startDate.setDate(dateOffset); // add offset to startDate
      let startDateString = startDate.valueOf(); // Make startDate immutable by converting it into a string

      for (let i = 0; i < 35; i++) {
        let newStartDate = new Date(startDateString);
        let date = new Date(newStartDate.setDate(newStartDate.getDate() + i));
        //this.clearTime(date);
        days[i] = date;
      }

      return days;
    },
    today() {
      let today = new Date();
      this.clearTime(today);
      return today;
    },
  },
};
</script>

<style lang="scss">
.datepicker {
  background-color: rgb(28, 8, 46);
  max-width: 300px;
  font-family: 'Source Sans', sans-serif;
  border-radius: 10px;

  &__header,
  &__footer {
    padding: 15px;
  }
}

.calendar {
  margin: 0 15px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.25);

  &__inner {
    display: grid;
    grid-template: repeat(6, 1fr) / repeat(7, 1fr);
    width: 100%;
    height: 300px / 7 * 6;
    justify-items: center;
    align-items: center;
    color: rgb(255, 255, 255);
  }

  &__date {
    user-select: none;
    height: 2em;
    width: 2em;
    display: flex;
    align-items: center;
    justify-content: center;

    &--today {
      border: black 2px solid;
    }
  }
}
</style>

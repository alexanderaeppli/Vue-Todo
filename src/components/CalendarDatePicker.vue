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
            'calendar__date--selected': today.valueOf() === selectedDay.valueOf(),
          }"
          v-for="day in month"
          :key="day.valueOf()"
        >
          <span>{{ day.getDate() }}</span>
        </div>
      </div>
    </div>
    <div class="datepicker__footer">
      <button class="datepicker__button--secondary">Cancel</button>
      <button class="datepicker__button">Done</button>
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
      selectedDay: '',
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
@use 'sass:color';

$color_primary: #9862fc;
$color_primary--shading: color.scale($color_primary, $lightness: 20%);
$color_grey: #5e5e5e;
$color_grey--shading: color.scale($color_grey, $lightness: 20%);

.datepicker {
  background-color: #3e3b41;
  max-width: 300px;
  font-family: 'Rubik', sans-serif;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(50, 50, 50, 0.75);

  &__header,
  &__footer {
    padding: 15px;
  }

  &__footer {
    display: flex;
    justify-content: center;
  }

  &__button {
    padding: 8px 20px 10px;
    margin-top: 2px;
    border-radius: 5px;
    border: none;
    position: relative;
    background-color: $color_primary--shading;
    z-index: 1;
    color: white;
    box-shadow: 0px 4px 4px 0px rgba(50, 50, 50, 0.75);
    margin-left: 20px;
    font-weight: 600;
    width: 100%;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 2px;
      left: 0;
      border-radius: 5px;
      z-index: -1;
      background-color: $color_primary;
    }

    &:hover,
    &:focus {
      background-color: color.scale($color_primary--shading, $lightness: 20%);

      &::after {
        background-color: color.scale($color_primary, $lightness: 20%);
      }
    }

    &--secondary {
      @extend .datepicker__button;
      margin-left: unset;
      background-color: $color_grey--shading;

      &::after {
        background-color: $color_grey;
      }

      &:hover,
      &:focus {
        background-color: color.scale($color_grey--shading, $lightness: 20%);

        &::after {
          background-color: color.scale($color_grey, $lightness: 20%);
        }
      }
    }
  }
}

.calendar {
  margin: 0 15px;
  border-radius: 10px;

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
    font-weight: 600;
    border-radius: 10px;

    &--today {
      border: $color_grey 3px solid;
    }

    &--selected {
      border: $color_primary 3px solid;
    }

    &--title {
      font-weight: 400;
    }
  }
}
</style>

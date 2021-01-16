<template>
  <fieldset>
    <select name="day" id="" v-model="selectedDay">
      <option v-for="(day, i) in month" :key="i" :value="i">
        {{ day }}
      </option>
    </select>
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
      let startDate = new Date(this.selectedYear, this.selectedMonth, 1);
      let offsetArray = [6, 0, 1, 2, 3, 4, 5];
      let dateOffset = startDate.getDate() - offsetArray[startDate.getDay()];
      startDate.setDate(dateOffset);
      let startDateString = Date.parse(startDate);
      for (let i = 0; i < 35; i++) {
        let newStartDate = new Date(startDateString);
        let date = new Date(newStartDate.setDate(newStartDate.getDate() + i));

        days[i] = date;
      }

      return days;
    },
  },
};
</script>

<style lang="scss"></style>

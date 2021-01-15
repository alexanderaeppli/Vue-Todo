<template>
  <fieldset>
    <select name="day" id="" v-model="selectedDay">
      <option v-for="(days, i) in month" :key="i" :value="i">
          {{ i }}
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
      selectedMonth: 1,
      selectedYear: 2021,
    };
  },
  methods: {},
  computed: {
    month() {
      let d = new Date(this.selectedYear, this.selectedMonth + 1, 0);
      let numberOfDays = d.getDate(); 
      let days = [];
      for (let i = 0; i < numberOfDays; i++) {
        let date = new Date(this.selectedYear, this.selectedMonth + 1, i + 1) ;

        // Test if first day of month is a montay
        if(date.getDay() !== 1 && i === 0) {
          console.log(date.getDay());
        }

        // Test if last day of month is a sunday
        if(date.getDay() !== 0 && i === numberOfDays - 1) {
          console.log(date.getDay());
        }

        days[i] = date;
      }
      return days;
    }
  },
};
</script>

<style lang="scss"></style>

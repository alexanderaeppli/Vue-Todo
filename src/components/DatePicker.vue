<template>
  <fieldset>
    <select name="day" id="" v-model="selectedDay">
      <option v-for="i in daysInMonth" :key="i" :value="i">
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
    daysInMonth() {
      var d = new Date(this.selectedYear, this.selectedMonth + 1, 0);
      return d.getDate();
    },
  },
};
</script>

<style lang="scss"></style>

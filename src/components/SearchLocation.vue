<template>
    <div class="search-box">
        <input
          type="text"
          class="search-bar"
          placeholder="Search..."
          v-model="query"
          @keypress="() => {fetchWeather; checkWeather;}"
        />
      </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      api_key: "2e7840b9c0ae4dbf9c640141221310",
      query: "",
      weather: {},
      isChecked: false
    };
  },
methods: {
    checkWeather(){
      this.isChecked = true;
    },
    fetchWeather(e) {
      if (e.key == "Enter") {
        fetch(
          `http://api.weatherapi.com/v1/current.json?key=${this.api_key}&q=${this.query}&aqi=no}`
        ).then((response) => {
            return response.json();
        }).then(this.setResults)
      }
    },
    setResults (results) {
      this.isChecked = false;
      this.weather = results;
    },
  },
  mounted() {
    this.checkWeather();
  }
};
</script>
<style></style>
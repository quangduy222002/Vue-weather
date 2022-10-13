<template>
    <div class="weather-wrap" v-if="!isChecked">
        <div class="location-box">
          <div class="location">{{weather.location.name}}</div>
          <div class="date">{{weather.location.localtime}}</div>
        </div>
        <div class="weather-box">
          <div class="temp">{{weather.current.temp_c}}</div>
          <div class="weather">{{weather.current.text}}</div>
        </div>
      </div>
</template>
<script></script>
<style></style>
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <seats />
  </div>
</template>

<script>
// @ is an alias to /src
import seats from '@/components/seats.cmp.vue'

export default {
  name: 'Home',
  components: {
    seats
  }
}
</script>

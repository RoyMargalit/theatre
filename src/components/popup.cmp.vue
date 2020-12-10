<template>
  <section class="popup">
    <h1>BO NIRE SERET</h1>
    <button class="btn btn-book" @click="emitBook">Book</button>
  </section>
</template>

<script>
export default {
  methods: {
    emitBook() {
        console.log('ma omer');
      this.$emit("seatBooked");
    },
  },
};
</script>

<style>
.popup {
  background-color: #fff;
  padding: 50px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid black;
}
</style>
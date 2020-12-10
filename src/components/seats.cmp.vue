<template>
  <div class="seats">
    <popup v-if="isPopOpen" @seatBooked="bookSeat" />
    <h1>Elad and Roy's dream theatre</h1>
    <ul class="seat-container" v-for="(i, idx) in rowNum" :key="idx">
      {{
        i
      }}
      <ul class="col-container" v-for="(j, idx) in colNum" :key="idx">
        <li :class="[`seat seat-${i}-${j}`]" :ref="[`mySeat-${i}-${j}`]" @click="clickSeat">
          {{ j }}
        </li>
      </ul>
    </ul>
  </div>
</template>

<script>
import popup from './popup.cmp'
export default {
  components: {popup},
  data() {
    return {
      rowNum: 8,
      colNum: 8,
      isPopOpen: false
    };
  },
  methods: {
    clickSeat(ev) {
      const elSeat = ev.target;
      elSeat.classList.add('clicked');
      this.isPopOpen = true;
    },
    bookSeat(){
      this.isPopOpen = false;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.seat-container {
  display: flex;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  .seat {
    display: inline-block;
    margin: 0 5px;
    padding: 10px;
    border-radius: 50%;
    background-color: lightblue;
    cursor: pointer;
  }
  .seat-2-3 {
    background-color: lightcoral;
  }
  .clicked {
    background-color: lightseagreen;
  }
}
</style>

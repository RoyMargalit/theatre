<template>
  <div v-if="theatre.length" class="seats">
    <popup v-if="isPopOpen" @seatBooked="bookSeat" />
    <h1>Elad and Roy's dream theatre</h1>
    <ul class="seat-container" v-for="(i, idx) in theatre.length" :key="idx">
      {{
        i
      }}
      <ul class="col-container" v-for="(j, idx) in theatre.length" :key="idx">
        <li
          :class="[`seat seat-${i}-${j}`]"
          :ref="[`mySeat-${i}-${j}`]"
          @click="clickSeat"
        >
          {{ j }}
        </li>
      </ul>
    </ul>
    <!-- <pre>{{theatre}}</pre> -->
  </div>
</template>

<script>
import popup from "./popup.cmp";
export default {
  components: { popup },
  data() {
    return {
      theatre: [],
      isPopOpen: false,
    };
  },
  created() {
    for (var i = 0; i < 8; i++) {
      this.theatre[i] = [];
      for (var j = 0; j < 8; j++) {
        var seat = {
          isAvailable: true,
          isReserved: false,
          isSelected: false,
          row: i,
          col: j,
        };
        this.theatre[i][j] = seat;
      }
    }
    console.log(this.theatre);
  },
  methods: {
    clickSeat(ev) {
      const elSeat = ev.target;
      elSeat.classList.add("clicked");
      console.log(elSeat);
      this.isPopOpen = true;
      setInterval(this.closePopup, 10000);
    },
    bookSeat() {
      
      this.isPopOpen = false;
    },
    closePopup() {
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

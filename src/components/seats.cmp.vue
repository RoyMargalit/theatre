<template>
  <div class="seats">
    <h1>Elad and Roy's dream theatre</h1>
    <ul class="seat-container" v-for="(i, idx) in rowNum" :key="idx">
      {{
        i
      }}
      <ul class="col-container" v-for="(j, idx) in colNum" :key="idx">
        <li :class="[`seat seat-${i}-${j}`]" :ref="[`mySeat-${i}-${j}`]" @click="clickSeat(i, j)">
          {{ j }}
        </li>
      </ul>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rowNum: 8,
      colNum: 8,
    };
  },
  methods: {
    clickSeat(i, j) {
      var seat=this.$el.childNodes[i].children[j-1].children
      console.log(seat);
      // var specific=JSON.parse(JSON.stringify(`mySeat-${i}-${j}`))
      // console.log( specific);
      // console.log(this.specific,this.$refs,i, j);
      // console.log(this);
      // var cell= `mySeat-${i}-${j}`
      // console.log(this.$refs.mySeat);

    },
  },
  mounted(){
    this.$refs.mySeat
    // console.log(elSeat)
  }
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

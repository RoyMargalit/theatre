import Vue from 'vue'
import Vuex from 'vuex'
import storageService from '../services/storage-service.js'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bookedSeates: []
  },
  mutations: {
    setSeats(state, { seat }) {
      state.bookedSeates.push(seat);
    },
  },
  actions: {
    async Book(context, { bookCred }) {
      const book = await storageService.handleBook(bookCred)
      console.log(book)
      context.commit({ type: 'setSeats', book })
      return book
    },
  },
  modules: {
  }
})

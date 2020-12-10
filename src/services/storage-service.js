export default {
    handleBook
}

function handleBook(seat) {
sessionStorage.setItem('seat', JSON.stringify(seat))
    return seat;
}
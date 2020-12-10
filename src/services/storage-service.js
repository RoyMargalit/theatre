export default {
    handleBook
}

function handleBook(key, value) {
    localStorage.setItem(key, JSON.stringify(value) || null);
}
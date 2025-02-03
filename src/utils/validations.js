function isValidDate(dateString) {
    return !isNaN(new Date(dateString).getTime());
}

module.exports = { isValidDate };

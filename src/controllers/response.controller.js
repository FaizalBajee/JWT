function success(msg, content) {
    return ({
        succes: true,
        message: msg,
        content: content || {}
    })
}
function fail(msg, content) {
    return ({
        succes: false,
        message: msg,
        content: content || {}
    })
}
module.exports = {
    success,
    fail
}

class ErrorHandler extends Error {
    constructor(
         statusCode,
         message
    ) {
        super()
    }
}

module.exports = ErrorHandler
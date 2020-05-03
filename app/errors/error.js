class ErrorHandler extends Error {
    constructor(statusCode, message) {
      super();
      this.statusCode = statusCode;
      this.message = message;
    }
  }

  //a function for returning a formatted error response to the user.
  const handleError =  (err, res)  => {
    const { statusCode, message } = err;
    res.status(statusCode).json({
      status: "error",
      statusCode,
      message
    });
  };
    
  module.exports = {
    ErrorHandler,
    handleError
  }


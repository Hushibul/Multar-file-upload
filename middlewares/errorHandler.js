const errorHandler = (err, req, res, next) => {
  console.log("Error Handler is handling the error!!!");

  const errStatus = err.statusCode || 500;

  const errMessage = err.message || "Internal Server Error!!!";

  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMessage,
    stack: err.stack,
  });
};

export default errorHandler;

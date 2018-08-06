export default (err, req, res, next) => {
  res.status(err.code || 500).json({
    code: err.code || 500,
    message: err.message || 'INTERNAL_SERVER_ERROR'
  });
};

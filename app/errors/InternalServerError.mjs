class InternalServerError extends Error {
  constructor() {
    super();

    this.code = 500;
    this.message = 'INTERNAL_SERVER_ERROR';
  }
}

export default InternalServerError;

class NotFound extends Error {
  constructor() {
    super();

    this.code = 404;
    this.message = 'NOT_FOUND';
  }
}

export default NotFound;

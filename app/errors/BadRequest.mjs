class BadRequest extends Error {
  constructor() {
    super();

    this.code = 400;
    this.message = 'BAD_REQUEST';
  }
}

export default BadRequest;

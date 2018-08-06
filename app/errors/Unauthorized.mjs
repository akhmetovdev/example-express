class Unauthorized extends Error {
  constructor() {
    super();

    this.code = 401;
    this.message = 'UNAUTHORIZED';
  }
}

export default Unauthorized;

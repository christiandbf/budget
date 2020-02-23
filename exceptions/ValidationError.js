const { ValidationErrorName } = require('../constant');

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = ValidationErrorName;
  }
}

module.exports = ValidationError;

const mongoose = require('mongoose');

const { MONGO_URL } = require('../config');
const { saveBudget } = require('../controllers');
const { ValidationError } = require('../exceptions');

const sendSuccess = (message) => ({ statusCode: 200, body: JSON.stringify({ message }) });

const sendBadRequest = (message) => ({ statusCode: 400, body: JSON.stringify({ message }) });

const sendUnexpectedError = (message = 'Please, try again later.') => ({ statusCode: 500, body: JSON.stringify({ message }) });

const prepareContext = (fn) => async (...args) => {
  const [event, context] = args;
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    if (mongoose.connection.readyState !== 1) {
      // eslint-disable-next-line no-console
      console.log('Connecting to mongodb!!!');
      await mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      });
    }

    return await fn(event);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);

    if (error instanceof ValidationError) {
      return sendBadRequest(error.message);
    }

    return sendUnexpectedError(error.message);
  }
};

const postBudget = prepareContext(async (event) => {
  // TODO: params should be validated before
  const { user, category, amount } = JSON.parse(event.body);
  const budget = await saveBudget({ user, category, amount });
  return sendSuccess(budget);
});


module.exports = {
  postBudget,
};

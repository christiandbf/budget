const { Budget } = require('../models');
const { ValidationError } = require('../exceptions');

module.exports = async ({ user, category, amount }) => {
  const isAdded = await Budget.exists({ user, category });

  if (isAdded) throw new ValidationError('Budget has been already added');

  const budget = new Budget({ user, category, amount });
  const document = await budget.save();

  return document;
};

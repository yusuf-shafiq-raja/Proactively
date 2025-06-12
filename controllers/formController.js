const Form = require('../models/Form');

exports.createForm = async (req, res) => {
  const { title, fields } = req.body;
  const form = new Form({ title, fields });
  await form.save();
  res.status(201).json(form);
};

exports.getForm = async (req, res) => {
  const form = await Form.findById(req.params.id);
  if (!form) return res.status(404).json({ message: 'Form not found' });
  res.json(form);
};

exports.updateResponse = async (req, res) => {
  const form = await Form.findById(req.params.id);
  if (!form) return res.status(404).json({ message: 'Form not found' });

  const { field, value } = req.body;
  form.sharedResponse.set(field, value);
  await form.save();

  res.json({ message: 'Field updated', response: form.sharedResponse });
};

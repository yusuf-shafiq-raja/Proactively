const Form = require('models/Form');

module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('join_form', (formId) => {
      socket.join(formId);
    });

    socket.on('edit_field', async ({ formId, field, value }) => {
      const form = await Form.findById(formId);
      if (!form) return;

      form.sharedResponse.set(field, value);
      await form.save();

      io.to(formId).emit('field_updated', { field, value });
    });
  });
};

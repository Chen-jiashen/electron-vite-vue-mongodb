const { model, Schema } = require("mongoose");

const newTaskSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export default model("Task", newTaskSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function (password) {
        // Password validation: at least 8 characters, includes numbers, characters, and symbols
        const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z\d]).{8,}$/;
        return passwordRegex.test(password);
      },
      message:
        "Password must be at least 8 characters and include numbers, characters, and symbols.",
    },
  },
});

const EditorSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function (password) {
        // Password validation: at least 8 characters, includes numbers, characters, and symbols
        const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z\d]).{8,}$/;
        return passwordRegex.test(password);
      },
      message:
        "Password must be at least 8 characters and include numbers, characters, and symbols.",
    },
  },
});

const Admin = mongoose.model("Admin", AdminSchema);
const Editor = mongoose.model("Editor", EditorSchema);

module.exports = {
  Admin,
  Editor,
};
